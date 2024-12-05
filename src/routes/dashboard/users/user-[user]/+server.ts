import { createAdminClient } from '$lib/server/appwrite';
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const DELETE: RequestHandler = async ({ params }) => {
	const users = createAdminClient().users;

	try {
		users.delete(params.user);
		return new Response(null, { status: 204 });
	} catch (e) {
		console.log(e);
		throw e;
	}
};
