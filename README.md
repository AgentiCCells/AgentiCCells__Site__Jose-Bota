# José Bota

Website and portfolio for José Bota, AI automation expert: agent apps, automations and integrations, built fast, with security in mind.

Pages (all under `src/`): the home page (`index.html`), one self-contained page with every section (selected work, how he works, what he can do for you, contact, sources); photos and videos (`photos-and-videos/`); and use with AI (`agents/`); plus `llms.txt` and the home page as `index.md`, the master copy of the facts. `work/`, `how-he-works/` and `for-you/` only forward to the matching section of the home page. Static HTML and CSS, with one small script (`src/assets/grid.js`, the home page's pointer-reactive background, which the page works without); nothing loaded from other hosts. The home page prints on four A4 pages.

Four other designs of the home page were built for comparison on 2026-11-16 and removed the same day at José's word; they are in the git history up to v0.1.4. How to change a fact or add a photo or a video is on the "Use with AI" page, `src/agents/index.html`.

This is a first version: photos, videos and screenshots follow from José. His contact details (email and LinkedIn) were supplied by José on 2026-11-16. José approves every change about him before it goes live.

- Live at https://jose-bota.agenticcells.site (version at /version.json).
- Made by the AgentiCCells site factory from request `requests/2026-11-16__jose-bota/` in AgentiCCells__Site__Factory, seeded from AgentiCCells__Site__Template.
- Release: `scripts/release.sh` (build, validate, leak scan, then push to dev; CI deploys and tags v0.1.N).

Licences: code Apache-2.0; text CC BY 4.0.
