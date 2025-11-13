// src/payload/seed/7-posts.ts
import type { Payload } from 'payload'
import type { User } from '@/payload-types'
import { post1En, post1Sk, post1Jp } from './posts/post-1'
import { post2En, post2Sk, post2Jp } from './posts/post-2'
// import { post3En, post3Sk, post3Jp } from './posts/post-3'
import { post4En, post4Sk, post4Jp } from './posts/post-4'
import type { SeededMedia } from './1-media'

export const seedPosts = async (payload: Payload, media: SeededMedia, demoAuthor: User) => {
  payload.logger.info('- Seeding posts...')

  // Destructure the needed documents
  const {
    demoImageDoc,
    image2Doc,
    image3Doc,
    forbesBlogImageDoc,
    ecovadisImageDoc,
    vupCosmeticsImageDoc,
    cosmeticsScreenshotsDoc,
  } = media

  // Note: Do not create posts with `Promise.all` because we want the posts
  // to be created in order. This way, we can sort them by `createdAt` or `publishedAt`
  // and they will be in the expected order.
  const post1Doc = await payload.create({
    collection: 'posts',
    depth: 10,
    context: {
      disableRevalidate: true,
    },
    data: post1En({
      featuredImage: forbesBlogImageDoc,
      contentImage: image2Doc,
      author: demoAuthor,
    }),
  })

  // Add Slovak translation for post1
  await payload.update({
    id: post1Doc.id,
    collection: 'posts',
    locale: 'sk',
    data: post1Sk({
      featuredImage: forbesBlogImageDoc,
      contentImage: image2Doc,
      author: demoAuthor,
    }),
  })

  // Add Japanese translation for post1
  await payload.update({
    id: post1Doc.id,
    collection: 'posts',
    locale: 'jp',
    data: post1Jp({
      featuredImage: forbesBlogImageDoc,
      contentImage: image2Doc,
      author: demoAuthor,
    }),
  })

  const post2Doc = await payload.create({
    collection: 'posts',
    depth: 10,
    context: {
      disableRevalidate: true,
    },
    data: post2En({ featuredImage: cosmeticsScreenshotsDoc, author: demoAuthor }),
  })

  // Add Slovak translation for post2
  await payload.update({
    id: post2Doc.id,
    collection: 'posts',
    locale: 'sk',
    data: post2Sk({ featuredImage: cosmeticsScreenshotsDoc, author: demoAuthor }),
  })

  // Add Japanese translation for post2
  await payload.update({
    id: post2Doc.id,
    collection: 'posts',
    locale: 'jp',
    data: post2Jp({ featuredImage: cosmeticsScreenshotsDoc, author: demoAuthor }),
  })

  // const post3Doc = await payload.create({
  //   collection: 'posts',
  //   depth: 10,
  //   context: {
  //     disableRevalidate: true,
  //   },
  //   data: post3({ featuredImage: image3Doc, contentImage: demoImageDoc, author: demoAuthor }),
  // })

  const post4Doc = await payload.create({
    collection: 'posts',
    depth: 10,
    context: {
      disableRevalidate: true,
    },
    data: post4En({ featuredImage: ecovadisImageDoc, author: demoAuthor }),
  })

  // Add Slovak translation for post4
  await payload.update({
    id: post4Doc.id,
    collection: 'posts',
    locale: 'sk',
    data: post4Sk({ featuredImage: ecovadisImageDoc, author: demoAuthor }),
  })

  // Add Japanese translation for post4
  await payload.update({
    id: post4Doc.id,
    collection: 'posts',
    locale: 'jp',
    data: post4Jp({ featuredImage: ecovadisImageDoc, author: demoAuthor }),
  })

  // Update each post with related posts to establish relationships.
  // Using Promise.all here is fine as the order of updates doesn't matter.
  //   await Promise.all([
  //     payload.update({
  //       id: post1Doc.id,
  //       collection: 'posts',
  //       data: {
  //         relatedPosts: [post2Doc.id, post3Doc.id],
  //       },
  //     }),
  //     payload.update({
  //       id: post2Doc.id,
  //       collection: 'posts',
  //       data: {
  //         relatedPosts: [post1Doc.id, post4Doc.id],
  //       },
  //     }),
  //     payload.update({
  //       id: post3Doc.id,
  //       collection: 'posts',
  //       data: {
  //         relatedPosts: [post1Doc.id, post2Doc.id],
  //       },
  //     }),
  //     payload.update({
  //       id: post4Doc.id,
  //       collection: 'posts',
  //       data: {
  //         relatedPosts: [post2Doc.id, post3Doc.id],
  //       },
  //     }),
  //   ])

  payload.logger.info('✓ Posts seeded')

  return {
    post1Doc,
    post2Doc,
    // post3Doc,
    post4Doc,
  }
}

export type SeededPosts = Awaited<ReturnType<typeof seedPosts>>
