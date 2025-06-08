import type { CollectionSlug, Payload, PayloadRequest } from 'payload'

import { home as homePageData } from './home'
import { products as productsPageData } from './products'
import { industries as industriesPageData } from './industries'
import { sustainability as sustainabilityPageData } from './sustainability'
import { careers as careersPageData } from './careers'
// import { aboutUs as aboutUsPageData } from './about-us'

import { seedMedia } from './1-media'
import { seedUsers } from './2-users'
import { seedServices } from './3-services'
import { seedProductData } from './4-product-data'
import { seedIndustries } from './5-industries'
import { seedCareers } from './6-careers'
import { seedPosts } from './7-posts'
import { seedTeamMembers } from './8-team-members'

const collections: CollectionSlug[] = [
  'services',
  'industries',
  'productCategories',
  'products',
  'media',
  'posts',
  'pages',
  'careers',
  'teamMembers',
]
// const globals: GlobalSlug[] = ['header', 'footer']

// Next.js revalidation errors are normal when seeding the database without a server running
// i.e. running `yarn seed` locally instead of using the admin UI within an active app
// The app is not running to revalidate the pages and so the API routes are not available
// These error messages can be ignored: `Error hitting revalidate route for...`
export const seed = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Seeding database...')

  // we need to clear the media directory before seeding
  // as well as the collections and globals
  // this is because while `yarn seed` drops the database
  // the custom `/api/seed` endpoint does not
  payload.logger.info(`— Clearing collections and globals...`)

  // clear the database
  // await Promise.all(
  //   globals.map((global) =>
  //     payload.updateGlobal({
  //       slug: global,
  //       data: {
  //         navItems: [],
  //       },
  //       depth: 0,
  //       context: {
  //         disableRevalidate: true,
  //       },
  //     }),
  //   ),
  // )

  //* CLEAR DATABASE *//

  await Promise.all(
    collections.map((collection) => payload.db.deleteMany({ collection, req, where: {} })),
  )

  await Promise.all(
    collections
      .filter((collection) => Boolean(payload.collections[collection].config.versions))
      .map((collection) => payload.db.deleteVersions({ collection, req, where: {} })),
  )

  // --------------------
  // 1. Seed Media
  // --------------------
  const media = await seedMedia(payload)

  // --------------------
  // 2. Seed Users
  // --------------------
  const { demoAuthor } = await seedUsers(payload)

  // --------------------
  // 3. Seed Services
  // --------------------
  const services = await seedServices(payload, media)

  // --------------------
  // 4. Seed Product Data (Categories & Products)
  // --------------------
  const productData = await seedProductData(payload, media)

  // Destructure for convenience in subsequent steps
  const { products: seededProducts, categories: seededCategories } = productData

  // --------------------
  // 5. Seed Industries
  // --------------------
  const industries = await seedIndustries(payload, media, services, seededProducts)

  // --------------------
  // 6. Seed Careers
  // --------------------
  const careers = await seedCareers(payload)

  // --------------------
  // 7. Seed Posts
  // --------------------
  const posts = await seedPosts(payload, media, demoAuthor)

  // --------------------
  // 8. Seed Team Members
  // --------------------
  const teamMembers = await seedTeamMembers(payload, media)

  //* -------------------- SEEDING PAGES -------------------- *//

  payload.logger.info(`— Seeding pages...`)

  const [homePage, productsPage, industriesPage, sustainabilityPage, careersPage] =
    await Promise.all([
      payload.create({
        collection: 'pages',
        depth: 0,
        // @ts-expect-error This is working, but payload is not happy
        data: homePageData({
          slide1HeroBgDoc: media.slide1HeroBgDoc,
          slide1HeroFeaturedItemDoc: media.slide1HeroFeaturedItemDoc,
          slide1HeroCard1Doc: media.slide1HeroCard1Doc,
          slide1HeroCard2Doc: media.slide1HeroCard2Doc,
          slide1HeroCard3Doc: media.slide1HeroCard3Doc,
          slide2HeroBgDoc: media.slide2HeroBgDoc,
          slide2HeroFeaturedItemDoc: media.slide2HeroFeaturedItemDoc,
          slide2HeroCard1Doc: media.slide2HeroCard1Doc,
          slide2HeroCard2Doc: media.slide2HeroCard2Doc,
          slide2HeroCard3Doc: media.slide2HeroCard3Doc,
          slide3HeroBgDoc: media.slide3HeroBgDoc,
          slide3HeroFeaturedItemDoc: media.slide3HeroFeaturedItemDoc,
          slide3HeroCard1Doc: media.slide3HeroCard1Doc,
          slide3HeroCard2Doc: media.slide3HeroCard2Doc,
          slide3HeroCard3Doc: media.slide3HeroCard3Doc,
          quickAccessCard1Doc: media.quickAccessCard1Doc,
          quickAccessCard2Doc: media.quickAccessCard2Doc,
          quickAccessCard3Doc: media.quickAccessCard3Doc,
          quickAccessCard4Doc: media.quickAccessCard4Doc,
          hydroxyAcids: seededCategories.hydroxyAcids,
          hinderedAmines: seededCategories.hinderedAmines,
          glycolEthers: seededCategories.glycolEthers,
          post1: posts.post4Doc,
          post2: posts.post1Doc,
          post3: posts.post2Doc,
          post4: posts.post3Doc,
          sustainabilityImage1Doc: media.sustainabilityImage1Doc,
        }),
      }),

      payload.create({
        collection: 'pages',
        depth: 0,
        // @ts-expect-error This is working, but payload is not happy
        data: productsPageData({ featuredImage1: media.image1Doc }),
      }),

      payload.create({
        collection: 'pages',
        depth: 0,
        // @ts-expect-error This is working, but payload is not happy
        data: industriesPageData({ featuredImage1: media.image1Doc }),
      }),

      payload.create({
        collection: 'pages',
        depth: 0,
        // @ts-expect-error This is working, but payload is not happy
        data: sustainabilityPageData({
          heroImage: media.sustainabilityHeroImageDoc,
          pillar1Image: media.sustainabilityPillar1Doc,
          pillar2Image: media.sustainabilityPillar2Doc,
          pillar3Image: media.sustainabilityPillar3Doc,
          pillar4Image: media.sustainabilityPillar4Doc,
          certificateImage1: media.ecovadisMedalDoc,
          focus1Image: media.sustainabilityFocus1Doc,
          focus2Image: media.sustainabilityFocus2Doc,
          focus3Image: media.sustainabilityFocus3Doc,
          focus4Image: media.sustainabilityFocus4Doc,
        }),
      }),

      payload.create({
        collection: 'pages',
        depth: 0,
        // @ts-expect-error This is working, but payload is not happy
        data: careersPageData({ featuredImage1: media.image1Doc }),
      }),

      // payload.create({
      //   collection: 'pages',
      //   depth: 0,
      //   // @ts-expect-error This is working, but payload is not happy
      //   data: aboutUsPageData({
      //     timeline1Image: image1Doc,
      //     timeline2Image: image2Doc,
      //     timeline3Image: image3Doc,
      //     timeline4Image: image1Doc,
      //     content1Image: image2Doc,
      //     content2Image: image3Doc,
      //     ceo: ceoDoc,
      //     rd: rdDoc,
      //     commercial: commercialDoc,
      //     atbel: atbelDoc,
      //     cosmetics: cosmeticsDoc,
      //   }),
      // }),
    ])

  //* -------------------- SEEDING GLOBALS -------------------- *//

  // payload.logger.info(`— Seeding globals...`)

  // await Promise.all([
  //   payload.updateGlobal({
  //     slug: 'header',
  //     data: {
  //       navItems: [
  //         {
  //           link: {
  //             type: 'custom',
  //             label: 'Posts',
  //             url: '/news',
  //           },
  //         },
  //         {
  //           link: {
  //             type: 'reference',
  //             label: 'Contact',
  //             reference: {
  //               relationTo: 'pages',
  //               value: contactPage.id,
  //             },
  //           },
  //         },
  //       ],
  //     },
  //   }),
  //   payload.updateGlobal({
  //     slug: 'footer',
  //     data: {
  //       navItems: [
  //         {
  //           link: {
  //             type: 'custom',
  //             label: 'Admin',
  //             url: '/admin',
  //           },
  //         },
  //         {
  //           link: {
  //             type: 'custom',
  //             label: 'Source Code',
  //             newTab: true,
  //             url: 'https://github.com/payloadcms/payload/tree/main/templates/website',
  //           },
  //         },
  //         {
  //           link: {
  //             type: 'custom',
  //             label: 'Payload',
  //             newTab: true,
  //             url: 'https://payloadcms.com/',
  //           },
  //         },
  //       ],
  //     },
  //   }),

  payload.logger.info(`— Seeding complete!`)
}
