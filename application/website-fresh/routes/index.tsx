import { Handlers } from '$fresh/server.ts';

export const handler: Handlers = {
  GET(_req, _ctx) {
    return new Response(null, {
      status: 307,
      headers: {
        Location: '/start',
      },
    });
  },
};
