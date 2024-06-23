import { compile } from 'mdsvex';

export const loadMdContent = async (
	fileName: string,
	selectedLanguage: string,
	// // use SvelteKits fetch https://stackoverflow.com/a/74031946
	fetch: Function
) => {
	try {
		// const post = await import(`/content/${selectedLanguage}/${fileName}`);

		const response = await fetch(`/content/${selectedLanguage}/${fileName}`);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const markdownContent = await response.text();

		// console.log({ markdownContent, html: await compile(markdownContent) });

		const htmlOutput = await compile(markdownContent);
		const returnObject = { html: htmlOutput?.code };

		return {
			mdContent: returnObject,
			requestedFile: `${selectedLanguage}/${fileName}`
		};
	} catch (e) {
		console.error('Load error', { e });
		return {
			mdContent: {
				html: 'Failed to load.'
			},
			requestedFile: `${selectedLanguage}/${fileName}`
		};
	}
};
