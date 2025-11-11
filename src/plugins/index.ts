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
import { sendEmail, createContactFormEmail } from '@/utilities/email'

const generateTitle: GenerateTitle<Post | Page> = ({ doc }) => {
  return doc?.title ? `${doc.title} | VUP A.S.` : 'VUP A.S.'
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
              localized: true,
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
          } else if ('name' in field && field.name === 'fields') {
            return {
              ...field,
              localized: true,
            }
          }
          return field
        })
      },
    },
    formSubmissionOverrides: {
      hooks: {
        afterChange: [
          async ({ doc, req, operation }) => {
            // Only send email on create operation
            if (operation === 'create') {
              try {
                // Get the form title to determine the type
                const form =
                  typeof doc.form === 'number'
                    ? await req.payload.findByID({
                        collection: 'forms',
                        id: doc.form,
                      })
                    : doc.form

                // Extract form data into a key-value object
                const formData: Record<string, string> = {}
                if (doc.submissionData) {
                  doc.submissionData.forEach((item: { field: string; value: string }) => {
                    formData[item.field] = item.value
                  })
                }

                // Only send email for Contact Form (FormBlock submissions)
                // Other forms (Product Inquiry, Career Application) are handled by their respective actions
                if (form.title === 'Contact Form') {
                  console.log('📬 Preparing to send FormBlock Contact Form email...')
                  console.log('  Form Title:', form.title)
                  console.log('  From:', formData.email || 'N/A')
                  console.log('  Subject:', formData.subject || 'Contact Form Submission')
                  
                  const emailHtml = createContactFormEmail({
                    name: formData.name || formData['full-name'] || 'N/A',
                    email: formData.email || 'N/A',
                    subject: formData.subject || 'Contact Form Submission',
                    message: formData.message || 'N/A',
                  })

                  const emailResult = await sendEmail({
                    to: 'ivandjuka777@gmail.com',
                    subject: `Contact Form: ${formData.subject || 'New Submission'}`,
                    html: emailHtml,
                    replyTo: formData.email,
                  })
                  
                  if (emailResult.success) {
                    console.log('✅ FormBlock Contact Form email sent successfully')
                  } else {
                    console.error('⚠️ FormBlock Contact Form email failed to send:', emailResult.error)
                  }
                } else {
                  console.log('ℹ️ FormBlock submission received for form:', form.title, '(email handled elsewhere)')
                }
              } catch (error) {
                console.error('❌ Error in FormBlock email hook:', error)
                // Don't throw error - we don't want to fail the form submission if email fails
              }
            }
          },
        ],
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
          casNumber: originalDoc.technicalSpecifications?.casNumber,
          ecNumber: originalDoc.technicalSpecifications?.ecNumber,
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
