# CLAUDE.md ADDENDUM — Design Customization

## Design Direction: "Developer Journal" Aesthetic

This site should NOT look like a stock AstroWind template. The goal is a warm, personal,
editorial-feeling developer portfolio — like a well-designed personal notebook, not a SaaS landing page.

### Reference Prototype
See `mandrasch-design-prototype.html` for the visual direction.

---

## Font Stack

Replace AstroWind's default fonts. Add to `<head>` in Layout:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Outfit:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

| Usage        | Font              | Why                                      |
|-------------|-------------------|------------------------------------------|
| Headlines   | DM Serif Display  | Warm, editorial, personality             |
| Body text   | Outfit            | Modern, clean, great readability         |
| Code/Labels | JetBrains Mono    | Developer identity, nav logo, tag labels |

### Tailwind Config (`tailwind.config.js`)

```javascript
fontFamily: {
  display: ['DM Serif Display', 'Georgia', 'serif'],
  sans: ['Outfit', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
},
```

---

## Color Palette

Replace AstroWind's blue/purple defaults with this warm green palette:

### `src/assets/styles/tailwind.css` — Custom Properties

```css
:root {
  /* Backgrounds */
  --bg-primary: #FAFAF7;
  --bg-secondary: #F0EFE9;
  --bg-card: #FFFFFF;

  /* Text */
  --text-primary: #1A1A18;
  --text-secondary: #5C5C57;
  --text-muted: #8A8A84;

  /* Accent — Green (matches Green Coding / Climate identity) */
  --accent: #2D6A4F;
  --accent-light: #40916C;
  --accent-glow: #52B78833;

  /* Warm accent */
  --accent-warm: #D4A373;

  /* Borders */
  --border: #E0DFD8;
}

.dark {
  --bg-primary: #141413;
  --bg-secondary: #1E1E1C;
  --bg-card: #242422;
  --text-primary: #EDEDEA;
  --text-secondary: #A8A8A2;
  --text-muted: #6E6E68;
  --accent: #52B788;
  --accent-light: #74C69D;
  --accent-glow: #52B78822;
  --accent-warm: #D4A373;
  --border: #2E2E2B;
}
```

### Tailwind Config — Extend Colors

```javascript
colors: {
  accent: {
    DEFAULT: '#2D6A4F',
    light: '#40916C',
    glow: '#52B78833',
  },
  warm: '#D4A373',
},
```

---

## Layout Customizations

### 1. Narrow Content Width
AstroWind uses wide sections (1280px+). Override to 900px max for a personal feel:

```css
/* In CustomStyles.astro or tailwind.css */
.container-narrow {
  max-width: 900px;
  margin: 0 auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
```

Apply `container-narrow` to main content sections instead of AstroWind's default wide containers.

### 2. Navigation
- Replace AstroWind's brand logo with monospace text: `mandrasch.dev`
- Use `font-mono` for the logo
- Underline hover effect on links (thin green line slides in from left)
- Add dark mode toggle button (circle with ☀/🌙)
- Remove any CTA buttons from nav

### 3. Hero Section
- **NO** background image or gradient
- **NO** centered "Get Started" CTA button
- Left-aligned text + right-aligned circular profile photo
- Status badge with pulsing green dot: "#OpenToWork · 20h/Wo. ab Herbst 2026"
- Headline uses `font-display` (DM Serif Display) with green italic emphasis
- Subtitle in lighter weight

### 4. Cards (Projekte, Schreiben, Lesen)
- 3-column grid on desktop, 1-column on mobile
- White card with subtle border (not shadow-heavy)
- On hover: slight lift + green border + gradient line appears at top
- Emoji as icon (🛠 ✍️ 📚) instead of SVG icon components
- Arrow indicator bottom-right that slides on hover

### 5. Tag Cloud
- Replace AstroWind's "Features" grid with a flex-wrap tag cloud
- Pill-shaped badges with border
- Some tags "highlighted" (green border + green bg glow) for main skills
- Monospace label above: `// Themen & Skills`

### 6. Footer
- Two-column: Social links left, Bonus-Seiten right
- Social links as small bordered pill-buttons with emoji
- Bottom bar: "Made with Astro & Svelte" + "Klimaticket 🚞" + Impressum link
- Keep it compact, not the full AstroWind mega-footer

---

## Subtle Effects

### Grain Overlay (optional but nice)
Adds a paper-like warmth over the whole page:

```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,..."); /* SVG noise pattern */
  pointer-events: none;
  z-index: 999;
}
```

### Link Styling
- Green color for all content links
- Thick green underline with low opacity, full opacity on hover
- `text-underline-offset: 3px` for breathing room

### Transitions
- All color/border transitions: `0.25s ease`
- Card hover lift: `transform: translateY(-4px)` with `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- Nav underline: `width 0.3s ease` (slides in from left)

---

## What to REMOVE from AstroWind Defaults

| AstroWind Default              | Replace With                          |
|--------------------------------|---------------------------------------|
| Blue/purple accent colors      | Green (#2D6A4F / #52B788)            |
| Inter/system font stack        | DM Serif Display + Outfit + JetBrains |
| Wide container (1280px)        | Narrow container (900px)              |
| Hero with CTA buttons          | Text-left hero with photo circle      |
| Feature grid with SVG icons    | Tag cloud with pill badges            |
| Mega footer with sitemap       | Compact 2-column footer               |
| Shadow-heavy cards             | Border-based cards with subtle hover  |
| "Get Started" / "Learn More"   | Simple arrow (→) navigation           |
| Background gradients/patterns  | Clean solid + subtle grain overlay    |
| Bold purple buttons            | No buttons on homepage at all         |

---

## AstroWind Files to Modify

| File                              | What to Change                          |
|-----------------------------------|-----------------------------------------|
| `tailwind.config.js`             | Fonts, colors, extend theme             |
| `src/assets/styles/tailwind.css`  | CSS variables, dark mode colors         |
| `src/components/CustomStyles.astro` | Font imports, grain overlay           |
| `src/components/widgets/Header.astro` | Monospace logo, simplified nav      |
| `src/components/widgets/Footer.astro` | Compact layout, social pills        |
| `src/components/widgets/Hero.astro`   | Left-align, photo, status badge     |
| `src/pages/index.astro`          | New layout with cards + tagcloud        |
| `src/config.yaml`                | Colors, site info, disable blog         |
| `src/navigation.js`              | German nav items, social links          |
