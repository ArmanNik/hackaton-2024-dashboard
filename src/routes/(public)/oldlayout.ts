import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

export const load = async ({ parent }) => {
	const { user } = await parent();

	if (user) {
		redirect(303, base + '/dashboard/overview');
	}
};
