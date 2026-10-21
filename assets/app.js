import {copy} from './i18n.js';

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const esc = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const safeUrl = (value) => { try { const url=new URL(value); return ['https:','http:'].includes(url.protocol) ? url.href : ''; } catch { return ''; } };
const storage = {
  get(key,fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } },
  set(key,value) { try { localStorage.setItem(key,JSON.stringify(value)); } catch { /* The catalogue also works without persistent storage. */ } }
};
const categoryStyle = {
  sound:{tint:'#e4eccd',accent:'#526b35',icon:'∿',drawing:'<path d="M0 40 C10 40 10 5 20 5 S30 70 40 70 50 5 60 5 70 70 80 70 90 5 100 5 110 70 120 70 130 40 150 40"/>'},
  generative:{tint:'#ece3d2',accent:'#937343',icon:'⠿',drawing:'<circle cx="75" cy="38" r="32"/><circle cx="75" cy="38" r="21"/><path d="M75 6 V70 M43 38 H107"/><circle cx="98" cy="15" r="4" fill="currentColor"/><circle cx="54" cy="38" r="4" fill="currentColor"/>'},
  visual:{tint:'#e6dfef',accent:'#7b648e',icon:'◈',drawing:'<path d="M75 4 L135 38 75 72 15 38 Z M75 14 L115 38 75 62 35 38 Z M75 24 L95 38 75 52 55 38 Z"/>'},
  interaction:{tint:'#dce9e6',accent:'#3c7c70',icon:'⌁',drawing:'<path d="M20 65 L45 10 70 48 95 21 128 58"/><g fill="currentColor"><circle cx="20" cy="65" r="3"/><circle cx="45" cy="10" r="5"/><circle cx="70" cy="48" r="4"/><circle cx="95" cy="21" r="5"/><circle cx="128" cy="58" r="3"/></g>'},
  spatial:{tint:'#dfe5f0',accent:'#5479a0',icon:'◎',drawing:'<ellipse cx="75" cy="38" rx="58" ry="26"/><ellipse cx="75" cy="38" rx="32" ry="26"/><ellipse cx="75" cy="38" rx="11" ry="26"/><path d="M17 38 H133"/>'},
  performance:{tint:'#efdfd6',accent:'#a2664a',icon:'↗',drawing:'<path d="M10 60 L35 60 35 22 55 22 55 45 78 45 78 8 99 8 99 55 121 55 121 28 145 28"/>'}
};
let data=[], visible=[], toastTimer;
const savedValue=storage.get('max-examples-saved',[]);
let saved=new Set(Array.isArray(savedValue)?savedValue.filter((id)=>typeof id==='string'):[]);
const storedLang=storage.get('max-examples-language','de');
let lang=['de','en'].includes(storedLang)?storedLang:'de';
const defaults=()=>({scope:'all',category:'all',level:'all',access:'all',sort:'curated',query:'',savedOnly:false,ids:null,project:null});
let state=defaults();
const t=(key,values={})=>Object.entries(values).reduce((s,[k,v])=>s.replaceAll(`{{${k}}}`,String(v)),copy[lang][key]??key);
const local=(project,field)=>project[`${field}_${lang}`]||project[`${field}_en`]||project[`${field}_de`]||'';
const scopeOf=(project)=>project.kind==='resource'?'resources':project.environment.some((env)=>/max|jitter/i.test(env))?'max':'related';
const normalize=(text)=>String(text).normalize('NFD').replace(/\p{Diacritic}/gu,'').toLowerCase();

function readUrl() {
  const params=new URLSearchParams(location.search);
  if(['de','en'].includes(params.get('lang'))) lang=params.get('lang');
  state=defaults();
  for(const [key,choices] of Object.entries({scope:copy.en.scopes,category:copy.en.categories,level:copy.en.levels,access:copy.en.accessOptions,sort:copy.en.sortOptions})) {
    if(Object.hasOwn(choices,params.get(key))) state[key]=params.get(key);
  }
  state.query=params.get('q')||'';
  state.ids=params.has('ids')?params.get('ids').split(',').filter(Boolean):null;
  state.project=params.get('project');
  state.savedOnly=params.get('saved')==='1';
}

function currentUrl({forShare=false,onlyProject=null}={}) {
  const url=new URL(location.href); url.search=''; url.hash='';
  url.searchParams.set('lang',lang);
  if(onlyProject) { url.searchParams.set('project',onlyProject); return url.href; }
  for(const key of ['scope','category','level','access','sort']) if(state[key]!==defaults()[key]) url.searchParams.set(key,state[key]);
  if(state.query.trim()) url.searchParams.set('q',state.query.trim());
  const ids=forShare&&state.savedOnly?visible.map((p)=>p.id):state.ids;
  if(ids!==null) url.searchParams.set('ids',ids.join(','));
  if(state.savedOnly&&!forShare) url.searchParams.set('saved','1');
  if(state.project) url.searchParams.set('project',state.project);
  return url.href;
}

function setLanguage(next) {
  lang=next; storage.set('max-examples-language',lang); document.documentElement.lang=lang;
  document.title=t('catalogueTitle');
  $$('[data-i18n]').forEach((el)=>{el.innerHTML=t(el.dataset.i18n);});
  $$('[data-placeholder]').forEach((el)=>{el.placeholder=t(el.dataset.placeholder);});
  $$('[data-lang]').forEach((button)=>button.setAttribute('aria-pressed',String(button.dataset.lang===lang)));
  $('#scope-tabs').setAttribute('aria-label',lang==='de'?'Sammlung':'Collection');
  $('#topics').setAttribute('aria-label',lang==='de'?'Thema':'Theme');
  $('#scope-tabs').innerHTML=Object.entries(copy[lang].scopes).map(([key,label])=>`<button type="button" data-scope="${key}" aria-pressed="${state.scope===key}">${label}<span class="tab-count">${key==='all'?data.length:data.filter((p)=>scopeOf(p)===key).length}</span></button>`).join('');
  $('#topics').innerHTML=Object.entries(copy[lang].categories).map(([key,label])=>`<button type="button" data-category="${key}" aria-pressed="${state.category===key}">${label}</button>`).join('');
  for(const [id,options] of [['level',copy[lang].levels],['access',copy[lang].accessOptions],['sort',copy[lang].sortOptions]]) {
    $(`#${id}`).innerHTML=Object.entries(options).map(([key,value])=>`<option value="${key}">${value}</option>`).join(''); $(`#${id}`).value=state[id];
  }
  $('#search').value=state.query;
  $('#scope-tabs').onclick=(event)=>{const button=event.target.closest('[data-scope]');if(button) update({scope:button.dataset.scope});};
  $('#topics').onclick=(event)=>{const button=event.target.closest('[data-category]');if(button) update({category:button.dataset.category});};
  render();
}

function card(project,index) {
  const style=categoryStyle[project.category], isSaved=saved.has(project.id);
  const thumbnail=project.thumbnail&&safeUrl(project.thumbnail.url)?project.thumbnail:null;
  const date=new Intl.DateTimeFormat(lang==='de'?'de-AT':'en-GB',{day:'numeric',month:'short',year:'numeric'}).format(new Date(`${project.verified}T12:00:00Z`));
  const links=project.links.filter((link)=>safeUrl(link.url));
  return `<article class="project-card${state.project===project.id?' highlight':''}" id="project-${esc(project.id)}" aria-labelledby="title-${esc(project.id)}" style="--tint:${style.tint};--accent:${style.accent}">
    <div class="card-banner${thumbnail?' has-photo':''}"><svg class="category-drawing" viewBox="0 0 150 80" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true">${style.drawing}</svg>
      ${thumbnail?`<img class="card-photo" src="${esc(safeUrl(thumbnail.url))}" alt="${esc(thumbnail[`alt_${lang}`]||thumbnail.alt_en||project.title)}" loading="lazy" referrerpolicy="no-referrer"><a class="photo-credit" href="${esc(safeUrl(thumbnail.sourceUrl))}" target="_blank" rel="noopener noreferrer">© ${esc(thumbnail.credit)}</a>`:''}
      <span class="card-category">${copy[lang].categories[project.category]}</span><span class="card-index" aria-hidden="true">${String(index+1).padStart(2,'0')} / ${copy[lang].kinds[project.kind]}</span>
      <button class="save-button" type="button" data-save="${esc(project.id)}" aria-pressed="${isSaved}" aria-label="${esc((isSaved?t('unsave'):t('save'))+': '+project.title)}" title="${isSaved?t('unsave'):t('save')}">${isSaved?'★':'☆'}</button>
    </div>
    <div class="card-body"><div class="card-meta"><span>${esc(project.environment.join(' / '))}</span><span class="level">${copy[lang].levels[project.level]}</span></div><h2 id="title-${esc(project.id)}">${esc(project.title)}</h2><p class="card-creator">${esc(project.creator)}</p><p class="card-description">${esc(local(project,'summary'))}</p>
      <div class="card-links">${links.map((link,i)=>`<a class="resource-link${i===0?' primary':''}" href="${esc(safeUrl(link.url))}" target="_blank" rel="noopener noreferrer" title="${esc(copy[lang].linkTypes[link.type])}: ${esc(link.label)}"><span aria-hidden="true">${link.type==='video'?'▷':link.type==='patch'?'↓':link.type==='docs'?'≡':'↗'}</span>${esc(link[`label_${lang}`]||link.label)}</a>`).join('')}</div>
    </div>
    <details class="card-details"${state.project===project.id?' open':''}><summary>${t('details')}</summary><div class="detail-section"><h3>${t('idea')}</h3><p>${esc(local(project,'idea'))}</p></div><div class="detail-section"><h3>${t('access')}</h3><p>${esc(local(project,'access'))}</p></div><div class="detail-section"><h3>${t('sources')}</h3><ul class="source-list">${project.sources.filter(safeUrl).map((url)=>`<li><a href="${esc(safeUrl(url))}" target="_blank" rel="noopener noreferrer">${esc(new URL(url).hostname.replace(/^www\./,''))}${esc(new URL(url).pathname.replace(/\/$/,'').substring(0,75))}</a></li>`).join('')}</ul><p class="source-date">${t('checked')}: ${date}</p></div><div class="card-bottom"><span>${esc(project.id)}</span><a href="${esc(currentUrl({onlyProject:project.id}))}">${t('permalink')}</a></div></details>
  </article>`;
}

function render() {
  const words=normalize(state.query).split(/\s+/).filter(Boolean);
  visible=data.filter((project)=>{
    if(state.scope!=='all'&&scopeOf(project)!==state.scope) return false;
    if(state.category!=='all'&&project.category!==state.category) return false;
    if(state.level!=='all'&&project.level!==state.level) return false;
    if(state.access!=='all'&&!project.links.some((link)=>link.type===state.access)) return false;
    if(state.savedOnly&&!saved.has(project.id)) return false;
    if(state.ids!==null&&!state.ids.includes(project.id)) return false;
    if(!words.length) return true;
    const text=normalize([project.title,project.creator,...project.environment,...(project.tags||[]),project.summary_en,project.summary_de,project.idea_en,project.idea_de,copy.de.categories[project.category],copy.en.categories[project.category]].join(' '));
    return words.every((word)=>text.includes(word));
  });
  if(state.sort==='title') visible.sort((a,b)=>a.title.localeCompare(b.title,lang));
  const openIds=new Set($$('.card-details[open]').map((element)=>element.closest('article').id));
  $('#projects').innerHTML=visible.map((project)=>card(project,data.indexOf(project))).join('');
  $$('.card-details').forEach((element)=>{if(openIds.has(element.closest('article').id)) element.open=true;});
  $$('.card-photo').forEach((img)=>img.addEventListener('error',()=>{img.hidden=true;img.parentElement.classList.remove('has-photo');img.parentElement.querySelector('.photo-credit').hidden=true;}));
  $('#result-count').textContent=(state.ids!==null?t('sharedSelection')+' · ':'')+t('results',{visible:visible.length,total:data.length});
  $('#empty').hidden=visible.length>0; $('#empty p').textContent=state.savedOnly?t('emptySaved'):t('emptyText');
  $('#saved-count').textContent=[...saved].filter((id)=>data.some((project)=>project.id===id)).length;
  $('#saved-filter').setAttribute('aria-pressed',String(state.savedOnly));
  $('#reset').hidden=state.scope==='all'&&state.category==='all'&&state.level==='all'&&state.access==='all'&&!state.query&&!state.savedOnly&&state.ids===null&&!state.project&&state.sort==='curated';
  $('#share').disabled=visible.length===0; $('#print').disabled=visible.length===0;
  $$('[data-scope]').forEach((button)=>button.setAttribute('aria-pressed',String(button.dataset.scope===state.scope)));
  $$('[data-category]').forEach((button)=>button.setAttribute('aria-pressed',String(button.dataset.category===state.category)));
}

function update(changes) { state={...state,...changes,project:null}; history.replaceState(null,'',currentUrl()); render(); }
function reset() { state=defaults();setLanguage(lang);history.replaceState(null,'',currentUrl()); }
function toast(message) {clearTimeout(toastTimer);$('#toast').textContent=message;$('#toast').hidden=false;toastTimer=setTimeout(()=>{$('#toast').hidden=true;},3800);}
async function share() {
  const url=currentUrl({forShare:true});
  try {await navigator.clipboard.writeText(url);toast(t('copied'));}
  catch {$('#share-url').value=url;$('#share-dialog').showModal();$('#share-url').focus();$('#share-url').select();}
}
function showProject(id) {
  const element=document.getElementById(`project-${id}`);
  if(!element){toast(t('projectMissing'));return;}
  element.querySelector('details').open=true;element.classList.add('highlight');
  element.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'center'});
  element.querySelector('summary').focus({preventScroll:true});
}

async function boot() {
  readUrl();setLanguage(lang);$('#result-count').textContent=t('loading');
  try {
    const response=await fetch('data/projects.json');if(!response.ok) throw new Error(`HTTP ${response.status}`);
    const catalogue=await response.json();
    if(!Array.isArray(catalogue.projects)||!catalogue.projects.length) throw new Error('Invalid catalogue');
    data=catalogue.projects;setLanguage(lang);if(state.project) showProject(state.project);
  } catch(error) {
    $('#result-count').textContent=t('loadError');$('#empty').hidden=true;
    $('#projects').innerHTML=`<div class="error-state"><h2>${t('loadError')}</h2><p>${t('loadHelp')}</p><a href="CATALOGUE.md">${t('textVersion')}</a><button type="button" id="retry" class="outline-button">${t('retry')}</button></div>`;
    $('#retry').addEventListener('click',()=>location.reload());console.error('Catalogue could not be loaded:',error);
  }
}
$('#search').addEventListener('input',(event)=>update({query:event.target.value}));
for(const id of ['level','access','sort']) $(`#${id}`).addEventListener('change',(event)=>update({[id]:event.target.value}));
$$('[data-lang]').forEach((button)=>button.addEventListener('click',()=>{setLanguage(button.dataset.lang);history.replaceState(null,'',currentUrl());}));
$('#saved-filter').addEventListener('click',()=>update({savedOnly:!state.savedOnly,ids:null}));
$('#projects').addEventListener('click',(event)=>{
  const button=event.target.closest('[data-save]');if(!button)return;const id=button.dataset.save;
  if(saved.has(id))saved.delete(id);else saved.add(id);storage.set('max-examples-saved',[...saved]);render();
  const replacement=$$('[data-save]').find((element)=>element.dataset.save===id);(replacement||$('#saved-filter')).focus({preventScroll:true});
});
$('#reset').addEventListener('click',reset);$('#empty-reset').addEventListener('click',reset);$('#share').addEventListener('click',share);
$('#share-copy').addEventListener('click',async()=>{try{await navigator.clipboard.writeText($('#share-url').value);$('#share-dialog').close();toast(t('copied'));}catch{$('#share-url').focus();$('#share-url').select();}});
$('#print').addEventListener('click',()=>window.print());
let closedForPrint=[];
window.addEventListener('beforeprint',()=>{closedForPrint=$$('.card-details:not([open])');closedForPrint.forEach((element)=>element.open=true);});
window.addEventListener('afterprint',()=>{closedForPrint.forEach((element)=>element.open=false);closedForPrint=[];});
document.addEventListener('keydown',(event)=>{if(event.key==='/'&&!event.ctrlKey&&!event.metaKey&&!/INPUT|TEXTAREA|SELECT/.test(event.target.tagName)&&!event.target.isContentEditable&&!$('#share-dialog').open){event.preventDefault();$('#search').focus();}});
window.addEventListener('popstate',()=>{readUrl();setLanguage(lang);if(state.project)showProject(state.project);});
window.addEventListener('storage',(event)=>{if(event.key==='max-examples-saved'){const value=storage.get('max-examples-saved',[]);saved=new Set(Array.isArray(value)?value:[]);render();}});
boot();
