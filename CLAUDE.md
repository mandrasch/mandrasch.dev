# CLAUDE.md — Port mandrasch.dev to AstroWind

## Project Overview

Port the personal website [mandrasch.dev](https://mandrasch.dev) from SvelteKit + PicoCSS to AstroWind (Astro 5 + Tailwind CSS). The site belongs to Matthias Andrasch, a Vienna-based web developer and blogger.

### Source Repository
- **Repo:** https://github.com/mandrasch/mandrasch.dev
- **Stack:** SvelteKit, PicoCSS, mdsvex (Markdown), paraglide-js (i18n), adapter-node
- **Hosting:** Self-hosted via Coolify on Hetzner VPS
- **Languages:** German (primary), English (/en)

### Target Repository
- **Template:** https://github.com/arthelokyo/astrowind (fork it first!)
- **Stack:** Astro 5, Tailwind CSS, MDX support, Content Collections
- **Keep:** Svelte components for interactive elements via `@astrojs/svelte` integration

### Design reference

This project also does a rebrand, the new design can be found here: _reference/mandrasch-design-prototype.html

---

## Site Structure (Source → Target Mapping)

### Pages to Port

| Source (SvelteKit route)         | Target (Astro route)              | Notes                              |
|----------------------------------|------------------------------------|------------------------------------|
| `/` (Home)                       | `src/pages/index.astro`           | Hero + intro + cards + tagcloud    |
| `/ueber-mich`                    | `src/pages/ueber-mich.astro`     | About me page                      |
| `/projekte`                      | `src/pages/projekte.astro`       | Projects with anchors (#craftcms, #sveltekit) |
| `/schreiben`                     | `src/pages/schreiben.astro`      | Writing / blog links               |
| `/lesen`                         | `src/pages/lesen.astro`          | Book recommendations               |
| `/en`                            | `src/pages/en/index.astro`       | English landing page               |
| `/green-coding`                  | `src/pages/green-coding.astro`   | Bonus page                         |
| `/klimagerechtigkeit`            | `src/pages/klimagerechtigkeit.astro` | Bonus page                     |
| `/absurdität-des-lebens`         | `src/pages/absurditaet-des-lebens.astro` | Bonus page (fix umlaut in URL) |
| External: matthias-andrasch.eu/blog | Keep as external link         | Do NOT port the blog               |

### Content Strategy
- Most pages are **simple content pages** (text + links). Use Astro components or Markdown.
- The external blog at `matthias-andrasch.eu/blog` stays external. Just link to it.
- AstroWind's built-in blog feature can be **disabled or kept for future use**.

---

## AstroWind Configuration

### `src/config.yaml` — Key Settings

```yaml
site:
  name: 'Matthias Andrasch'
  site: 'https://mandrasch.dev'
  base: '/'
  trailingSlash: false
  googleSiteVerificationId: false

metadata:
  title:
    default: 'Matthias Andrasch – Web Developer & Hobby Blogger'
    template: '%s — Matthias Andrasch'
  description: 'Persönliche Website von Matthias Andrasch. Full-Stack Web-Entwickler aus Wien. Svelte, Nuxt, Craft CMS, Open Source.'
  robots:
    index: true
    follow: true
  openGraph:
    site_name: 'Matthias Andrasch'
    type: website

i18n:
  language: de
  textDirection: ltr

apps:
  blog:
    isEnabled: false  # Disable for now, external blog is used

ui:
  theme: 'system'  # Keep dark/light mode toggle
```

---

## Design & Styling Decisions

### General Approach
- **Replace PicoCSS with Tailwind CSS** (AstroWind default)
- Keep the design **clean, minimal, personal** — not a corporate landing page
- Use AstroWind's existing components where they fit (Hero, Features/Cards, Header, Footer)
- The current site is intentionally simple — do NOT over-engineer the design

### Color Palette
- Keep it simple and professional. AstroWind's default palette works fine.
- Adjust accent color if desired via `src/assets/styles/tailwind.css`

### Components to Use from AstroWind
- **Header/Nav:** Adapt for German navigation (Über mich, Projekte, Schreiben, Lesen, English)
- **Hero:** For the homepage intro with profile picture
- **Features/Cards:** For the "Projekte", "Schreiben", "Lesen" card grid on homepage
- **Footer:** Social links (GitHub, LinkedIn, Bluesky, Mastodon, dev.to, Instagram)
- **Tag cloud:** Custom component needed (simple Tailwind flex/wrap with badges)

### Components to Create New
- `TagCloud.astro` — Renders the tag cloud from homepage (simple badges in a flex container)
- `SocialLinks.astro` — Footer social media links
- `BonusLinks.astro` — The "Bonus-Seiten" section in the footer

---

## Navigation Structure

```typescript
// src/navigation.js
headerData: {
  links: [
    { text: 'Über mich', href: '/ueber-mich' },
    { text: 'Blog', href: 'https://matthias-andrasch.eu/blog', target: '_blank' },
    { text: 'Projekte', href: '/projekte' },
    { text: 'Schreiben', href: '/schreiben' },
    { text: 'Lesen', href: '/lesen' },
    { text: 'English', href: '/en' },
  ],
},
footerData: {
  links: [], // Keep footer simple
  secondaryLinks: [
    { text: 'Impressum & Datenschutz', href: 'https://matthias-andrasch.eu/impressum-datenschutz/' },
  ],
  socialLinks: [
    { label: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/mandrasch' },
    { label: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/mandrasch/' },
    { label: 'Bluesky', icon: 'tabler:brand-bluesky', href: 'https://bsky.app/profile/mandrasch.bsky.social' },
    { label: 'Mastodon', icon: 'tabler:brand-mastodon', href: 'https://social.tchncs.de/@mandrasch' },
    { label: 'dev.to', icon: 'tabler:brand-devdotto', href: 'https://dev.to/mandrasch' },
    { label: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/workwhileclimate' },
  ],
}
```

---

## Migration Steps (in order)

### Phase 1: Setup (Day 1)
1. Fork AstroWind: `npm create astro@latest -- --template arthelokyo/astrowind`
2. Update `src/config.yaml` with settings above
3. Update `src/navigation.js` with navigation above
4. Add Svelte integration: `npx astro add svelte` (for future interactive components)
5. Remove AstroWind demo content (sample blog posts, demo pages)
6. Test: `npm run dev` — site should load with AstroWind default layout

### Phase 2: Homepage (Day 1-2)
1. Adapt `src/pages/index.astro`:
   - Hero section with profile picture + "#OpenToWork" badge + intro text
   - Card grid linking to Projekte, Schreiben, Lesen
   - TagCloud component
   - Social links section
2. Copy profile picture to `src/assets/images/`
3. Create `TagCloud.astro` component

### Phase 3: Content Pages (Day 2-3)
1. Port each page's content from the SvelteKit source
2. Use AstroWind's `PageLayout.astro` for consistent layout
3. For Markdown-heavy pages, use `.md` files in `src/content/` or inline Astro components
4. Port: ueber-mich, projekte, schreiben, lesen, green-coding, klimagerechtigkeit, absurditaet-des-lebens

### Phase 4: English Page (Day 3)
1. Create `src/pages/en/index.astro`
2. Simple standalone English page (no full i18n framework needed — it's just one page)

### Phase 5: Footer, SEO, Final Polish (Day 3-4)
1. Customize footer with social links + Bonus-Seiten + Impressum link
2. Add "Made with Astro" footer note
3. Verify Open Graph tags, meta descriptions
4. Add favicon from source site
5. Test dark mode
6. Test responsive design

### Phase 6: Deployment (Day 4)
1. Configure for Coolify/Hetzner deployment (Astro supports adapter-node or static)
2. If static: `npm run build` → deploy `dist/` folder
3. If SSR needed: Install `@astrojs/node` adapter
4. Update DNS if needed

---

## Important Notes for Claude Code

### DO:
- Keep it simple. This is a personal website, not an enterprise app.
- Reuse AstroWind components wherever possible instead of creating new ones.
- Use German for all content (except /en page).
- Preserve all external links exactly as they are.
- Keep the profile picture and social media links.
- Use Astro's Image component for optimized images.
- Use Svelte v5 syntax, instead of Svelte v4.

### DON'T:
- Don't set up a full i18n framework (paraglide, astro-i18n). One English page = just a separate Astro file.
- Don't port the external blog. It stays at matthias-andrasch.eu/blog.
- Don't enable AstroWind's blog feature unless explicitly asked.
- Don't over-design. PicoCSS was chosen for simplicity — maintain that spirit with clean Tailwind.
- Don't change any external URLs or social media links.
- Don't add JavaScript where it's not needed. Astro's zero-JS-by-default is a feature.

### Content to Copy Verbatim:
- All German text from the homepage (intro, card descriptions)
- Tag cloud items: JavaScript, TypeScript, Svelte(Kit), Nuxt / Vue, Strapi CMS, PHP, Craft CMS, DDEV, HTML5, CSS3, Web Accessibility, WordPress, Tailwind, Vite, SSG / SSR, Coolify, 🌱 Green Coding, ☀️ Green Web, Developer Experience, Open Source, Climate Justice, Social Innovation, 4 Day Work Week, UBI, Running & Sports, Mindfulness, Mental Health, Climate Emotions, 🏠 Vienna, 🚞 Klimaticket
- Social links (see navigation section above)
- "#OpenToWork - 20h/Wo. ab Herbst 2026" badge text

---

## File Structure (Target)

```
/
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   └── profile_picture_transparent.png  ← copy from source
│   │   └── styles/
│   │       └── tailwind.css
│   ├── components/
│   │   ├── widgets/
│   │   │   ├── Header.astro      ← customize nav
│   │   │   ├── Footer.astro      ← customize social + bonus links
│   │   │   └── ...
│   │   └── custom/
│   │       ├── TagCloud.astro     ← new component
│   │       └── OpenToWorkBadge.astro ← new component
│   ├── pages/
│   │   ├── index.astro            ← homepage
│   │   ├── ueber-mich.astro
│   │   ├── projekte.astro
│   │   ├── schreiben.astro
│   │   ├── lesen.astro
│   │   ├── green-coding.astro
│   │   ├── klimagerechtigkeit.astro
│   │   ├── absurditaet-des-lebens.astro
│   │   └── en/
│   │       └── index.astro        ← English page
│   ├── config.yaml
│   └── navigation.js
├── astro.config.ts
├── tailwind.config.js
└── package.json
```

---

## Deployment Notes

### Current Setup (Source)

Static build (`output: 'static'`) — simplest, fastest, cheapest
  - `npm run build` → serve `dist/` folder via nginx/Coolify
  - No Node.js runtime needed in production

---

## References

- AstroWind docs: https://astrowind.vercel.app/
- AstroWind source: https://github.com/arthelokyo/astrowind
- Astro docs: https://docs.astro.build/
- Astro + Svelte: https://docs.astro.build/en/guides/integrations-guide/svelte/
- Source site: https://mandrasch.dev
- Source repo: https://github.com/mandrasch/mandrasch.dev
