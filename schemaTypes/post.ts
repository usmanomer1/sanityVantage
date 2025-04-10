import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'string',
        },
        {
          name: 'zh',
          title: 'Chinese',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug (English only)',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 180,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'cloudinaryImage',
      title: 'Cloudinary Image URL',
      type: 'url',
      description: 'Paste Cloudinary image link',
    }),
    defineField({
      name: 'body',
      title: 'Content',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'zh',
          title: 'Chinese',
          type: 'array',
          of: [{ type: 'block' }],
        },
      ],
    }),
  ],
})
