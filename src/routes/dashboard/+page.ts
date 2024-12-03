import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

export const load = async ({ parent }) => {
	// const { account } = await parent();
	const account = true;
	if (!account) {
		redirect(303, base);
	} else {
		redirect(303, base + 'dashboard/overview');
	}
};
