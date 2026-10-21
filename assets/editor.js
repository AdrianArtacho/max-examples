const form = document.querySelector('#entry-form');
const elements = Object.fromEntries(Array.from(form.elements).filter(element => element.name).map(element => [element.name, element]));
const ui = Object.fromEntries([
  'preview-entry', 'new-entry', 'stage-entry', 'form-status', 'load-status',
  'reload-catalogue', 'entry-preview', 'fallback-note', 'working-count',
  'staged-empty', 'staged-list', 'copy-catalogue', 'download-catalogue',
  'export-status', 'full-output-details', 'catalogue-preview',
  'copy-markdown', 'download-markdown', 'markdown-export-status',
  'markdown-output-details', 'markdown-preview'
].map(id => [id, document.getElementById(id)]));

const allowed = {
  category: new Set(['sound', 'generative', 'visual', 'interaction', 'spatial', 'performance']),
  kind: new Set(['project', 'tool', 'resource']),
  level: new Set(['beginner', 'intermediate', 'advanced', 'inspiration'])
};
let working = null;
let originalCount = 0;
let staged = [];
let manuallyEditedId = false;
let exportedSnapshot = '';

function today() {
  const date = new Date();
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function setDateDefault() {
  elements.verified.value = today();
  elements.verified.max = today();
}

function status(target, message, type = '') {
  target.textContent = message;
  target.className = `editor-status${type ? ` ${type}` : ''}`;
}

function slug(value) {
  return value.toLowerCase().replaceAll('ä', 'ae').replaceAll('ö', 'oe').replaceAll('ü', 'ue').replaceAll('ß', 'ss')
    .normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 90).replace(/-+$/g, '');
}

function value(name) {
  return elements[name].value.trim();
}

function unique(values) {
  return Array.from(new Set(values));
}

function clearValidation() {
  Object.values(elements).forEach(element => {
    element.setCustomValidity('');
    element.removeAttribute('aria-invalid');
  });
}

function validateEntry() {
  status(ui['form-status'], '');
  clearValidation();
  if (!working) {
    status(ui['form-status'], 'Bitte warte, bis der bestehende Katalog geladen ist. Ohne ihn kann keine vollständige Datei vorbereitet werden.', 'error');
    return null;
  }
  if (!form.reportValidity()) {
    status(ui['form-status'], 'Bitte fülle die Pflichtfelder aus und prüfe die markierten Angaben.', 'error');
    return null;
  }

  const errors = [];
  function error(name, message) {
    const element = elements[name];
    if (!element.validationMessage) element.setCustomValidity(message);
    element.setAttribute('aria-invalid', 'true');
    errors.push(message);
  }
  for (const [name, label] of [
    ['title', 'Titel'], ['id', 'Kennung'], ['creator', 'Urheber:in'],
    ['summary_de', 'Kurzbeschreibung auf Deutsch'], ['idea_de', 'Projektimpuls auf Deutsch'],
    ['access_de', 'Zugang und Voraussetzungen auf Deutsch'], ['project_label', 'Beschriftung des Projektlinks']
  ]) {
    if (!value(name)) error(name, `Bitte ergänze: ${label}.`);
  }
  const id = value('id');
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) error('id', 'Die Kennung darf nur kleine Buchstaben a–z, Zahlen und einzelne Bindestriche enthalten.');
  if (working.projects.some(project => project.id === id)) error('id', `Die Kennung „${id}“ ist bereits im Arbeitskatalog vorhanden. Wähle eine andere Kennung oder entferne zuerst den vorgemerkten Eintrag.`);
  for (const name of Object.keys(allowed)) {
    if (!allowed[name].has(value(name))) error(name, `Bitte wähle eine gültige Option für ${name}.`);
  }

  const environment = unique(value('environment').split(',').map(item => item.trim()).filter(Boolean));
  if (!environment.length) error('environment', 'Bitte gib mindestens eine Umgebung an, zum Beispiel Max.');
  const verified = value('verified');
  const parsedDate = new Date(`${verified}T00:00:00Z`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(verified) || Number.isNaN(parsedDate.getTime()) || parsedDate.toISOString().slice(0, 10) !== verified || verified > today()) {
    error('verified', 'Bitte gib ein gültiges Prüfdatum an, das nicht in der Zukunft liegt.');
  }

  function parseUrl(input, name, label) {
    try {
      if (!/^https?:\/\//i.test(input)) throw new Error('Incomplete URL');
      const url = new URL(input);
      if (!['http:', 'https:'].includes(url.protocol) || !url.hostname || url.username || url.password) throw new Error('Invalid URL');
      return url.href;
    } catch {
      error(name, `${label}: Bitte verwende eine vollständige http://- oder https://-Adresse ohne Zugangsdaten.`);
      return null;
    }
  }

  const links = [];
  const mainUrl = parseUrl(value('project_url'), 'project_url', 'Hauptquelle');
  if (mainUrl) links.push({ label: value('project_label'), type: 'project', url: mainUrl });
  for (const [type, label] of [['video', 'Videolink'], ['patch', 'Downloadlink'], ['docs', 'Dokumentationslink']]) {
    const rawUrl = value(`${type}_url`);
    if (!rawUrl) continue;
    const url = parseUrl(rawUrl, `${type}_url`, label);
    const linkLabel = value(`${type}_label`);
    if (!linkLabel) error(`${type}_label`, `Bitte ergänze eine aussagekräftige Beschriftung für den ${label}.`);
    if (url) links.push({ label: linkLabel, type, url });
  }
  const additionalSources = value('sources').split(/\r?\n/).map(line => line.trim()).filter(Boolean)
    .map((line, index) => parseUrl(line, 'sources', `Weitere Quelle ${index + 1}`)).filter(Boolean);
  if (errors.length) {
    status(ui['form-status'], unique(errors).join('\n'), 'error');
    form.reportValidity();
    return null;
  }

  const entry = {
    id, title: value('title'), creator: value('creator'),
    category: value('category'), kind: value('kind'), environment, level: value('level'),
    summary_de: value('summary_de'), summary_en: value('summary_en') || value('summary_de'),
    idea_de: value('idea_de'), idea_en: value('idea_en') || value('idea_de'),
    access_de: value('access_de'), access_en: value('access_en') || value('access_de'),
    links, sources: unique([mainUrl, ...additionalSources]), verified
  };
  const tags = unique(value('tags').split(',').map(item => item.trim()).filter(Boolean));
  if (tags.length) entry.tags = tags;
  const fallbacks = [
    ['summary_en', 'Kurzbeschreibung'], ['idea_en', 'Projektimpuls'], ['access_en', 'Zugang und Voraussetzungen']
  ].filter(([name]) => !value(name)).map(([, label]) => label);
  return { entry, fallbacks };
}

function showPreview(result) {
  ui['entry-preview'].value = JSON.stringify(result.entry, null, 2);
  ui['fallback-note'].hidden = !result.fallbacks.length;
  ui['fallback-note'].textContent = result.fallbacks.length
    ? `Deutscher Text wird auch in der englischen Ansicht verwendet: ${result.fallbacks.join(', ')}. Eine Übersetzung kannst du später in der JSON-Datei ergänzen.`
    : '';
}

function fullJson() {
  return working ? `${JSON.stringify(working, null, 2)}\n` : '';
}

function markdownText(text) {
  return String(text ?? '').replace(/\\/g, '\\\\').replace(/([`*_[\]<>#|])/g, '\\$1');
}

function markdownLink(label, url) {
  const destination = String(url).replaceAll('<', '%3C').replaceAll('>', '%3E').replace(/[\r\n]/g, '');
  return `[${markdownText(label)}](<${destination}>)`;
}

function catalogueMarkdown(data) {
  const categories = {
    sound: 'Sound & instruments / Klang & Instrumente',
    generative: 'Generative music / Generative Musik',
    visual: 'Visuals & audiovisual / Visuals & Audiovisuelles',
    interaction: 'Interaction & sensors / Interaktion & Sensoren',
    spatial: 'Space & spatial audio / Raum & räumliches Audio',
    performance: 'Performance & live electronics / Performance & Live-Elektronik'
  };
  const kinds = { project: 'Project / Projekt', tool: 'Tool / Werkzeug', resource: 'Directory / Sammlung' };
  const levels = {
    beginner: 'Beginner / Einstieg', intermediate: 'Intermediate / Vertiefung',
    advanced: 'Advanced / Fortgeschritten', inspiration: 'Inspiration / Anschauen'
  };
  const lines = [
    '# Max Examples — catalogue / Katalog', '',
    'A bilingual, readable companion to the [interactive catalogue](https://adrianartacho.github.io/max-examples/).', '',
    'Generated from [`data/projects.json`](data/projects.json). Export both files with the [browser entry editor](https://adrianartacho.github.io/max-examples/editor.html), or regenerate this file with `python3 scripts/validate.py --write-catalogue`.', '',
    `**${data.projects.length} entries · Updated / Aktualisiert: ${markdownText(data.updated)}**`, '',
    'The source-check dates refer to the linked documentation. Patches were not executed as part of this catalogue. Difficulty and student prompts are editorial suggestions. The original artworks, patches and media remain credited to their creators.', '',
    'Die Prüfdatumsangaben beziehen sich auf die verlinkte Dokumentation. Die Patches wurden für diesen Katalog nicht ausgeführt. Schwierigkeitsstufen und Projektimpulse sind redaktionelle Vorschläge. Urheber:innen der Originalwerke, Patches und Medien sind jeweils genannt.', '',
    '## Contents / Inhalt', ''
  ];
  for (const project of data.projects) lines.push(`- [${markdownText(project.title)}](#${encodeURIComponent(project.id)})`);
  data.projects.forEach((project, index) => {
    lines.push(
      '', '---', '', `<a id="${encodeURIComponent(project.id)}"></a>`, '',
      `## ${String(index + 1).padStart(2, '0')}. ${markdownText(project.title)}`, '',
      `**${markdownText(project.creator)}**`, '',
      `${kinds[project.kind] || markdownText(project.kind)} · ${categories[project.category] || markdownText(project.category)} · ${levels[project.level] || markdownText(project.level)}`, '',
      `**Environment / Umgebung:** ${project.environment.map(markdownText).join(', ')}`, '',
      `**EN:** ${markdownText(project.summary_en || project.summary_de)}`, '',
      `**Project prompt:** ${markdownText(project.idea_en || project.idea_de)}`, '',
      `**Access & requirements:** ${markdownText(project.access_en || project.access_de)}`, '',
      `**DE:** ${markdownText(project.summary_de || project.summary_en)}`, '',
      `**Projektimpuls:** ${markdownText(project.idea_de || project.idea_en)}`, '',
      `**Zugang & Voraussetzungen:** ${markdownText(project.access_de || project.access_en)}`, '',
      '**Links**', ''
    );
    for (const link of project.links) lines.push(`- ${markdownLink(link.label, link.url)} · ${markdownText(link.type)}`);
    lines.push('', `**Sources / Quellen · checked / geprüft ${markdownText(project.verified)}**`, '');
    project.sources.forEach((url, sourceIndex) => {
      let domain = url;
      try { domain = new URL(url).hostname; } catch { /* Keep the supplied source text if a legacy URL cannot be parsed. */ }
      lines.push(`- ${markdownLink(`${sourceIndex + 1}. ${domain}`, url)}`);
    });
    if (project.thumbnail) {
      const thumbnail = project.thumbnail;
      const credit = thumbnail.sourceUrl
        ? markdownLink(thumbnail.credit, thumbnail.sourceUrl)
        : markdownText(thumbnail.credit);
      lines.push('', `Image credit / Bildnachweis: ${credit}.`);
    }
    if (Array.isArray(project.tags) && project.tags.length) lines.push('', `**Tags / Suchbegriffe:** ${project.tags.map(markdownText).join(', ')}`);
  });
  return `${lines.join('\n')}\n`;
}

function fullMarkdown() {
  return working ? catalogueMarkdown(working) : '';
}

function renderWorking() {
  const count = staged.length;
  ui['working-count'].textContent = `${originalCount} bisherige + ${count} neue = ${working.projects.length} Einträge im Arbeitskatalog.`;
  ui['staged-empty'].hidden = count > 0;
  ui['staged-list'].replaceChildren();
  for (const entry of staged) {
    const item = document.createElement('li');
    const title = document.createElement('span');
    title.textContent = `${entry.title} (${entry.id}) `;
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'plain-button';
    remove.textContent = 'Entfernen';
    remove.setAttribute('aria-label', `Vorgemerkten Eintrag ${entry.title} entfernen`);
    remove.addEventListener('click', () => {
      staged = staged.filter(project => project.id !== entry.id);
      working.projects = working.projects.filter(project => project.id !== entry.id);
      renderWorking();
      status(ui['export-status'], `„${entry.title}“ wurde aus der lokalen Vorbereitung entfernt. Bereits veröffentlichte Einträge bleiben erhalten.`);
    });
    item.append(title, remove);
    ui['staged-list'].append(item);
  }
  ui['copy-catalogue'].disabled = count === 0;
  ui['download-catalogue'].disabled = count === 0;
  ui['copy-markdown'].disabled = count === 0;
  ui['download-markdown'].disabled = count === 0;
  ui['catalogue-preview'].value = fullJson();
  ui['markdown-preview'].value = fullMarkdown();
  status(ui['markdown-export-status'], count > 0 ? 'Textfassung aus demselben Arbeitskatalog bereit. Bitte zusammen mit der JSON-Datei speichern.' : '');
}

function newEntry() {
  form.reset();
  clearValidation();
  manuallyEditedId = false;
  setDateDefault();
  ui['entry-preview'].value = '';
  ui['fallback-note'].hidden = true;
  ui['fallback-note'].textContent = '';
  status(ui['form-status'], staged.length
    ? `Das Formular ist leer. ${staged.length} vorgemerkte Einträge bleiben im Arbeitskatalog.`
    : 'Das Formular ist bereit für einen neuen Eintrag.');
  elements.title.focus();
}

async function loadCatalogue() {
  ui['reload-catalogue'].hidden = true;
  status(ui['load-status'], 'Der aktuelle Katalog wird geladen …');
  try {
    const response = await fetch('data/projects.json', { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (!data || data.version !== 1 || !Array.isArray(data.projects) || typeof data.updated !== 'string') throw new Error('Unerwartetes Dateiformat');
    const ids = data.projects.map(project => project && project.id);
    if (ids.some(id => typeof id !== 'string' || !id) || new Set(ids).size !== ids.length) throw new Error('Der bestehende Katalog enthält fehlende oder doppelte Kennungen');
    working = { ...data, projects: data.projects.slice() };
    originalCount = data.projects.length;
    staged = [];
    renderWorking();
    ui['preview-entry'].disabled = false;
    ui['stage-entry'].disabled = false;
    status(ui['load-status'], `${originalCount} bestehende Einträge geladen. Stand der Datei: ${data.updated}.`, 'success');
  } catch (error) {
    working = null;
    ui['preview-entry'].disabled = true;
    ui['stage-entry'].disabled = true;
    ui['copy-catalogue'].disabled = true;
    ui['download-catalogue'].disabled = true;
    ui['copy-markdown'].disabled = true;
    ui['download-markdown'].disabled = true;
    ui['reload-catalogue'].hidden = false;
    status(ui['load-status'], `Der bestehende Katalog konnte nicht geladen werden (${error.message}). Öffne den Editor über die Website oder einen lokalen Webserver. Ohne die Originaldatei bleibt der Export gesperrt, damit keine bisherigen Einträge verloren gehen.`, 'error');
  }
}

form.addEventListener('input', event => {
  if (typeof event.target.setCustomValidity === 'function') {
    event.target.setCustomValidity('');
    event.target.removeAttribute('aria-invalid');
  }
  if (event.target === elements.id) manuallyEditedId = true;
  if (event.target === elements.title && !manuallyEditedId) elements.id.value = slug(value('title'));
  if (ui['entry-preview'].value) {
    ui['entry-preview'].value = '';
    ui['fallback-note'].hidden = true;
    status(ui['form-status'], 'Das Formular wurde geändert. Erstelle eine neue Vorschau oder füge den aktualisierten Eintrag hinzu.');
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const result = validateEntry();
  if (!result) return;
  showPreview(result);
  status(ui['form-status'], 'Der Eintrag ist gültig. Er ist noch nicht vorgemerkt; füge ihn jetzt zum Arbeitskatalog hinzu.', 'success');
});

ui['stage-entry'].addEventListener('click', () => {
  const result = validateEntry();
  if (!result) return;
  showPreview(result);
  working.projects.push(result.entry);
  working.updated = today();
  staged.push(result.entry);
  renderWorking();
  status(ui['form-status'], `„${result.entry.title}“ ist im lokalen Arbeitskatalog vorgemerkt. Für den nächsten Eintrag das Formular leeren; deine bisherigen Ergänzungen bleiben erhalten.`, 'success');
  status(ui['export-status'], `${staged.length} neue Einträge sind bereit für den gemeinsamen Export.`, 'success');
});

ui['new-entry'].addEventListener('click', newEntry);
ui['reload-catalogue'].addEventListener('click', loadCatalogue);

ui['copy-catalogue'].addEventListener('click', async () => {
  if (!working || !staged.length) return;
  const text = fullJson();
  const copiedCount = working.projects.length;
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(text);
    exportedSnapshot = text;
    const changedDuringCopy = text !== fullJson();
    status(ui['export-status'], changedDuringCopy
      ? `Die JSON-Datei mit ${copiedCount} Einträgen wurde kopiert. Währenddessen hat sich der Arbeitskatalog geändert; kopiere vor dem Commit bitte noch einmal die aktuelle Fassung.`
      : `Die vollständige JSON-Datei mit ${copiedCount} Einträgen wurde kopiert. Jetzt in die GitHub-Datei einfügen und committen.`, changedDuringCopy ? '' : 'success');
  } catch {
    ui['full-output-details'].open = true;
    ui['catalogue-preview'].focus();
    ui['catalogue-preview'].select();
    status(ui['export-status'], 'Automatisches Kopieren ist in diesem Browser nicht verfügbar. Der vollständige Inhalt ist unten markiert: mit Strg+C / ⌘C kopieren oder die Datei herunterladen.');
  }
});

ui['download-catalogue'].addEventListener('click', () => {
  if (!working || !staged.length) return;
  const text = fullJson();
  const url = URL.createObjectURL(new Blob([text], { type: 'application/json;charset=utf-8' }));
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'projects.json';
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  exportedSnapshot = text;
  status(ui['export-status'], `Download der vollständigen projects.json mit ${working.projects.length} Einträgen gestartet. Die Website wird erst durch deinen Commit aktualisiert.`, 'success');
});

ui['copy-markdown'].addEventListener('click', async () => {
  if (!working || !staged.length) return;
  const text = fullMarkdown();
  const copiedCount = working.projects.length;
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(text);
    const changedDuringCopy = text !== fullMarkdown();
    status(ui['markdown-export-status'], changedDuringCopy
      ? `Die Textfassung mit ${copiedCount} Einträgen wurde kopiert. Der Arbeitskatalog hat sich inzwischen geändert; exportiere vor dem Speichern bitte beide Dateien erneut.`
      : `Die vollständige CATALOGUE.md mit ${copiedCount} Einträgen wurde kopiert. In die GitHub-Textfassung einfügen und committen; auch die JSON-Datei aus diesem Stand speichern.`, changedDuringCopy ? '' : 'success');
  } catch {
    ui['markdown-output-details'].open = true;
    ui['markdown-preview'].focus();
    ui['markdown-preview'].select();
    status(ui['markdown-export-status'], 'Automatisches Kopieren ist in diesem Browser nicht verfügbar. Die vollständige Textfassung ist unten markiert: mit Strg+C / ⌘C kopieren oder CATALOGUE.md herunterladen.');
  }
});

ui['download-markdown'].addEventListener('click', () => {
  if (!working || !staged.length) return;
  const url = URL.createObjectURL(new Blob([fullMarkdown()], { type: 'text/markdown;charset=utf-8' }));
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'CATALOGUE.md';
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  status(ui['markdown-export-status'], `Download der vollständigen CATALOGUE.md mit ${working.projects.length} Einträgen gestartet. Speichere diese Datei und die JSON-Datei aus demselben Stand im Repository.`, 'success');
});

window.addEventListener('beforeunload', event => {
  if (staged.length && fullJson() !== exportedSnapshot) {
    event.preventDefault();
    event.returnValue = '';
  }
});

setDateDefault();
loadCatalogue();
