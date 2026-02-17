# Sanity CMS Setup

This project can now read **Blog** and **Portfolio** content from Sanity.
If Sanity is not configured or has no content yet, it automatically falls back to local data in `src/data/`.

## 1) Studio is already scaffolded

Sanity Studio is in `studio/`.

## 2) Set environment variables in Studio

1. Copy `studio/.env.example` to `studio/.env`.
2. Fill:
```env
SANITY_STUDIO_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=production
```

## 3) Run Studio

```bash
cd studio
npm install
npm run dev
```

## 4) Add content

Schemas are already defined in `studio/schemas/`:

## `blogPost`
- `slug` (slug)
- `category` (string)
- `title` (string)
- `excerpt` (text)
- `displayDate` (string) optional
- `publishedAt` (datetime)
- `readTime` (string)
- `emoji` (string)
- `content` (array of string or text blocks)
- `richContent` (array of objects) optional
  - `type` (string)
  - `text` (text)
  - `ordered` (boolean) for list blocks
  - `items` (array of string)

## `portfolioProject`
- `slug` (slug)
- `company` (string)
- `industry` (string)
- `logo` (image)
- `heroImage` (image)
- `excerpt` (text)
- `gallery` (array of images)
- `sections` (array of objects)
  - `title` (string)
  - `body` (text)

Section order for portfolio details should be exactly:
1. Background
2. Basics
3. Roadblocks / Insights
4. What we tried
5. What didn't work
6. What we learned
7. The breakthrough / results

## 5) Connect frontend app to the same Sanity project

Set frontend env variables in root:

1. Copy `.env.example` to `.env`.
2. Fill:

```env
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2025-02-19
```

## 6) Publish content

Add blog posts and portfolio projects in Sanity Studio, publish them, then run this app:
```bash
npm run dev
```

If env vars are valid and content exists, the app will render Sanity content.
