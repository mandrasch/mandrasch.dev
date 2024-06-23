import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, depends }) => {
	depends('paraglide:lang');
	const selectedLanguage = locals.paraglide.lang ?? 'en';
	let isoString = 'en-US';
	if (selectedLanguage == 'de') {
		isoString = 'de-AT';
	}

	return {
		currentDateOnServer: new Intl.DateTimeFormat(isoString, {
			timeZone: 'Europe/Vienna',
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric'
		}).format(new Date())
	};
};
