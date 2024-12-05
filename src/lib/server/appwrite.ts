// src/lib/server/appwrite.js
import { Client, Account, Users } from 'node-appwrite';
import { APPWRITE_KEY } from '$env/static/private';
import { PUBLIC_ENDPOINT, PUBLIC_PROJECT_ID } from '$env/static/public';
import type { RequestEvent } from '@sveltejs/kit';

export const SESSION_COOKIE = 'my-custom-session';

export function createAdminClient() {
	const client = new Client()
		.setEndpoint(PUBLIC_ENDPOINT)
		.setProject(PUBLIC_PROJECT_ID)
		.setKey(APPWRITE_KEY);

	return {
		get account() {
			return new Account(client);
		},
		get users() {
			return new Users(client);
		}
	};
}

export function createSessionClient(event?: RequestEvent, cookie?: string) {
	const client = new Client().setEndpoint(PUBLIC_ENDPOINT).setProject(PUBLIC_PROJECT_ID);

	let session: string | undefined;
	if (event?.cookies) {
		session = event.cookies.get(SESSION_COOKIE);
	} else if (cookie) {
		session = cookie;
	}
	if (!session) {
		throw new Error('No user session');
	}

	client.setSession(session);

	return {
		get account() {
			return new Account(client);
		}
	};
}
