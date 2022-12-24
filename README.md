# LandingPage

https://mandrasch.dev/

- SvelteKit
- TailwindCSS
- svelte-confetti

Install with `npm install` and run:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

** Preview build: **

`npm run preview`

## How was this created?

```bash
npm create svelte@latest
# switched to pnpm:
npm install
# tailwind:
# (https://tailwindcss.com/docs/guides/sveltekit)
npm install -D tailwindcss postcss autoprefixer svelte-preprocess
npx tailwindcss init tailwind.config.cjs -p
npm i sass
npm install -D @tailwindcss/typography
# POSTPONED: https://tailwindcss.com/docs/using-with-preprocessors
# pnpm install -D postcss-import

# vite-imagetools
# via:https://kit.svelte.dev/docs/assets#transforming
npm install --save-dev vite-imagetools

# Static deployment (https://kit.svelte.dev/docs/adapters#supported-environments-static-sites)
npm i @sveltejs/adapter-static

# https://github.com/Mitcheljager/svelte-confetti
npm install --save svelte-confetti

# Adapter-Node for SSR deployment
# https://kit.svelte.dev/docs/adapters#supported-environments-node-js
npm i -D @sveltejs/adapter-node
```

## TODOs

- [ ] https://github.com/sveltejs/kit/issues/241#issuecomment-1274046866

<hr>

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
