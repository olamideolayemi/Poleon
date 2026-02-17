export const richContentBlockType = {
  name: 'richContentBlock',
  title: 'Rich Content Block',
  type: 'object',
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Heading', value: 'heading' },
          { title: 'Subheading', value: 'subheading' },
          { title: 'Paragraph', value: 'paragraph' },
          { title: 'Quote', value: 'quote' },
          { title: 'List', value: 'list' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
      rows: 4,
    },
    {
      name: 'ordered',
      title: 'Ordered List',
      type: 'boolean',
      initialValue: false,
      hidden: ({ parent }: any) => parent?.type !== 'list',
    },
    {
      name: 'items',
      title: 'List Items',
      type: 'array',
      of: [{ type: 'string' }],
      hidden: ({ parent }: any) => parent?.type !== 'list',
    },
  ],
  preview: {
    select: {
      title: 'type',
      subtitle: 'text',
    },
  },
};
