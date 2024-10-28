import { analytics } from '$lib/analytics/analytics';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/')) {
		const event_type = `view::${event.url.pathname}`;

		const user_id = 'guest';

		const user_agent = event.request.headers.get('user-agent')!;
		const user_event = event_type.split('::')[0];
		analytics.track({
			user: user_id,
			user_agent,
			type: event_type,
			event: user_event
		});
	}
	// console.log(event, "redir?");
	const response = await resolve(event);
	return response;
};
