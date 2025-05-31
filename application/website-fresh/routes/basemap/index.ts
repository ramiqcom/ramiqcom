import { Handlers } from '$fresh/server.ts';

export const handler: Handlers = {
  async GET(_req) {
    try {
      const tilejson = await (
        await fetch(
          `https://tiles.stadiamaps.com/styles/osm_bright/rendered.json?api_key=${Deno.env.get(
            'STADIA_API_KEY'
          )}`
        )
      ).text();

      return new Response(tilejson, {
        status: 200,
        headers: { 'Content-type': 'application/json' },
      });
    } catch (error) {
      // @ts-ignore idk error
      return new Response(error.message, {
        status: 404,
        headers: { 'Content-type': 'text/plain' },
      });
    }
  },
};
