#!/usr/bin/env python3
"""Validate the catalogue and optionally regenerate its Markdown companion.

Uses only the Python standard library; deliberately makes no network requests.
"""

import argparse
import datetime as dt
import json
from pathlib import Path
import re
import sys
from urllib.parse import urlparse


ROOT = Path(__file__).resolve().parents[1]
CATEGORIES = {
    "sound": ("Sound & instruments", "Klang & Instrumente"),
    "generative": ("Generative music", "Generative Musik"),
    "visual": ("Visuals & audiovisual", "Visuals & Audiovisuelles"),
    "interaction": ("Interaction & sensors", "Interaktion & Sensoren"),
    "spatial": ("Space & spatial audio", "Raum & räumliches Audio"),
    "performance": ("Performance & live electronics", "Performance & Live-Elektronik"),
}
KINDS = {"project": "Project / Projekt", "tool": "Tool / Werkzeug", "resource": "Directory / Sammlung"}
LEVELS = {
    "beginner": "Beginner / Einstieg",
    "intermediate": "Intermediate / Vertiefung",
    "advanced": "Advanced / Fortgeschritten",
    "inspiration": "Inspiration / Anschauen",
}
LINK_TYPES = {"project", "video", "patch", "docs"}
REQUIRED = {
    "id", "title", "creator", "category", "kind", "environment", "level",
    "summary_en", "summary_de", "idea_en", "idea_de", "access_en", "access_de",
    "links", "sources", "verified",
}
OPTIONAL = {"thumbnail", "tags"}
TEXT_FIELDS = {
    "title", "creator", "summary_en", "summary_de", "idea_en", "idea_de",
    "access_en", "access_de",
}


def is_text(value):
    return isinstance(value, str) and bool(value.strip())


def valid_url(value):
    if not is_text(value) or any(char.isspace() for char in value):
        return False
    try:
        parsed = urlparse(value)
        return parsed.scheme in {"https", "http"} and bool(parsed.hostname) and not parsed.username and not parsed.password
    except (TypeError, ValueError):
        return False


def iso_date(value):
    if not isinstance(value, str) or not re.fullmatch(r"\d{4}-\d{2}-\d{2}", value):
        return None
    try:
        return dt.date.fromisoformat(value)
    except ValueError:
        return None


def validate(data):
    errors = []
    if not isinstance(data, dict):
        return ["Catalogue must be an object containing version, updated and projects."]
    if type(data.get("version")) is not int or data["version"] != 1:
        errors.append("version must be the integer 1.")
    updated = iso_date(data.get("updated"))
    if updated is None:
        errors.append("updated must be a valid YYYY-MM-DD date.")
    projects = data.get("projects")
    if not isinstance(projects, list) or not projects:
        return errors + ["projects must be a non-empty array."]
    seen = set()
    for index, project in enumerate(projects, 1):
        where = f"Entry {index}"
        if not isinstance(project, dict):
            errors.append(f"{where}: must be an object.")
            continue
        ident = project.get("id")
        if not isinstance(ident, str) or not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", ident):
            errors.append(f"{where}: id must use lowercase letters, numbers and single hyphens.")
        elif ident in seen:
            errors.append(f"{where}: duplicate id '{ident}'.")
        else:
            seen.add(ident)
            where += f" ({ident})"
        missing = REQUIRED - project.keys()
        unknown = project.keys() - REQUIRED - OPTIONAL
        if missing:
            errors.append(f"{where}: missing fields: {', '.join(sorted(missing))}.")
        if unknown:
            errors.append(f"{where}: unknown fields: {', '.join(sorted(unknown))}.")
        for field in TEXT_FIELDS:
            if not is_text(project.get(field)):
                errors.append(f"{where}: {field} must contain text.")
        for field, choices in [("category", CATEGORIES), ("kind", KINDS), ("level", LEVELS)]:
            if not isinstance(project.get(field), str) or project[field] not in choices:
                errors.append(f"{where}: {field} must be one of {', '.join(choices)}.")
        env = project.get("environment")
        if not isinstance(env, list) or not env or not all(is_text(item) for item in env):
            errors.append(f"{where}: environment must be a non-empty array of names.")
        elif len(env) != len(set(env)):
            errors.append(f"{where}: environment contains duplicates.")
        tags = project.get("tags", [])
        if not isinstance(tags, list) or not all(is_text(item) for item in tags):
            errors.append(f"{where}: optional tags must be an array of text values.")
        checked = iso_date(project.get("verified"))
        if checked is None:
            errors.append(f"{where}: verified must be a valid YYYY-MM-DD date.")
        elif updated is not None and checked > updated:
            errors.append(f"{where}: verified is later than catalogue updated date.")
        links = project.get("links")
        if not isinstance(links, list) or not links:
            errors.append(f"{where}: links must be a non-empty array.")
        else:
            for number, link in enumerate(links, 1):
                if not isinstance(link, dict):
                    errors.append(f"{where}: link {number} must be an object.")
                    continue
                if not is_text(link.get("label")):
                    errors.append(f"{where}: link {number} needs a label.")
                if not isinstance(link.get("type"), str) or link["type"] not in LINK_TYPES:
                    errors.append(f"{where}: link {number} has an invalid type.")
                if not valid_url(link.get("url")):
                    errors.append(f"{where}: link {number} needs an absolute HTTP(S) URL without credentials.")
        sources = project.get("sources")
        if not isinstance(sources, list) or not sources or not all(valid_url(url) for url in sources):
            errors.append(f"{where}: sources must contain one or more absolute HTTP(S) URLs.")
        thumb = project.get("thumbnail")
        if thumb is not None:
            if not isinstance(thumb, dict):
                errors.append(f"{where}: thumbnail must be an object.")
            else:
                for field in ("url", "sourceUrl"):
                    if not valid_url(thumb.get(field)):
                        errors.append(f"{where}: thumbnail.{field} needs an absolute HTTP(S) URL.")
                for field in ("alt_en", "alt_de", "credit"):
                    if not is_text(thumb.get(field)):
                        errors.append(f"{where}: thumbnail.{field} must contain text.")
    return errors


def escape_label(text):
    return str(text).replace("\\", "\\\\").replace("[", "\\[").replace("]", "\\]")


def markdown(data):
    lines = [
        "# Max Examples — catalogue / Katalog", "",
        "A bilingual, readable companion to the [interactive catalogue](https://adrianartacho.github.io/max-examples/).", "",
        "Generated from [`data/projects.json`](data/projects.json). Edit that file, then run `python3 scripts/validate.py --write-catalogue`.", "",
        f"**{len(data['projects'])} entries · Updated / Aktualisiert: {data['updated']}**", "",
        "The source-check dates refer to the linked documentation. Patches were not executed as part of this catalogue. Difficulty and student prompts are editorial suggestions. The original artworks, patches and media remain credited to their creators.", "",
        "Die Prüfdatumsangaben beziehen sich auf die verlinkte Dokumentation. Die Patches wurden für diesen Katalog nicht ausgeführt. Schwierigkeitsstufen und Projektimpulse sind redaktionelle Vorschläge. Urheber:innen der Originalwerke, Patches und Medien sind jeweils genannt.", "",
        "## Contents / Inhalt", "",
    ]
    for project in data["projects"]:
        lines.append(f"- [{escape_label(project['title'])}](#{project['id']})")
    for number, project in enumerate(data["projects"], 1):
        category = " / ".join(CATEGORIES[project["category"]])
        environments = ", ".join(project["environment"])
        lines.extend([
            "", "---", "", f"<a id=\"{project['id']}\"></a>", "",
            f"## {number:02d}. {project['title']}", "",
            f"**{project['creator']}**", "",
            f"{KINDS[project['kind']]} · {category} · {LEVELS[project['level']]}", "",
            f"**Environment / Umgebung:** {environments}", "",
            f"**EN:** {project['summary_en']}", "",
            f"**Project prompt:** {project['idea_en']}", "",
            f"**Access & requirements:** {project['access_en']}", "",
            f"**DE:** {project['summary_de']}", "",
            f"**Projektimpuls:** {project['idea_de']}", "",
            f"**Zugang & Voraussetzungen:** {project['access_de']}", "",
            "**Links**", "",
        ])
        for link in project["links"]:
            lines.append(f"- [{escape_label(link['label'])}](<{link['url']}>) · {link['type']}")
        lines.extend(["", f"**Sources / Quellen · checked / geprüft {project['verified']}**", ""])
        for number, url in enumerate(project["sources"], 1):
            domain = urlparse(url).hostname
            lines.append(f"- [{number}. {domain}](<{url}>)")
        if project.get("thumbnail"):
            thumb = project["thumbnail"]
            lines.extend(["", f"Image credit / Bildnachweis: [{escape_label(thumb['credit'])}](<{thumb['sourceUrl']}>)."])
    return "\n".join(lines) + "\n"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--file", type=Path, default=ROOT / "data" / "projects.json", help="Catalogue JSON to validate")
    parser.add_argument("--write-catalogue", action="store_true", help="Regenerate CATALOGUE.md after successful validation")
    args = parser.parse_args()
    try:
        data = json.loads(args.file.read_text(encoding="utf-8"))
    except (OSError, UnicodeError, json.JSONDecodeError) as error:
        print(f"Cannot read catalogue: {error}", file=sys.stderr)
        return 1
    errors = validate(data)
    if errors:
        print("Catalogue validation failed:", file=sys.stderr)
        for error in errors:
            print(f"  - {error}", file=sys.stderr)
        return 1
    print(f"Validated {len(data['projects'])} entries; all required fields, IDs, dates and URL formats are valid.")
    if args.write_catalogue:
        (ROOT / "CATALOGUE.md").write_text(markdown(data), encoding="utf-8")
        print("Regenerated CATALOGUE.md.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
