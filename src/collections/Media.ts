import type { CollectionConfig, ImageUploadFormatOptions } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const formatOptions: ImageUploadFormatOptions = {
  format: 'webp' as const,
  options: {
    quality: 75,
    alphaQuality: 85,
    effort: 5,
    lossless: false,
    smartSubsample: true,
    force: true,
  },
}

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      //required: true,
    },
    {
      name: 'caption',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
    },
  ],
  upload: {
    // Upload to the public/media directory in Next.js making them publicly accessible even outside of Payload
    staticDir: path.resolve(dirname, '../../public/media'),
    adminThumbnail: 'thumbnail',
    focalPoint: true,
    formatOptions,
    resizeOptions: {
      width: 1200,
      height: 1200,
      fit: 'inside',
      position: 'center',
      withoutEnlargement: true,
    },
    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
        formatOptions,
      },
      {
        name: 'square',
        width: 400,
        height: 400,
        formatOptions,
      },
      {
        name: 'small',
        width: 500,
        formatOptions,
      },
      {
        name: 'medium',
        width: 800,
        formatOptions,
      },
      {
        name: 'large',
        width: 1200,
        formatOptions,
      },
      {
        name: 'og',
        width: 1200,
        height: 630,
        crop: 'center',
        formatOptions,
      },
    ],
  },
}
