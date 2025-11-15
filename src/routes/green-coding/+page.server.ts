import type { PageServerLoad } from './$types';
import { loadMdContent } from '$lib/utils/loadMdContent';

export const load: PageServerLoad = async ({ fetch }) => {
	try {
		const mdContent = await loadMdContent('green-coding.md', fetch);

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
