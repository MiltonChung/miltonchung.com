import { defineType, defineField } from 'sanity';

export const projectType = defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'projectPicture',
      title: 'Project Picture',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent'
    }),
    defineField({
      name: 'githubLink',
      title: 'Github Link',
      type: 'string'
    }),
    defineField({
      name: 'liveLink',
      title: 'Live Link',
      type: 'string'
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean'
    }),
    defineField({
      name: 'showing',
      title: 'Showing?',
      type: 'boolean'
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number'
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Project', value: 'project' },
          { title: 'Freelance', value: 'freelance' }
        ],
        layout: 'dropdown'
      }
    })
  ]
});
