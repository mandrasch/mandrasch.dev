# mandrasch.dev

Personal website of Matthias Andrasch — Vienna-based web developer and hobby blogger.

## Stack

- [Astro 7](https://astro.build/) + [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first `@theme` config)
- Fully static build (`output: 'static'`)
- Blog posts are fetched at build time from the WordPress REST API (`src/utils/wordpress.ts`)
- German content with a small set of hand-written pages

## Commands

| Command           | Action                            |
| ----------------- | --------------------------------- |
| `npm install`     | Install dependencies              |
| `npm run dev`     | Start dev server at localhost:4321 |
| `npm run build`   | Build production site to `./dist/` |
| `npm run preview` | Preview the production build       |
| `npm run check`   | Type-check the project             |
| `npm run a11y`    | Run axe accessibility checks on `./dist/` (requires a prior build and `npx playwright install chromium`) |

## Structure

```
src/
  assets/          images + favicons
  components/      Seo, Header/Footer, dark-mode, blog helpers
  content/pages/   markdown content pages
  data/books.ts    book recommendations
  layouts/         base + page layouts
  pages/           routes (incl. blog from WordPress)
  styles/          Tailwind v4 theme + component classes
  utils/           WordPress fetching helpers
  config.ts        site metadata + navigation
```

## Environment variables

The blog content is fetched from a password-protected WordPress REST API
(`Simple Password Protect`). For local builds, copy `.env.example` to `.env`
and set:

| Variable | Purpose |
| --- | --- |
| `WP_SITE_PASSWORD` | Password from Settings → Password Protect. The build logs in once and reuses the resulting `wp_password_protect_auth` cookie. |
| `WP_API_BASE` | Optional WordPress REST API base URL override (e.g. for local testing). |

`.env` is gitignored. In GitHub Actions, add `WP_SITE_PASSWORD` as a repository
secret; `.github/workflows/deploy.yml` passes it to `npm run build`.

## Deployment

Static site deployed via GitHub Actions (`.github/workflows/deploy.yml`): `npm run build` → rsync the `dist/` folder to the web host. No Node.js runtime needed in production.

## Accessibility checks

`npm run a11y` runs [axe](https://github.com/dequelabs/axe-core) against every route in `scripts/a11y.mjs`, in both light and dark mode. It starts `astro preview` itself, so build first:

```bash
npm run build
npx playwright install chromium   # once, locally
npm run a11y
```

The check is **not** part of the deploy pipeline (Chromium install would slow every deploy). Instead it runs on demand via the **Accessibility check** workflow (`.github/workflows/a11y.yml`): *Actions → Accessibility check → Run workflow*. Playwright browsers are cached by `package-lock.json` hash.
