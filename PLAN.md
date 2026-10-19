# Plan: mandrasch.dev polish & a11y

## Goal 1 — Accessibility contrast check + build integration

**Fix the known violation first**
- `src/styles/global.css:45` — darken `--aw-color-text-muted` from `#767672` to `#70706c` (light theme). Raises contrast on `#fafaf7` from 4.36:1 → 4.76:1, passing WCAG AA for normal text. (All other tokens already pass: secondary 7.49, accent 6.11/6.39, dark muted 6.05, dark accent 7.45.)

**Add automated build-time check (axe-core + Playwright)**
1. Add devDependencies: `@axe-core/playwright` and `playwright`.
2. Create `scripts/a11y.mjs`:
   - Serve the built `dist/` (via `astro preview` or a small static server).
   - Launch headless Chromium and visit a URL list: `/`, `/ueber-mich`, `/projekte`, `/schreiben`, `/lesen`, `/green-coding`, `/klimagerechtigkeit`, `/absurditaet-des-lebens`, `/blog`.
   - Run `AxeBuilder` for each route **twice** — default (light) and with `.dark` toggled on `<html>` (to catch dark-mode contrast).
   - Fail on `serious`/`critical` violations (including `color-contrast`); print a readable report.
3. Add npm script: `"a11y": "npm run build && node scripts/a11y.mjs"`.
4. Wire into `.github/workflows/deploy.yml` before deploy: install Playwright chromium (`npx playwright install --with-deps chromium`), run `npm run a11y`, fail the job on violation.

**Note:** the URL list in `scripts/a11y.mjs` must be maintained when routes are added.

## Goal 2 — View transitions

- Already integrated via `<ClientRouter fallback="swap" />` (`src/layouts/Layout.astro:36`) — Astro 7's built-in mechanism. Theme re-init after swap is already handled (`BasicScripts.astro:105`).
- **Action:** verify it works in `npm run dev`/`build`; optionally add a subtle fade using a `::view-transition-old/new` rule or `transition:animate="fade"` on the `<main>` wrapper. No library install needed.

## Goal 3 — Consistent content width

- `src/pages/projekte.astro:22` — change `max-w-3xl` → `max-w-2xl` so it matches every other content subpage. (Blog *listing* stays `max-w-6xl` intentionally — it's a card grid, not a content page.)
- Optional: extract a shared section class (e.g. a `.content-page` utility) to prevent future drift.

## Goal 4 — Mobile theme toggle next to menu

- `src/components/widgets/Header.astro:22-24` — add `<ToggleTheme iconClass="w-6 h-6" />` inside the `md:hidden` flex container, before `<ToggleMenu />`, so it's always visible on mobile next to the hamburger.
- Keep the desktop toggle in the right-side slot unchanged.
- Adjust `BasicScripts.astro` `toggleMenu()` so it no longer reveals the desktop-only actions slot on mobile (avoid a duplicate toggle in the expanded menu).

## Goal 5 — Uniform teaser text

- Remove inline `style="text-align:center;..."` from `src/content/pages/projekte.md:5` and `src/content/pages/lesen.md:5`, leaving left-aligned prose (consistent with `schreiben`, `green-coding`, etc.).
- Optional: add a `.prose > p:first-child` "lead" style in `global.css` (e.g. `font-size: 1.125rem; color: var(--aw-color-text-muted)`) so intro paragraphs read consistently across pages.

## Verification

- `npm run check` (type check)
- `npm run build` (static build succeeds)
- `npm run a11y` (contrast/axe audit passes)
- Manual: dark/light toggle on mobile + desktop; view transition smoke test; widths/teaser alignment on `/projekte`, `/lesen`, `/ueber-mich`.
