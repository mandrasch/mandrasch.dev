// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-node';

import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	preprocess: [mdsvex(mdsvexConfig), vitePreprocess()],

	kit: {
		adapter: adapter(),

		alias: {
			$styles: 'src/styles',
			$assets: 'src/assets',
			$content: 'src/content'
		}
	}
};

export default config;
