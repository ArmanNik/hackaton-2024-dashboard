import { createAdminClient } from '$lib/server/appwrite';

export async function load({ request, locals }) {
	const users = createAdminClient().users;
	return {
		users: await users.list()
	};
}
