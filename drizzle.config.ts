import type { Config } from 'drizzle-kit';
import 'dotenv/config';
//import { TURSO_AUTH_TOKEN, TURSO_CONNECTION_URL } from "$env/static/private";

export default {
	schema: './src/lib/db/schema.ts',
	out: './migrations',
	driver: 'turso',
	dbCredentials: {
		url: process.env.TURSO_CONNECTION_URL,
		authToken: process.env.TURSO_AUTH_TOKEN
	}
} satisfies Config;
