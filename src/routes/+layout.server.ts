import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';
import type { AppwriteException } from '@appwrite.io/console';
import type { Models } from 'appwrite';
import { Dependencies } from '$lib/dependencies';
import { createSessionClient } from '$lib/server/appwrite.js';

export const ssr = false;

export const load = async ({ depends, route, locals }) => {
	depends(Dependencies.ACCOUNT);
	const isPublicRoute = route.id?.startsWith('/(public)');
	if (!locals?.user?.$id && !isPublicRoute) {
		redirect(301, '/login');
	}
};
