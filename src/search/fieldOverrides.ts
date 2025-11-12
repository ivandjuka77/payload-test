import { Field } from 'payload'

export const searchFields: Field[] = [
  {
    name: 'slug',
    type: 'text',
    index: true,
    localized: true,
    admin: {
      readOnly: true,
    },
  },
  {
    name: 'description',
    type: 'text',
    index: true,
    localized: true,
    admin: {
      readOnly: true,
    },
  },
  {
    name: 'casNumber',
    type: 'text',
    index: true,
    localized: true,
    admin: {
      readOnly: true,
    },
  },
  {
    name: 'ecNumber',
    type: 'text',
    index: true,
    localized: true,
    admin: {
      readOnly: true,
    },
  },
  {
    name: 'meta',
    label: 'Meta',
    type: 'group',
    index: true,
    localized: true,
    admin: {
      readOnly: true,
    },
    fields: [
      {
        type: 'text',
        name: 'title',
        label: 'Title',
        localized: true,
      },
      {
        type: 'text',
        name: 'description',
        label: 'Description',
        localized: true,
      },
      {
        name: 'image',
        label: 'Image',
        type: 'upload',
        relationTo: 'media',
      },
    ],
  },
  {
    label: 'Categories',
    name: 'categories',
    type: 'array',
    localized: true,
    admin: {
      readOnly: true,
    },
    fields: [
      {
        name: 'relationTo',
        type: 'text',
        localized: true,
      },
      {
        name: 'id',
        type: 'text',
        localized: true,
      },
      {
        name: 'title',
        type: 'text',
        localized: true,
      },
    ],
  },
]
