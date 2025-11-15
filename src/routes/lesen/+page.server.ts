import type { PageServerLoad } from './$types';
import { loadMdContent } from '$lib/utils/loadMdContent';
import { loadBooks } from '$lib/utils/loadBooks';

export const load: PageServerLoad = async ({ fetch }) => {
	try {
		const mdContent = await loadMdContent('reading.md', fetch);
		const books = loadBooks();

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
