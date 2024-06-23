# sveltekit-inlang-paraglide-demo

Simple multilanguage demo with SvelteKit and [@inlang/paraglide-js-adapter-sveltekit](https://www.npmjs.com/package/@inlang/paraglide-js-adapter-sveltekit).

Features:

- conditional markdown loading based on selected language (server side)
- translated URL slugs

🚧 Quick demo and my first try, needs some improvements (e.g. type safety) 🚧

### Credits and acknowledgements

- language switcher and path handling - big thanks to [LorisSigrist/paraglide-sveltekit-example](https://github.com/LorisSigrist/paraglide-sveltekit-example)! 👏
- markdown integration - thx to https://www.thisdot.co/blog/how-to-quickly-build-and-deploy-a-static-markdown-blog-with-sveltekit
- thanks very much to https://inlang.com/ for providing this! 👏

## Local setup

```
npm i
npm run dev -- -- open
```

## How was this created

1. `npm create svelte@latest .` -> skeleton project, JSDocs
2. Followed https://www.npmjs.com/package/@inlang/paraglide-js-adapter-sveltekit

```bash
npx @inlang/paraglide-js init
# Selected languages: en, de-at, de-de; and selected SvelteKit
npm i -D @inlang/paraglide-js-adapter-sveltekit
```

See https://www.npmjs.com/package/@inlang/paraglide-js-adapter-sveltekit for other steps needed.

3. Installed https://www.npmjs.com/package/mdsvex, added `mdsvex.config.js` and modified `svelte.config.js`

See https://www.thisdot.co/blog/how-to-quickly-build-and-deploy-a-static-markdown-blog-with-sveltekit for all steps
