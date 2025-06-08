// src/payload/seed/7-posts.ts
import type { Payload } from 'payload'
import type { User } from '@/payload-types'
import { post1 } from './posts/post-1'
import { post2 } from './posts/post-2'
import { post3 } from './posts/post-3'
import { post4 } from './posts/post-4'
import type { SeededMedia } from './1-media'

export const seedPosts = async (payload: Payload, media: SeededMedia, demoAuthor: User) => {
  payload.logger.info('— Seeding posts...')

  // Destructure the needed documents
  const { image1Doc, image2Doc, image3Doc } = media

  // Note: Do not create posts with `Promise.all` because we want the posts
  // to be created in order. This way, we can sort them by `createdAt` or `publishedAt`
  // and they will be in the expected order.
  const post1Doc = await payload.create({
    collection: 'posts',
    depth: 10,
    context: {
      disableRevalidate: true,
    },
    data: post1({ featuredImage: image1Doc, contentImage: image2Doc, author: demoAuthor }),
  })

  const post2Doc = await payload.create({
    collection: 'posts',
    depth: 10,
    context: {
      disableRevalidate: true,
    },
    data: post2({ featuredImage: image2Doc, contentImage: image3Doc, author: demoAuthor }),
  })

  const post3Doc = await payload.create({
    collection: 'posts',
    depth: 10,
    context: {
      disableRevalidate: true,
    },
    data: post3({ featuredImage: image3Doc, contentImage: image1Doc, author: demoAuthor }),
  })

  const post4Doc = await payload.create({
    collection: 'posts',
    depth: 10,
    context: {
      disableRevalidate: true,
    },
    data: post4({ featuredImage: image1Doc, contentImage: image3Doc, author: demoAuthor }),
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
    post3Doc,
    post4Doc,
  }
}

export type SeededPosts = Awaited<ReturnType<typeof seedPosts>>
