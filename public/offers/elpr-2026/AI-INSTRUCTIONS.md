# AI-INSTRUCTIONS — Client Offer Showcase (`/offers/elpr-2026/`)

Read this before touching anything in this folder.

## What this is

A **temporary, unlisted client-offer showcase** for an active deal (three websites for EL PR & Media Consultancy / Al Soura Media Services / Health Summit). It contains:

- `index.html` — offer page: pricing tiers, proposal download buttons, and a demo viewer with device frames (desktop/tablet/mobile)
- `demos/elpr.html`, `demos/alsoura.html`, `demos/summit.html` — three self-contained interactive site demos (hash-router pages, AR/EN + RTL toggle, demo forms)
- `Website-Development-Proposal-Aug2026.pdf/.docx` — the offer documents
- `README.md` — deploy notes

Full deal context: `P:\Career\for-working\elpr-group-websites\PROJECT-BRIEF.md` (source of truth).

## Where it goes on the website

It is already in its final location: `site/public/offers/elpr-2026/`. Next.js static export passes `public/` through untouched, so after deploy it is served at:

**https://abdumurad.com/offers/elpr-2026/**

There is nothing to build, import, or convert. These are plain static HTML files — do NOT convert them to Next.js pages/components, do NOT run them through the site's lint/format pipeline, do NOT restyle them to the portfolio design system.

## Rules

1. **Unlisted, not secret:** never link this URL from the portfolio nav, home, footer, projects, or anywhere public. It is shared privately with one client via direct link.
2. **Keep it out of SEO surfaces:** exclude `/offers/` from any sitemap generation; every page already carries `noindex, nofollow` meta — preserve it. If the site has a `robots.txt`, add `Disallow: /offers/`.
3. **Exempt from portfolio content rules:** the portfolio's locked rules (no invented metrics, voice audit, real screenshots only, design-system tokens) do NOT apply inside this folder — the demos intentionally contain placeholder names, stats, and dates for a client preview. Do not "fix" them.
4. **TEMPORARY — will be deleted:** this entire folder (and the proposal documents in it) is sales collateral for one deal. When the deal closes (either way), the folder is deleted. Nothing else in the site may depend on it; deleting `site/public/offers/` must break nothing — keep it that way.
5. **Don't edit demo content** unless explicitly asked; design/content changes to the demos are decided in the deal's PROJECT-BRIEF first.

## Your task when asked to deploy

1. Commit this folder to the site repo (it must be committed — `public/` ships with the build).
2. Push to `main` on github.com/AbduMurad/mysite; the existing Actions workflow builds and publishes.
3. Verify after deploy: `https://abdumurad.com/offers/elpr-2026/` loads; all three demo tabs render in the device frames; device toggles scale correctly; both download buttons serve the files; the AR/EN toggle flips to RTL inside each demo; the summit demo's registration flow shows a reference number.
4. Confirm the URL appears in no nav, sitemap, or index — then report the final shareable link.
