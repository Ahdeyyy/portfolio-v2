import { TURSO_AUTH_TOKEN, TURSO_CONNECTION_URL } from '$env/static/private';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema';

const client = createClient({
	url: TURSO_CONNECTION_URL,
	authToken: TURSO_AUTH_TOKEN
});

export const db = drizzle(client, { schema });
