import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';
import type { AppwriteException } from '@appwrite.io/console';
import { account } from '$lib/sdk';
import type { Models } from 'appwrite';
import { Dependencies } from '$lib/dependencies';

export const ssr = false;

export const load = async ({ depends, route }) => {
	depends(Dependencies.ACCOUNT);

	const [user, error] = (await account
		.get()
		.then((response) => [response, null])
		.catch((error) => [null, error])) as [Models.User<Models.Preferences>, AppwriteException];
	console.log(user);
	if (user) {
		return {
			user: user
		};
	}
	const isPublicRoute = route.id?.startsWith('/(public)');

	if (!isPublicRoute) {
		redirect(303, `${base}/login`);
	}
};
