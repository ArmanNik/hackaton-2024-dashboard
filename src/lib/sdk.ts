import { Client, Account, Databases, Functions } from 'appwrite';
import { PUBLIC_ENDPOINT, PUBLIC_PROJECT_ID } from '$env/static/public';

export const client = new Client();

client.setEndpoint(PUBLIC_ENDPOINT).setProject(PUBLIC_PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);
export const functions = new Functions(client);
