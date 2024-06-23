import type { PageServerLoad } from './$types';
import { loadMdContent } from '$lib/utils/loadMdContent';
import { loadBooks } from '$lib/utils/loadBooks';

export const load: PageServerLoad = async ({ locals, depends, fetch }) => {
	try {
		depends('paraglide:lang');
		const selectedLanguage = locals.paraglide.lang ?? 'en';

		const mdContent = await loadMdContent('projects.md', selectedLanguage, fetch);
		const books = loadBooks(selectedLanguage);

		return {
			...mdContent,
			...books
		};
	} catch (e) {
		console.error('Load error', { e });
		return {
			error: 'Failed to load content.'
		};
	}
};
