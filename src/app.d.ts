import 'unplugin-icons/types/svelte';
import type { AvailableLanguageTag } from '$lib/paraglide/runtime';
import type { ParaglideLocals } from '@inlang/paraglide-sveltekit';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// https://github.com/LorisSigrist/paraglide-sveltekit-example/blob/main/src/app.d.ts
		interface Locals {
			paraglide: ParaglideLocals<AvailableLanguageTag>;
		}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
