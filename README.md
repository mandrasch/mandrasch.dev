# mandrasch.dev

Personal landing page, built with

- SvelteKit
- PicoCSS
- [@inlang/paraglide-js-adapter-sveltekit](https://www.npmjs.com/package/@inlang/paraglide-js-adapter-sveltekit)
- mdsvex

Live site: [mandrasch.dev](https://mandrasch.dev)

## Local development

Start local development with

```bash
npm install
npm run dev -- -- open
```

Simulate production build via

```bash
npm run build
npm run preview
```

## Deployment

On server it runs via `adapter-node` with

```
# Originally it was this, but I needed dev for paraglide
# npm ci --omit dev

npm ci
npm run build
ORIGIN=https://mandrasch.dev node build
```

See [Deploy SvelteKit with SSR on Coolify (Hetzner VPS)](https://dev.to/mandrasch/deploy-sveltekit-with-ssr-on-coolify-hetzner-vps-24c5).

## Credits and acknowledgements

- Language switcher and path handling - big thanks to [LorisSigrist/paraglide-sveltekit-example](https://github.com/LorisSigrist/paraglide-sveltekit-example)! 👏
- Markdown integration - thx to https://www.thisdot.co/blog/how-to-quickly-build-and-deploy-a-static-markdown-blog-with-sveltekit
