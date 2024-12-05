import { redirect } from '@sveltejs/kit';
import { Dependencies } from '$lib/dependencies';

export const load = async ({ depends, route, locals }) => {
	depends(Dependencies.ACCOUNT);
	const isPublicRoute = route.id?.startsWith('/(public)');
	if (!locals?.user?.$id && !isPublicRoute) {
		redirect(301, '/login');
	}
};
