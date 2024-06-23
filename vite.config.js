import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { paraglide } from "@inlang/paraglide-js-adapter-sveltekit/vite"
import { enhancedImages } from '@sveltejs/enhanced-img';
import Icons from 'unplugin-icons/vite'

export default defineConfig({
	plugins: [
		paraglide({
			//recommended
			project: "./project.inlang",
			outdir: "./src/lib/paraglide",
		}),
		enhancedImages(),
		sveltekit(),
		Icons({
			compiler: 'svelte',
		})
	]
});

