import { base } from '$app/paths';
import { SESSION_COOKIE, createAdminClient } from '$lib/server/appwrite.js';
import { redirect } from '@sveltejs/kit';
import { ID } from 'node-appwrite';

export const actions = {
	default: async ({ request, cookies }) => {
		const form = await request.formData();
		if (!form.has('email') || !form.has('password')) {
			throw new Error('Email and password are required');
			return;
		}
		const email = form.get('email') as string;
		const password = form.get('password') as string;

		// Create the Appwrite client.
		const { account } = createAdminClient();

		try {
			await account.create(ID.unique(), email, password);

			const session = await account.createEmailPasswordSession(email, password);

			// Set the session cookie with the secret
			cookies.set(SESSION_COOKIE, session.secret, {
				sameSite: 'strict',
				expires: new Date(session.expire),
				secure: true,
				path: '/'
			});
			redirect(302, `${base}/dashboard/overview`);
		} catch (e) {
			console.log(e);
			throw e;
		}
	}
};
