# ramiqcom

The Next.js and React implementation of Ramadhan's personal portfolio. It uses MapLibre GL JS for the interactive map and serves its Stadia Maps style through a Next.js route handler.

## Requirements

- Node.js 18
- A Stadia Maps API key

## Development

Install dependencies:

```sh
npm ci
```

Copy `.env.example` to `.env.local` and set `STADIA_KEY` to your Stadia Maps API key. Then run:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```sh
npm run build
npm run start
```

To run with Docker Compose from this directory, create `.env` from `.env.example`, then run:

```sh
docker compose up --build
```

The root `application/docker-compose.yml` also builds this app. Set `STADIA_KEY` in your shell or in `application/.env` before starting it.
