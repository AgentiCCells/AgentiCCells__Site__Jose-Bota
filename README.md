# José Bota

Website and portfolio for José Bota, AI automation expert: agent apps, automations and integrations, built fast, with security in mind. Open to a full-time AI role and to freelance work.

Pages (all under `src/`): home, selected work (`work/`), how he works (`how-he-works/`), what he can do for you (`for-you/`), photos and videos (`photos-and-videos/`), and use with AI (`agents/`), plus `llms.txt` and the home page as `index.md`, the master copy of the facts. Static HTML and CSS, no scripts; nothing loaded from other hosts. The home page prints on four A4 pages; The Fact Sheet is the two-page version.

The home page comes in five designs with the same facts: The Flow (`src/index.html`, the default), The Trace, The Fact Sheet and The Arena (`src/d/trace/`, `d/sheet/`, `d/arena/`), and First Pass (`src/d/first/`, with its pages `work/`, `how-he-works/` and `for-you/` and `style.css`). Each of the first four is one self-contained page with its own styles and no script. `src/designs/` compares them, `src/designs.json` lists them, their small screenshots are in `src/assets/designs/`, and `src/assets/chrome.css` styles the design bar every page starts with. How to change a fact, add a photo or a video, or make another design the home page is on the "Use with AI" page, `src/agents/index.html`.

This is a first version: photos, videos and screenshots follow from José. His contact details (email and LinkedIn) were supplied by José on 2026-11-16. José approves every change about him before it goes live.

- Live at https://jose-bota.agenticcells.site (version at /version.json).
- Made by the AgentiCCells site factory from request `requests/2026-11-16__jose-bota/` in AgentiCCells__Site__Factory, seeded from AgentiCCells__Site__Template.
- Release: `scripts/release.sh` (build, validate, leak scan, then push to dev; CI deploys and tags v0.1.N).

Licences: code Apache-2.0; text CC BY 4.0.
