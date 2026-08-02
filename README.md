# abdumurad.com — React build

Next.js static-export implementation of the portfolio, built from the verified
mockups per `../08-REACT-MIGRATION-PLAN.md`. The mockups in `../mockups/` are
the visual contract; the pack's locked rules (generic domain labels, voice, no
invented metrics, no closed-triangle geometry, real screenshots only) all
carry over.

## Run it

```bash
cd site
npm install        # needs internet; grabs Next 15, Motion, Tailwind v4, simple-icons
npm run dev        # http://localhost:3000  (predev copies brand-mark SVGs to public/logos)
```

Production build (static export to `out/`):

```bash
npm run build
npm run preview    # serves out/ locally
```

Deploy: push to `main` on github.com/AbduMurad/mysite — the Actions workflow
(`.github/workflows/deploy.yml`) builds and publishes to GitHub Pages
automatically. Custom domain abdumurad.com via `public/CNAME` (no basePath).
`trailingSlash` is on, so every route is a folder with index.html.
Prereqs once: repo public, Settings → Pages → Source = "GitHub Actions",
DNS at the registrar (A records to GitHub Pages IPs, www CNAME), custom
domain set in Pages settings, Enforce HTTPS after the cert issues.

## What's where

- `app/globals.css` — the whole design system: Tailwind v4 `@theme` tokens
  (fluid Utopia-style type + space scales, 360→1440px; line-height lives in
  the type token) plus the component CSS ported from the mockups.
- `app/page.tsx` — home (hero, work grid with LogoFans + ShotStack, topology,
  capabilities, contact).
- `app/work/*/page.tsx` — six case studies, copy verbatim from the mockups.
- `app/skills/` — evidence-weighted grid (`components/SkillsGrid`,
  `data/skills.ts`): cell size = number of linked case studies. No
  percentages — that's a rule, not an omission.
- `app/learning/` — certificate bookshelf (`components/Bookshelf`,
  `data/certificates.ts`): spine thickness = real hours; hover/focus pulls
  the book out; narrow screens get the flat cascade. Verification URLs slot
  into the data file when extracted.
- `app/about/` — bio with the blended-cutout portrait (no JS-gated reveal —
  deliberate), timeline with the client band, learning strip.
- `components/` — Nav, Footer, Reveal (Motion whileInView), Accent (per-page
  accent), Topology (hover-dim via JS classes, never `:has(:hover)` — that
  froze a renderer once), CommandPalette (⌘K), ConsoleEgg, LogoFan, Shared.

## Deliberate deferrals (plan phases 9–10)

- GSAP pinned scrubs (`topology-scrub`, `morph-v1-v2`) — static/SMIL versions
  render now; the scrub layer is additive.
- View Transitions route morph (experimental flag) — standard navigation now.
- next-image-export-optimizer — images are pre-optimized WebP already;
  add the optimizer when srcset variants become worth it.
- Per-route OG images, sitemap, 404 page, ESLint arbitrary-value ban.

## Rules that bite (read before editing)

- Copy is the contract. Don't edit page text without mirroring the pack —
  and never cite "the repo" or "commit history" on the site.
- One accent per page, set only via `<Accent>`.
- Never render: client names, real service names/ports, pricing.
- No proficiency bars or invented numbers anywhere, including new visuals.
- No closed or overlapping triangles in decorative geometry.
