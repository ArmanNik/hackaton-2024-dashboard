import { Client, Account, Databases, Functions } from 'appwrite';
import { PUBLIC_ENDPOINT, PUBLIC_PROJECT_ID } from '$env/static/public';

export const client = new Client();

client.setEndpoint(PUBLIC_ENDPOINT).setProject(PUBLIC_PROJECT_ID);

export const sdk = {
	client: client,
	account: new Account(client),
	databases: new Databases(client),
	functions: new Functions(client)
};
