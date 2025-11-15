import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const isoString = 'de-AT';

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
