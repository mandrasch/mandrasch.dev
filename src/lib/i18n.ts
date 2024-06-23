// thx to https://github.com/LorisSigrist/paraglide-sveltekit-example/blob/main/src/lib/i18n.js

import { createI18n } from '@inlang/paraglide-js-adapter-sveltekit';
import * as runtime from '$lib/paraglide/runtime.js';
export const i18n = createI18n(runtime, {
	pathnames: {
		'/about': {
			en: '/about',
			de: '/ueber-mich'
			// also works, but was too much to maintain
			// "de-de": "/ueber"
			// "de-at": "/ueber",
		},
		'/projects': {
			en: '/projects',
			de: '/projekte'
		},
		'/writing': {
			en: '/writing',
			de: '/schreiben'
		},
		'/reading': {
			en: '/reading',
			de: '/lesen'
		},
		'/climate-justice': {
			en: '/climate-justice',
			de: '/klimagerechtigkeit'
		}
	}
});
