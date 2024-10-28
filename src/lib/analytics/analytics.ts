import { db } from '$lib/db/db';
import { events, type InsertEvent, type SelectEvent } from '$lib/db/schema';
import { eq } from 'drizzle-orm';
export class Analytics {
	namespace: string;

	constructor(namespace: string) {
		this.namespace = namespace;
	}

	async track(event: Event): Promise<void> {
		const insertEvent: InsertEvent = {
			namespace: this.namespace,
			type: event.type,
			event: event.event,
			user_agent: event.user_agent,
			user: event.user
		};

		try {
			await db.insert(events).values(insertEvent);
		} catch (e) {
			console.error(e);
		}
	}

	async getEvents(): Promise<SelectEvent[]> {
		return await db.query.events.findMany({
			where: eq(events.namespace, this.namespace)
		});
	}
}

export type Event = {
	type: string;
	user_agent: string;
	event: string;
	user: string;
};

export const analytics = new Analytics('ahdeyy-portfolio');
