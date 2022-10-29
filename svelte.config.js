// import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static';
// https://kit.svelte.dev/docs/adapters#supported-environments-node-js
import adapter from '@sveltejs/adapter-node';
import preprocess from "svelte-preprocess";


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
		/*
		// these were for static
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		})*/
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
};

export default config;
