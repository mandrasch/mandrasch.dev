import { sveltekit } from '@sveltejs/kit/vite';

// TODO: add vite-imagestools here or in svelte.config.js?
import { imagetools } from 'vite-imagetools';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), imagetools()]
};

export default config;
