import { createAdminClient } from '$lib/server/appwrite';

export async function load({ locals }) {
	const users = createAdminClient().users;

	return {
		users: await users.list()
	};
}
