import type { CollectionSlug, Payload, PayloadRequest } from 'payload'

import {
  homeEn as homePageDataEn,
  homeSk as homePageDataSk,
  homeJp as homePageDataJp,
} from './home'
import {
  productsEn as productsPageDataEn,
  productsSk as productsPageDataSk,
  productsJp as productsPageDataJp,
} from './products'
import {
  industriesEn as industriesPageDataEn,
  industriesSk as industriesPageDataSk,
  industriesJp as industriesPageDataJp,
} from './industries'
import {
  sustainabilityEn as sustainabilityPageDataEn,
  sustainabilitySk as sustainabilityPageDataSk,
  sustainabilityJp as sustainabilityPageDataJp,
} from './sustainability'
import {
  careersEn as careersPageDataEn,
  careersSk as careersPageDataSk,
  careersJp as careersPageDataJp,
} from './careers'
import {
  aboutUsEn as aboutUsPageDataEn,
  aboutUsSk as aboutUsPageDataSk,
  aboutUsJp as aboutUsPageDataJp,
} from './about-us'
import {
  contactUsEn as contactUsPageDataEn,
  contactUsSk as contactUsPageDataSk,
  contactUsJp as contactUsPageDataJp,
} from '../contact-us'

import { seedMedia } from './1-media'
import { seedUsers } from './2-users'
import { seedServices } from './3-services'
import { seedProductData } from './4-product-data'
import { seedIndustries } from './5-industries'
import { seedCareers } from './6-careers'
import { seedPosts } from './7-posts'
import { seedTeamMembers } from './8-team-members'
import { seedForms } from './9-forms'

// const globals: GlobalSlug[] = ['header', 'footer']

// Next.js revalidation errors are normal when seeding the database without a server running
// i.e. running `yarn seed` locally instead of using the admin UI within an active app
// The app is not running to revalidate the pages and so the API routes are not available
// These error messages can be ignored: `Error hitting revalidate route for...`
export const seed = async ({
  payload,
  req,
  useExistingMedia = true,
}: {
  payload: Payload
  req: PayloadRequest
  useExistingMedia?: boolean
}): Promise<void> => {
  payload.logger.info('Seeding database...')

  // Define the order for deletion. Collections with dependencies should be deleted before their dependencies.
  const orderedCollections: CollectionSlug[] = [
    'search',
    'form-submissions',
    'forms',
    'pages',
    'posts',
    // 'users',
    'careers',
    'caseStudies',
    'industries',
    'services',
    'teamMembers',
    'products',
    'productCategories',
    'media',
  ]

  const collectionsToDelete = useExistingMedia
    ? orderedCollections.filter((col) => col !== 'media')
    : orderedCollections

  try {
    for (const collection of collectionsToDelete) {
      payload.logger.info(`  - Deleting collection: ${collection}`)
      await payload.db.deleteMany({ collection, req, where: {} })

      if (payload.collections[collection].config.versions) {
        await payload.db.deleteVersions({ collection, req, where: {} })
      }
    }
  } catch (error) {
    payload.logger.error(`Error during collection clearing: ${error}`)
    throw error
  }

  // we need to clear the media directory before seeding
  // as well as the collections and globals
  // this is because while `yarn seed` drops the database
  // the custom `/api/seed` endpoint does not
  payload.logger.info(
    `— Clearing collections: ${collectionsToDelete.join(', ')}${useExistingMedia ? ' (preserving existing media)' : ''}...`,
  )

  // clear the database (conditionally excluding media)
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

  // --------------------
  // 1. Seed Media (or use existing)
  // --------------------
  const media = await seedMedia(payload, useExistingMedia)

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

  // --------------------
  // 9. Seed Forms
  // --------------------
  const forms = await seedForms(payload)

  //* -------------------- SEEDING PAGES -------------------- *//

  payload.logger.info(`— Seeding pages...`)

  const [
    homePageEn,
    productsPage,
    industriesPage,
    sustainabilityPage,
    careersPage,
    aboutUsPage,
    contactUsPage,
  ] = await Promise.all([
    payload.create({
      collection: 'pages',
      locale: 'en',
      depth: 0,
      // @ts-expect-error This is working, but payload is not happy
      data: homePageDataEn({
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
        sustainabilitydemoImageDoc: media.sustainabilitydemoImageDoc,
      }),
    }),

    payload.create({
      collection: 'pages',
      locale: 'en',
      depth: 0,
      // @ts-expect-error This is working, but payload is not happy
      data: productsPageDataEn({ featuredImage1: media.demoImageDoc }),
    }),

    payload.create({
      collection: 'pages',
      locale: 'en',
      depth: 0,
      // @ts-expect-error This is working, but payload is not happy
      data: industriesPageDataEn({ featuredImage1: media.demoImageDoc }),
    }),

    payload.create({
      collection: 'pages',
      locale: 'en',
      depth: 0,
      // @ts-expect-error This is working, but payload is not happy
      data: sustainabilityPageDataEn({
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
        badge1: media.badge1Doc,
        badge2: media.badge2Doc,
        badge3: media.badge3Doc,
        badge4: media.badge4Doc,
      }),
    }),

    payload.create({
      collection: 'pages',
      locale: 'en',
      depth: 0,
      // @ts-expect-error This is working, but payload is not happy
      data: careersPageDataEn({
        featuredImage1: media.demoImageDoc,
        chemist: careers.chemistDoc,
        analyst: careers.analystDoc,
      }),
    }),

    payload.create({
      collection: 'pages',
      locale: 'en',
      depth: 0,
      // @ts-expect-error This is working, but payload is not happy
      data: aboutUsPageDataEn({
        timeline1Image: media.demoImageDoc,
        timeline2Image: media.demoImageDoc,
        timeline3Image: media.demoImageDoc,
        timeline4Image: media.demoImageDoc,
        content1Image: media.demoImageDoc,
        content2Image: media.demoImageDoc,
        ceo: teamMembers.ceoDoc,
        rd: teamMembers.rdDoc,
        commercial: teamMembers.commercialDoc,
        atbel: teamMembers.atbelDoc,
        cosmetics: teamMembers.cosmeticsDoc,
      }),
    }),

    payload.create({
      collection: 'pages',
      locale: 'en',
      depth: 0,
      // @ts-expect-error This is working, but payload is not happy
      data: contactUsPageDataEn({
        contactForm: forms.contactForm.id,
      }),
    }),
  ])

  payload.logger.info(`— Seeding Slovak page translations...`)

  // Home page
  await Promise.all([
    payload.update({
      collection: 'pages',
      id: homePageEn.id,
      locale: 'sk',
      // @ts-expect-error This is working, but payload is not happy
      data: homePageDataSk({
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
        sustainabilitydemoImageDoc: media.sustainabilitydemoImageDoc,
      }),
    }),
  ])

  // Products page
  await Promise.all([
    payload.update({
      collection: 'pages',
      id: productsPage.id,
      locale: 'sk',
      // @ts-expect-error This is working, but payload is not happy
      data: productsPageDataSk({ featuredImage1: media.demoImageDoc }),
    }),
  ])

  // Industries page
  await Promise.all([
    payload.update({
      collection: 'pages',
      id: industriesPage.id,
      locale: 'sk',
      // @ts-expect-error This is working, but payload is not happy
      data: industriesPageDataSk({ featuredImage1: media.demoImageDoc }),
    }),
  ])

  // Sustanability page
  await Promise.all([
    payload.update({
      collection: 'pages',
      id: sustainabilityPage.id,
      locale: 'sk',
      // @ts-expect-error This is working, but payload is not happy
      data: sustainabilityPageDataSk({
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
        badge1: media.badge1Doc,
        badge2: media.badge2Doc,
        badge3: media.badge3Doc,
        badge4: media.badge4Doc,
      }),
    }),
  ])

  // Careers page
  await Promise.all([
    payload.update({
      collection: 'pages',
      id: careersPage.id,
      locale: 'sk',
      // @ts-expect-error This is working, but payload is not happy
      data: careersPageDataSk({
        featuredImage1: media.demoImageDoc,
        chemist: careers.chemistDoc,
        analyst: careers.analystDoc,
      }),
    }),
  ])

  await payload.update({
    collection: 'pages',
    id: aboutUsPage.id,
    locale: 'sk',
    depth: 0,
    // @ts-expect-error This is working, but payload is not happy
    data: aboutUsPageDataSk({
      timeline1Image: media.demoImageDoc,
      timeline2Image: media.demoImageDoc,
      timeline3Image: media.demoImageDoc,
      timeline4Image: media.demoImageDoc,
      content1Image: media.demoImageDoc,
      content2Image: media.demoImageDoc,
      ceo: teamMembers.ceoDoc,
      rd: teamMembers.rdDoc,
      commercial: teamMembers.commercialDoc,
      atbel: teamMembers.atbelDoc,
      cosmetics: teamMembers.cosmeticsDoc,
    }),
  })

  // Contact us page
  await payload.update({
    collection: 'pages',
    id: contactUsPage.id,
    locale: 'sk',
    depth: 0,
    // @ts-expect-error This is working, but payload is not happy
    data: contactUsPageDataSk({
      contactForm: forms.contactForm.id,
    }),
  })

  payload.logger.info(`— Seeding Japanese page translations...`)

  // Home page
  await Promise.all([
    payload.update({
      collection: 'pages',
      id: homePageEn.id,
      locale: 'jp',
      // @ts-expect-error This is working, but payload is not happy
      data: homePageDataJp({
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
        sustainabilitydemoImageDoc: media.sustainabilitydemoImageDoc,
      }),
    }),
  ])

  // Products page
  await Promise.all([
    payload.update({
      collection: 'pages',
      id: productsPage.id,
      locale: 'jp',
      // @ts-expect-error This is working, but payload is not happy
      data: productsPageDataJp({ featuredImage1: media.demoImageDoc }),
    }),
  ])

  // Industries page
  await Promise.all([
    payload.update({
      collection: 'pages',
      id: industriesPage.id,
      locale: 'jp',
      // @ts-expect-error This is working, but payload is not happy
      data: industriesPageDataJp({ featuredImage1: media.demoImageDoc }),
    }),
  ])

  // Sustanability page
  await Promise.all([
    payload.update({
      collection: 'pages',
      id: sustainabilityPage.id,
      locale: 'jp',
      // @ts-expect-error This is working, but payload is not happy
      data: sustainabilityPageDataJp({
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
        badge1: media.badge1Doc,
        badge2: media.badge2Doc,
        badge3: media.badge3Doc,
        badge4: media.badge4Doc,
      }),
    }),
  ])

  // Careers page
  await Promise.all([
    payload.update({
      collection: 'pages',
      id: careersPage.id,
      locale: 'jp',
      // @ts-expect-error This is working, but payload is not happy
      data: careersPageDataJp({
        featuredImage1: media.demoImageDoc,
        chemist: careers.chemistDoc,
        analyst: careers.analystDoc,
      }),
    }),
  ])

  // About us page
  await payload.update({
    collection: 'pages',
    id: aboutUsPage.id,
    locale: 'jp',
    depth: 0,
    // @ts-expect-error This is working, but payload is not happy
    data: aboutUsPageDataJp({
      timeline1Image: media.demoImageDoc,
      timeline2Image: media.demoImageDoc,
      timeline3Image: media.demoImageDoc,
      timeline4Image: media.demoImageDoc,
      content1Image: media.demoImageDoc,
      content2Image: media.demoImageDoc,
      ceo: teamMembers.ceoDoc,
      rd: teamMembers.rdDoc,
      commercial: teamMembers.commercialDoc,
      atbel: teamMembers.atbelDoc,
      cosmetics: teamMembers.cosmeticsDoc,
    }),
  })

  // Contact us page
  await payload.update({
    collection: 'pages',
    id: contactUsPage.id,
    locale: 'jp',
    depth: 0,
    // @ts-expect-error This is working, but payload is not happy
    data: contactUsPageDataJp({
      contactForm: forms.contactForm.id,
    }),
  })

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
