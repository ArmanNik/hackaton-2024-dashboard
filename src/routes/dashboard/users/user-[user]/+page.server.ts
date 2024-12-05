import { createAdminClient } from '$lib/server/appwrite';
import { redirect } from '@sveltejs/kit';

const users = createAdminClient().users;
export async function load({ locals, params }) {
	return {
		user: await users.get(params.user)
	};
}

export const actions = {
	updateEmail: async (event) => {
		const form = await event.request.formData();
		const email = form.get('email') as string;

		try {
			users.updateEmail(event.params.user, email);
		} catch (e) {
			console.log(e);
			throw e;
		}
	},
	updatePassword: async (event) => {
		const form = await event.request.formData();
		const password = form.get('password') as string;

		try {
			users.updatePassword(event.params.user, password);
		} catch (e) {
			console.log(e);
			throw e;
		}
	},
	updateName: async (event) => {
		const form = await event.request.formData();
		const name = form.get('name') as string;
		console.log(name);

		try {
			users.updateName(event.params.user, name);
		} catch (e) {
			console.log(e);
			throw e;
		}
	},
	updatePhone: async (event) => {
		const form = await event.request.formData();
		const phone = form.get('phone') as string;

		try {
			users.updatePhone(event.params.user, phone);
			redirect(302, `/dashboard/users/user-${event.params.user}`);
		} catch (e) {
			console.log(e);
			throw e;
		}
	}
};
