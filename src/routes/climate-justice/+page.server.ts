import type { PageServerLoad } from './$types';
import { loadMdContent } from '$lib/utils/loadMdContent';

export const load: PageServerLoad = async ({ locals, depends, fetch }) => {
	try {
		depends('paraglide:lang');
		const selectedLanguage = locals.paraglide.lang ?? 'en';

		// Load markdown content
		const mdContent = await loadMdContent('climate-justice.md', selectedLanguage, fetch);

		return {
			...mdContent
		};
	} catch (e) {
		console.error('Load error', { e });
		return {
			error: 'Failed to load content.'
		};
	}
};
