import { createSessionClient } from '$lib/server/appwrite';
// import type { HandleServerError } from '@sveltejs/kit';

export async function handle({ event, resolve }) {
	try {
		const { account } = createSessionClient(event);
		event.locals.user = await account.get();
	} catch {}

	return resolve(event);
}

// export const handleError: HandleServerError = async ({ error, event, status, message }) => {
// 	console.log(error, event, status, message);
// 	return {
// 		message: 'Whoops!'
// 	};
// };
