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

## Deployment

Static site deployed via GitHub Actions (`.github/workflows/deploy.yml`): `npm run build` → rsync the `dist/` folder to the web host. No Node.js runtime needed in production.
