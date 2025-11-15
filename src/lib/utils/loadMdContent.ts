import { compile } from 'mdsvex';

export const loadMdContent = async (
	fileName: string,
	// use SvelteKit's fetch https://stackoverflow.com/a/74031946
	fetchFn: typeof fetch,
	language = 'de'
) => {
	try {
		const response = await fetchFn(`/content/${language}/${fileName}`);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const markdownContent = await response.text();

		// console.log({ markdownContent, html: await compile(markdownContent) });

		const htmlOutput = await compile(markdownContent);
		const returnObject = { html: htmlOutput?.code };

		return {
			mdContent: returnObject,
			requestedFile: `${language}/${fileName}`
		};
	} catch (e) {
		console.error('Load error', { e });
		return {
			mdContent: {
				html: 'Failed to load.'
			},
			requestedFile: `${language}/${fileName}`
		};
	}
};
