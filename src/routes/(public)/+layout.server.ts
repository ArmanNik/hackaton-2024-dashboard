import { redirect } from '@sveltejs/kit';
import { Dependencies } from '$lib/dependencies';

export const load = async ({ route, locals }) => {
	const isPublicRoute = route.id?.startsWith('/(public)');
	if (locals?.user?.$id && isPublicRoute) {
		redirect(301, '/dashboard/overview');
	}
};
