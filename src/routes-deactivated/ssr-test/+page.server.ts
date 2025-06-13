import type { PageServerLoad } from './$types';

export const prerender = false;

export const load: PageServerLoad = async ({ params }) => {
	// We could private keys here which will never be shown
	// to public (client side) javascript / dev tools
	// See: https://youtu.be/EQy-AYhZIlE?t=609

	const event = new Date();
	const currentDateTime = event.toLocaleTimeString('de-AT');

	return {
		currentDateTime
	};
};
