import { error } from '@sveltejs/kit';

// We could private keys here which will never be shown
// to public (client side) javascript / dev tools
// See: https://youtu.be/EQy-AYhZIlE?t=609

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log('Retrieved users server side, client won\'t see this', { users })

    // TODO: better error handling
    // TODO: Is this returned as data or users?
    if (users) {
        console.log('Returning users...');
        return { users }
    }

    throw error(404, 'Not found');
}