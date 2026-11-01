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

## Deploying to Google Cloud Run

The workflow at `.github/workflows/deploy.yml` builds the Docker image, pushes it to Artifact Registry, and deploys it to Cloud Run on every push to `master` that changes this app. It can also be started manually from the Actions tab.

One-time setup in Google Cloud:

1. Enable the Cloud Run, Artifact Registry, and IAM Credentials APIs.
2. Create a Docker repository in Artifact Registry.
3. Create a deployer service account with the roles `Cloud Run Admin`, `Artifact Registry Writer`, and `Service Account User`.
4. Create a Workload Identity Pool and GitHub provider, restricted to the `ramiqcom/ramiqcom` repository, and allow it to impersonate the service account (`roles/iam.workloadIdentityUser`).

Then add these in the GitHub repository settings.

Variables:

- `GCP_PROJECT_ID`
- `GCP_REGION`, for example `europe-west4`
- `ARTIFACT_REGISTRY_REPOSITORY`
- `CLOUD_RUN_SERVICE`

Secrets:

- `GCP_WORKLOAD_IDENTITY_PROVIDER`, the full provider resource name
- `GCP_SERVICE_ACCOUNT`, the deployer service account email
