# Offer Showcase — EL PR Group (TEMPORARY)

**Status: temporary sales collateral. Delete this whole `showcase/` folder after the deal closes.**
The demos (`demos/*.html`) are the client-approved design direction — port their design into the production Next.js builds (see `../PROJECT-BRIEF.md` §4 & §7), never reuse these files as production code.

## Contents
- `index.html` — offer page: pricing summary, proposal downloads, demo viewer with device frames (Desktop 1440 / Tablet 834 / Mobile 390)
- `demos/elpr.html` — EL PR & Media Consultancy (light corporate, navy/amber)
- `demos/alsoura.html` — Al Soura Media Services (dark production house, amber/orange)
- `demos/summit.html` — Health Summit (teal/lime, speakers + agenda + sponsors + working registration demo)
- `Website-Development-Proposal-Aug2026.pdf / .docx` — the offer documents (temporary)

## Notes
- Each demo is a single self-contained HTML file: hash-router for the 4 pages, AR/EN toggle with full RTL flip, demo forms (no backend). Needs internet for Tailwind CDN + Google Fonts.
- All content, names, dates, and stats are placeholders.
- `noindex` is set on every page.

## Deploy
Copy the `showcase/` folder to any static hosting under an unguessable path, e.g.:
- GitHub Pages: push into your site repo as `/offers/elpr-2026/`
- cPanel/any host: upload folder, share the link `https://your-domain/offers/elpr-2026/`

Test locally by double-clicking `index.html` (internet required for CDN).
