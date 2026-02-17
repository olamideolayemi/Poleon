export const portfolioProjectType = {
  name: 'portfolioProject',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    { name: 'company', title: 'Company', type: 'string', validation: (Rule: any) => Rule.required() },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'company', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    { name: 'industry', title: 'Industry', type: 'string' },
    { name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3 },
    { name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } },
    { name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } },
    {
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
            { name: 'body', title: 'Body', type: 'text', rows: 8, validation: (Rule: any) => Rule.required() },
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        },
      ],
      description:
        "Use this exact order: Background, Basics, Roadblocks / Insights, What we tried, What didn't work, What we learned, The breakthrough / results",
    },
  ],
  preview: {
    select: {
      title: 'company',
      subtitle: 'industry',
      media: 'logo',
    },
  },
};
