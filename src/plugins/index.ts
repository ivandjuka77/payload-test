import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { searchPlugin } from '@payloadcms/plugin-search'
import { Plugin } from 'payload'
import { revalidateRedirects } from '@/hooks/revalidateRedirects'
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'
import { FixedToolbarFeature, HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { searchFields } from '@/search/fieldOverrides'
// import { beforeSyncWithSearch } from '@/search/beforeSync'

import { Page, Post } from '@/payload-types'
import { getServerSideURL } from '@/utilities/getURL'
import { s3Storage } from '@payloadcms/storage-s3'

const generateTitle: GenerateTitle<Post | Page> = ({ doc }) => {
  return doc?.title ? `${doc.title} | Payload Website Template` : 'Payload Website Template'
}

const generateURL: GenerateURL<Post | Page> = ({ doc }) => {
  const url = getServerSideURL()

  return doc?.slug ? `${url}/${doc.slug}` : url
}

const env = process.env.NODE_ENV || 'development'
const supabaseProjectRef = process.env.SUPABASE_PROJECT_REF || 'elnpbywhaolyzgvwyuqf'
const s3BucketFromEnv = process.env.S3_BUCKET || 'vup-payload'

export const plugins: Plugin[] = [
  redirectsPlugin({
    collections: ['pages', 'posts'],
    overrides: {
      // @ts-expect-error - This is a valid override, mapped fields don't resolve to the same type
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'from') {
            return {
              ...field,
              admin: {
                description: 'You will need to rebuild the website when changing this field.',
              },
            }
          }
          return field
        })
      },
      hooks: {
        afterChange: [revalidateRedirects],
      },
    },
  }),
  nestedDocsPlugin({
    collections: ['productCategories'],
    generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
  }),
  seoPlugin({
    generateTitle,
    generateURL,
  }),
  formBuilderPlugin({
    fields: {
      payment: false,
    },
    formOverrides: {
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'confirmationMessage') {
            return {
              ...field,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    FixedToolbarFeature(),
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                  ]
                },
              }),
            }
          }
          return field
        })
      },
    },
  }),
  searchPlugin({
    collections: ['posts', 'products', 'productCategories', 'industries', 'services', 'careers'],
    beforeSync: ({ originalDoc, searchDoc }) => {
      const collection = searchDoc.doc.relationTo

      if (collection === 'posts') {
        return {
          ...searchDoc,
          title: originalDoc.title,
          slug: originalDoc.slug,
          description: originalDoc.description,
        }
      }

      if (collection === 'products') {
        return {
          ...searchDoc,
          title: originalDoc.name,
          slug: originalDoc.slug,
          description: originalDoc.description,
        }
      }

      if (collection === 'productCategories') {
        return {
          ...searchDoc,
          title: originalDoc.name,
          slug: originalDoc.slug,
          description: originalDoc.description,
        }
      }

      if (collection === 'industries') {
        return {
          ...searchDoc,
          title: originalDoc.name,
          slug: originalDoc.slug,
          description: originalDoc.description,
        }
      }

      if (collection === 'services') {
        return {
          ...searchDoc,
          title: originalDoc.title,
          slug: originalDoc.slug,
          description: originalDoc.description,
        }
      }

      if (collection === 'careers') {
        return {
          ...searchDoc,
          title: originalDoc.title,
          slug: originalDoc.slug,
        }
      }

      return searchDoc
    },
    defaultPriorities: {
      products: 1,
      productCategories: 2,
      industries: 3,
      services: 4,
      posts: 5,
      careers: 6,
    },
    searchOverrides: {
      fields: ({ defaultFields }) => {
        return [...defaultFields, ...searchFields]
      },
    },
  }),
  payloadCloudPlugin(),
  s3Storage({
    collections: {
      media: {
        prefix: 'media',
        generateFileURL: ({ filename, prefix }) => {
          const filePathInBucket = prefix ? `${prefix}/${filename}` : filename

          // if (env === 'development') {
          return `${process.env.S3_PUBLIC_URL}/object/public/${s3BucketFromEnv}/${filePathInBucket}`

          // return `https://ludwreuxuzoyeevqvihu.supabase.co/storage/v1/object/public/${s3BucketFromEnv}/${filePathInBucket}`
          // }

          // return `https://${supabaseProjectRef}.supabase.co/storage/v1/object/public/vup-payload/${filePathInBucket}`
        },
      },
      'product-documents': {
        prefix: 'files',
        generateFileURL: ({ filename, prefix }) => {
          const filePathInBucket = prefix ? `${prefix}/${filename}` : filename
          return `${process.env.S3_PUBLIC_URL}/object/public/${s3BucketFromEnv}/${filePathInBucket}`
        },
      },
    },
    bucket: s3BucketFromEnv,
    config: {
      forcePathStyle: true,
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
      },
      region: process.env.S3_REGION || '',
      endpoint: process.env.S3_ENDPOINT || '',
    },
  }),
]
