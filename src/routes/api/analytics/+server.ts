import type { RequestHandler } from '../$types';
import { analytics } from '$lib/analytics/analytics';

export const GET: RequestHandler = async () => {
    return new Response();
};

export const POST: RequestHandler = async ({ request }) => {
    const user_id = 'guest';
    const user_agent = request.headers.get('user-agent')!;
    const event_type = await request.text();
    const event = event_type.split('::')[0]

    analytics.track({
        user: user_id,
        user_agent,
        type: event_type,
        event
    })
    return new Response();
};