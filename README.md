# Max Examples

A growing reference catalogue for students exploring what they can make with Max, MSP, Jitter and related creative programming environments. It brings together finished artworks, approachable tools, patch collections, videos and small project prompts.

**Website:** [adrianartacho.github.io/max-examples](https://adrianartacho.github.io/max-examples/)

GitHub Pages serves this static site from **`main` → `/ (root)`**. Commits to that branch publish updates automatically. No build system, server-side database or account is needed to browse it.

## Browse with your students

The page opens directly on the archive, with compact filters and illustrated project cards. Each card has a coloured category graphic or a credited project photograph; there is no introductory header.

- Switch between **German and English** explanations.
- Search by title, creator, environment or the idea you want to explore.
- Use the collection tabs to browse **Max projects**, **related environments**, or **resource hubs**.
- Filter by theme, starting level and available material (such as videos or patches). Search also covers environment names; there is no separate environment dropdown.
- Open a card for its project prompt, requirements, original links and sources.
- Keep a **shortlist** in the current browser, share a view link, or print the current selection to paper or PDF.

The initial collection contains **33 entries**. Max is the main focus; related tools are explicitly identified so that a Pure Data patch, TouchDesigner project or SuperCollider program is never mistaken for a Max patch.

For a readable version directly on GitHub, open [CATALOGUE.md](CATALOGUE.md). It contains the same bilingual summaries, prompts, requirements and source links.

## Add or update a project

All catalogue content lives in **[`data/projects.json`](data/projects.json)**. Adding an entry does not require editing the page layout or JavaScript.

### Through the entry editor

1. Open [`editor.html`](https://adrianartacho.github.io/max-examples/editor.html), or the same page on your local preview.
2. The current catalogue loads automatically. Enter the new project's details, review the preview, and add it to the working catalogue. You can clear the form and add more projects without losing the entries already staged.
3. Under **Datei 1 · Katalogdaten**, copy the **complete updated JSON**. Open the [GitHub editor for data/projects.json](https://github.com/AdrianArtacho/max-examples/edit/main/data/projects.json), replace the entire contents and commit.
4. Under **Datei 2 · Lesbare Textfassung**, copy the **complete bilingual Markdown**. Open the [GitHub editor for CATALOGUE.md](https://github.com/AdrianArtacho/max-examples/edit/main/CATALOGUE.md), replace the entire contents and commit this file too.

Both exports include **all existing entries plus all staged additions**, including descriptions, project prompts, requirements, resource links, every source link, review dates and image credits. Save the two files from the same working-catalogue state. The JSON powers the website; the Markdown keeps the readable GitHub version current. This route needs only a browser—no Python, backend or credentials entered into this site.

Alternatively, download both files and upload them to their existing repository locations: `projects.json` inside `data/`, and `CATALOGUE.md` at the repository root. The entry editor prepares files locally. It does **not** save to GitHub or publish anything by itself. Keep your downloaded copies until both files are committed. If someone else changed the catalogue meanwhile, reconcile your additions with the latest file before committing, so their entries are preserved.

### By editing the data file

Copy an existing entry or use [`data/example-entry.json`](data/example-entry.json), which contains a real BEAP entry as a structural example. Replace its ID and details; do not add the example unchanged because IDs must be unique.

The top-level object contains `version`, `updated` and the `projects` array. Update the catalogue date when editing content. Within the array, order determines the curated browsing order.

| Field | What to enter |
| --- | --- |
| `id` | A unique, stable identifier such as `my-project`, using lowercase letters, numbers and hyphens. Keep it unchanged when revising an existing entry. |
| `title`, `creator` | The project name and the original artist, developer or team. |
| `category` | `sound`, `generative`, `visual`, `interaction`, `spatial` or `performance`. Choose the main theme. |
| `kind` | `project` for an artwork or concrete project; `tool` for a reusable instrument or environment; `resource` for a discovery or learning collection. |
| `environment` | An array of actual software or hardware environments. Use established names consistently, e.g. `Max`, `Jitter`, `Max for Live`, `Pure Data`. |
| `level` | `beginner`, `intermediate`, `advanced` or `inspiration`. This is a suggested starting point, not an objective rating of the artwork. |
| `summary_en`, `summary_de` | A brief explanation of what the example does. |
| `idea_en`, `idea_de` | An original, manageable project prompt inspired by the example. |
| `access_en`, `access_de` | What students can actually access, plus relevant software, hardware, paid components or legacy dependencies. |
| `links` | An array of `{ "label": "…", "type": "…", "url": "https://…" }`. Types are `project`, `video`, `patch` and `docs`. |
| `sources` | The original URLs supporting the description and access information. |
| `verified` | The date those sources were reviewed, in `YYYY-MM-DD` format. |
| `thumbnail` | Optional image object: `url`, `alt_en`, `alt_de`, `credit`, `sourceUrl`. Use an attributed project image from a verified source. |
| `tags` | Optional array of additional search terms. |

### What the labels mean

**Patch / source available** can mean an individual patch, example collection or source repository. The link label and access note explain which one. It does not promise that a project opens directly in Max, needs no installation, or is free of charge.

**Video** may link directly to a video or to the creator's page with embedded demonstrations. **Inspiration** marks examples best approached by watching, listening and discussing their design before attempting a smaller version.

Source-check dates record a review of linked documentation. They do not certify that every download was installed, every patch executed, or every older dependency works on current systems. The validator checks structure and URL syntax without making network requests.

For suggestions from students or colleagues, use the repository's **Suggest a project** issue form. Suggestions are reviewed before becoming catalogue entries; no automation publishes them.

## Preview locally

From the repository directory:

```bash
python3 -m http.server 8000
```

Then open [localhost:8000](http://localhost:8000/). Use a local server because the catalogue is loaded from a JSON file; opening `index.html` directly through `file://` can prevent that request.

## Validate or regenerate from the terminal

The browser editor generates both files directly. If you edit `data/projects.json` by hand, the alternative terminal workflow uses Python 3 and its standard library:

```bash
python3 scripts/validate.py
python3 scripts/validate.py --write-catalogue
```

Validation checks required bilingual fields, unique IDs, allowed metadata values, dates, source URLs and optional image credits. The second command also regenerates `CATALOGUE.md` from the validated JSON. The browser and terminal generators derive the same complete bilingual reference content from the JSON source. Commit both files when updating entries so the web and readable versions stay in step; do not maintain the Markdown separately.

## Repository structure

| Path | Purpose |
| --- | --- |
| `index.html` | Student-facing catalogue |
| `editor.html` | Browser form for preparing new entries and exporting both complete catalogue files |
| `assets/` | Layout, interactions and small local assets |
| `data/projects.json` | Source of truth for all entries |
| `data/example-entry.json` | A complete example entry |
| `CATALOGUE.md` | Generated bilingual reference version |
| `scripts/validate.py` | Standard-library validation and catalogue generation |
| `.github/ISSUE_TEMPLATE/suggest-project.yml` | Structured suggestions for maintainer review |

## Credits and scope

Curated for teaching by **Adrián Artacho**. Each entry credits the original creators and links to the material on their own sites or repositories. Student project prompts are editorial suggestions for this catalogue, not claims about the original creators' teaching methods.

Linked artworks, software, patches, videos and images remain subject to their respective creators' terms. Source links provide attribution and context; inclusion here does not relicense or redistribute a project's patch files.
