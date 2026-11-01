# ramiqcom

The Next.js and React portfolio website of Ramadhan, a remote sensing data scientist. It is a single page showing projects, research papers, and YouTube tutorials.

## Requirements

- Node.js 18

## Development

```sh
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Updating content

All projects, papers, videos, and contact links live in [`src/data/portfolio.ts`](src/data/portfolio.ts). Edit that file to update the site.

## Production

```sh
npm run build
npm run start
```

To run with Docker Compose, use `docker compose up --build` from this directory or from `application/`.
