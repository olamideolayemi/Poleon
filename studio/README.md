# Poleon Sanity Studio

Sanity Studio for managing Blog and Portfolio content without editing source files.

## Setup

1. Copy env template:

```bash
cp .env.example .env
```

2. Fill `.env`:

```env
SANITY_STUDIO_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=production
```

3. Install dependencies:

```bash
npm install
```

4. Run studio:

```bash
npm run dev
```

## Content types

- `blogPost`
- `portfolioProject`

These map directly to the frontend CMS queries in `src/lib/sanityCms.js`.
