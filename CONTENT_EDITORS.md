# Content Editor Guide

This guide is for non-developers who manage website content in Sanity.

## Access

1. Ask an admin to invite you in Sanity project members.
2. Open the Studio URL provided by the team (for example: `https://<your-studio>.sanity.studio`).
3. Sign in with your Sanity account.

## Roles

- `Editor`: create/edit/publish content.
- `Administrator`: manage project settings, members, datasets, API.

If you cannot see content types, ask an admin to confirm your role.

## What to edit

In Studio, you will see:

- `Blog Post`
- `Portfolio Project`

## How to publish a blog post

1. Open `Blog Post` in Studio.
2. Click `+` to create a new document.
3. Fill required fields:
   - Title
   - Slug
   - Category
   - Excerpt
   - Published date
4. Add either:
   - `content` (paragraph array), or
   - `richContent` blocks.
5. Click `Publish`.

## How to publish a portfolio project

1. Open `Portfolio Project`.
2. Create a new project.
3. Fill:
   - Company
   - Slug
   - Industry
   - Excerpt
   - Logo
   - Hero Image
   - Gallery images (optional)
4. Add `sections` in this exact order:
   1. Background
   2. Basics
   3. Roadblocks / Insights
   4. What we tried
   5. What didn't work
   6. What we learned
   7. The breakthrough / results
5. Click `Publish`.

## When changes appear on the live site

- Published content appears on the frontend automatically.
- No developer deployment is required for normal content edits.

## Troubleshooting

If content does not appear:

1. Confirm the document is `Published`, not only `Draft`.
2. Confirm slug is set.
3. Ask an admin to verify:
   - frontend environment variables
   - Sanity CORS origins include the live domain
   - you are editing the correct dataset (`production`).

## Team checklist for admins

- Invite editors in Sanity members.
- Share Studio URL with editors.
- Keep `projectId` and dataset consistent between Studio and frontend.
- Add live domains in Sanity CORS.
