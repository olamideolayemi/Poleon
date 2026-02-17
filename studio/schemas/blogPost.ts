export const blogPostType = {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    { name: 'category', title: 'Category', type: 'string', initialValue: 'Strategy' },
    { name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3 },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
    {
      name: 'displayDate',
      title: 'Display Date',
      description: 'Optional custom date string shown in UI, e.g. Feb 16, 2026',
      type: 'string',
    },
    { name: 'readTime', title: 'Read Time', type: 'string', placeholder: '5 min read' },
    { name: 'emoji', title: 'Emoji', type: 'string', initialValue: '📝' },
    {
      name: 'content',
      title: 'Paragraph Content',
      type: 'array',
      of: [{ type: 'text' }],
    },
    {
      name: 'richContent',
      title: 'Rich Content Blocks',
      type: 'array',
      of: [{ type: 'richContentBlock' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
    },
  },
};
