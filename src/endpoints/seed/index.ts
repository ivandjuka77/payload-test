import type { CollectionSlug, Payload, PayloadRequest, File } from 'payload'

import { home } from './home'
import { image1 } from './images/image-1'
import { image2 } from './images/image-2'
import { imageHero1 } from './images/image-hero-1'
import { post1 } from './posts/post-1'
import { post2 } from './posts/post-2'
import { post3 } from './posts/post-3'
import { products } from './products'
import { industries } from './industries'
import { post4 } from './posts/post-4'
import { sustainability } from './sustainability'
import { careers } from './careers'

const NEXT_PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

const collections: CollectionSlug[] = [
  'services',
  'industries',
  'productCategories',
  'products',
  'media',
  'posts',
  'pages',
  'careers',
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

  await Promise.all(
    collections.map((collection) => payload.db.deleteMany({ collection, req, where: {} })),
  )

  await Promise.all(
    collections
      .filter((collection) => Boolean(payload.collections[collection].config.versions))
      .map((collection) => payload.db.deleteVersions({ collection, req, where: {} })),
  )

  payload.logger.info(`— Seeding demo author and user...`)

  await payload.delete({
    collection: 'users',
    depth: 0,
    where: {
      email: {
        equals: 'demo-author@example.com',
      },
    },
  })

  await payload.delete({
    collection: 'users',
    where: {
      email: {
        equals: 'sarah.chen@vup-chemical.com',
      },
    },
  })

  //* -------------------- SEEDING MEDIA -------------------- *//

  payload.logger.info(`— Seeding media...`)

  // -------------------- DEMO IMAGES -------------------- //

  const [image1Buffer, image2Buffer, image3Buffer, hero1Buffer] = await Promise.all([
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post1.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post2.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post3.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-hero1.webp',
    ),
  ])

  const [image1Doc, image2Doc, image3Doc, imageHomeDoc] = await Promise.all([
    payload.create({
      collection: 'media',
      data: image1,
      file: image1Buffer,
    }),
    payload.create({
      collection: 'media',
      data: image2,
      file: image2Buffer,
    }),
    payload.create({
      collection: 'media',
      data: image2,
      file: image3Buffer,
    }),
    payload.create({
      collection: 'media',
      data: imageHero1,
      file: hero1Buffer,
    }),
  ])

  // -------------------- MISC -------------------- //

  const [ecovadisMedalBuffer] = await Promise.all([
    fetchFileByURL(NEXT_PUBLIC_SERVER_URL + '/assets/ecovadis.png'),
  ])

  const [ecovadisMedalDoc] = await Promise.all([
    payload.create({
      collection: 'media',
      data: {
        alt: 'Ecovadis Medal',
      },
      file: ecovadisMedalBuffer,
    }),
  ])

  // -------------------- PRODUCTS -------------------- //

  const [
    dmpaStructureBuffer,
    dmbaStructureBuffer,
    hpvaStructureBuffer,
    hTempoStructureBuffer,
    troloxStructureBuffer,
    tempoStructureBuffer,
    // tempStructureBuffer,
    dapegStructureBuffer,
    benzoyloxyTmpStructureBuffer,
    acetamidoTempoStructureBuffer,
    temponeStructureBuffer,
    // colaminStructureBuffer,
    colaminPhosphateStructureBuffer,
    // colaminPhosphatesodiumSaltStructureBuffer,
    vupinStructureBuffer,
  ] = await Promise.all([
    fetchFileByURL(NEXT_PUBLIC_SERVER_URL + '/assets/products/dmpa-sf.png'),
    fetchFileByURL(NEXT_PUBLIC_SERVER_URL + '/assets/products/dmba-sf.png'),
    fetchFileByURL(NEXT_PUBLIC_SERVER_URL + '/assets/products/hpva-sf.png'),
    fetchFileByURL(NEXT_PUBLIC_SERVER_URL + '/assets/products/h-tempo-sf.png'),
    fetchFileByURL(NEXT_PUBLIC_SERVER_URL + '/assets/products/trolox-sf.png'),
    fetchFileByURL(NEXT_PUBLIC_SERVER_URL + '/assets/products/tempo-sf.png'),
    // fetchFileByURL(NEXT_PUBLIC_SERVER_URL + '/assets/products/temp-sf.png'),
    fetchFileByURL(NEXT_PUBLIC_SERVER_URL + '/assets/products/dapeg-sf.png'),
    fetchFileByURL(NEXT_PUBLIC_SERVER_URL + '/assets/products/benzoyloxy-tmp-sf.png'),
    fetchFileByURL(NEXT_PUBLIC_SERVER_URL + '/assets/products/acetamido-tempo-sf.png'),
    fetchFileByURL(NEXT_PUBLIC_SERVER_URL + '/assets/products/tempone-sf.png'),
    // fetchFileByURL(NEXT_PUBLIC_SERVER_URL + '/assets/products/colamin-sf.png'),
    fetchFileByURL(NEXT_PUBLIC_SERVER_URL + '/assets/products/colamin-phosphate-sf.png'),
    // fetchFileByURL(NEXT_PUBLIC_SERVER_URL + '/assets/products/colamin-phosphate-sodium-salt-sf.png'),
    fetchFileByURL(NEXT_PUBLIC_SERVER_URL + '/assets/products/vupin-sf.png'),
  ])

  const [
    dmpaStructureDoc,
    dmbaStructureDoc,
    hpvaStructureDoc,
    hTempoStructureDoc,
    troloxStructureDoc,
    tempoStructureDoc,
    // tempStructureDoc,
    dapegStructureDoc,
    benzoyloxyTmpStructureDoc,
    acetamidoTempoStructureDoc,
    temponeStructureDoc,
    // colaminStructureDoc,
    colaminPhosphateStructureDoc,
    // colaminPhosphatesodiumSaltStructureDoc,
    vupinStructureDoc,
  ] = await Promise.all([
    payload.create({
      collection: 'media',
      data: {
        alt: 'DMPA Structure',
      },
      file: dmpaStructureBuffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'DMBA Structure',
      },
      file: dmbaStructureBuffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'HPVA Structure',
      },
      file: hpvaStructureBuffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'HTempo Structure',
      },
      file: hTempoStructureBuffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Trolox Structure',
      },
      file: troloxStructureBuffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'TEMPO Structure',
      },
      file: tempoStructureBuffer,
    }),
    // payload.create({
    //   collection: 'media',
    //   data: {
    //     alt: 'TEMP Structure',
    //   },
    //   file: tempStructureBuffer,
    // }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'DAPEG Structure',
      },
      file: dapegStructureBuffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Benzoyloxy TMP Structure',
      },
      file: benzoyloxyTmpStructureBuffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Acetamido TEMPO Structure',
      },
      file: acetamidoTempoStructureBuffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'TEMPONE Structure',
      },
      file: temponeStructureBuffer,
    }),
    // payload.create({
    //   collection: 'media',
    //   data: {
    //     alt: 'COLAMIN Structure',
    //   },
    //   file: colaminStructureBuffer,
    // }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'COLAMIN Phosphate Structure',
      },
      file: colaminPhosphateStructureBuffer,
    }),
    // payload.create({
    //   collection: 'media',
    //   data: {
    //     alt: 'COLAMIN Phosphate Sodium Salt Structure',
    //   },
    //   file: colaminPhosphatesodiumSaltStructureBuffer,
    // }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'VUPIN Structure',
      },
      file: vupinStructureBuffer,
    }),
  ])

  // -------------------- HOMEPAGE IMAGES -------------------- //

  const [
    slide1HeroBgBuffer,
    slide1HeroFeaturedItemBuffer,
    slide1HeroCard1Buffer,
    slide1HeroCard2Buffer,
    slide1HeroCard3Buffer,
    slide2HeroBgBuffer,
    slide2HeroFeaturedItemBuffer,
    slide2HeroCard1Buffer,
    slide2HeroCard2Buffer,
    slide2HeroCard3Buffer,
    slide3HeroBgBuffer,
    slide3HeroFeaturedItemBuffer,
    slide3HeroCard1Buffer,
    slide3HeroCard2Buffer,
    slide3HeroCard3Buffer,
    quickAccessCard1Buffer,
    quickAccessCard2Buffer,
    quickAccessCard3Buffer,
    quickAccessCard4Buffer,
    sustainabilityImage1Buffer,
  ] = await Promise.all([
    // Hero Carousel
    fetchFileByURL('https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg'),
    fetchFileByURL(
      'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ),
    fetchFileByURL(
      'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ),
    fetchFileByURL('https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg'),
    fetchFileByURL(
      'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ),
    fetchFileByURL(
      'https://images.pexels.com/photos/29707595/pexels-photo-29707595/free-photo-of-classic-red-car-with-white-glove-detailing.jpeg',
    ),
    fetchFileByURL(
      'https://images.pexels.com/photos/14615263/pexels-photo-14615263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ),
    fetchFileByURL('https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg'),
    fetchFileByURL(
      'https://images.pexels.com/photos/5622896/pexels-photo-5622896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ),
    fetchFileByURL('https://images.pexels.com/photos/5691520/pexels-photo-5691520.jpeg'),
    fetchFileByURL('https://images.pexels.com/photos/339614/pexels-photo-339614.jpeg'),
    fetchFileByURL(
      'https://images.pexels.com/photos/1206593/pexels-photo-1206593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ),
    fetchFileByURL('https://images.pexels.com/photos/1206593/pexels-photo-1206593.jpeg'),
    fetchFileByURL(
      'https://images.pexels.com/photos/2391/dirty-industry-stack-factory.jpg?auto=compress&cs=tinysrgb&w=1200',
    ),
    fetchFileByURL('https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg'),

    // Quick Access Cards
    fetchFileByURL('https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg'),
    fetchFileByURL('https://images.pexels.com/photos/2391/dirty-industry-stack-factory.jpg'),
    fetchFileByURL('https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg'),
    fetchFileByURL('https://images.pexels.com/photos/1048018/pexels-photo-1048018.jpeg'),

    // Sustainability
    fetchFileByURL(
      'https://images.pexels.com/photos/15480413/pexels-photo-15480413/free-photo-of-modern-futuristic-construction-in-city.jpeg',
    ),
  ])

  const [
    slide1HeroBgDoc,
    slide1HeroFeaturedItemDoc,
    slide1HeroCard1Doc,
    slide1HeroCard2Doc,
    slide1HeroCard3Doc,
    slide2HeroBgDoc,
    slide2HeroFeaturedItemDoc,
    slide2HeroCard1Doc,
    slide2HeroCard2Doc,
    slide2HeroCard3Doc,
    slide3HeroBgDoc,
    slide3HeroFeaturedItemDoc,
    slide3HeroCard1Doc,
    slide3HeroCard2Doc,
    slide3HeroCard3Doc,
    quickAccessCard1Doc,
    quickAccessCard2Doc,
    quickAccessCard3Doc,
    quickAccessCard4Doc,
    sustainabilityImage1Doc,
  ] = await Promise.all([
    payload.create({
      collection: 'media',
      data: {
        alt: 'Slide 1 Hero Background',
      },
      file: slide1HeroBgBuffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Slide 1 Hero Featured Item',
      },
      file: slide1HeroFeaturedItemBuffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Slide 1 Hero Card 1',
      },
      file: slide1HeroCard1Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Slide 1 Hero Card 2',
      },
      file: slide1HeroCard2Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Slide 1 Hero Card 3',
      },
      file: slide1HeroCard3Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Slide 2 Hero Background',
      },
      file: slide2HeroBgBuffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Slide 2 Hero Featured Item',
      },
      file: slide2HeroFeaturedItemBuffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Slide 2 Hero Card 1',
      },
      file: slide2HeroCard1Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Slide 2 Hero Card 2',
      },
      file: slide2HeroCard2Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Slide 2 Hero Card 3',
      },
      file: slide2HeroCard3Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Slide 3 Hero Background',
      },
      file: slide3HeroBgBuffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Slide 3 Hero Featured Item',
      },
      file: slide3HeroFeaturedItemBuffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Slide 3 Hero Card 1',
      },
      file: slide3HeroCard1Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Slide 3 Hero Card 2',
      },
      file: slide3HeroCard2Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Slide 3 Hero Card 3',
      },
      file: slide3HeroCard3Buffer,
    }),

    // Quick Access Cards
    payload.create({
      collection: 'media',
      data: {
        alt: 'Quick Access Card 1',
      },
      file: quickAccessCard1Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Quick Access Card 2',
      },
      file: quickAccessCard2Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Quick Access Card 3',
      },
      file: quickAccessCard3Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Quick Access Card 4',
      },
      file: quickAccessCard4Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Sustainability Image 1',
      },
      file: sustainabilityImage1Buffer,
    }),
  ])

  // -------------------- APPLICATIONS -------------------- //

  const [
    applicationsImage1Buffer,
    applicationsImage2Buffer,
    applicationsImage3Buffer,
    applicationsImage4Buffer,
    applicationsImage5Buffer,
    applicationsImage6Buffer,
  ] = await Promise.all([
    fetchFileByURL('https://plus.unsplash.com/premium_photo-1682142455929-cfdbbf6d7f4e'),
    fetchFileByURL('https://images.pexels.com/photos/5994241/pexels-photo-5994241.jpeg'),
    fetchFileByURL('https://images.pexels.com/photos/459486/pexels-photo-459486.jpeg'),
    fetchFileByURL('https://images.unsplash.com/photo-1573506154555-62ee33ed5c61'),
    fetchFileByURL('https://images.unsplash.com/photo-1643533117971-b2de345cf3dc'),
    fetchFileByURL('https://images.unsplash.com/photo-1706881811932-da4389051b8f'),
  ])

  const [
    applicationsImage1Doc,
    applicationsImage2Doc,
    applicationsImage3Doc,
    applicationsImage4Doc,
    applicationsImage5Doc,
    applicationsImage6Doc,
  ] = await Promise.all([
    payload.create({
      collection: 'media',
      data: {
        alt: 'Waterborne Coatings Application',
      },
      file: applicationsImage1Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Polyurethane Dispersions Application',
      },
      file: applicationsImage2Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Durable Polyesters Application',
      },
      file: applicationsImage3Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Powder Coatings Application',
      },
      file: applicationsImage4Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Adhesives & Inks Application',
      },
      file: applicationsImage5Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Synthetic Lubricants Application',
      },
      file: applicationsImage6Buffer,
    }),
  ])

  // -------------------- INDUSTRIES -------------------- //

  const [
    automotiveBuffer,
    coatingsPaintsInksBuffer,
    polymersPlasticsBuffer,
    adhesivesSealantsBuffer,
    pharmaceuticalsBuffer,
    petrochemicalsRefineriesBuffer,
    batteryEnergyStorageBuffer,
    buildingConstructionBuffer,
  ] = await Promise.all([
    fetchFileByURL('https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg'),
    fetchFileByURL(
      'https://images.pexels.com/photos/16751235/pexels-photo-16751235/free-photo-of-paint-stick-on-blue-wall.jpeg',
    ),
    fetchFileByURL(
      'https://images.pexels.com/photos/31115985/pexels-photo-31115985/free-photo-of-close-up-of-white-plastic-screw-caps-in-bulk.jpeg',
    ),
    fetchFileByURL('https://images.pexels.com/photos/6124242/pexels-photo-6124242.jpeg'),
    fetchFileByURL(
      'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg',
    ),
    fetchFileByURL('https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg'),
    fetchFileByURL('https://images.pexels.com/photos/9800022/pexels-photo-9800022.jpeg'),
    fetchFileByURL('https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'),
  ])

  // Industry Challenge Images
  const [
    // Automotive Industry Challenges
    automotiveChallenge1Buffer,
    automotiveChallenge2Buffer,
    automotiveChallenge3Buffer,
    automotiveChallenge4Buffer,

    // Coatings, Paints & Inks Challenges
    coatingsChallenge1Buffer,
    coatingsChallenge2Buffer,
    coatingsChallenge3Buffer,

    // Polymers & Plastics Challenges
    polymersChallenge1Buffer,
    polymersChallenge2Buffer,
    polymersChallenge3Buffer,
    polymersChallenge4Buffer,
    polymersChallenge5Buffer,

    // Adhesives & Sealants Challenges
    adhesivesChallenge1Buffer,
    adhesivesChallenge2Buffer,
    adhesivesChallenge3Buffer,
    adhesivesChallenge4Buffer,

    // Pharmaceuticals & Biotechnology Challenges
    pharmaChallenge1Buffer,
    pharmaChallenge2Buffer,
    pharmaChallenge3Buffer,
    pharmaChallenge4Buffer,

    // Petrochemicals & Refineries Challenges
    petroChallenge1Buffer,
    petroChallenge2Buffer,
    petroChallenge3Buffer,
    petroChallenge4Buffer,

    // Battery & Energy Storage Challenges
    batteryChallenge1Buffer,
    batteryChallenge2Buffer,
    batteryChallenge3Buffer,

    // Building & Construction Challenges
    constructionChallenge1Buffer,
    constructionChallenge2Buffer,
    constructionChallenge3Buffer,
    constructionChallenge4Buffer,
  ] = await Promise.all([
    // Automotive Industry Challenges
    fetchFileByURL(
      'https://images.pexels.com/photos/14615263/pexels-photo-14615263.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ),
    fetchFileByURL(
      'https://images.pexels.com/photos/8478276/pexels-photo-8478276.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load',
    ),
    fetchFileByURL(
      'https://images.pexels.com/photos/10162529/pexels-photo-10162529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ),
    fetchFileByURL(
      'https://images.pexels.com/photos/5506047/pexels-photo-5506047.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load',
    ),

    // Coatings, Paints & Inks Challenges
    fetchFileByURL(
      'https://plus.unsplash.com/premium_photo-1682142471398-ccc685f5c849?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29hdGluZ3N8ZW58MHx8MHx8fDA%3D',
    ),
    fetchFileByURL(
      'https://images.unsplash.com/photo-1673297821205-e0575bbc2ab7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvd2RlcmVkJTIwY29hdGluZ3N8ZW58MHx8MHx8fDA%3D',
    ),
    fetchFileByURL(
      'https://plus.unsplash.com/premium_photo-1682142462983-82489bc75cd9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGNvYXRpbmd8ZW58MHx8MHx8fDA%3D',
    ),

    // Polymers & Plastics Challenges
    fetchFileByURL(
      'https://images.pexels.com/photos/15158323/pexels-photo-15158323/free-photo-of-blue-guitar-pick-in-hand.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ),
    fetchFileByURL(
      'https://plus.unsplash.com/premium_photo-1681426678542-613c306013e1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UG9seW1lcnxlbnwwfHwwfHx8MA%3D%3D',
    ),
    fetchFileByURL(
      'https://images.unsplash.com/photo-1624804642361-a070c6497471?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9seXVyZXRoYW5lJTIwYnVpbGRpbmclMjBibG9ja3N8ZW58MHx8MHx8fDA%3D',
    ),
    fetchFileByURL(
      'https://plus.unsplash.com/premium_photo-1674641195187-99d2160eed5a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9seW1lcnxlbnwwfHwwfHx8MA%3D%3D',
    ),
    fetchFileByURL(
      'https://plus.unsplash.com/premium_photo-1669301638284-ed33553ef8fa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TW9ub21lcnMlMjBmb3IlMjBQb2x5bWVyJTIwU3ludGhlc2lzfGVufDB8fDB8fHww',
    ),

    // Adhesives & Sealants Challenges
    fetchFileByURL(
      'https://plus.unsplash.com/premium_photo-1683141430181-f4cfe16b1e62?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VhbGFudHxlbnwwfHwwfHx8MA%3D%3D',
    ),
    fetchFileByURL(
      'https://images.pexels.com/photos/7180822/pexels-photo-7180822.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ),
    fetchFileByURL(
      'https://images.pexels.com/photos/5963144/pexels-photo-5963144.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ),
    fetchFileByURL(
      'https://images.pexels.com/photos/3735769/pexels-photo-3735769.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ),

    // Pharmaceuticals & Biotechnology Challenges
    fetchFileByURL(
      'https://plus.unsplash.com/premium_photo-1661956660871-2cd646709c90?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGhhcm1hY2V1dGljYWwlMjBwcm9kdWN0aW9ufGVufDB8fDB8fHww',
    ),
    fetchFileByURL(
      'https://plus.unsplash.com/premium_photo-1663039952394-00e73f235728?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UGhhcm1hY2V1dGljYWwlMjBwcm9kdWN0aW9ufGVufDB8fDB8fHww',
    ),
    fetchFileByURL(
      'https://images.unsplash.com/photo-1729949129758-0b668478dce5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGhhcm1hY2V1dGljYWwlMjBwcm9kdWN0aW9ufGVufDB8fDB8fHww',
    ),
    fetchFileByURL(
      'https://images.unsplash.com/photo-1631980838946-755ba8443ab7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGhhcm1hY2V1dGljYWwlMjBwcm9kdWN0aW9ufGVufDB8fDB8fHww',
    ),

    // Petrochemicals & Refineries Challenges
    fetchFileByURL(
      'https://plus.unsplash.com/premium_photo-1682144394281-372331accc78?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGV0cm9jaGVtaWNhbHN8ZW58MHx8MHx8fDA%3D',
    ),
    fetchFileByURL(
      'https://images.unsplash.com/photo-1570615541379-e6b7ab6d4eb9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGV0cm9jaGVtaWNhbCUyMHN5bnRoZXNpc3xlbnwwfHwwfHx8MA%3D%3D',
    ),
    fetchFileByURL(
      'https://plus.unsplash.com/premium_photo-1682144440391-bece4365baa3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGV0cm9jaGVtaWNhbHN8ZW58MHx8MHx8fDA%3D',
    ),
    fetchFileByURL(
      'https://plus.unsplash.com/premium_photo-1682148230470-2b67a322ab34?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBldHJvY2hlbWljYWxzfGVufDB8fDB8fHww',
    ),

    // Battery & Energy Storage Challenges
    fetchFileByURL(
      'https://plus.unsplash.com/premium_photo-1723507297320-2366db25341e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T3JnYW5pYyUyMFJhZGljYWwlMjBCYXR0ZXJpZXMlMjAoT1JCcyl8ZW58MHx8MHx8fDA%3D',
    ),
    fetchFileByURL(
      'https://images.pexels.com/photos/7904403/pexels-photo-7904403.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ),
    fetchFileByURL(
      'https://images.unsplash.com/photo-1581244249923-172ef5029576?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGJhdHRlcmllc3xlbnwwfHwwfHx8MA%3D%3D',
    ),

    // Building & Construction Challenges
    fetchFileByURL(
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ),
    fetchFileByURL(
      'https://images.pexels.com/photos/5691692/pexels-photo-5691692.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ),
    fetchFileByURL(
      'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ),
    fetchFileByURL(
      'https://images.pexels.com/photos/5691644/pexels-photo-5691644.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ),
  ])

  const [
    automotiveDoc,
    coatingsPaintsInksDoc,
    polymersPlasticsDoc,
    adhesivesSealantsDoc,
    pharmaceuticalsDoc,
    petrochemicalsRefineriesDoc,
    batteryEnergyStorageDoc,
    buildingConstructionDoc,
  ] = await Promise.all([
    payload.create({
      collection: 'media',
      data: {
        alt: 'Automotive Industry',
      },
      file: automotiveBuffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Coatings, Paints & Inks Industry',
      },
      file: coatingsPaintsInksBuffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Polymers & Plastics Industry',
      },
      file: polymersPlasticsBuffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Adhesives & Sealants Industry',
      },
      file: adhesivesSealantsBuffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Pharmaceuticals & Biotechnology Industry',
      },
      file: pharmaceuticalsBuffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Petrochemicals & Refineries Industry',
      },
      file: petrochemicalsRefineriesBuffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Battery Energy Storage Industry',
      },
      file: batteryEnergyStorageBuffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Building & Construction Industry',
      },
      file: buildingConstructionBuffer,
    }),
  ])

  // Industry Challenge Images
  const [
    // Automotive Industry Challenges
    automotiveChallenge1Doc,
    automotiveChallenge2Doc,
    automotiveChallenge3Doc,
    automotiveChallenge4Doc,

    // Coatings, Paints & Inks Challenges
    coatingsChallenge1Doc,
    coatingsChallenge2Doc,
    coatingsChallenge3Doc,

    // Polymers & Plastics Challenges
    polymersChallenge1Doc,
    polymersChallenge2Doc,
    polymersChallenge3Doc,
    polymersChallenge4Doc,
    polymersChallenge5Doc,

    // Adhesives & Sealants Challenges
    adhesivesChallenge1Doc,
    adhesivesChallenge2Doc,
    adhesivesChallenge3Doc,
    adhesivesChallenge4Doc,

    // Pharmaceuticals & Biotechnology Challenges
    pharmaChallenge1Doc,
    pharmaChallenge2Doc,
    pharmaChallenge3Doc,
    pharmaChallenge4Doc,

    // Petrochemicals & Refineries Challenges
    petroChallenge1Doc,
    petroChallenge2Doc,
    petroChallenge3Doc,
    petroChallenge4Doc,

    // Battery & Energy Storage Challenges
    batteryChallenge1Doc,
    batteryChallenge2Doc,
    batteryChallenge3Doc,

    // Building & Construction Challenges
    constructionChallenge1Doc,
    constructionChallenge2Doc,
    constructionChallenge3Doc,
    constructionChallenge4Doc,
  ] = await Promise.all([
    // Automotive Industry Challenges
    payload.create({
      collection: 'media',
      data: {
        alt: 'Advanced Automotive Coatings Challenge',
      },
      file: automotiveChallenge1Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'High-Performance Automotive Adhesives Challenge',
      },
      file: automotiveChallenge2Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Surface Preparation & Cleaning Challenge',
      },
      file: automotiveChallenge3Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Component Testing & Compliance Challenge',
      },
      file: automotiveChallenge4Buffer,
    }),

    // Coatings, Paints & Inks Challenges
    payload.create({
      collection: 'media',
      data: {
        alt: 'Waterborne Coatings Challenge',
      },
      file: coatingsChallenge1Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Powder Coatings & Resin Modification Challenge',
      },
      file: coatingsChallenge2Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Environmental Regulations Challenge',
      },
      file: coatingsChallenge3Buffer,
    }),

    // Polymers & Plastics Challenges
    payload.create({
      collection: 'media',
      data: {
        alt: 'Polymer Stabilization Challenge',
      },
      file: polymersChallenge1Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Controlled Polymerization Challenge',
      },
      file: polymersChallenge2Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Polyurethane Building Blocks Challenge',
      },
      file: polymersChallenge3Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Crosslinking & Property Enhancement Challenge',
      },
      file: polymersChallenge4Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Monomers for Polymer Synthesis Challenge',
      },
      file: polymersChallenge5Buffer,
    }),

    // Adhesives & Sealants Challenges
    payload.create({
      collection: 'media',
      data: {
        alt: 'Waterborne Adhesive Systems Challenge',
      },
      file: adhesivesChallenge1Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Reactive Hot Melt Adhesives Challenge',
      },
      file: adhesivesChallenge2Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Enhanced Strength & Durability Challenge',
      },
      file: adhesivesChallenge3Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Performance Additives & Custom Solutions Challenge',
      },
      file: adhesivesChallenge4Buffer,
    }),

    // Pharmaceuticals & Biotechnology Challenges
    payload.create({
      collection: 'media',
      data: {
        alt: 'API Synthesis Challenge',
      },
      file: pharmaChallenge1Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Biomedical Materials Challenge',
      },
      file: pharmaChallenge2Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Diagnostic Aids Challenge',
      },
      file: pharmaChallenge3Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Drug Discovery Challenge',
      },
      file: pharmaChallenge4Buffer,
    }),

    // Petrochemicals & Refineries Challenges
    payload.create({
      collection: 'media',
      data: {
        alt: 'Fuel Processing & Storage Challenge',
      },
      file: petroChallenge1Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Petrochemical Synthesis Challenge',
      },
      file: petroChallenge2Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Downstream Raw Materials Challenge',
      },
      file: petroChallenge3Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Process Optimization Challenge',
      },
      file: petroChallenge4Buffer,
    }),

    // Battery & Energy Storage Challenges
    payload.create({
      collection: 'media',
      data: {
        alt: 'Organic Radical Batteries Challenge',
      },
      file: batteryChallenge1Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Redox Flow Batteries Challenge',
      },
      file: batteryChallenge2Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Material Development Challenge',
      },
      file: batteryChallenge3Buffer,
    }),

    // Building & Construction Challenges
    payload.create({
      collection: 'media',
      data: {
        alt: 'Concrete & Cement Enhancement Challenge',
      },
      file: constructionChallenge1Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Plasters & Coatings Challenge',
      },
      file: constructionChallenge2Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Formwork Release Challenge',
      },
      file: constructionChallenge3Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Construction Adhesives & Sealants Challenge',
      },
      file: constructionChallenge4Buffer,
    }),
  ])

  // -------------------- SUSTAINABILITY -------------------- //

  const [
    sustainabilityHeroImageBuffer,
    sustainabilityPillar1Buffer,
    sustainabilityPillar2Buffer,
    sustainabilityPillar3Buffer,
    sustainabilityPillar4Buffer,
    sustainabilityFocus1Buffer,
    sustainabilityFocus2Buffer,
    sustainabilityFocus3Buffer,
    sustainabilityFocus4Buffer,
  ] = await Promise.all([
    fetchFileByURL(
      'https://images.unsplash.com/photo-1590519919397-5f068c8dca78?q=80&w=800&h=400&auto=format&fit=crop&ixlib=rb-4.1.0',
    ),
    fetchFileByURL(
      'https://images.unsplash.com/photo-1594790632591-1e21e4c3dfc9?q=80&w=800&h=400&auto=format&fit=crop&ixlib=rb-4.1.0',
    ),
    fetchFileByURL(
      'https://images.unsplash.com/photo-1616996691748-3f5f78093ab0?q=80&w=800&h=400&auto=format&fit=crop&ixlib=rb-4.1.0',
    ),
    fetchFileByURL(
      'https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=800&h=400&auto=format&fit=crop&ixlib=rb-4.1.0',
    ),
    fetchFileByURL(
      'https://images.unsplash.com/photo-1713078044558-cdb22828cf07?q=80&w=800&h=400&auto=format&fit=crop&ixlib=rb-4.1.0',
    ),
    fetchFileByURL(
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&h=400&auto=format&fit=crop&ixlib=rb-4.0.3',
    ),
    fetchFileByURL(
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&h=400&auto=format&fit=crop&ixlib=rb-4.0.3',
    ),
    fetchFileByURL(
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&h=400&auto=format&fit=crop&ixlib=rb-4.0.3',
    ),
    fetchFileByURL(
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&h=400&auto=format&fit=crop&ixlib=rb-4.0.3',
    ),
  ])

  const [
    sustainabilityHeroImageDoc,
    sustainabilityPillar1Doc,
    sustainabilityPillar2Doc,
    sustainabilityPillar3Doc,
    sustainabilityPillar4Doc,
    sustainabilityFocus1Doc,
    sustainabilityFocus2Doc,
    sustainabilityFocus3Doc,
    sustainabilityFocus4Doc,
  ] = await Promise.all([
    payload.create({
      collection: 'media',
      data: {
        alt: 'Sustainability Hero Image',
      },
      file: sustainabilityHeroImageBuffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Sustainability Pillar 1 Image',
      },
      file: sustainabilityPillar1Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Sustainability Pillar 2 Image',
      },
      file: sustainabilityPillar2Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Sustainability Pillar 3 Image',
      },
      file: sustainabilityPillar3Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Sustainability Pillar 4 Image',
      },
      file: sustainabilityPillar4Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Sustainability Focus 1 Image',
      },
      file: sustainabilityFocus1Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Sustainability Focus 2 Image',
      },
      file: sustainabilityFocus2Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Sustainability Focus 3 Image',
      },
      file: sustainabilityFocus3Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Sustainability Focus 4 Image',
      },
      file: sustainabilityFocus4Buffer,
    }),
  ])

  //* -------------------- SEEDING SERVICES -------------------- *//
  payload.logger.info('— Seeding services...')

  const [
    researchDevelopment,
    analyticalTesting,
    cosmeticsManufacturing,
    regulatoryTechnicalSupport,
    customSynthesisManufacturing,
  ] = await Promise.all([
    payload.create({
      collection: 'services',
      data: {
        title: 'Research & Development',
        _status: 'published',
        description:
          "VUP's R&D division solves complex chemistry challenges across diverse industries.With 70+ years of chemical expertise, we transform ideas into viable technological solutions tailored to your needs.",
        featuredImage: image1Doc.id,
        features: [
          {
            feature: 'Experience',
            description:
              '70+ years of expertise in chemical development and innovation with a proven track record of solving complex chemistry challenges',
          },
          {
            feature: 'Patents Granted',
            description:
              'Over 900 patents demonstrating our innovation capabilities and commitment to advancing chemical science',
          },
          {
            feature: 'Quality Management',
            description:
              'ISO 9001 certified processes ensuring consistent quality and reliable project execution across all R&D activities',
          },
          {
            feature: 'Pilot Capacity',
            description:
              '250 t/yr capacity for process scale-up and validation with dedicated pilot plant facilities for comprehensive testing',
          },
          {
            feature: 'Integrated Solutions',
            description:
              'Seamless support from analytical services to production capabilities, providing complete technological foundations for commercialization',
          },
          {
            feature: 'Proven Track Record',
            description:
              'Successful collaborations with leading international partners including DSM, UPM, and Perstorp across diverse chemical sectors',
          },
        ],
        subServices: [
          {
            title: 'Route Scouting & Feasibility',
            description:
              'Expert evaluation and design of synthetic routes through comprehensive literature research, patent analysis, and practical chemistry expertise to identify optimal pathways for your target compounds. Our experienced team conducts thorough feasibility studies, evaluating technical risks and commercial viability to ensure the most efficient and cost-effective synthetic approach for your specific requirements.',
            image: image1Doc.id,
            displayItems: [
              { item: 'Literature & Patent Analysis' },
              { item: 'Synthetic Route Design' },
              { item: 'Technical Risk Assessment' },
              { item: 'Commercial Feasibility Evaluation' },
            ],
            features: [
              {
                feature: 'Comprehensive Research',
                description:
                  'Extensive literature and patent analysis combined with practical chemistry insights to identify the most promising synthetic routes while avoiding potential IP conflicts.',
              },
              {
                feature: 'Risk Mitigation',
                description:
                  'Detailed technical and commercial risk assessment including safety considerations, regulatory requirements, and scalability challenges to minimize project uncertainties.',
              },
              {
                feature: 'Expert Evaluation',
                description:
                  'Practical chemistry insights from experienced specialists with deep knowledge in petrochemicals, organic synthesis, and specialty chemical development.',
              },
            ],
            link: 'route-scouting',
          },
          {
            title: 'Custom Synthesis',
            description:
              'Laboratory-scale synthesis of novel and known compounds, intermediates, and chemical specialties from grams to kilograms, with expertise in complex multi-step synthesis and challenging chemistry. Our flexible laboratory setups and experienced chemists handle demanding synthetic challenges including acetylene chemistry, TEMPO derivatives, methylolalkanoic acids, and other specialized chemical transformations.',
            image: image2Doc.id,
            displayItems: [
              { item: 'Gram to Kilogram Scale' },
              { item: 'Complex Multi-Step Synthesis' },
              { item: 'Novel Compound Development' },
              { item: 'Intermediate Production' },
            ],
            features: [
              {
                feature: 'Scale Flexibility',
                description:
                  'From milligrams to kilograms capability with consistent quality and reproducibility, utilizing flexible laboratory synthesis setups adapted to specific project requirements.',
              },
              {
                feature: 'Complex Chemistry',
                description:
                  'Expertise in challenging reagents, multi-step reactions, and specialized areas including acetylene chemistry, TEMPO derivatives, and polyurethane catalysts.',
              },
              {
                feature: 'Quality Assurance',
                description:
                  'Comprehensive analytical support through our SNAS-accredited ATBEL division ensuring product purity and specification compliance throughout the synthesis process.',
              },
            ],
            link: 'custom-synthesis',
          },
          {
            title: 'Process Development & Optimization',
            description:
              'Developing safe, efficient, and scalable synthetic processes with focus on optimizing reaction conditions, improving yields and purity, reducing costs, and implementing greener chemistry principles. Our team specializes in reaction calorimetry, distillation optimization, crystallization studies, and solvent elimination strategies to create robust, environmentally conscious manufacturing processes.',
            image: image1Doc.id,
            displayItems: [
              { item: 'Reaction Optimization' },
              { item: 'Yield Improvement' },
              { item: 'Cost Reduction' },
              { item: 'Green Chemistry Implementation' },
            ],
            features: [
              {
                feature: 'Process Efficiency',
                description:
                  'Optimization of reaction conditions, catalyst selection, and process parameters to maximize efficiency while maintaining product quality and safety standards.',
              },
              {
                feature: 'Sustainability Focus',
                description:
                  'Implementation of greener chemistry principles including solvent elimination, waste reduction, and energy-efficient processes to minimize environmental impact.',
              },
              {
                feature: 'Safety Enhancement',
                description:
                  'Development of safe and reliable synthetic processes with comprehensive safety parameter measurements and risk assessment protocols.',
              },
            ],
            link: 'process-development',
          },
          {
            title: 'Process Scale-Up & Verification',
            description:
              'Validating processes at laboratory and pilot plant scale utilizing pilot capacities up to 250 t/yr for specific products, gathering essential data for technological foundations and commercial viability. Our dedicated pilot plant facilities provide comprehensive process verification, enabling seamless technology transfer and de-risking commercial production scale-up.',
            image: image2Doc.id,
            displayItems: [
              { item: 'Pilot Plant Validation' },
              { item: 'Scale-Up Data Generation' },
              { item: 'Process Verification' },
              { item: 'Technology Transfer Support' },
            ],
            features: [
              {
                feature: 'Pilot Plant Facilities',
                description:
                  'Dedicated facilities with up to 250 t/yr capacity equipped with flexible reactor systems for comprehensive process verification and scale-up validation.',
              },
              {
                feature: 'Data Generation',
                description:
                  'Comprehensive data collection including reaction kinetics, heat transfer, mass balance, and safety parameters to establish solid technological foundations.',
              },
              {
                feature: 'Commercial Readiness',
                description:
                  'Validation protocols and technology transfer support ensuring seamless transition from pilot scale to commercial production with minimized technical risks.',
              },
            ],
            link: 'process-scale-up',
          },
          {
            title: 'Analytical Method Development',
            description:
              'Creating and validating analytical methods for raw materials, intermediates, and final products in collaboration with our SNAS-accredited ATBEL division, ensuring reliable quality control throughout development. Our comprehensive analytical capabilities include GC, LC, GC-MS, FT-IR, NMR, and specialized testing methods tailored to support your R&D and production requirements.',
            image: image1Doc.id,
            displayItems: [
              { item: 'Method Creation & Validation' },
              { item: 'Raw Material Analysis' },
              { item: 'Product Quality Control' },
              { item: 'SNAS Accredited Testing' },
            ],
            features: [
              {
                feature: 'Accredited Laboratory',
                description:
                  'SNAS accredited ATBEL division providing reliable analytical services with comprehensive quality management systems and certified procedures.',
              },
              {
                feature: 'Comprehensive Analysis',
                description:
                  'Full spectrum analytical capabilities including GC, LC, NMR, FT-IR, AAS, titration, and physical-safety testing to support all phases of chemical development.',
              },
              {
                feature: 'Method Validation',
                description:
                  'Rigorous validation protocols ensuring method reliability, accuracy, and precision according to international standards and regulatory requirements.',
              },
            ],
            link: 'analytical-method-development',
          },
          {
            title: 'Purification & Isolation',
            description:
              'Developing comprehensive strategies for achieving desired product purity through advanced separation techniques including distillation, crystallization, filtration, and extraction methods. Our expertise in purification processes ensures optimal product quality while maintaining cost-effectiveness and scalability for commercial applications.',
            image: image2Doc.id,
            displayItems: [
              { item: 'Distillation Optimization' },
              { item: 'Crystallization Studies' },
              { item: 'Advanced Filtration' },
              { item: 'Extraction Methods' },
            ],
            features: [
              {
                feature: 'Advanced Techniques',
                description:
                  'Expertise in multiple purification methods including fractional distillation, recrystallization, chromatographic separation, and membrane filtration technologies.',
              },
              {
                feature: 'Purity Optimization',
                description:
                  'Systematic approach to achieving target purity levels while optimizing yield and minimizing waste through tailored purification strategies.',
              },
              {
                feature: 'Scalability Focus',
                description:
                  'Development of purification processes with commercial scalability in mind, ensuring smooth transition from laboratory to production scale.',
              },
            ],
            link: 'purification-isolation',
          },
        ],
        accreditations: [
          {
            accreditation: 'ISO 9001 Certification',
          },
          {
            accreditation: 'R&D Competency Certificate',
          },
          {
            accreditation: 'SNAS Accreditation',
          },
        ],
        slug: 'research-development',
      },
    }),
    payload.create({
      collection: 'services',
      data: {
        title: 'Analytical Testing Services',
        _status: 'published',
        description:
          'Accredited analytical, technical-safety, and ecological testing services with SNAS S-118 (ISO/IEC 17025) certification. Comprehensive chemical analysis and regulatory compliance testing.',
        featuredImage: image2Doc.id,
        features: [
          {
            feature: 'SNAS Accreditation',
            description:
              'SNAS S-118 accreditation according to ISO/IEC 17025 ensuring reliable, internationally recognized analytical results with rigorous quality controls',
          },
          {
            feature: 'Comprehensive Testing',
            description:
              'Wide range of analytical techniques including chromatography, spectroscopy, titrimetric analysis, and physical-chemical testing in one accredited facility',
          },
          {
            feature: 'Expert Leadership',
            description:
              'Led by Ing. Ľudovít Žiak, PhD., with over 15 years of analytical laboratory experience and specialized expertise in workplace atmosphere monitoring',
          },
          {
            feature: 'Regulatory Compliance',
            description:
              'Testing according to international standards (OECD, ISO, DIN) and regulations including REACH compliance and automotive standards',
          },
        ],
        subServices: [
          {
            title: 'Chromatographic Analysis',
            description:
              'Advanced chromatographic techniques including gas chromatography (GC, GC-MS), high-performance liquid chromatography (HPLC), and isotachophoresis (ITP) for composition analysis, VOC determination, impurity identification, and anion determination. Our state-of-the-art equipment enables precise analysis of complex mixtures with method development capabilities.',
            image: image1Doc.id,
            displayItems: [
              { item: 'Gas Chromatography (GC, GC-MS)' },
              { item: 'High-Performance Liquid Chromatography (HPLC)' },
              { item: 'Isotachophoresis (ITP)' },
              { item: 'VOC Analysis (PV3341)' },
            ],
            features: [
              {
                feature: 'Advanced Instrumentation',
                description:
                  'Modern GC, HPLC, and GC-MS systems for precise composition analysis, impurity identification, and trace analysis with excellent sensitivity and reproducibility.',
              },
              {
                feature: 'Method Development',
                description:
                  'Custom analytical method development and validation capabilities to meet specific client requirements and regulatory standards.',
              },
            ],
            link: 'chromatographic-analysis',
          },
          {
            title: 'Spectroscopic Analysis',
            description:
              'Comprehensive spectroscopic analysis using atomic absorption spectrometry (AAS), infrared spectroscopy (FT-IR), nuclear magnetic resonance (NMR), UV/VIS spectrometry, and mass spectrometry for substance identification, metal determination, and structural analysis. Our spectroscopic capabilities support both qualitative and quantitative analysis needs.',
            image: image2Doc.id,
            displayItems: [
              { item: 'Atomic Absorption Spectrometry (AAS)' },
              { item: 'Infrared Spectroscopy (FT-IR)' },
              { item: 'Nuclear Magnetic Resonance (NMR)' },
              { item: 'UV/VIS Spectrometry' },
            ],
            features: [
              {
                feature: 'Multi-technique Approach',
                description:
                  'Comprehensive spectroscopic suite enabling complete structural characterization and identification of unknown substances with high confidence.',
              },
              {
                feature: 'Metal Analysis',
                description:
                  'Specialized atomic absorption spectrometry capabilities for accurate determination of metals in various sample matrices.',
              },
            ],
            link: 'spectroscopic-analysis',
          },
          {
            title: 'Physical & Technical-Safety Testing',
            description:
              'Physical property determination and technical-safety testing according to OECD and ISO standards including melting point, boiling point, density, vapour pressure, surface tension, water solubility, flash point, and flammability testing. Essential for regulatory compliance, safety assessments, and product characterization across multiple industries.',
            image: image1Doc.id,
            displayItems: [
              { item: 'Physical Properties (OECD Standards)' },
              { item: 'Flash Point & Flammability' },
              { item: 'Workplace Atmosphere Monitoring' },
              { item: 'REACH Compliance Testing' },
            ],
            features: [
              {
                feature: 'OECD Compliance',
                description:
                  'Testing according to internationally recognized OECD guidelines ensuring regulatory compliance for chemical registration and safety assessments.',
              },
              {
                feature: 'Safety Monitoring',
                description:
                  'Specialized workplace atmosphere monitoring and measurement of chemical factors to ensure occupational health and safety compliance.',
              },
            ],
            link: 'physical-safety-testing',
          },
          {
            title: 'Titrimetric & Gravimetric Analysis',
            description:
              'Classical analytical techniques including Karl Fischer titration for water content determination, acid and hydroxyl value measurements, iodometric titrations, and gravimetric determinations for moisture, ash, and extractable substances. These proven methods provide reliable quantitative analysis for quality control and specification testing.',
            image: image2Doc.id,
            displayItems: [
              { item: 'Karl Fischer Titration' },
              { item: 'Acid & Hydroxyl Value' },
              { item: 'Gravimetric Determinations' },
              { item: 'Moisture & Ash Content' },
            ],
            features: [
              {
                feature: 'Proven Methods',
                description:
                  'Well-established analytical techniques providing reliable and accurate quantitative results for routine quality control and specification testing.',
              },
              {
                feature: 'Quality Control',
                description:
                  'Essential testing for raw materials, in-process monitoring, and final product quality assurance across various industries.',
              },
            ],
            link: 'titrimetric-gravimetric',
          },
        ],
        accreditations: [
          {
            accreditation: 'SNAS S-118 Accreditation',
          },
          {
            accreditation: 'ISO 9001 Certification',
          },
          {
            accreditation: 'R&D Competency Certificate',
          },
        ],
        slug: 'analytical-testing',
      },
    }),
    payload.create({
      collection: 'services',
      data: {
        title: 'Custom Cosmetics Manufacturing',
        _status: 'published',
        description:
          "Leverage VUP's 70+ years of chemical production experience and dedicated cosmetics expertise (since 1990) for your custom cosmetic manufacturing needs.",
        featuredImage: image1Doc.id,
        features: [
          {
            feature: 'Proven Experience',
            description:
              '70+ years of chemical production expertise with dedicated cosmetics department since 1990, serving as a major producer of protective hand creams in Slovakia and Czech Republic',
          },
          {
            feature: 'Quality Certified',
            description:
              'ISO 9001:2015 certified manufacturing with rigorous quality controls and adherence to European cosmetic legislation ensuring compliant, high-quality products',
          },
          {
            feature: 'Award-Winning Products',
            description:
              'Slovak Gold award-winning Peggy Massage Gels and proven formulations including Fortea hand creams, body lotions, and medical diagnostic gels',
          },
          {
            feature: 'Scalable Production',
            description:
              'Flexible manufacturing capacity from small batches to large-scale production with packaging options including tubes, bottles, dispensers, and canisters',
          },
          {
            feature: 'Development Capabilities',
            description:
              'In-house formulation labs with expert cosmetic chemists creating custom solutions based on client specifications, market trends, and regulatory requirements',
          },
          {
            feature: 'Medical Grade Expertise',
            description:
              'Specialized production of medical and diagnostic gels including sonography gels (Gelson) and ECG/EEG conductive gels with health certificates',
          },
        ],
        subServices: [
          {
            title: 'White Label Services',
            description:
              "Brand and sell VUP's existing, market-tested cosmetic formulations including award-winning products. Our white label portfolio features proven formulations like Fortea hand creams and body lotions with various natural extracts and propolis, Fortea massage oils with essential oils, Slovak Gold award-winning Peggy massage gels with plant extracts (marigold, chestnut, capsaicin, menthol, comfrey, arnica), and medical diagnostic gels including alcohol-free Gelson sonography gel and EV ECG/EEG conductive gel.",
            image: image1Doc.id,
            displayItems: [
              { item: 'Fortea Hand Creams & Body Lotions' },
              { item: 'Award-Winning Peggy Massage Gels' },
              { item: 'Fortea Massage Oils' },
              { item: 'Medical Diagnostic Gels (Gelson, EV Gel)' },
            ],
            features: [
              {
                feature: 'Market-Tested Formulas',
                description:
                  'Proven formulations with established market success including award-winning products and major market share in protective hand creams across Slovakia and Czech Republic.',
              },
              {
                feature: 'Quick Market Entry',
                description:
                  'Faster time-to-market with existing formulations that have undergone rigorous testing and compliance verification, reducing development time and regulatory risks.',
              },
              {
                feature: 'Diverse Product Range',
                description:
                  'Comprehensive portfolio spanning skin care, massage products, and medical diagnostic gels with various natural extracts, essential oils, and specialized formulations.',
              },
            ],
            link: 'white-label',
          },
          {
            title: 'Private Label Services',
            description:
              'Custom formulation and manufacturing of unique cosmetic products based on your specifications and requirements. Our experienced team utilizes dedicated development laboratories to create tailored formulations incorporating desired ingredients, functions, and market trends such as natural extracts, paraben-free formulations, and hypoallergenic solutions. We provide comprehensive support from initial concept through finished product, including custom packaging solutions and regulatory compliance assistance.',
            image: image2Doc.id,
            displayItems: [
              { item: 'Custom Formulation Development' },
              { item: 'Product Range Expertise' },
              { item: 'Regulatory Compliance Support' },
              { item: 'Packaging Customization' },
            ],
            features: [
              {
                feature: 'Expert Formulation Team',
                description:
                  'Skilled cosmetic chemists and formulation experts led by experienced professionals creating innovative solutions tailored to your brand vision and target market requirements.',
              },
              {
                feature: 'Comprehensive Product Range',
                description:
                  'Proven capability across skin care products, massage oils and gels, medical diagnostic gels, and openness to developing new formulation types based on client needs.',
              },
              {
                feature: 'End-to-End Support',
                description:
                  'Complete turnkey solutions from initial formulation through production, packaging, quality control, and regulatory documentation including CPNP notification support.',
              },
            ],
            link: 'private-label',
          },
          {
            title: 'Quality Assurance & Compliance',
            description:
              'Rigorous quality management ensuring adherence to European cosmetic legislation and medical device requirements. Our comprehensive quality system includes in-house microbiological testing according to international standards (STN ISO 21527-2, STN EN ISO 21149), raw material and product quality control via SNAS S-118 accredited ATBEL laboratories using advanced analytical techniques (GC-MS, HPLC, FT-IR), and complete documentation supporting regulatory compliance including Certificates of Analysis and Product Information File elements.',
            image: image1Doc.id,
            displayItems: [
              { item: 'European Regulatory Compliance' },
              { item: 'Microbiological Testing' },
              { item: 'Accredited Analytical Testing' },
              { item: 'Complete Documentation' },
            ],
            features: [
              {
                feature: 'Certified Quality Systems',
                description:
                  'ISO 9001:2015 certified quality management system covering cosmetic production with Responsible Care certification ensuring consistent quality and environmental responsibility.',
              },
              {
                feature: 'Advanced Testing Capabilities',
                description:
                  'In-house microbiological laboratories and SNAS S-118 accredited analytical facilities providing comprehensive quality control from raw materials to finished products.',
              },
              {
                feature: 'Regulatory Expertise',
                description:
                  'Deep understanding of EU cosmetic regulations and medical device requirements with proven track record including health certificates for medical products like Gelson gel.',
              },
            ],
            link: 'quality-compliance',
          },
        ],
        accreditations: [
          {
            accreditation: 'ISO 9001:2015 Certification',
          },
          {
            accreditation: 'SNAS S-118 Accreditation',
          },
          {
            accreditation: 'Responsible Care Certification',
          },
          {
            accreditation: 'R&D Competency Certificate',
          },
        ],
        slug: 'cosmetics-manufacturing',
      },
    }),
    payload.create({
      collection: 'services',
      data: {
        title: 'Regulatory & Technical Support',
        _status: 'published',
        description:
          'Navigate complex chemical regulations and overcome technical hurdles with expert support combining deep regulatory knowledge and 70+ years of R&D expertise.',
        featuredImage: image1Doc.id,
        features: [
          {
            feature: 'REACH Expertise',
            description:
              'Proven experience with successful REACH registrations including DMPA, DMBA, and TEMPO derivatives, providing practical guidance based on real-world compliance achievements.',
          },
          {
            feature: 'Accredited Testing',
            description:
              'SNAS S-118 accredited analytical, technical-safety, and ecological laboratories providing reliable data for regulatory submissions and compliance documentation.',
          },
          {
            feature: 'Quality Certified',
            description:
              'ISO 9001:2015 certified quality management system ensuring consistent service delivery and reliable consultation processes across all regulatory and technical support activities.',
          },
          {
            feature: 'Industry Recognition',
            description:
              'Responsible Care certification and R&D Competency Certificate from Ministry of Education demonstrating commitment to safety, environment, and technical excellence.',
          },
          {
            feature: 'Expert Team',
            description:
              'Direct access to experienced department heads in R&D, analytics, and commercial operations with cross-functional expertise in regulatory compliance and technical problem-solving.',
          },
          {
            feature: 'Comprehensive Support',
            description:
              'End-to-end support from initial regulatory assessment through technical data provision to final compliance documentation and ongoing consultation services.',
          },
        ],
        subServices: [
          {
            title: 'REACH Compliance Support',
            description:
              "Comprehensive REACH guidance based on VUP's direct experience with successful full and intermediate registrations. We provide practical support for data gathering, dossier preparation, and compliance strategy development, leveraging our proven track record with substances like DMPA, DMBA, and TEMPO derivatives. Our accredited laboratories ensure reliable technical data for regulatory submissions.",
            image: image1Doc.id,
            displayItems: [
              { item: 'Registration Strategy Development' },
              { item: 'Technical Data Generation' },
              { item: 'Dossier Preparation Support' },
              { item: 'Compliance Assessment' },
            ],
            features: [
              {
                feature: 'Proven Experience',
                description:
                  'Direct experience with successful REACH registrations across multiple substance categories, providing practical insights and proven strategies for compliance.',
              },
              {
                feature: 'Data Generation',
                description:
                  'Access to SNAS S-118 accredited laboratories for generating reliable physical-chemical, technical-safety, and ecological data required for REACH submissions.',
              },
              {
                feature: 'Strategic Guidance',
                description:
                  'Expert consultation on registration strategies, data requirements, and cost-effective approaches to meeting REACH obligations while minimizing regulatory risks.',
              },
            ],
            link: 'reach-compliance',
          },
          {
            title: 'Quality Management Systems',
            description:
              'Expert consultation for implementing and maintaining ISO 9001 quality management systems in chemical R&D and production environments. Drawing from our own ISO 9001:2015 certification experience, we provide practical guidance for establishing robust quality processes, documentation systems, and continuous improvement frameworks tailored to chemical industry requirements.',
            image: image2Doc.id,
            displayItems: [
              { item: 'ISO 9001 Implementation' },
              { item: 'Quality Process Development' },
              { item: 'Documentation Systems' },
              { item: 'Audit Preparation' },
            ],
            features: [
              {
                feature: 'Practical Experience',
                description:
                  'Guidance based on our own successful ISO 9001:2015 implementation and maintenance across R&D, production, and analytical testing operations.',
              },
              {
                feature: 'Industry-Specific',
                description:
                  'Tailored approaches for chemical industry quality management addressing unique challenges in R&D, manufacturing, and analytical testing environments.',
              },
            ],
            link: 'quality-management',
          },
          {
            title: 'Safety & Environmental Compliance',
            description:
              'Comprehensive support for chemical safety and environmental compliance including workplace safety assessments, environmental impact evaluations, and regulatory guidance. Our Responsible Care certification and extensive safety testing capabilities ensure reliable guidance for safe handling, storage, disposal, and environmental protection measures across chemical operations.',
            image: image1Doc.id,
            displayItems: [
              { item: 'Safety Assessment Support' },
              { item: 'Environmental Impact Evaluation' },
              { item: 'Workplace Atmosphere Monitoring' },
              { item: 'Responsible Care Implementation' },
            ],
            features: [
              {
                feature: 'Certified Expertise',
                description:
                  'Responsible Care certification demonstrating commitment to safety and environmental protection with proven implementation experience.',
              },
              {
                feature: 'Testing Capabilities',
                description:
                  'Access to accredited safety testing including workplace atmosphere monitoring, flash point determination, and environmental impact assessments.',
              },
            ],
            link: 'safety-environmental',
          },
          {
            title: 'Technical Consultation',
            description:
              'In-depth technical consultation leveraging 70+ years of chemical R&D expertise and analytical capabilities to solve complex product and process challenges. Our experienced team provides expert advice on chemical processes, product optimization, troubleshooting, and application development, supported by comprehensive analytical testing and technical data provision from our accredited laboratories.',
            image: image2Doc.id,
            displayItems: [
              { item: 'Process Optimization' },
              { item: 'Product Development Support' },
              { item: 'Technical Problem Solving' },
              { item: 'Application Guidance' },
            ],
            features: [
              {
                feature: 'R&D Expertise',
                description:
                  'Access to 70+ years of chemical R&D experience with proven track record in complex synthesis, process development, and product optimization across diverse chemical sectors.',
              },
              {
                feature: 'Analytical Support',
                description:
                  'Comprehensive analytical capabilities through SNAS S-118 accredited laboratories providing technical data, troubleshooting support, and product characterization services.',
              },
              {
                feature: 'Cross-Functional Teams',
                description:
                  'Collaborative approach combining regulatory awareness, technical depth, and analytical expertise to provide comprehensive solutions for complex technical challenges.',
              },
            ],
            link: 'technical-consultation',
          },
        ],
        accreditations: [
          {
            accreditation: 'ISO 9001:2015 Certification',
          },
          {
            accreditation: 'SNAS S-118 Accreditation',
          },
          {
            accreditation: 'Responsible Care Certification',
          },
          {
            accreditation: 'R&D Competency Certificate',
          },
        ],
        slug: 'regulatory-technical-support',
      },
    }),
    payload.create({
      collection: 'services',
      data: {
        title: 'Custom Synthesis & Manufacturing',
        _status: 'published',
        description:
          'Partner with VUP for expert custom chemical synthesis and reliable small-scale manufacturing in Europe. Complex chemistry, reliably delivered.',
        featuredImage: image1Doc.id,
        features: [
          {
            feature: 'Expert Problem Solving',
            description:
              "Leverage VUP's 70+ years R&D experience for complex synthetic challenges including multi-step routes and specialized chemistries with proven track record in demanding applications.",
          },
          {
            feature: 'Quality Assured',
            description:
              'High-purity focus with rigorous QC backed by ISO 9001:2015 certified processes and SNAS S-118 accredited analytical laboratories ensuring reliable, internationally recognized results.',
          },
          {
            feature: 'Scalability',
            description:
              'Seamless transition from gram-scale synthesis to pilot-scale production with flexible manufacturing capacity up to 250 t/yr utilizing versatile pilot plant infrastructure.',
          },
          {
            feature: 'IP Security',
            description:
              'Strict confidentiality agreements and secure handling of intellectual property with proven experience in protecting client innovations and proprietary synthetic routes.',
          },
          {
            feature: 'European Partner',
            description:
              'Reliable EU-based synthesis and manufacturing services ensuring regulatory compliance, secure supply chains, and cost-effective solutions within the European market.',
          },
          {
            feature: 'Integrated Services',
            description:
              'Combined R&D, synthesis, analytical, and regulatory expertise providing comprehensive solutions from initial route development through commercial production and compliance support.',
          },
        ],
        subServices: [
          {
            title: 'Custom Synthesis',
            description:
              'Specialized synthesis of non-catalogue fine chemicals, complex intermediates, reference standards, and chemical specialties. We tackle challenging multi-step synthetic routes leveraging our deep expertise in acetylene chemistry, TEMPO derivatives, hydroxy acids, and other specialized chemistries. From route scouting and feasibility studies to laboratory-scale synthesis, we deliver high-purity compounds tailored to your specific requirements.',
            image: image1Doc.id,
            displayItems: [
              { item: 'Route Scouting & Feasibility Studies' },
              { item: 'Laboratory Scale Synthesis (g-kg)' },
              { item: 'High Purity Standards' },
              { item: 'Multi-step Complex Synthesis' },
            ],
            features: [
              {
                feature: 'Synthesis Expertise',
                description:
                  'Deep knowledge in complex organic synthesis including acetylene chemistry, TEMPO derivatives, and specialized functional molecules with proven commercial success.',
              },
              {
                feature: 'Scale Range',
                description:
                  'Flexible synthesis capabilities from laboratory grams to kilogram quantities with consistent quality and reproducibility across all scales.',
              },
              {
                feature: 'Purity Focus',
                description:
                  'Emphasis on achieving high purity standards tailored to client specifications with comprehensive analytical characterization and quality documentation.',
              },
            ],
            link: 'custom-synthesis',
          },
          {
            title: 'Process Development & Scale-Up',
            description:
              'Optimization of synthetic routes for improved efficiency, safety, yield, and cost-effectiveness. We provide comprehensive process development services from laboratory optimization through pilot plant validation, generating robust technological foundations for commercial production. Our experienced team combines practical chemistry knowledge with engineering expertise to ensure successful scale-up transitions.',
            image: image2Doc.id,
            displayItems: [
              { item: 'Process Optimization' },
              { item: 'Safety Assessment & Validation' },
              { item: 'Yield Improvement Studies' },
              { item: 'Scale-up Validation' },
            ],
            features: [
              {
                feature: 'Production Capacity',
                description:
                  'Pilot plant infrastructure with up to 250 t/yr capacity featuring versatile reactors and downstream processing units for comprehensive scale-up validation.',
              },
              {
                feature: 'Technical Documentation',
                description:
                  'Comprehensive process documentation including safety assessments, operating procedures, and technological foundations supporting commercial implementation.',
              },
              {
                feature: 'Risk Mitigation',
                description:
                  'Systematic approach to identifying and addressing scale-up challenges including safety considerations, equipment limitations, and process optimization opportunities.',
              },
            ],
            link: 'process-development',
          },
          {
            title: 'Small-Scale & Toll Manufacturing',
            description:
              'Reliable contract manufacturing of fine chemicals and specialties utilizing our versatile pilot plant infrastructure. We offer flexible toll manufacturing services for kilogram to multi-tonne campaigns based on established processes, whether VUP-developed or client-provided. Our ISO 9001:2015 certified manufacturing processes ensure consistent quality and reliable delivery for your production needs.',
            image: image1Doc.id,
            displayItems: [
              { item: 'Contract Manufacturing (kg-tonne)' },
              { item: 'Toll Processing Services' },
              { item: 'Rigorous Quality Control' },
              { item: 'Regulatory Compliance Support' },
            ],
            features: [
              {
                feature: 'Manufacturing Flexibility',
                description:
                  'Adaptable production capabilities utilizing versatile pilot plant equipment for various batch sizes and chemical processes with proven reliability.',
              },
              {
                feature: 'Quality Systems',
                description:
                  'ISO 9001:2015 certified manufacturing processes with rigorous in-process and final product QC using SNAS S-118 accredited analytical laboratories.',
              },
              {
                feature: 'Supply Chain Reliability',
                description:
                  'Secure European manufacturing base ensuring reliable supply chains, regulatory compliance, and cost-effective production within the EU market.',
              },
            ],
            link: 'toll-manufacturing',
          },
        ],
        accreditations: [
          {
            accreditation: 'ISO 9001:2015 Certification',
          },
          {
            accreditation: 'SNAS S-118 Accreditation',
          },
          {
            accreditation: 'R&D Competency Certificate',
          },
          {
            accreditation: 'Responsible Care Certification',
          },
        ],
        slug: 'custom-synthesis-manufacturing',
      },
    }),
  ])

  //* -------------------- SEEDING PRODUCT CATEGORIES -------------------- *//
  payload.logger.info('— Seeding product categories...')

  const [
    hydroxyAcids,
    hinderedAmines,
    glycolEthers,
    phospholipidPrecursors,
    polymerisationInhibitors,
    specialtyHinderedAmines,
    diaminopolyethyleneGlycols,
    chromanolsDerivatives,
  ] = await Promise.all([
    payload.create({
      collection: 'productCategories',
      data: {
        name: 'Hydroxy Acids',
        description:
          'High-purity hydroxy acids including DMPA, DMBA, and HPVA. Essential building blocks for environmentally friendly waterborne systems (PUDs, alkyds, polyesters) and high-performance polymers used in coatings, inks, adhesives, and lubricants.',
        image: imageHomeDoc.id,
        slug: 'hydroxy-acids',
        productComparison: false,
        applications: [
          {
            imageSrc: applicationsImage1Doc.id,
            title: 'Waterborne Coatings',
            description:
              'Eco-friendly coating solutions with reduced VOCs and excellent performance for sustainable industrial applications.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Polyurethane Dispersions',
            description:
              'High-quality waterborne PUD systems enabling advanced coatings with superior properties and low environmental impact.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Durable Polyesters',
            description:
              'Building blocks for highly durable polyesters requiring exceptional thermal, hydrolytic, and weather resistance.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Powder Coatings',
            description:
              'Key intermediates for premium solvent-free coating technology offering superior finish and environmental benefits.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Adhesives & Inks',
            description:
              'Essential components for high-strength bonding formulations and vibrant, durable printing applications.',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: 'Synthetic Lubricants',
            description:
              'Critical intermediates for advanced industrial lubricants delivering exceptional performance in extreme conditions.',
          },
        ],
      },
    }),
    payload.create({
      collection: 'productCategories',
      data: {
        name: 'Hindered Amines',
        description:
          'High-purity hindered amines with sterically hindered piperidine structure and stable radicals. Essential building blocks for HALS light stabilizers, TEMPO derivatives for selective oxidation, and versatile intermediates for demanding applications.',
        image: image2Doc.id,
        slug: 'hindered-amines',
        productComparison: true,
        applications: [
          {
            imageSrc: applicationsImage1Doc.id,
            title: 'Polymer Light Stabilization',
            description:
              'HALS intermediates and ready-to-use light stabilizers protecting polymers from UV degradation and extending service life.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Polymerization Inhibition',
            description:
              'Stable radical systems for controlled radical processes and precise polymerization control in industrial applications.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Selective Oxidation',
            description:
              'TEMPO-based catalysts enabling efficient and highly selective chemical transformations in organic synthesis.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Pharmaceutical Intermediates',
            description:
              'Specialized TEMPO derivatives serving as key building blocks and API intermediates in pharmaceutical synthesis.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Spin Labeling / EPR Spectroscopy',
            description:
              'Advanced stable radical probes for molecular analysis and spectroscopic research applications.',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: 'Advanced Chemical Synthesis',
            description:
              'Versatile hindered amine intermediates and functional molecules for complex synthetic pathways and research.',
          },
        ],
      },
    }),
    payload.create({
      collection: 'productCategories',
      data: {
        name: 'Glycol Ethers',
        description:
          'Versatile oxygenated solvents containing both ether and alcohol functional groups. Derived from ethylene or propylene glycol, these compounds excel as coupling agents and solvents across industrial applications.',
        image: image3Doc.id,
        slug: 'glycol-ethers',
        productComparison: true,
        applications: [
          {
            imageSrc: applicationsImage1Doc.id,
            title: 'Paints & Coatings',
            description:
              'Essential solvents in paints, lacquers, and varnishes providing excellent dissolution properties and film formation.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Cleaning Formulations',
            description:
              'Effective solvents for industrial and household cleaning products with superior degreasing capabilities.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Printing Inks',
            description:
              'High-performance solvents enabling optimal ink flow and print quality in commercial printing applications.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Coupling Agents',
            description:
              'Enhance miscibility between water and organic phases or different organic liquids in formulations.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Chemical Intermediates',
            description:
              'Building blocks for synthesis of acetates and other derivatives in specialty chemical manufacturing.',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: 'Specialty Products',
            description:
              'Functional components in VUP formulations like VUPIN polymerization inhibitors as carriers and solvents.',
          },
        ],
      },
    }),
    payload.create({
      collection: 'productCategories',
      data: {
        name: 'Phospholipid Precursors',
        description:
          'Essential biochemical building blocks for phospholipid synthesis - the foundation of healthy cell membranes. VUP supplies high-purity Colamin Phosphate and its salts, crucial for supplement, veterinary, and pharmaceutical applications.',
        image: image3Doc.id,
        slug: 'phospholipid-precursors',
        productComparison: true,
        applications: [
          {
            imageSrc: applicationsImage1Doc.id,
            title: 'Dietary Supplements',
            description:
              'Cognitive health and cellular integrity formulations targeting general wellness and brain function support.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Veterinary Nutrition',
            description:
              'Feed additives enhancing animal health, development, and cellular function in veterinary applications.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Pharmaceutical Formulations',
            description:
              'High-purity intermediates and excipients for pharmaceutical manufacturing and drug development.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Cell Culture Media',
            description:
              'Essential components for cell biology research, tissue culture, and biotechnology applications.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Biochemical Research',
            description:
              'Premium-grade reagents for scientific investigation and phospholipid metabolism studies.',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: 'Cosmetic Formulations',
            description:
              'Specialized ingredients for advanced skincare products targeting cellular health and membrane integrity.',
          },
        ],
      },
    }),
    payload.create({
      collection: 'productCategories',
      data: {
        name: 'Polymerisation Inhibitors',
        description:
          'Advanced liquid polymerisation inhibitor formulations, including our VUPIN range based on proven H-TEMPO chemistry, designed to enhance process safety, protect equipment, and ensure product quality in demanding petrochemical applications.',
        image: image3Doc.id,
        slug: 'polymerisation-inhibitors',
        productComparison: true,
        applications: [
          {
            imageSrc: applicationsImage1Doc.id,
            title: 'Refinery Operations',
            description:
              'FCC gasoline stabilization and pygas processing solutions preventing unwanted polymerisation in critical refinery streams.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Monomer Storage & Transport',
            description:
              'Safe handling and storage solutions for reactive monomers including styrene, acrylates, and vinyl compounds.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Monomer Purification Processes',
            description:
              'Distillation column protection preventing fouling and ensuring operational efficiency during monomer purification.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Olefin Plant Operations',
            description:
              'Ethylene plant protection systems maintaining process reliability and preventing equipment damage from unwanted reactions.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Equipment Protection',
            description:
              'Long-term asset preservation through effective polymerisation control and fouling prevention strategies.',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: 'Process Safety & Reliability',
            description:
              'Enhanced operational safety through proven TEMPO-based radical scavenging technology and reliable inhibition performance.',
          },
        ],
      },
    }),
    payload.create({
      collection: 'productCategories',
      data: {
        name: 'Specialty Hindered Amines & Derivatives',
        description:
          'VUP leverages extensive R&D expertise to offer specialized derivatives including HALS intermediates, ready-to-use HALS products, and unique functionalized TEMPO derivatives for research and advanced materials.',
        image: image3Doc.id,
        slug: 'specialty-hindered-amines',
        productComparison: true,
        applications: [
          {
            imageSrc: applicationsImage1Doc.id,
            title: 'HALS Synthesis Intermediates',
            description:
              'Advanced intermediates like pentamethylpiperidine and amino-TMP for synthesizing high-performance hindered amine light stabilizers.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Polymer Light Stabilization',
            description:
              'Ready-to-use HALS products equivalent to Tinuvin 770 and 765/292 for protecting polymers, coatings, and plastics from UV degradation.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Spin Labeling & EPR Spectroscopy',
            description:
              'Functionalized TEMPO derivatives like amino-TEMPO and spiro-TEMPO-acid for bioconjugation and advanced analytical studies.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Custom Synthesis Building Blocks',
            description:
              'Versatile functionalized derivatives serving as starting materials for specialized chemical synthesis and material development.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Radical Chemistry Research',
            description:
              'Stable radical compounds and intermediates for studying radical mechanisms and developing new radical-based applications.',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: 'Advanced Materials Development',
            description:
              'Specialized derivatives enabling innovation in functional materials, bioconjugates, and next-generation chemical products.',
          },
        ],
      },
    }),
    payload.create({
      collection: 'productCategories',
      data: {
        name: 'Diaminopolyethylene Glycols',
        description:
          'VUP is the unique global producer of high-purity DAPEG polymers featuring PEG chains with reactive amino terminals, essential for biomedical coatings and surface modification applications.',
        image: image1Doc.id,
        slug: 'diaminopolyethylene-glycols',
        productComparison: false,
        applications: [
          {
            imageSrc: applicationsImage1Doc.id,
            title: 'Biomedical Coatings',
            description:
              'Essential raw material for creating highly lubricious and hydrophilic coatings on medical devices such as catheters, guidewires, and implants.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Surface Modification',
            description:
              'Enables covalent attachment of PEG chains to surfaces like nanoparticles and biosensors to impart protein resistance and biocompatibility.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'PEGylation Applications',
            description:
              'Used in bioconjugation to attach PEG chains to proteins, peptides, and drug molecules via reactive amine groups.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Advanced Polymer Synthesis',
            description:
              'Serves as difunctional building block for specialized polymers like hydrogels, block copolymers, and dendrimers incorporating PEG segments.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Research Chemicals',
            description:
              'High-purity reagent for fundamental research in biomaterials science, surface chemistry, and polymer chemistry applications.',
          },
        ],
      },
    }),
    payload.create({
      collection: 'productCategories',
      data: {
        name: 'Chromanols & Derivatives',
        description:
          'Potent antioxidants featuring the core structure of Vitamin E, including Trolox and related chromanol derivatives used as research tools, analytical standards, and specialty intermediates.',
        image: image1Doc.id,
        slug: 'chromanols-derivatives',
        productComparison: false,
        applications: [
          {
            imageSrc: applicationsImage1Doc.id,
            title: 'Antioxidant Research & Development',
            description:
              'Essential tools for studying antioxidant mechanisms and developing new protective formulations against oxidative stress.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Analytical Standards (TEAC Assay)',
            description:
              'Trolox serves as the benchmark standard in TEAC (Trolox Equivalent Antioxidant Capacity) assays for measuring antioxidant activity.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Oxidative Stress Studies',
            description:
              'Water-soluble Vitamin E analogs used in cellular and biological research to investigate oxidative damage mechanisms.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Cosmetic & Pharmaceutical Research',
            description:
              'Screening compounds for antioxidant properties in cosmetic formulations and pharmaceutical development programs.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Specialty Chemical Synthesis',
            description:
              'Valuable intermediates and building blocks for synthesizing advanced antioxidant compounds with tailored properties.',
          },
        ],
      },
    }),
  ])

  //* -------------------- SEEDING PRODUCTS -------------------- *//
  payload.logger.info('— Seeding products...')

  const [
    dmpa,
    dmba,
    hpva,
    hTempo,
    trolox,
    tempo,
    temp,
    dapeg,
    benzoyloxyTmp,
    acetamidoTempo,
    tempone,
    colamin,
    colaminPhosphate,
    colaminPhosphatesodiumSalt,
    vupin,
    pentamethylpiperidine,
    pentamethylpiperidinol,
    aminoTmp,
    hals770,
    hals765,
    aminoTempo,
    spiroTempoAcid,
    galvinoxyl,
  ] = await Promise.all([
    payload.create({
      collection: 'products',
      data: {
        name: 'Dimethylolbutyric Acid (DMBA)',
        _status: 'published',
        description:
          'An advanced trifunctional intermediate enabling next-generation waterborne resins. Facilitates solvent-free PUD synthesis with lower processing temperature and enhanced film resistance.',
        chemicalStructureImage: dmbaStructureDoc.id,
        technicalSpecifications: {
          chemicalName: '2,2-Bis(hydroxymethyl)butanoic acid',
          casNumber: '10097-02-6',
          ecNumber: '424-090-1',
          synonyms: [
            { synonym: '2,2-Bis(hydroxymethyl)butanoic acid' },
            { synonym: 'DMBA' },
            { synonym: 'Dimethylolbutyric Acid' },
          ],
          molecularFormula: 'C₆H₁₂O₄',
          molecularWeight: '148.16 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'White crystalline powder',
          purity: 'min. 99.0 % wt',
          acidValue: 'min. 375 mg KOH/g',
          hydroxylValue: 'min. 750 mg KOH/g',
          waterContent: 'max. 0.3 % wt',
          ashContent: 'max. 0.03 % wt',
        },
        chemicalFamily: [hydroxyAcids],
        applications: [
          {
            application: 'Solvent-Free PUDs',
            description:
              'Enables synthesis of high-performance waterborne polyurethane dispersions without organic solvents for eco-friendly coatings.',
            image: image1Doc.id,
          },
          {
            application: 'Electronic Coatings',
            description:
              'Used in waterborne conformal coatings for PCB protection offering enhanced water resistance and purity for demanding applications.',
            image: image2Doc.id,
          },
          {
            application: 'Leather Finishing',
            description:
              'Applied in water-based polyurethane emulsions for durable leather topcoats in automotive, footwear, and upholstery applications.',
            image: image3Doc.id,
          },
          {
            application: 'High-Performance Coatings',
            description:
              'Formulates waterborne systems requiring enhanced water resistance, hydrolytic stability, and low-VOC compliance.',
            image: image1Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Solvent-Free Formulation Enabler',
            description:
              'Facilitates waterborne PUD synthesis with significantly reduced or eliminated organic solvents, lowering VOCs and improving workplace safety.',
          },
          {
            feature: 'Lower Processing Temperature',
            description:
              'Dissolves readily at lower temperatures compared to DMPA, simplifying melt processing and reducing energy consumption.',
          },
          {
            feature: 'Enhanced Film Performance',
            description:
              'Contributes to PUD films with superior water resistance and hydrolytic stability due to the ethyl side group structure.',
          },
          {
            feature: 'High Purity',
            description:
              'Supplied at 99% purity ensuring reliable performance in demanding applications including sensitive electronic coatings.',
          },
          {
            feature: 'Excellent Hydrophilic Agent',
            description:
              'Effectively incorporates carboxyl groups into polymer backbones ensuring stable water dispersibility after neutralization.',
          },
          {
            feature: 'Versatile Intermediate',
            description:
              'Suitable for advanced water-soluble alkyds, polyesters, adhesives, and biodegradable polymers requiring high performance.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What are the main advantages of DMBA compared to DMPA?',
            answer:
              'DMBA offers easier processing due to lower melting point, facilitates solvent-free PUD synthesis, and potentially provides enhanced water resistance in final films.',
          },
          {
            question: 'Can DMBA be used to make solvent-free PUDs?',
            answer:
              "Yes, DMBA's properties are particularly well-suited for developing stable waterborne polyurethane dispersions with little or no organic co-solvents.",
          },
          {
            question: 'Is DMBA suitable for electronic coating applications?',
            answer:
              'Yes, DMBA forms high-purity, stable waterborne dispersions with good film properties making it ideal for conformal coatings and protective electronic layers.',
          },
          {
            question: 'What purity level does VUP offer for DMBA?',
            answer:
              'VUP offers high-purity DMBA at 99% minimum, ensuring reliable performance in demanding applications requiring consistent quality.',
          },
        ],
        slug: 'dmba',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: 'Dimethylolpropionic Acid (DMPA)',
        _status: 'published',
        description:
          'Essential trifunctional intermediate enabling high-performance waterborne coatings, polyurethane dispersions, alkyds, and polyesters with superior stability and environmental benefits.',
        chemicalStructureImage: dmbaStructureDoc.id,
        technicalSpecifications: {
          chemicalName: '3-Hydroxy-2-(hydroxymethyl)-2-methylpropanoic acid',
          casNumber: '4767-03-7',
          ecNumber: '225-306-3',
          synonyms: [{ synonym: '2,2-Bis(hydroxymethyl)propionic acid' }, { synonym: 'DMPA' }],
          molecularFormula: 'C₅H₁₀O₄',
          molecularWeight: '134.13 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'White crystalline powder',
          purity: 'min. 98.5 % wt',
          acidValue: 'min. 412 mg KOH/g',
          hydroxylValue: 'min. 824 mg KOH/g',
          waterContent: 'max. 0.3 % wt',
          ashContent: 'max. 0.03 % wt',
        },
        chemicalFamily: [hydroxyAcids],
        applications: [
          {
            application: 'Waterborne PUDs',
            description:
              'Key internal emulsifier for stable polyurethane dispersions enabling low-VOC automotive and industrial coatings.',
            image: image1Doc.id,
          },
          {
            application: 'Water-Soluble Alkyds',
            description:
              'Improves hydrolytic stability in alkyd resins for high-performance wood and furniture coatings.',
            image: image2Doc.id,
          },
          {
            application: 'Powder Coatings',
            description:
              'Enhances flow, gloss, and impact resistance in epoxy-polyester and polyester-based powder systems.',
            image: image3Doc.id,
          },
          {
            application: 'Electro-deposition Coatings',
            description:
              'Provides acid functionality crucial for automotive primers and demanding industrial E-coat applications.',
            image: image1Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Enables Waterborne Formulations',
            description:
              'Carboxylic acid group allows easy incorporation into resins, promoting water dispersibility after neutralization for environmentally preferred systems.',
          },
          {
            feature: 'Improves Coating Properties',
            description:
              'Contributes to fast air-drying, high gloss, superior toughness, flexibility, and improved early water spot resistance in various coating systems.',
          },
          {
            feature: 'Enhances Adhesion',
            description:
              'Polar carboxyl groups improve adhesion of coatings and elastomers to various substrates including plastics, glass, and steel.',
          },
          {
            feature: 'High Purity & Consistency',
            description:
              'Offered at minimum 98.5% purity ensuring reliable performance and consistent results with low sodium grade available for sensitive applications.',
          },
          {
            feature: 'Versatile Reactivity',
            description:
              'Trifunctional structure with two primary hydroxyls and one tertiary carboxyl allows versatile use in polymer synthesis and water dispersion.',
          },
          {
            feature: 'Low Toxicity Profile',
            description:
              'Essentially non-toxic (Oral LD50 > 2000 mg/kg, rat) offering a safer alternative to other monomers used for similar purposes.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: "What is VUP's DMPA primarily used for?",
            answer:
              "VUP's DMPA is a key building block for environmentally friendly waterborne coatings like PUDs, alkyds, polyesters, inks, and adhesives for demanding applications.",
          },
          {
            question: "Is VUP's DMPA suitable for formulating waterborne systems?",
            answer:
              'Absolutely. DMPA enables excellent water solubility or dispersibility after neutralization, making it ideal for high-performance waterborne formulations.',
          },
          {
            question: "What is the physical form and purity of VUP's DMPA?",
            answer:
              'VUP supplies DMPA as high-purity (minimum 98.5%) white crystalline powder, ensuring consistent quality for your formulations.',
          },
          {
            question: 'Does VUP offer different grades of DMPA?',
            answer:
              'Yes, VUP offers both standard grade and low sodium grade DMPA. The low sodium grade provides benefits for certain high-performance dispersion applications.',
          },
          {
            question: 'How does DMPA improve coating properties?',
            answer:
              'DMPA contributes to fast air-drying, high gloss, superior toughness, flexibility, and improved water spot resistance while enhancing adhesion to various substrates.',
          },
        ],
        slug: 'dmpa',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: '3-Hydroxypivalic Acid (HPVA)',
        _status: 'published',
        description:
          'A unique hydroxy acid featuring a neopentyl structure, essential for synthesizing high-performance polyesters and esters with exceptional hydrolytic stability, thermal stability, and weather resistance.',
        chemicalStructureImage: hpvaStructureDoc.id,
        technicalSpecifications: {
          chemicalName: '3-Hydroxy-2,2-dimethylpropanoic acid',
          casNumber: '4835-90-9',
          ecNumber: '225-419-8',
          synonyms: [
            { synonym: 'Hydroxypivalic Acid' },
            { synonym: 'HPVA' },
            { synonym: '2,2-Dimethyl-3-hydroxypropionic acid' },
          ],
          molecularFormula: 'C₅H₁₀O₃',
          molecularWeight: '118.13 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'White crystalline powder/solid',
          purity: 'min. 98.0 % wt',
          meltingPoint: '122 – 124 °C',
        },
        chemicalFamily: [hydroxyAcids],
        applications: [
          {
            application: 'Polyester Resins for Coatings',
            description:
              'Key building block for high-performance polyester resins used in durable powder coatings and coil coatings with excellent weatherability and chemical resistance.',
            image: image1Doc.id,
          },
          {
            application: 'Ester Synthesis (HPN)',
            description:
              'Used to produce neopentyl glycol hydroxypivalate (HPN), an important diol modifier for coating resins and adhesives.',
            image: image2Doc.id,
          },
          {
            application: 'Synthetic Lubricants',
            description:
              'Raw material for specialty esters in high-temperature synthetic lubricant formulations, providing thermal and hydrolytic stability.',
            image: image3Doc.id,
          },
          {
            application: 'Chemical Intermediate',
            description:
              'Used in synthesis pathways for pharmaceuticals, agrochemicals, or specialty chemicals requiring its unique neopentyl structure.',
            image: image1Doc.id,
          },
          {
            application: 'Polyurethane Modification',
            description:
              'Incorporated as a co-monomer or modifier to enhance the stability of polyurethane systems in demanding applications.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Exceptional Stability',
            description:
              'The neopentyl structure imparts outstanding hydrolytic stability, thermal stability, chemical resistance, and weather resistance to derived polymers.',
          },
          {
            feature: 'Durable Polymer Building Block',
            description:
              'Serves as a key monomer for producing high-performance polyester resins in applications demanding long-term durability.',
          },
          {
            feature: 'Versatile Ester Intermediate',
            description:
              'Readily undergoes esterification to produce valuable derivatives like HPN or esters for synthetic lubricants.',
          },
          {
            feature: 'High Purity',
            description:
              'VUP provides HPVA with minimum 98% purity, ensuring consistent reactivity and performance in sensitive synthesis processes.',
          },
          {
            feature: 'Modifier Potential',
            description:
              'Can be used as a co-monomer or modifier in polyurethane or other polymer systems where enhanced stability is desired.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What makes HPVA different from other hydroxy acids like DMPA or DMBA?',
            answer:
              "HPVA's neopentyl structure provides exceptional thermal, hydrolytic, and chemical stability. Unlike DMPA/DMBA, it has one hydroxyl group, making it ideal as a stability-enhancing building block in polyesters/esters.",
          },
          {
            question: "What are the main applications for VUP's HPVA?",
            answer:
              "It's primarily used to produce highly durable polyester resins for powder and coil coatings, specialty esters like HPN or synthetic lubricants, and as an intermediate in pharmaceutical synthesis.",
          },
          {
            question: 'What purity level does VUP offer for HPVA?',
            answer:
              'VUP offers high-purity HPVA with a minimum specification of 98%. Full specifications are available in the Technical Data Sheet.',
          },
          {
            question: 'Why is HPVA preferred for weather-resistant applications?',
            answer:
              'The unique neopentyl structure of HPVA provides excellent weather resistance and durability in outdoor applications, making polymers more resistant to UV degradation and humidity.',
          },
          {
            question: 'Can HPVA be used in synthetic lubricant applications?',
            answer:
              'Yes, HPVA serves as a raw material for producing specialty esters used in high-temperature synthetic lubricants, benefiting from its thermal and hydrolytic stability.',
          },
          {
            question: 'What safety precautions should be taken when handling HPVA?',
            answer:
              'HPVA causes skin irritation, serious eye damage, and may cause respiratory irritation. Always consult the Safety Data Sheet for complete handling precautions.',
          },
        ],
        slug: 'hpva',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: '4-Hydroxy-TEMPO (TEMPOL / H-TEMPO)',
        _status: 'published',
        description:
          'A key functionalized derivative of TEMPO featuring both a stable nitroxyl radical and reactive hydroxyl group. Serves as a versatile antioxidant, catalyst, spin label, and crucial intermediate for synthesizing specialty chemicals.',
        chemicalStructureImage: hTempoStructureDoc.id,
        technicalSpecifications: {
          chemicalName: '4-Hydroxy-2,2,6,6-tetramethylpiperidin-1-oxyl',
          casNumber: '2226-96-2',
          ecNumber: '218-760-9',
          synonyms: [
            { synonym: 'H-TEMPO' },
            { synonym: 'TEMPOL' },
            { synonym: '4-Hydroxy-TEMPO' },
            { synonym: '4-Hydroxy-2,2,6,6-tetramethylpiperidinooxy' },
          ],
          molecularFormula: 'C₉H₁₈NO₂',
          molecularWeight: '172.24 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'Orange or reddish-orange crystalline solid/powder',
          purity: '≥98.0 % wt',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'Polymerization Inhibitor Synthesis',
            description:
              'Key raw material for producing formulated liquid polymerization inhibitors like the VUPIN range used in petrochemicals and monomer stabilization applications.',
            image: image1Doc.id,
          },
          {
            application: 'Catalysis & Oxidation',
            description:
              'Used as catalyst or co-catalyst in selective oxidation reactions, offering different solubility and reactivity profiles compared to standard TEMPO.',
            image: image2Doc.id,
          },
          {
            application: 'EPR Spectroscopy',
            description:
              'Utilized as a spin label probe to study molecular structure, dynamics, and environments in biophysical and chemical research applications.',
            image: image3Doc.id,
          },
          {
            application: 'Antioxidant Research',
            description:
              'Employed as a water-soluble antioxidant standard or protective agent in biochemical and cell-based studies investigating oxidative stress mechanisms.',
            image: image1Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Functionalized Stable Radical',
            description:
              'Combines unique properties of TEMPO nitroxyl radical with a hydroxyl group, allowing for further chemical modification and enhanced solubility.',
          },
          {
            feature: 'Key Inhibitor Intermediate',
            description:
              "Serves as direct precursor for VUP's VUPIN range of liquid polymerization inhibitors, demonstrating significant industrial relevance.",
          },
          {
            feature: 'Versatile Research Tool',
            description:
              'Widely used as water-soluble antioxidant, catalyst in oxidation reactions, and spin label probe in EPR spectroscopy applications.',
          },
          {
            feature: 'Building Block Potential',
            description:
              'Hydroxyl group provides reactive site for synthesizing other functionalized TEMPO derivatives or incorporating nitroxyl moiety into larger molecules.',
          },
          {
            feature: 'Pilot Scale Production',
            description:
              "Manufactured at VUP's dedicated pilot plant facility ensuring availability for larger scale R&D, inhibitor production, and industrial applications.",
          },
          {
            feature: 'High Purity Quality',
            description:
              "VUP's production capabilities deliver high purity suitable for demanding applications including research and specialty chemical synthesis.",
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What makes H-TEMPO different from standard TEMPO?',
            answer:
              'H-TEMPO features an additional hydroxyl group providing enhanced water solubility, different reactivity, and opportunities for further functionalization compared to standard TEMPO.',
          },
          {
            question: 'How is H-TEMPO used in polymerization inhibitor production?',
            answer:
              "H-TEMPO serves as the key raw material for producing VUP's VUPIN range of liquid polymerization inhibitors used in petrochemical and monomer stabilization applications.",
          },
          {
            question: 'What applications utilize H-TEMPO as a spin label?',
            answer:
              'H-TEMPO is used in EPR spectroscopy as a spin probe to study molecular structure, dynamics, and environments in biophysical and chemical research.',
          },
          {
            question: 'Can H-TEMPO be used as an antioxidant?',
            answer:
              'Yes, H-TEMPO serves as a water-soluble antioxidant standard and protective agent in biochemical studies investigating oxidative stress mechanisms.',
          },
          {
            question: 'What safety precautions are required when handling H-TEMPO?',
            answer:
              'H-TEMPO is an oxidizer that can cause skin, eye, and respiratory irritation. Handle with appropriate engineering controls and PPE. Always consult the official SDS.',
          },
          {
            question: 'What purity level does VUP offer for H-TEMPO?',
            answer:
              'VUP offers high-purity H-TEMPO at ≥98% suitable for demanding applications including research and specialty chemical synthesis.',
          },
        ],
        slug: 'h-tempo',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: 'Trolox',
        _status: 'published',
        description:
          'A potent, water-soluble analog of Vitamin E, widely recognized as the benchmark standard for measuring antioxidant capacity in TEAC assays and a valuable research tool for oxidative stress studies.',
        chemicalStructureImage: troloxStructureDoc.id,
        technicalSpecifications: {
          chemicalName: '6-Hydroxy-2,5,7,8-tetramethylchroman-2-carboxylic acid',
          casNumber: '53188-07-1',
          ecNumber: '258-422-8',
          synonyms: [
            { synonym: 'Trolox C' },
            { synonym: '6-Hydroxy-2,5,7,8-tetramethylchroman-2-carboxylic acid' },
          ],
          molecularFormula: 'C₁₄H₁₈O₄',
          molecularWeight: '250.29 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'Off-white to light yellow crystalline powder',
          purity: '≥98.0 % wt',
          solubility: 'Soluble in water and alcohols',
        },
        chemicalFamily: [chromanolsDerivatives],
        applications: [
          {
            application: 'Antioxidant Capacity Assays',
            description:
              'The reference standard compound for TEAC and similar assays measuring the total antioxidant capacity of food, beverages, natural extracts, and biological samples.',
            image: image1Doc.id,
          },
          {
            application: 'Oxidative Stress Research',
            description:
              'Used in cell culture and biochemical studies to protect against lipid peroxidation and investigate mechanisms of oxidative stress and antioxidant defense.',
            image: image2Doc.id,
          },
          {
            application: 'Cell Culture Protection',
            description:
              'Added to cell culture media as a protective antioxidant supplement to reduce background oxidative stress during experimental procedures.',
            image: image3Doc.id,
          },
          {
            application: 'Pharmaceutical R&D Screening',
            description:
              'Used as a screening tool in pharmaceutical and cosmetic R&D to evaluate the antioxidant potential of new compounds or formulations.',
            image: image1Doc.id,
          },
          {
            application: 'Analytical Reference Standard',
            description:
              'Employed as a standard in HPLC or other analytical methods for identifying or quantifying antioxidants in various samples.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Benchmark Antioxidant Standard',
            description:
              'Globally recognized standard for Trolox Equivalent Antioxidant Capacity (TEAC) assays, enabling standardized comparison of antioxidant strengths.',
          },
          {
            feature: 'Water-Soluble Vitamin E Analog',
            description:
              'Offers the antioxidant properties related to Vitamin E but with significantly improved water solubility, making it ideal for aqueous systems and biological assays.',
          },
          {
            feature: 'Potent Radical Scavenger',
            description:
              'Effectively neutralizes various free radicals due to its 6-hydroxychromanol core structure, providing reliable antioxidant protection.',
          },
          {
            feature: 'High Purity Quality',
            description:
              'Produced to high purity levels (≥98%) suitable for demanding analytical and research applications requiring consistent performance.',
          },
          {
            feature: 'Research Versatility',
            description:
              'Widely used in academic and industrial research to study oxidative stress mechanisms, evaluate potential antioxidants, and protect cells or biochemicals from oxidative damage.',
          },
          {
            feature: 'Convenient Handling',
            description:
              'Water solubility makes it convenient for many biological and chemical assays, unlike fat-soluble Vitamin E requiring organic solvents.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What is Trolox and how does it differ from Vitamin E?',
            answer:
              'Trolox is a synthetic water-soluble analog of Vitamin E. It shares the core chromanol ring structure but has a carboxylic acid group instead of the phytyl tail, making it water-soluble.',
          },
          {
            question: 'Why is Trolox used as an antioxidant standard?',
            answer:
              'Its water solubility makes it convenient for biological and chemical assays like TEAC, and its well-characterized antioxidant activity provides a reliable benchmark for comparison.',
          },
          {
            question: 'What are the main applications of VUP Trolox?',
            answer:
              'Primarily used in scientific research as an antioxidant standard, for studying oxidative stress in biological systems, cell culture protection, and as a reference compound in analytical methods.',
          },
          {
            question: 'What purity level does VUP offer for Trolox?',
            answer:
              'VUP offers high-purity Trolox at ≥98% suitable for demanding analytical and research applications requiring consistent and reliable performance.',
          },
          {
            question: 'Can Trolox be used in cell culture applications?',
            answer:
              'Yes, Trolox is commonly added to cell culture media as a protective antioxidant supplement to reduce background oxidative stress during experimental procedures.',
          },
          {
            question: 'How is Trolox used in TEAC assays?',
            answer:
              'Trolox serves as the reference standard in TEAC assays, with antioxidant capacity of test samples expressed as Trolox equivalents, enabling standardized comparison.',
          },
        ],
        slug: 'trolox',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: 'TEMPO (2,2,6,6-Tetramethylpiperidin-1-oxyl)',
        _status: 'published',
        description:
          'A highly versatile and stable nitroxyl radical, renowned for its utility as a catalyst in selective organic oxidations and as a mediator in controlled radical polymerization (NMP). VUP produces high-purity TEMPO at pilot scale.',
        chemicalStructureImage: tempoStructureDoc.id,
        technicalSpecifications: {
          chemicalName: '2,2,6,6-Tetramethyl-1-piperidinyloxyl',
          casNumber: '2564-83-2',
          ecNumber: '219-888-8',
          synonyms: [{ synonym: 'TEMPO' }],
          molecularFormula: 'C₉H₁₈NO',
          molecularWeight: '156.25 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'Orange-red crystalline solid',
          purity: 'min. 98.0 % wt',
          meltingPoint: '36-40 °C',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'Selective Oxidation Catalyst',
            description:
              'Widely used as catalyst for efficient and selective oxidation of primary alcohols to aldehydes and secondary alcohols to ketones under mild conditions in fine chemical and pharmaceutical synthesis.',
            image: image1Doc.id,
          },
          {
            application: 'Controlled Radical Polymerization',
            description:
              'Mediator for Nitroxide Mediated Polymerization (NMP) enabling synthesis of polymers with controlled molecular weight, narrow polydispersity, and complex architectures.',
            image: image2Doc.id,
          },
          {
            application: 'EPR Spectroscopy',
            description:
              'Stable radical source used as spin label probe in Electron Paramagnetic Resonance spectroscopy for studying molecular environments, dynamics, and radical reaction mechanisms.',
            image: image3Doc.id,
          },
          {
            application: 'Pharmaceutical Intermediates',
            description:
              "Key precursor for synthesizing valuable derivatives including potential Active Pharmaceutical Ingredients (APIs) such as compounds for Parkinson's treatment.",
            image: image1Doc.id,
          },
          {
            application: 'Cellulose Oxidation',
            description:
              'Used in TEMPO-mediated oxidation of cellulose and pulp for producing modified cellulose materials with enhanced properties in specialty paper and biomaterial applications.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Highly Selective Oxidation',
            description:
              'Provides exceptional selectivity in alcohol oxidation reactions under mild conditions, avoiding over-oxidation and maintaining product quality in sensitive synthetic processes.',
          },
          {
            feature: 'Stable Radical Source',
            description:
              'Persistent nitroxyl radical offers reliable performance as spin label probe and catalyst, unlike transient radicals that quickly decompose.',
          },
          {
            feature: 'Controlled Polymerization',
            description:
              'Enables precise control over polymer architecture through NMP, allowing synthesis of well-defined block copolymers and materials with specific performance characteristics.',
          },
          {
            feature: 'High Purity Grade',
            description:
              'Supplied at minimum 98% purity ensuring consistent reactivity and reliable performance in demanding catalytic and synthetic applications.',
          },
          {
            feature: 'Pilot Scale Production',
            description:
              'Manufactured at VUP pilot plant facility with documented capacity, ensuring availability beyond laboratory scale for commercial applications.',
          },
          {
            feature: 'Versatile Intermediate',
            description:
              'Serves as key building block for synthesizing functionalized TEMPO derivatives and valuable pharmaceutical intermediates with enhanced properties.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What is TEMPO and what makes it special?',
            answer:
              'TEMPO is a stable nitroxyl radical based on the tetramethylpiperidine structure. Its exceptional stability makes it valuable as a reagent and catalyst, unlike most transient radicals that quickly decompose.',
          },
          {
            question: 'Why is TEMPO preferred for oxidation reactions?',
            answer:
              "TEMPO acts as a catalyst with co-oxidants to selectively oxidize alcohols under mild conditions. It's particularly known for converting primary alcohols to aldehydes with high selectivity and minimal over-oxidation.",
          },
          {
            question: 'How is TEMPO used in polymer chemistry?',
            answer:
              'TEMPO is essential for Nitroxide Mediated Polymerization (NMP), a controlled radical polymerization technique that allows synthesis of polymers with precise molecular weights and complex architectures.',
          },
          {
            question: 'What purity level does VUP offer for TEMPO?',
            answer:
              'VUP produces high-purity TEMPO with minimum 98% purity, ensuring consistent reactivity and reliable performance in sensitive catalytic and synthetic applications.',
          },
          {
            question: 'Is TEMPO considered hazardous to handle?',
            answer:
              'Yes, TEMPO is classified as an oxidizer and irritant requiring careful handling with appropriate PPE. It may intensify fire and can cause skin, eye, and respiratory irritation. Always consult the SDS.',
          },
          {
            question: 'Can VUP supply TEMPO at commercial scale?',
            answer:
              'VUP operates pilot plant production with documented capacity for TEMPO. Contact VUP directly to discuss availability and volumes for your specific commercial requirements.',
          },
        ],
        slug: 'tempo',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: '2,2,6,6-Tetramethylpiperidine (TEMP)',
        _status: 'published',
        description:
          'The foundational intermediate for producing a wide range of Hindered Amine Light Stabilizers (HALS) and the versatile stable radical TEMPO. VUP produces high-purity TEMP (min. 99%) at its pilot plant facility.',
        chemicalStructureImage: image1Doc.id,
        technicalSpecifications: {
          chemicalName: '2,2,6,6-Tetramethylpiperidine',
          casNumber: '768-66-1',
          ecNumber: '212-199-3',
          synonyms: [{ synonym: 'TEMP' }, { synonym: 'Norpempidine' }, { synonym: 'TMPH' }],
          molecularFormula: 'C₉H₁₉N',
          molecularWeight: '141.25 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'Colorless to light yellow low-melting solid or liquid',
          purity: 'min. 99.0 % wt',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'HALS Manufacturing',
            description:
              'Essential intermediate for producing various Hindered Amine Light Stabilizers used extensively in the plastics and coatings industries for UV protection.',
            image: image1Doc.id,
          },
          {
            application: 'TEMPO Synthesis',
            description:
              'Direct precursor for manufacturing TEMPO and its derivatives, which are used as catalysts, oxidants, polymerization inhibitors, and research tools.',
            image: image2Doc.id,
          },
          {
            application: 'Organic Synthesis',
            description:
              'Employed as a hindered secondary amine base or building block in specific chemical reactions requiring this unique structural framework.',
            image: image3Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Essential HALS Intermediate',
            description:
              'The core starting material for synthesizing numerous high-performance HALS used to protect polymers from UV degradation.',
          },
          {
            feature: 'High Purity Product',
            description:
              'VUP supplies TEMP with a minimum purity of 99%, ensuring high quality for demanding downstream synthesis applications.',
          },
          {
            feature: 'Pilot Scale Production',
            description:
              'Manufactured at VUP pilot plant facility with 25 t/yr capacity, indicating capability for larger volume supply beyond lab scale.',
          },
          {
            feature: 'Direct TEMPO Precursor',
            description:
              'Key raw material used in the synthesis of TEMPO and its derivatives for various catalytic and research applications.',
          },
          {
            feature: 'Versatile Building Block',
            description:
              'Used as an intermediate in various organic synthesis applications beyond HALS and TEMPO production.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What is TEMP primarily used for?',
            answer:
              'TEMP is the essential chemical building block used to synthesize Hindered Amine Light Stabilizers (HALS) and the stable radical TEMPO.',
          },
          {
            question: 'Is TEMP itself a light stabilizer?',
            answer:
              'No, TEMP is the intermediate or precursor. It needs to be further reacted to create the actual HALS molecules that provide light stabilization to polymers.',
          },
          {
            question: 'What purity does VUP offer for TEMP?',
            answer:
              'VUP produces TEMP with a minimum purity of 99%. Please request the Technical Data Sheet for full specifications.',
          },
          {
            question: 'Is TEMP hazardous to handle?',
            answer:
              'Yes, TEMP is classified as corrosive, flammable, and toxic. Strict safety precautions and appropriate PPE are essential. Always consult the SDS before use.',
          },
          {
            question: 'Does VUP produce TEMP at commercial scale?',
            answer:
              'VUP has documented pilot plant capacity (25 t/yr) for TEMP production. Contact VUP to discuss availability for your required volumes.',
          },
          {
            question: 'What makes VUP TEMP suitable for HALS synthesis?',
            answer:
              'VUP high-purity TEMP (99% min.) provides the quality and consistency required for producing high-performance HALS with reliable UV protection properties.',
          },
        ],
        slug: 'temp',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: 'Poly(ethylene glycol)bis(3-aminopropyl) terminated (DAPEG Series)',
        _status: 'published',
        description:
          'VUP is the unique global producer of high-purity DAPEG featuring PEG chains with reactive primary amine groups at both ends. Essential for advanced biomedical coatings, surface modification, PEGylation, and specialty polymer synthesis.',
        chemicalStructureImage: dapegStructureDoc.id,
        technicalSpecifications: {
          chemicalName: 'α-(3-Aminopropyl)-ω-(3-aminopropoxy)poly(oxy-1,2-ethanediyl)',
          casNumber: '34901-14-9',
          synonyms: [
            { synonym: 'DAPEG' },
            { synonym: 'Diaminopolyethylene Glycol' },
            { synonym: 'Amino-PEG-Amino' },
            { synonym: 'α,ω-Diamino-PEG' },
          ],
          molecularFormula: 'H₂N(CH₂)₃[O(CH₂)₂]nO(CH₂)₃NH₂',
          molecularWeight: '700-3400 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'Colorless to pale yellow liquid or white waxy solid',
          purity: 'min. 97.0 % wt',
        },
        chemicalFamily: [diaminopolyethyleneGlycols],
        applications: [
          {
            application: 'Biomedical Device Coatings',
            description:
              'Creating lubricious, hydrophilic, and biocompatible coatings for catheters, guidewires, stents, and other medical devices to improve patient comfort and device performance.',
            image: image1Doc.id,
          },
          {
            application: 'Surface Modification',
            description:
              'Functionalizing surfaces of implants, nanoparticles, biosensors, and microfluidic devices to enhance biocompatibility and reduce non-specific binding.',
            image: image2Doc.id,
          },
          {
            application: 'PEGylation & Bioconjugation',
            description:
              'Linking PEG chains to proteins, peptides, antibodies, or drug molecules to improve solubility, stability, circulation time, and reduce immunogenicity.',
            image: image3Doc.id,
          },
          {
            application: 'Advanced Polymer Synthesis',
            description:
              'Building block for synthesizing hydrogels for tissue engineering and drug delivery, block copolymers, and other functional polymer architectures.',
            image: image1Doc.id,
          },
          {
            application: 'PEGDAA Synthesis',
            description:
              'Direct precursor for producing Poly(ethylene glycol) diacrylamide (PEGDAA), used in hydrogel formation and specialized coating applications.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Unique Global Supply',
            description:
              'Sourced directly from VUP, the sole global producer utilizing proprietary technology, ensuring a distinct and secure supply chain.',
          },
          {
            feature: 'High Purity Standards',
            description:
              'Manufactured to high purity standards (97% min), critical for demanding biomedical and pharmaceutical applications requiring consistent performance.',
          },
          {
            feature: 'Reactive Amine Termini',
            description:
              'Provides primary amine groups at both ends, enabling efficient covalent attachment to surfaces or reaction with other functional groups for polymer synthesis.',
          },
          {
            feature: 'PEG Chain Properties',
            description:
              'Imparts hydrophilicity, water solubility, biocompatibility, and resistance to non-specific protein adsorption inherent to polyethylene glycol chains.',
          },
          {
            feature: 'Versatile Molecular Weights',
            description:
              'Available in a range of average molecular weights, allowing tailoring of properties like chain length, flexibility, and hydrodynamic volume.',
          },
          {
            feature: 'Biomedical Application Focus',
            description:
              'Proven utility as a key raw material for creating lubricious, hydrophilic coatings essential for medical devices like catheters and guidewires.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What is DAPEG and how does it differ from regular PEG?',
            answer:
              'DAPEG is a polyethylene glycol with reactive primary amine groups at both ends instead of hydroxyl groups, making it ideal for covalent attachment and bioconjugation applications.',
          },
          {
            question: 'Why is VUP the unique source for DAPEG?',
            answer:
              'VUP possesses proprietary production technology positioning them as the key global producer of this specialized high-purity material, particularly valued in biomedical applications.',
          },
          {
            question: 'What are the main advantages of terminal amine groups?',
            answer:
              'Primary amines are versatile reactive handles for covalent attachment to surfaces with carboxyl or NHS-ester groups and for conjugation in bioconjugation or polymer synthesis.',
          },
          {
            question: 'What molecular weight grades does VUP offer for DAPEG?',
            answer:
              'VUP offers DAPEG in various average molecular weight grades ranging from approximately 700 to 3400 g/mol. Contact VUP to discuss specific grades and availability.',
          },
          {
            question: 'Is DAPEG suitable for medical device applications?',
            answer:
              'Yes, DAPEG is widely used as a raw material for biomedical coatings. Discuss your specific application requirements with VUP to ensure appropriate grade selection.',
          },
          {
            question: 'How is DAPEG used in surface modification applications?',
            answer:
              'DAPEG functionalizes surfaces through its reactive amine groups, creating biocompatible layers that reduce protein adsorption and enable further chemical modifications.',
          },
        ],
        slug: 'dapeg',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: '4-Benzoyloxy-2,2,6,6-tetramethylpiperidine',
        _status: 'published',
        description:
          'A functionalized hindered amine intermediate based on the TEMP structure, serving as a valuable precursor for producing specific Hindered Amine Light Stabilizers (HALS) or other functional molecules where a benzoate-protected hydroxyl group is required on the piperidine ring.',
        chemicalStructureImage: benzoyloxyTmpStructureDoc.id,
        technicalSpecifications: {
          chemicalName: '(2,2,6,6-Tetramethylpiperidin-4-yl) benzoate',
          casNumber: '3589-98-4',
          ecNumber: '222-733-9',
          synonyms: [
            { synonym: '2,2,6,6-Tetramethyl-4-piperidinyl benzoate' },
            { synonym: '4-Benzoyloxy-TMP' },
          ],
          molecularFormula: 'C₁₆H₂₃NO₂',
          molecularWeight: '261.36 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'White to off-white solid/powder',
          purity: 'min. 97.0 % wt',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'HALS Synthesis',
            description:
              'Used as a precursor in multi-step syntheses to produce specific types of Hindered Amine Light Stabilizers requiring the benzoate-protected hydroxyl functionality.',
            image: image1Doc.id,
          },
          {
            application: 'Organic Synthesis',
            description:
              'Employed as a building block for creating other functionalized piperidine derivatives for research or specialty chemical applications.',
            image: image2Doc.id,
          },
          {
            application: 'Research Chemical',
            description:
              'Used in academic or industrial laboratories studying hindered amine chemistry or developing new synthetic methodologies.',
            image: image3Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Functionalized Intermediate',
            description:
              'Provides the stable 2,2,6,6-tetramethylpiperidine core functionalized with a benzoyloxy group at the 4-position for selective reactivity.',
          },
          {
            feature: 'Protected Hydroxyl Group',
            description:
              'Contains a benzoate-protected hydroxyl functionality useful in multi-step synthetic sequences where selective reactions are required.',
          },
          {
            feature: 'High Purity Product',
            description:
              'Supplied at minimum 97% purity ensuring consistent reactivity and performance in demanding synthetic applications.',
          },
          {
            feature: 'HALS Precursor Potential',
            description:
              'Can serve as a key intermediate in the synthesis pathway for specific HALS structures requiring this functionalized scaffold.',
          },
          {
            feature: 'Versatile Building Block',
            description:
              'Useful starting material for creating other specialized molecules requiring modification at the 4-position after potential deprotection.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What is 4-Benzoyloxy-TMP used for?',
            answer:
              'It is primarily used as a chemical intermediate, particularly as a precursor in the synthesis of specific HALS or other functionalized molecules derived from the TEMP structure.',
          },
          {
            question: 'Is this product a HALS itself?',
            answer:
              'No, it is generally considered an intermediate used to make certain HALS, not typically used directly as a light stabilizer in polymers.',
          },
          {
            question: 'What is the advantage of using this intermediate?',
            answer:
              'It provides the TEMP core structure with a protected hydroxyl group as a benzoate ester, useful in multi-step synthetic sequences where selective reactivity is needed.',
          },
          {
            question: 'What purity level does VUP offer for this compound?',
            answer:
              'VUP supplies 4-Benzoyloxy-TMP with minimum 97% purity, ensuring consistent reactivity and performance in demanding synthetic applications.',
          },
          {
            question: 'Can this compound be used in research applications?',
            answer:
              'Yes, it is used in academic and industrial laboratories studying hindered amine chemistry or developing new synthetic methodologies involving functionalized piperidines.',
          },
        ],
        slug: 'benzoyloxy-tmp',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: '4-Acetamido-TEMPO',
        _status: 'published',
        description:
          'A functionalized derivative of the stable nitroxyl radical TEMPO featuring an acetamido group. Primarily used as a spin label probe for Electron Paramagnetic Resonance (EPR) spectroscopy in biochemical and materials science research.',
        chemicalStructureImage: acetamidoTempoStructureDoc.id,
        technicalSpecifications: {
          chemicalName: 'N-(1-Oxyl-2,2,6,6-tetramethylpiperidin-4-yl)acetamide',
          casNumber: '14691-89-5',
          ecNumber: '238-751-8',
          synonyms: [
            { synonym: '4-Acetamido-TEMPO' },
            { synonym: '4-(Acetylamino)-2,2,6,6-tetramethyl-1-piperidinyloxy' },
            { synonym: 'N-(1-Oxyl-2,2,6,6-tetramethyl-4-piperidinyl)acetamide' },
          ],
          molecularFormula: 'C₁₁H₂₁N₂O₂',
          molecularWeight: '213.29 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'Orange to red crystalline solid',
          purity: '≥97.0 % wt',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'EPR Spectroscopy',
            description:
              'Primary application as a spin label probe to study protein structure, conformational changes, lipid membrane fluidity, and molecular binding interactions.',
            image: image1Doc.id,
          },
          {
            application: 'Biochemical Research',
            description:
              'Used in biophysical studies to investigate molecular dynamics, radical scavenging processes, and local environments where EPR monitoring is required.',
            image: image2Doc.id,
          },
          {
            application: 'Polymer Studies',
            description:
              'Investigates polymer chain mobility, segmental dynamics, morphology, and glass transition behavior through temperature-dependent EPR analysis.',
            image: image3Doc.id,
          },
          {
            application: 'Materials Science Research',
            description:
              'Applied in studying structure-property relationships in synthetic materials and monitoring changes in molecular environments during processing.',
            image: image1Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Functionalized Spin Label',
            description:
              'Provides stable TEMPO nitroxyl radical center with acetamido functionality for specific polarity and hydrogen bonding interactions in EPR studies.',
          },
          {
            feature: 'Research Grade Purity',
            description:
              'High purity specification (≥97%) ensures reliable and consistent performance in sensitive EPR spectroscopy and research applications.',
          },
          {
            feature: 'Membrane Probe Capability',
            description:
              'Effectively partitions into biological membranes allowing detailed investigation of lipid bilayer dynamics and drug-membrane interactions.',
          },
          {
            feature: 'Versatile Research Tool',
            description:
              'Suitable for multiple research applications from protein conformational studies to polymer chain dynamics across various temperature ranges.',
          },
          {
            feature: 'Conjugation Potential',
            description:
              'Acetamido group offers potential for further chemical modification or conjugation strategies in specialized labeling applications.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What is 4-Acetamido-TEMPO and its primary use?',
            answer:
              'It is a TEMPO derivative with an acetamido group, primarily used as a spin label probe in EPR spectroscopy to study molecular structure, dynamics, and environments.',
          },
          {
            question: 'How does it compare to other TEMPO spin labels?',
            answer:
              'The acetamido group provides specific polarity and hydrogen bonding capabilities, making it suitable for probing certain molecular environments compared to other TEMPO derivatives.',
          },
          {
            question: 'What makes it suitable for membrane studies?',
            answer:
              'Its chemical properties allow effective partitioning into biological membranes, enabling detailed investigation of lipid bilayer dynamics and membrane-drug interactions.',
          },
          {
            question: 'What purity level does VUP offer for this compound?',
            answer:
              'VUP supplies 4-Acetamido-TEMPO with ≥97% purity, ensuring reliable performance in sensitive EPR spectroscopy and research applications.',
          },
          {
            question: 'Can it be used in polymer research applications?',
            answer:
              'Yes, it is valuable for studying polymer chain mobility, segmental dynamics, and glass transition behavior through temperature-dependent EPR analysis.',
          },
          {
            question: 'What safety precautions are required when handling this compound?',
            answer:
              'Handle as a specialty chemical with appropriate PPE. May cause skin, eye, and respiratory irritation. Always consult the official SDS for complete safety information.',
          },
        ],
        slug: 'acetamido-tempo',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: '4-Oxo-TEMPO (TEMPone)',
        _status: 'published',
        description:
          'A ketone-functionalized stable nitroxyl radical based on TEMPO, offering alternative reactivity in selective oxidation catalysis and serving as a versatile intermediate for synthesizing complex nitroxide derivatives.',
        chemicalStructureImage: temponeStructureDoc.id,
        technicalSpecifications: {
          chemicalName: '2,2,6,6-Tetramethyl-4-oxopiperidin-1-oxyl',
          casNumber: '2896-70-0',
          ecNumber: '608-279-9',
          synonyms: [{ synonym: 'TEMPOne' }, { synonym: '4-Oxo-2,2,6,6-tetramethylpiperidinooxy' }],
          molecularFormula: 'C₉H₁₆NO₂',
          molecularWeight: '170.23 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'Orange to red crystalline solid',
          purity: '≥97.0 % wt',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'Selective Oxidation Catalyst',
            description:
              'Functions as catalyst for specific oxidation reactions, potentially offering different selectivity and performance characteristics compared to other TEMPO derivatives in certain transformations.',
            image: image1Doc.id,
          },
          {
            application: 'Intermediate Synthesis',
            description:
              'Serves as building block for synthesizing functionalized nitroxides and complex molecules, leveraging the ketone group as a reactive handle for further chemical modifications.',
            image: image2Doc.id,
          },
          {
            application: 'Radical Chemistry Research',
            description:
              'Employed as research tool for studying radical reaction mechanisms, nitroxide-mediated processes, and developing new synthetic methodologies in academic and industrial settings.',
            image: image3Doc.id,
          },
          {
            application: 'Materials Science',
            description:
              'Potential incorporation into functional polymers or advanced materials requiring stable radical centers for specialized properties and performance characteristics.',
            image: image1Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Functionalized TEMPO Radical',
            description:
              'Provides the stable nitroxyl radical center functionalized with a ketone group at the 4-position, offering unique electronic and steric properties.',
          },
          {
            feature: 'Alternative Oxidant Properties',
            description:
              'Used in organic synthesis as catalyst for selective oxidations, potentially offering different performance characteristics compared to other TEMPO derivatives.',
          },
          {
            feature: 'Versatile Intermediate',
            description:
              'The ketone group serves as reactive handle for further chemical modifications to create more complex nitroxide derivatives and functionalized molecules.',
          },
          {
            feature: 'Research Tool',
            description:
              'Employed in research settings to study radical chemistry, catalysis mechanisms, and develop new synthetic methods for academic and industrial applications.',
          },
          {
            feature: 'VUP Synthetic Capability',
            description:
              'Falls within VUP expertise in hindered amine and TEMPO derivative chemistry, indicating potential for reliable supply or custom synthesis capabilities.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What is 4-Oxo-TEMPO and how does it differ from standard TEMPO?',
            answer:
              'It is a TEMPO derivative with a ketone group at the 4-position, offering different chemical properties, reactivity, polarity, and potential applications compared to standard TEMPO.',
          },
          {
            question: 'What are the main applications for 4-Oxo-TEMPO?',
            answer:
              'Primarily used as a catalyst for selective oxidations in organic synthesis, as an intermediate for synthesizing functionalized nitroxides, and as a research tool in radical chemistry studies.',
          },
          {
            question: 'How is 4-Oxo-TEMPO used in catalytic oxidation reactions?',
            answer:
              'It functions as a catalyst offering potentially different selectivity and performance characteristics compared to other TEMPO derivatives in certain oxidation transformations.',
          },
          {
            question: 'Can 4-Oxo-TEMPO be used as a building block for synthesis?',
            answer:
              'Yes, the ketone group provides a reactive handle for further chemical modifications, making it valuable for creating complex nitroxide derivatives and functionalized molecules.',
          },
          {
            question: 'What purity level does VUP offer for 4-Oxo-TEMPO?',
            answer:
              'VUP supplies 4-Oxo-TEMPO with ≥97% purity, ensuring reliable performance for demanding research and synthesis applications requiring consistent quality.',
          },
          {
            question: 'What safety precautions are required when handling 4-Oxo-TEMPO?',
            answer:
              'Handle as specialty chemical and potential oxidizer. May cause skin, eye, and respiratory irritation. Use appropriate PPE and always consult the official SDS for complete safety information.',
          },
        ],
        slug: 'oxo-tempo',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: 'Colamin Phosphate Calcium Salt',
        _status: 'published',
        description:
          'A unique compound providing both the fundamental phospholipid precursor, Phosphorylethanolamine, and the essential mineral, Calcium. This synergistic combination supports both cellular membrane integrity and bone health, making it valuable for specialized dietary supplements, veterinary nutrition, and pharmaceutical applications.',
        chemicalStructureImage: colaminPhosphateStructureDoc.id,
        technicalSpecifications: {
          chemicalName: 'Calcium bis(2-aminoethyl hydrogen phosphate)',
          casNumber: '17257-58-0',
          synonyms: [
            { synonym: 'Calcium Phosphorylethanolamine' },
            { synonym: 'Colamin Phosphate Calcium' },
          ],
          molecularFormula: 'C₄H₁₄CaN₂O₈P₂',
          molecularWeight: '316.18 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'White to off-white solid/powder',
          purity: 'min. 98.0 % wt',
        },
        chemicalFamily: [phospholipidPrecursors],
        applications: [
          {
            application: 'Dietary Supplements',
            description:
              'Excellent ingredient for advanced supplements targeting both bone health (providing calcium) and cellular health/cognitive function (providing the PE precursor).',
            image: image1Doc.id,
          },
          {
            application: 'Veterinary Nutrition',
            description:
              'Used in feed additives or supplements for animals, supporting skeletal development (calcium) and overall cellular growth/health (PE precursor).',
            image: image2Doc.id,
          },
          {
            application: 'Pharmaceutical Formulations',
            description:
              'Potential use where co-delivery of calcium and phosphorylethanolamine is beneficial for therapeutic or formulation reasons requiring appropriate grade and regulatory compliance.',
            image: image3Doc.id,
          },
          {
            application: 'Biochemical Research',
            description:
              'Tool for studying the interplay between calcium signaling/metabolism and phospholipid synthesis or membrane function in research applications.',
            image: image1Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Dual Nutritional Benefit',
            description:
              'Delivers both Phosphorylethanolamine (crucial for cell membrane synthesis) and bioavailable Calcium (essential for bone health, nerve function) in a single molecule.',
          },
          {
            feature: 'Supports Bone & Cellular Health',
            description:
              'Ideal for formulations aiming to synergistically support skeletal structure and cellular integrity in a comprehensive approach.',
          },
          {
            feature: 'Versatile Precursor',
            description:
              "Provides the core Colamin Phosphate moiety required for the body's synthesis of phosphatidylethanolamine (PE), a critical phospholipid component.",
          },
          {
            feature: 'Formulation Potential',
            description:
              'Offers a unique ingredient option for developers of advanced supplements, veterinary products, and potentially pharmaceutical formulations.',
          },
          {
            feature: 'High Purity Standards',
            description:
              'Manufactured to high purity standards ensuring consistent quality and performance in demanding nutritional and pharmaceutical applications.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What is the main benefit of the Calcium Salt vs. other forms?',
            answer:
              'The primary benefit is providing both the essential phospholipid precursor (phosphorylethanolamine) and the mineral Calcium in one compound, particularly useful for applications targeting bone health alongside cellular health.',
          },
          {
            question: 'Is the calcium in this salt bioavailable?',
            answer:
              'Calcium salts of organic acids are generally considered bioavailable sources of calcium, but specific bioavailability would depend on the overall formulation and physiological factors.',
          },
          {
            question: 'What applications is this salt best suited for?',
            answer:
              "It's particularly well-suited for dietary supplements and veterinary nutrition products focused on bone health, growth, and cellular integrity.",
          },
          {
            question: 'How does this compound support cellular membrane integrity?',
            answer:
              'It provides phosphorylethanolamine, which is the fundamental precursor required for the synthesis of phosphatidylethanolamine (PE), a critical phospholipid component of all cell membranes.',
          },
          {
            question: 'What purity level does VUP offer for this product?',
            answer:
              'VUP offers Colamin Phosphate Calcium Salt with minimum 98% purity, ensuring consistent quality and performance in demanding nutritional and pharmaceutical applications.',
          },
          {
            question: 'Can this product be used in veterinary applications?',
            answer:
              'Yes, it is used in feed additives or supplements for animals, supporting skeletal development through calcium and overall cellular growth/health through the phospholipid precursor.',
          },
        ],
        slug: 'colamin-phosphate-calcium-salt',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: 'Colamin Phosphate (Phosphorylethanolamine)',
        _status: 'published',
        description:
          'High-purity fundamental biochemical precursor required for synthesizing phosphatidylethanolamine (PE), a critical phospholipid component of all cell membranes. Essential for cellular structure and function in pharmaceutical applications.',
        chemicalStructureImage: image1Doc.id,
        technicalSpecifications: {
          chemicalName: '2-Aminoethyl dihydrogen phosphate',
          casNumber: '1071-23-4',
          ecNumber: '213-988-5',
          synonyms: [
            { synonym: 'Phosphorylethanolamine' },
            { synonym: 'Ethanolamine Phosphate' },
            { synonym: 'O-Phosphoethanolamine' },
            { synonym: 'Colamin Phosphate' },
          ],
          molecularFormula: 'C₂H₈NO₄P',
          molecularWeight: '141.06 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'White crystalline powder/solid',
          purity: 'min. 98.0 % wt',
          solubility: 'Readily soluble in water',
        },
        chemicalFamily: [phospholipidPrecursors],
        applications: [
          {
            application: 'Pharmaceutical Synthesis',
            description:
              'Used as intermediate in drug synthesis or as active ingredient in specific formulations targeting cellular health and membrane integrity.',
            image: image1Doc.id,
          },
          {
            application: 'Dietary Supplements',
            description:
              'Key ingredient in supplements for cognitive function, brain health, liver health, and overall cellular membrane integrity support.',
            image: image2Doc.id,
          },
          {
            application: 'Veterinary Feed Additives',
            description:
              'Added to animal feed formulations to support cellular development and health in livestock and companion animals during growth phases.',
            image: image3Doc.id,
          },
          {
            application: 'Cell Culture Media',
            description:
              'Essential component in defined media for optimal growth and health of mammalian cell lines in biopharmaceutical production and research.',
            image: image1Doc.id,
          },
          {
            application: 'Biochemical Research',
            description:
              'Used as standard, reagent, or substrate in studies related to phospholipid metabolism, enzyme kinetics, and cell signaling pathways.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Fundamental Building Block',
            description:
              'Directly involved in the primary pathway for synthesizing phosphatidylethanolamine (PE), essential for cell membrane structure and integrity across all tissues.',
          },
          {
            feature: 'High Purity Standards',
            description:
              'VUP provides minimum 98% purity, suitable for demanding applications in regulated industries including pharmaceuticals and dietary supplements.',
          },
          {
            feature: 'Water Soluble Properties',
            description:
              'Readily soluble in water, facilitating its use in aqueous formulations and biological systems for enhanced bioavailability and processing.',
          },
          {
            feature: 'Versatile Applications',
            description:
              'Widely used across pharmaceuticals, supplements, veterinary nutrition, and cell culture media, demonstrating broad industry acceptance and utility.',
          },
          {
            feature: 'Cellular Health Support',
            description:
              'Crucial for maintaining healthy cell function, membrane fluidity, and signaling processes, particularly important for brain and liver health applications.',
          },
          {
            feature: 'VUP Production Expertise',
            description:
              'Manufactured by VUP leveraging specialty chemical production experience with proven capability for scale-up and consistent quality delivery.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What is Colamin Phosphate and why is it important for health?',
            answer:
              'It is a naturally occurring molecule essential for building phosphatidylethanolamine (PE), a major cell membrane component. Healthy cell membranes are crucial for all bodily functions.',
          },
          {
            question: 'What are the main applications for VUP Colamin Phosphate?',
            answer:
              'Used in pharmaceutical synthesis, dietary supplements for brain/cellular health, veterinary feed additives, cell culture media, and biochemical research applications.',
          },
          {
            question: 'What purity level does VUP offer for this product?',
            answer:
              'VUP supplies Colamin Phosphate with minimum 98% purity, suitable for demanding applications in regulated industries. Full specifications available in Technical Data Sheet.',
          },
          {
            question: 'How does it differ from Sodium or Calcium salt forms?',
            answer:
              'Colamin Phosphate is the base molecule, while sodium and calcium salts offer the same core with different solubility, handling properties, or additional nutritional minerals.',
          },
          {
            question: 'Is this product suitable for pharmaceutical and supplement use?',
            answer:
              'Yes, VUP produces high-purity Colamin Phosphate for pharmaceutical and supplement applications. Contact VUP for specific grade requirements and compliance documentation.',
          },
          {
            question: 'What makes VUP Colamin Phosphate suitable for cell culture applications?',
            answer:
              'High purity and water solubility make it ideal for defined media formulations, providing essential building blocks for robust cell membrane synthesis during proliferation.',
          },
        ],
        slug: 'colamin-phosphate',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: 'Colamin Phosphate Sodium Salt',
        _status: 'published',
        description:
          'The sodium salt form of the essential phospholipid precursor, Phosphorylethanolamine. This salt offers enhanced solubility and formulation flexibility compared to the parent compound, making it valuable for liquid supplements, pharmaceutical formulations, and specialized applications requiring improved dissolution characteristics.',
        chemicalStructureImage: colaminPhosphateStructureDoc.id,
        technicalSpecifications: {
          chemicalName: 'Sodium (2-aminoethyl) phosphate',
          casNumber: '3842-01-5',
          synonyms: [
            { synonym: 'Phosphorylethanolamine Sodium Salt' },
            { synonym: 'Ethanolamine Phosphate Sodium Salt' },
            { synonym: 'Colamin Phosphate Sodium' },
          ],
          molecularFormula: 'C₂H₇NNaO₄P',
          molecularWeight: '163.04 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'White crystalline powder/solid',
          purity: 'min. 98.0 % wt',
          solubility: 'Readily soluble in water',
        },
        chemicalFamily: [polymerisationInhibitors],
        applications: [
          {
            application: 'Liquid Formulations',
            description:
              'Enhanced water solubility makes it ideal for liquid supplements and pharmaceutical solutions where faster dissolution and improved compatibility are required.',
            image: image1Doc.id,
          },
          {
            application: 'Dietary Supplements',
            description:
              'Provides bioavailable phosphorylethanolamine for cellular health support with improved formulation flexibility in both liquid and solid dosage forms.',
            image: image2Doc.id,
          },
          {
            application: 'Cell Culture Media',
            description:
              'Component in specialized pH-controlled media formulations, providing essential building blocks for phosphatidylethanolamine synthesis during cell proliferation.',
            image: image3Doc.id,
          },
          {
            application: 'Pharmaceutical Formulations',
            description:
              'Used as intermediate or excipient where specific solubility profile and pH characteristics of the sodium salt offer formulation advantages over the parent compound.',
            image: image1Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Enhanced Solubility',
            description:
              'Improved water solubility and faster dissolution rates compared to Colamin Phosphate, particularly beneficial in neutral to slightly alkaline aqueous solutions.',
          },
          {
            feature: 'Formulation Flexibility',
            description:
              'Offers formulators an alternative form that may be easier to handle or more stable in specific liquid or solid dosage forms requiring consistent performance.',
          },
          {
            feature: 'Essential Precursor Function',
            description:
              'Delivers the core phosphorylethanolamine molecule required for phosphatidylethanolamine synthesis and healthy cell membrane function across applications.',
          },
          {
            feature: 'pH Modification Potential',
            description:
              'Salt form provides controlled pH characteristics and potential buffering capacity beneficial for specialized formulation requirements.',
          },
          {
            feature: 'VUP Quality Assurance',
            description:
              'Manufactured leveraging VUP specialty chemical production expertise with proven capability for consistent quality delivery and reliable supply.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question:
              'What advantages does the sodium salt form offer over regular Colamin Phosphate?',
            answer:
              'The sodium salt provides enhanced water solubility, faster dissolution rates, and different handling characteristics, particularly beneficial for liquid formulations and neutral pH applications.',
          },
          {
            question: 'What are the main applications for Colamin Phosphate Sodium Salt?',
            answer:
              'Used in liquid supplements, pharmaceutical formulations, cell culture media, and veterinary applications where improved solubility and specific salt properties are advantageous.',
          },
          {
            question: 'How does it support cellular health like regular Colamin Phosphate?',
            answer:
              'It provides the same essential phosphorylethanolamine core for phosphatidylethanolamine synthesis and cell membrane health, just in a more soluble salt form.',
          },
          {
            question: 'What purity level does VUP offer for this sodium salt?',
            answer:
              'VUP supplies Colamin Phosphate Sodium Salt with minimum 98% purity, ensuring reliable performance for demanding pharmaceutical and supplement applications.',
          },
          {
            question: 'Is this form suitable for liquid supplement formulations?',
            answer:
              'Yes, the enhanced solubility makes it particularly suitable for liquid supplements where consistent dissolution and homogeneous distribution are critical.',
          },
          {
            question: 'How does the sodium content affect its nutritional profile?',
            answer:
              'While providing some sodium ions, the primary nutritional benefit remains the phosphorylethanolamine core for cellular health rather than sodium supplementation.',
          },
        ],
        slug: 'colamin-phosphate-sodium',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: 'VUPIN H37-B Polymerization Inhibitor',
        _status: 'published',
        description:
          'A liquid polymerization inhibitor formulation combining 4-Hydroxy-TEMPO with 2-Butoxyethanol solvent. Prevents unwanted polymerization in petrochemical streams, monomer handling, and FCC gasoline applications.',
        chemicalStructureImage: vupinStructureDoc.id,
        technicalSpecifications: {
          chemicalName:
            'Formulation of 4-Hydroxy-2,2,6,6-tetramethylpiperidin-1-oxyl in 2-Butoxyethanol',
          casNumber: '2226-96-2 (Active), 111-76-2 (Solvent)',
          ecNumber: '218-760-9 (Active), 203-905-0 (Solvent)',
          synonyms: [{ synonym: 'H-TEMPO in 2-Butoxyethanol' }, { synonym: 'VUPIN H37-B' }],
          molecularFormula: 'Formulation',
          molecularWeight: 'Formulation',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'Clear amber to reddish liquid',
          purity: 'Proprietary Formulation',
          solubility: 'Miscible with most organic solvents',
        },
        chemicalFamily: [hinderedAmines, polymerisationInhibitors],
        applications: [
          {
            application: 'FCC Gasoline Stabilization',
            description:
              'Used as additive component in FCC gasoline packages for refineries, preventing degradation and ensuring stable fuel quality during storage and distribution.',
            image: image1Doc.id,
          },
          {
            application: 'Monomer Stabilization',
            description:
              'Prevents unwanted polymerization during storage and transport of reactive monomers like MMA, VAM, styrene, and acrylates in production facilities.',
            image: image2Doc.id,
          },
          {
            application: 'Petrochemical Process Safety',
            description:
              'Protects against polymer fouling in distillation columns, ethylene units, and pygas processing by scavenging radicals that initiate polymerization.',
            image: image3Doc.id,
          },
          {
            application: 'Refinery Operations',
            description:
              'Component in specialized additive packages for various refinery streams requiring polymerization inhibition and process equipment protection.',
            image: image1Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Effective TEMPO-Based Inhibition',
            description:
              'Contains proven 4-Hydroxy-TEMPO radical scavenger that effectively prevents premature polymerization reactions in demanding industrial environments.',
          },
          {
            feature: 'Ready-to-Use Liquid Formulation',
            description:
              'Supplied as convenient liquid solution simplifying handling, dosing, and incorporation into process streams compared to solid inhibitors.',
          },
          {
            feature: 'Superior Solvency Properties',
            description:
              'Utilizes 2-Butoxyethanol glycol ether solvent providing excellent compatibility with various substances and effective distribution in process streams.',
          },
          {
            feature: 'Industrial-Grade Reliability',
            description:
              'Manufactured by VUP leveraging expertise in hindered amine chemistry and specialty chemical production for consistent quality and performance.',
          },
          {
            feature: 'Versatile Application Range',
            description:
              'Proven effectiveness across multiple petrochemical applications from FCC gasoline stabilization to monomer production and refinery operations.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What exactly is VUPIN H37-B and its main components?',
            answer:
              'VUPIN H37-B is a liquid formulation containing 4-Hydroxy-TEMPO (CAS 2226-96-2) as the active polymerization inhibitor dissolved in 2-Butoxyethanol solvent for industrial petrochemical applications.',
          },
          {
            question: 'What is the primary application for VUPIN H37-B?',
            answer:
              'It is used as a component in additive packages for FCC gasoline in refineries and has proven effectiveness in stabilizing reactive monomers during storage, transport, and processing.',
          },
          {
            question: 'What makes VUPIN H37-B effective as a polymerization inhibitor?',
            answer:
              'It combines the potent radical scavenging ability of H-TEMPO with excellent solvency and compatibility properties of 2-Butoxyethanol carrier, ensuring effective distribution and performance.',
          },
          {
            question: 'How does VUPIN H37-B prevent polymer fouling in process equipment?',
            answer:
              'The H-TEMPO active ingredient scavenges free radicals that initiate unwanted polymerization, while the solvent ensures good distribution throughout the process stream, preventing fouling.',
          },
          {
            question: 'Is VUPIN H37-B available in different concentrations or formulations?',
            answer:
              'Please contact VUP directly to discuss specific requirements regarding inhibitor concentration, formulation needs, and custom solutions for your particular application.',
          },
          {
            question: 'What safety precautions are required when handling VUPIN H37-B?',
            answer:
              'Handle as specialty chemical formulation with appropriate PPE. Components have known hazards including eye/skin irritation. Always consult the official VUPIN H37-B SDS for complete safety information.',
          },
        ],
        slug: 'vupin-h37b',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: '1,2,2,6,6-Pentamethylpiperidine',
        _status: 'published',
        description:
          'An N-methylated hindered amine intermediate used for synthesizing specific types of HALS (Hindered Amine Light Stabilizers) like Tinuvin 765/292 and other functional molecules requiring this specialized piperidine structure.',
        chemicalStructureImage: image1Doc.id,
        technicalSpecifications: {
          chemicalName: '1,2,2,6,6-Pentamethylpiperidine',
          casNumber: '79-55-0',
          ecNumber: '201-212-8',
          synonyms: [
            { synonym: 'N-Methyl-2,2,6,6-tetramethylpiperidine' },
            { synonym: 'Pentamethylpiperidine' },
          ],
          molecularFormula: 'C₁₀H₂₁N',
          molecularWeight: '155.28 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'Colorless to pale yellow liquid',
          purity: 'min. 97.0 % wt',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'HALS Synthesis',
            description:
              'Key intermediate for synthesizing Tinuvin 765/292 and related high-performance HALS compounds used in polymer stabilization applications.',
            image: image1Doc.id,
          },
          {
            application: 'Organic Synthesis',
            description:
              'Versatile building block for creating sterically hindered nitrogen-containing compounds in pharmaceutical and specialty chemical synthesis.',
            image: image2Doc.id,
          },
          {
            application: 'Research Applications',
            description:
              'Used in academic and industrial research for developing new hindered amine derivatives and studying steric hindrance effects in chemical reactions.',
            image: image3Doc.id,
          },
          {
            application: 'Custom Chemical Manufacturing',
            description:
              'Intermediate for contract manufacturing and custom synthesis projects requiring specific N-methylated hindered amine structures.',
            image: image1Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'N-Methylated Structure',
            description:
              'The N-methyl group provides specific reactivity patterns and steric properties essential for certain HALS synthesis pathways.',
          },
          {
            feature: 'HALS Precursor',
            description:
              'Specifically designed intermediate for producing Tinuvin 765/292 and other commercial light stabilizers with proven performance.',
          },
          {
            feature: 'High Purity Product',
            description:
              'Supplied at minimum 97% purity ensuring consistent reactivity and performance in demanding synthetic applications.',
          },
          {
            feature: 'Steric Hindrance',
            description:
              'Provides optimal steric bulk around the nitrogen center, crucial for the effectiveness of derived HALS compounds.',
          },
          {
            feature: 'VUP Synthetic Expertise',
            description:
              'Manufactured leveraging VUP specialized knowledge in hindered amine chemistry with reliable supply and quality assurance.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What is the primary use of 1,2,2,6,6-Pentamethylpiperidine?',
            answer:
              'It is primarily used as an intermediate in the synthesis of specific HALS like Tinuvin 765/292, providing the N-methylated hindered amine structure required for these light stabilizers.',
          },
          {
            question: 'How does the N-methyl group affect its chemical properties?',
            answer:
              'The N-methyl group reduces basicity compared to secondary amines and provides specific steric and electronic properties essential for certain HALS synthesis pathways.',
          },
          {
            question: 'What purity level does VUP offer for this compound?',
            answer:
              'VUP supplies 1,2,2,6,6-Pentamethylpiperidine with minimum 97% purity, ensuring consistent reactivity and performance in demanding synthetic applications.',
          },
          {
            question: 'Can this compound be used in other applications besides HALS synthesis?',
            answer:
              'Yes, it serves as a versatile building block for creating other sterically hindered nitrogen compounds in pharmaceutical and specialty chemical synthesis.',
          },
          {
            question: 'What safety precautions are required when handling this compound?',
            answer:
              'Handle as specialty chemical with appropriate PPE. May cause skin, eye, and respiratory irritation. Always consult the official SDS for complete safety information.',
          },
        ],
        slug: 'pentamethylpiperidine',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: '1,2,2,6,6-Pentamethyl-4-piperidinol',
        _status: 'published',
        description:
          'A functionalized N-methylated hindered amine containing a hydroxyl group, used as an intermediate for HALS synthesis (e.g., Tinuvin 765/292). The combination of N-methyl and hydroxyl functionalities provides unique reactivity.',
        chemicalStructureImage: image2Doc.id,
        technicalSpecifications: {
          chemicalName: '1,2,2,6,6-Pentamethyl-4-piperidinol',
          casNumber: '2403-89-6',
          ecNumber: '219-311-8',
          synonyms: [
            { synonym: 'N-Methyl-4-hydroxy-2,2,6,6-tetramethylpiperidine' },
            { synonym: 'Pentamethylpiperidinol' },
          ],
          molecularFormula: 'C₁₀H₂₁NO',
          molecularWeight: '171.28 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'White to off-white crystalline solid',
          purity: 'min. 98.0 % wt',
          meltingPoint: '35-38°C',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'HALS Synthesis',
            description:
              'Critical intermediate for synthesizing Tinuvin 765/292 where both N-methyl and hydroxyl functionalities are required for the final product structure.',
            image: image1Doc.id,
          },
          {
            application: 'Specialty Chemical Synthesis',
            description:
              'Building block for creating complex hindered amine derivatives requiring dual functionality of tertiary nitrogen and secondary alcohol.',
            image: image2Doc.id,
          },
          {
            application: 'Pharmaceutical Intermediates',
            description:
              'Used in synthesis of pharmaceutical compounds where sterically hindered aminoalcohol structures provide desired biological activity.',
            image: image3Doc.id,
          },
          {
            application: 'Polymer Additive Development',
            description:
              'Intermediate for developing new polymer stabilizers and additives requiring specific steric and electronic properties.',
            image: image1Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Dual Functionality',
            description:
              'Contains both N-methyl and hydroxyl groups, providing unique reactivity patterns essential for specific HALS synthesis routes.',
          },
          {
            feature: 'High Purity Standards',
            description:
              'Supplied at minimum 98% purity with VUP lab verification ensuring consistent quality for demanding synthetic applications.',
          },
          {
            feature: 'Sterically Hindered Alcohol',
            description:
              'The hydroxyl group is positioned in a sterically hindered environment, providing selective reactivity in chemical transformations.',
          },
          {
            feature: 'Tinuvin Precursor',
            description:
              'Specifically designed intermediate for commercial HALS production, particularly Tinuvin 765/292 synthesis pathways.',
          },
          {
            feature: 'VUP Production Excellence',
            description:
              'Manufactured using VUP specialized hindered amine chemistry expertise with proven track record in quality and reliability.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What makes 1,2,2,6,6-Pentamethyl-4-piperidinol unique in HALS synthesis?',
            answer:
              'It contains both N-methyl and hydroxyl functionalities in a sterically hindered environment, making it essential for synthesizing specific HALS like Tinuvin 765/292.',
          },
          {
            question: 'How does the hydroxyl group affect its reactivity?',
            answer:
              'The sterically hindered hydroxyl group provides selective reactivity, allowing specific chemical transformations while protecting the nitrogen center.',
          },
          {
            question: 'What purity level does VUP offer for this compound?',
            answer:
              'VUP supplies this compound with minimum 98% purity, lab verified for consistent performance in demanding HALS synthesis applications.',
          },
          {
            question: 'Can this intermediate be used for applications other than HALS?',
            answer:
              'Yes, it serves as a versatile building block for pharmaceutical intermediates and specialty chemicals requiring sterically hindered aminoalcohol structures.',
          },
          {
            question: 'What are the typical handling and storage requirements?',
            answer:
              'Store in cool, dry conditions away from strong oxidizers. Handle with appropriate PPE and consult the SDS for complete safety and storage information.',
          },
        ],
        slug: 'pentamethylpiperidinol',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: '4-Amino-2,2,6,6-tetramethylpiperidine',
        _status: 'published',
        description:
          'A sterically hindered primary amine intermediate crucial for synthesizing specialized HALS compounds and pharmaceutical intermediates. The primary amino group provides excellent reactivity while the hindered structure offers stability and unique chemical properties for advanced applications.',
        chemicalStructureImage: image3Doc.id,
        technicalSpecifications: {
          chemicalName: '4-Amino-2,2,6,6-tetramethylpiperidine',
          casNumber: '36768-62-4',
          synonyms: [
            { synonym: '4-Amino-TMP' },
            { synonym: 'Piperidinamine, 2,2,6,6-tetramethyl-4-' },
          ],
          molecularFormula: 'C₉H₂₀N₂',
          molecularWeight: '156.27 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'White to off-white crystalline solid',
          purity: 'min. 98.0 % wt',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'HALS Synthesis',
            description:
              'Key intermediate for synthesizing advanced hindered amine light stabilizers with specific functionality requirements. The primary amino group enables coupling reactions and derivatization pathways.',
            image: image1Doc.id,
          },
          {
            application: 'Pharmaceutical Intermediates',
            description:
              'Building block for developing pharmaceutical compounds requiring sterically hindered amine structures. Used in synthesis of potential drug candidates and active pharmaceutical ingredients.',
            image: image2Doc.id,
          },
          {
            application: 'Specialty Chemical Synthesis',
            description:
              'Versatile intermediate for creating custom hindered amine derivatives in specialty chemical manufacturing. Enables access to unique molecular architectures for various applications.',
            image: image3Doc.id,
          },
          {
            application: 'Research Applications',
            description:
              'Valuable tool in academic and industrial research for studying steric hindrance effects and developing new synthetic methodologies. Used in catalyst development and mechanism studies.',
            image: image1Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Primary Amino Functionality',
            description:
              'Contains reactive primary amino group enabling diverse chemical transformations while maintaining structural stability from steric hindrance.',
          },
          {
            feature: 'Sterically Hindered Structure',
            description:
              'The hindered piperidine framework provides excellent stability and unique reactivity profile compared to conventional primary amines.',
          },
          {
            feature: 'High Purity Standards',
            description:
              'Manufactured to minimum 98% purity with VUP lab verification ensuring consistent performance in demanding synthetic applications.',
          },
          {
            feature: 'Versatile Building Block',
            description:
              'Serves as platform for creating diverse hindered amine derivatives in HALS, pharmaceutical, and specialty chemical synthesis.',
          },
          {
            feature: 'VUP Synthetic Expertise',
            description:
              'Produced leveraging VUP specialized knowledge in hindered amine chemistry with proven track record in quality and supply reliability.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What makes 4-Amino-TMP unique compared to other hindered amines?',
            answer:
              'It contains a primary amino group in a sterically hindered environment, providing both high reactivity for derivatization and excellent stability from the hindered piperidine structure.',
          },
          {
            question: 'What are the main synthetic applications for this compound?',
            answer:
              'Primarily used as intermediate for HALS synthesis, pharmaceutical development, and specialty chemical manufacturing requiring hindered amine functionality.',
          },
          {
            question: 'How does the steric hindrance affect its chemical properties?',
            answer:
              'The hindrance provides thermal stability and resistance to oxidation while the primary amino group remains accessible for selective chemical reactions.',
          },
          {
            question: 'What purity level does VUP offer for 4-Amino-TMP?',
            answer:
              'VUP supplies this compound with minimum 98% purity, lab verified to ensure consistent performance in demanding synthetic and research applications.',
          },
          {
            question: 'Can this intermediate be used in pharmaceutical synthesis?',
            answer:
              'Yes, it serves as valuable building block for pharmaceutical intermediates and drug candidates requiring sterically hindered amine structures.',
          },
          {
            question: 'What are the typical storage and handling requirements?',
            answer:
              'Store in cool, dry conditions away from strong acids and oxidizers. Handle with appropriate PPE and consult SDS for complete safety information.',
          },
        ],
        slug: 'amino-tetramethylpiperidine',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: 'bis(2,2,6,6-tetramethyl-4-piperidyl) sebacate',
        _status: 'published',
        description:
          'Industry-standard high-molecular-weight HALS (equivalent to Tinuvin 770) providing superior UV protection for polyolefins, ABS, and other polymers. Low volatility and excellent thermal stability make it ideal for demanding outdoor applications requiring long-term performance.',
        chemicalStructureImage: image1Doc.id,
        technicalSpecifications: {
          chemicalName: 'bis(2,2,6,6-tetramethyl-4-piperidyl) sebacate',
          casNumber: '52829-07-9',
          synonyms: [
            { synonym: 'Tinuvin 770' },
            { synonym: 'HALS 770' },
            { synonym: 'Lowilite 77' },
            { synonym: 'Sabostab UV 70' },
            { synonym: 'ADK Stab LA-77' },
          ],
          molecularFormula: 'C₂₈H₅₂N₂O₄',
          molecularWeight: '484.72 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'White to off-white powder',
          purity: 'min. 98.0 % wt',
          meltingPoint: '81-86°C',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'Polyolefin Stabilization',
            description:
              'Primary application in PP, PE, and other polyolefins for outdoor use requiring excellent UV protection. Provides long-term stability against photodegradation and maintains mechanical properties.',
            image: image1Doc.id,
          },
          {
            application: 'ABS Protection',
            description:
              'Highly effective in ABS resins for automotive, appliance, and outdoor applications. Prevents yellowing and brittleness while maintaining impact strength and surface quality.',
            image: image2Doc.id,
          },
          {
            application: 'Fiber Applications',
            description:
              'Used in polypropylene fibers for outdoor textiles, carpets, and geotextiles. Ensures color retention and prevents degradation in demanding environmental conditions.',
            image: image3Doc.id,
          },
          {
            application: 'Automotive Components',
            description:
              'Critical for automotive plastics exposed to UV radiation including bumpers, trim, and interior components. Provides durability and appearance retention over vehicle lifetime.',
            image: image1Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'High Molecular Weight',
            description:
              'Low volatility and excellent permanence in polymer matrix, minimizing migration and ensuring long-term stabilization effectiveness.',
          },
          {
            feature: 'Proven Industry Standard',
            description:
              'Equivalent to Tinuvin 770 with decades of proven performance across multiple polymer applications and environmental conditions.',
          },
          {
            feature: 'Excellent Thermal Stability',
            description:
              'Maintains effectiveness at high processing temperatures and provides long-term stability in demanding thermal environments.',
          },
          {
            feature: 'Broad Polymer Compatibility',
            description:
              'Compatible with wide range of polymers and processing conditions, offering formulators flexibility in stabilization strategies.',
          },
          {
            feature: 'VUP Quality Assurance',
            description:
              'Manufactured with VUP expertise in HALS chemistry ensuring consistent quality, purity, and performance reliability.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What polymers can HALS 770 effectively stabilize?',
            answer:
              'Particularly effective in polyolefins (PP, PE), ABS, and polystyrene, providing excellent UV protection and maintaining polymer properties in outdoor applications.',
          },
          {
            question: 'How does HALS 770 compare to other light stabilizers?',
            answer:
              'Offers superior long-term effectiveness due to regenerative mechanism, high thermal stability, and low volatility compared to conventional UV absorbers.',
          },
          {
            question: 'What is the typical usage level for HALS 770?',
            answer:
              'Generally used at 0.1-0.5% by weight depending on application requirements, polymer type, and desired level of UV protection.',
          },
          {
            question: 'Can HALS 770 be combined with other stabilizers?',
            answer:
              'Yes, often used synergistically with UV absorbers and antioxidants for comprehensive polymer stabilization in demanding applications.',
          },
          {
            question: 'What processing temperature limitations should be considered?',
            answer:
              'Stable up to 300°C during processing, making it suitable for most polymer processing conditions without decomposition or performance loss.',
          },
          {
            question: 'How does VUP ensure quality consistency for this product?',
            answer:
              'VUP employs rigorous lab verification, consistent synthesis protocols, and quality control testing to ensure batch-to-batch reliability.',
          },
        ],
        slug: 'hals-770',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: 'bis(1,2,2,6,6-pentamethyl-4-piperidyl) sebacate',
        _status: 'published',
        description:
          'High-performance liquid HALS light stabilizer providing exceptional UV protection for coatings, inks, and plastics. Features excellent thermal stability and broad polymer compatibility. VUP Lab Verified Synthesis ensures consistent quality.',
        chemicalStructureImage: image2Doc.id,
        technicalSpecifications: {
          chemicalName: 'bis(1,2,2,6,6-pentamethyl-4-piperidyl) sebacate',
          casNumber: '41556-26-7',
          synonyms: [
            { synonym: 'Tinuvin 765' },
            { synonym: 'Tinuvin 292' },
            { synonym: 'HALS 765' },
            { synonym: 'Lowilite 76' },
            { synonym: 'ADK Stab LA-72' },
            { synonym: 'Sabostab UV 62' },
          ],
          molecularFormula: 'C₃₀H₅₆N₂O₄',
          molecularWeight: '512.77 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'Colorless to pale yellow liquid',
          purity: '≥99.0%',
          density: '0.99 g/cm³ at 20°C',
          solubility: 'Soluble in most organic solvents',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'Automotive Coatings',
            description:
              'Provides long-term UV protection for automotive topcoats and clearcoats, maintaining gloss and preventing color degradation in harsh outdoor conditions.',
            image: image1Doc.id,
          },
          {
            application: 'Printing Inks',
            description:
              'Ensures light stability in UV-curable and solvent-based printing inks, preventing color fading and maintaining print quality over time.',
            image: image2Doc.id,
          },
          {
            application: 'Industrial Coatings',
            description:
              'Stabilizes high-performance industrial coatings against UV degradation, extending service life in outdoor architectural and marine applications.',
            image: image1Doc.id,
          },
          {
            application: 'Wood Finishes',
            description:
              'Protects wood stains and varnishes from UV-induced discoloration and degradation, maintaining aesthetic appearance and performance.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Liquid Form Processing',
            description:
              'Liquid state enables easy incorporation into formulations without grinding or dispersion requirements, simplifying manufacturing processes.',
          },
          {
            feature: 'Low Volatility',
            description:
              'Maintains effectiveness during high-temperature processing and provides long-term stability without significant loss during application.',
          },
          {
            feature: 'Excellent Compatibility',
            description:
              'Compatible with wide range of resins, solvents, and other additives, offering formulators maximum flexibility in system design.',
          },
          {
            feature: 'Regenerative Mechanism',
            description:
              'HALS mechanism regenerates the stabilizer, providing superior long-term protection compared to sacrificial UV absorbers.',
          },
          {
            feature: 'Thermal Stability',
            description:
              'Withstands processing temperatures up to 280°C without decomposition, suitable for high-temperature coating and ink applications.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What is the recommended dosage level for HALS 765?',
            answer:
              'Typically used at 0.2-1.0% by weight depending on application requirements and desired UV protection level. Higher concentrations provide enhanced durability.',
          },
          {
            question: 'Can HALS 765 be used with other light stabilizers?',
            answer:
              'Yes, often combined synergistically with UV absorbers like benzotriazoles or benzophenones for comprehensive light stabilization systems.',
          },
          {
            question: 'What makes liquid HALS advantageous over solid forms?',
            answer:
              'Liquid form eliminates grinding, reduces dusting, ensures uniform distribution, and simplifies handling in automated manufacturing processes.',
          },
          {
            question: 'How does HALS 765 perform in water-based systems?',
            answer:
              'While primarily designed for solvent-based systems, it can be incorporated into water-based formulations using appropriate emulsification techniques.',
          },
          {
            question: 'What storage conditions are recommended for HALS 765?',
            answer:
              'Store in cool, dry conditions away from direct sunlight. Maintain temperature below 40°C and ensure containers are tightly sealed to prevent contamination.',
          },
          {
            question: 'How does VUP ensure quality consistency for this product?',
            answer:
              'VUP employs rigorous synthesis protocols, comprehensive analytical testing, and batch-to-batch verification to ensure consistent purity and performance.',
          },
        ],
        slug: 'hals-765',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: '4-Amino-TEMPO',
        _status: 'published',
        description:
          'Amino-functionalized TEMPO radical featuring stable nitroxyl functionality combined with reactive amino group. Ideal for spin labeling, bioconjugation, and advanced materials research. VUP Lab Researched quality.',
        chemicalStructureImage: image3Doc.id,
        technicalSpecifications: {
          chemicalName: '4-Amino-2,2,6,6-tetramethylpiperidinyloxyl',
          casNumber: '14691-88-4',
          synonyms: [
            { synonym: '4-Amino-2,2,6,6-tetramethylpiperidinyloxyl' },
            { synonym: 'TEMPO-amine' },
            { synonym: '4-NH2-TEMPO' },
          ],
          molecularFormula: 'C₉H₁₈N₂O',
          molecularWeight: '170.25 g/mol',
          labVerified: 'Researched',
        },
        VupSpecifications: {
          appearance: 'Orange-red crystalline solid',
          purity: '≥98.0%',
          meltingPoint: '69-72°C',
          solubility: 'Soluble in alcohols, moderately soluble in water',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'EPR Spin Labeling',
            description:
              'Used as paramagnetic probe in electron paramagnetic resonance studies for investigating molecular dynamics and protein conformational changes.',
            image: image1Doc.id,
          },
          {
            application: 'Bioconjugation Chemistry',
            description:
              'Amino group enables coupling to biomolecules through amide bond formation, creating spin-labeled proteins, peptides, and nucleic acids for biophysical studies.',
            image: image2Doc.id,
          },
          {
            application: 'Polymer Modification',
            description:
              'Incorporates stable radical functionality into polymer chains for developing materials with unique magnetic and electronic properties.',
            image: image1Doc.id,
          },
          {
            application: 'Redox Chemistry',
            description:
              'Serves as mediator in electrochemical processes and oxidation reactions, particularly useful in organic synthesis and catalysis applications.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Persistent Radical Stability',
            description:
              'Maintains radical character under ambient conditions without dimerization, providing reliable paramagnetic properties for analytical applications.',
          },
          {
            feature: 'Dual Functionality',
            description:
              'Combines stable nitroxyl radical with reactive amino group, enabling versatile chemical modifications and conjugation strategies.',
          },
          {
            feature: 'High Purity',
            description:
              'VUP research-grade quality ensures minimal impurities that could interfere with sensitive spectroscopic and biological applications.',
          },
          {
            feature: 'Water Compatibility',
            description:
              'Moderate water solubility allows use in aqueous biological systems and physiological conditions for biomedical research.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'How stable is the radical functionality of 4-Amino-TEMPO?',
            answer:
              'Extremely stable under normal conditions. The sterically hindered structure prevents radical dimerization, maintaining paramagnetic properties indefinitely when stored properly.',
          },
          {
            question: 'What coupling reactions can be performed with the amino group?',
            answer:
              'Amino group readily forms amide bonds with carboxylic acids/esters, reacts with aldehydes/ketones, and participates in various condensation reactions.',
          },
          {
            question: 'Is 4-Amino-TEMPO suitable for biological applications?',
            answer:
              'Yes, commonly used in protein labeling and biophysical studies. However, cytotoxicity should be evaluated for each specific biological system.',
          },
          {
            question: 'What are the storage requirements for 4-Amino-TEMPO?',
            answer:
              'Store in dark, cool conditions under inert atmosphere. Avoid exposure to strong reducing agents or acids that could compromise radical stability.',
          },
          {
            question: 'How does 4-Amino-TEMPO compare to other TEMPO derivatives?',
            answer:
              'The amino functionality provides unique reactivity while maintaining TEMPO radical stability, offering advantages over hydroxyl or carboxyl TEMPO variants.',
          },
        ],
        slug: 'amino-tempo',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: '8-Oxyl-7,7,9,9-tetramethyl-1,4-dioxa-8-azaspiro[4.5]decane-2-carboxylic acid',
        _status: 'published',
        description:
          'A stable nitroxyl radical with unique spiro structure and carboxylic acid functionality. Ideal for bioconjugation, spin labeling, and analytical applications requiring robust paramagnetic properties. VUP Lab Researched quality ensures reliable performance.',
        chemicalStructureImage: image1Doc.id,
        technicalSpecifications: {
          chemicalName:
            '8-Oxyl-7,7,9,9-tetramethyl-1,4-dioxa-8-azaspiro[4.5]decane-2-carboxylic acid',
          casNumber: '71792-73-7',
          synonyms: [{ synonym: 'Spiro-TEMPO-acid' }, { synonym: 'Spiro-TEMPO carboxylic acid' }],
          molecularFormula: 'C₁₂H₂₀NO₅',
          molecularWeight: '258.29 g/mol',
          labVerified: 'Researched',
        },
        VupSpecifications: {
          appearance: 'Orange to red crystalline solid',
          purity: 'min. 95.0 % wt',
          solubility: 'Soluble in organic solvents, limited water solubility',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'Protein Spin Labeling',
            description:
              'Covalent attachment to proteins via amide bond formation for EPR spectroscopy studies. The spiro structure provides unique steric environment and reduced mobility.',
            image: image1Doc.id,
          },
          {
            application: 'Bioconjugation Chemistry',
            description:
              'Forms stable amide linkages with amino groups in biomolecules for creating paramagnetic bioconjugates. Enables tracking and structural analysis in biological systems.',
            image: image2Doc.id,
          },
          {
            application: 'Synthetic Building Block',
            description:
              'Intermediate for synthesizing more complex spin-labeled molecules and probes. The carboxylic acid provides versatile coupling chemistry for custom applications.',
            image: image3Doc.id,
          },
          {
            application: 'EPR Spectroscopy Research',
            description:
              'Standard probe for electron paramagnetic resonance studies requiring well-defined spin environments. Useful in distance measurements and conformational analysis.',
            image: image1Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Unique Spiro Architecture',
            description:
              'Rigid spiro structure provides distinct steric environment and reduced conformational flexibility compared to linear TEMPO derivatives.',
          },
          {
            feature: 'Carboxylic Acid Reactivity',
            description:
              'Enables amide bond formation with amines and amino acids for bioconjugation. Compatible with standard peptide coupling chemistry.',
          },
          {
            feature: 'Stable Radical Character',
            description:
              'Maintains paramagnetic properties under physiological conditions. Resistant to reduction and dimerization in biological environments.',
          },
          {
            feature: 'Enhanced Rigidity',
            description:
              'Spiro structure reduces molecular motion providing sharper EPR signals and improved distance measurements in protein studies.',
          },
          {
            feature: 'VUP Research Grade',
            description:
              'Lab researched quality with controlled synthesis ensuring consistent radical properties and minimal paramagnetic impurities.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question:
              'What advantages does the spiro structure offer over linear TEMPO derivatives?',
            answer:
              'The spiro structure provides enhanced rigidity and unique steric environment, resulting in sharper EPR signals and reduced conformational flexibility for more precise measurements.',
          },
          {
            question: 'How stable is this compound under biological conditions?',
            answer:
              'Very stable under physiological pH and temperature. The spiro structure protects the radical center from reduction and maintains paramagnetic properties in biological systems.',
          },
          {
            question: 'What coupling methods work best with the carboxylic acid group?',
            answer:
              'Standard amide coupling reagents like EDC/NHS, HATU, or PyBOP work effectively. The carboxylic acid readily forms amide bonds with primary and secondary amines.',
          },
          {
            question: 'Is this compound suitable for protein labeling applications?',
            answer:
              'Yes, excellent for protein spin labeling via amide formation with lysine residues or N-terminus. The rigid structure provides well-defined spin environments for EPR studies.',
          },
          {
            question: 'What are the storage requirements for this radical compound?',
            answer:
              'Store in dark, cool conditions under inert atmosphere. Avoid exposure to reducing agents, strong acids, or bases that could compromise radical stability.',
          },
        ],
        slug: 'spiro-tempo-acid',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: 'Galvinoxyl Free Radical',
        _status: 'published',
        description:
          'A highly stable phenoxyl radical structurally distinct from TEMPO derivatives. Used as analytical standard for radical scavenging studies and antioxidant research. Deep blue color provides visual indication of radical concentration.',
        chemicalStructureImage: image2Doc.id,
        technicalSpecifications: {
          chemicalName:
            '2,6-di-tert-butyl-4-((3,5-di-tert-butyl-4-oxocyclohexa-2,5-dien-1-ylidene)methyl)phenoxy radical',
          casNumber: '2370-18-5',
          synonyms: [
            {
              synonym:
                '2,6-di-tert-butyl-4-((3,5-di-tert-butyl-4-oxocyclohexa-2,5-dien-1-ylidene)methyl)phenoxy radical',
            },
            { synonym: 'Galvinoxyl radical' },
          ],
          molecularFormula: 'C₂₉H₄₁O₂',
          molecularWeight: '421.64 g/mol',
          labVerified: 'Not Confirmed',
        },
        VupSpecifications: {
          appearance: 'Deep blue to purple crystalline solid',
          purity: 'Research grade',
          solubility: 'Soluble in organic solvents, insoluble in water',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'Radical Scavenging Standards',
            description:
              'Reference compound for calibrating radical scavenging assays and antioxidant activity measurements. Provides reproducible results in analytical testing.',
            image: image1Doc.id,
          },
          {
            application: 'Antioxidant Research',
            description:
              'Model radical for studying antioxidant mechanisms and effectiveness. Used to evaluate radical quenching kinetics and antioxidant potency.',
            image: image2Doc.id,
          },
          {
            application: 'EPR Spectroscopy Reference',
            description:
              'Standard for electron paramagnetic resonance studies requiring well-characterized radical properties. Provides consistent signal for instrument calibration.',
            image: image3Doc.id,
          },
          {
            application: 'Polymer Stabilization Research',
            description:
              'Research tool for studying polymerization inhibition mechanisms and evaluating stabilizer effectiveness. Helps develop new antioxidant systems.',
            image: image1Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Phenoxyl Radical Structure',
            description:
              'Structurally distinct from nitroxyl radicals like TEMPO, providing different reactivity patterns and scavenging mechanisms for comparative studies.',
          },
          {
            feature: 'Visual Color Indicator',
            description:
              'Deep blue color allows visual monitoring of radical concentration and reaction progress. Color intensity correlates with radical concentration.',
          },
          {
            feature: 'Exceptional Stability',
            description:
              'Highly stable under ambient conditions due to extensive steric hindrance from tert-butyl groups. Maintains radical character for extended periods.',
          },
          {
            feature: 'Research Standard',
            description:
              'Well-characterized properties make it ideal as analytical reference. Provides reproducible results across different laboratories and applications.',
          },
          {
            feature: 'Unique Reactivity Profile',
            description:
              'Different reaction kinetics compared to TEMPO radicals enabling study of structure-activity relationships in radical chemistry.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'How does Galvinoxyl differ from TEMPO in radical scavenging studies?',
            answer:
              'Galvinoxyl is a phenoxyl radical with different reactivity kinetics and mechanisms compared to TEMPO nitroxyl radicals, providing complementary data in scavenging studies.',
          },
          {
            question: 'Can the blue color be used for quantitative analysis?',
            answer:
              'Yes, the deep blue color correlates with radical concentration and can be used for UV-Vis spectrophotometric quantification and visual monitoring of reactions.',
          },
          {
            question: 'What makes Galvinoxyl particularly stable as a free radical?',
            answer:
              'Extensive steric hindrance from multiple tert-butyl groups prevents radical dimerization and protects the radical center from unwanted reactions.',
          },
          {
            question: 'Is Galvinoxyl suitable for biological antioxidant testing?',
            answer:
              'Primarily used in chemical systems due to limited water solubility. More suitable for organic solvent-based assays and mechanistic studies.',
          },
          {
            question: 'What are the typical storage and handling requirements?',
            answer:
              'Store in dark, cool conditions away from reducing agents. Handle under inert atmosphere to prevent unwanted reactions and maintain radical integrity.',
          },
        ],
        slug: 'galvinoxyl',
      },
    }),
  ])

  //* -------------------- SEEDING INDUSTRIES -------------------- *//
  payload.logger.info(`— Seeding industries...`)

  const [
    automotive,
    coatingsPaintsInks,
    polymersPlastics,
    adhesivesSealants,
    pharmaceuticals,
    petrochemicalsRefineries,
    batteryEnergyStorage,
    buildingConstruction,
  ] = await Promise.all([
    payload.create({
      collection: 'industries',
      data: {
        name: 'Solutions for The Automotive Industry',
        _status: 'published',
        description:
          'The automotive industry demands materials that deliver superior performance, durability, aesthetics, and meet increasingly strict environmental and safety standards. VUP, a.s. supports automotive manufacturers and suppliers by providing essential chemical intermediates for advanced, low-VOC coatings and high-performance adhesives, specialized cleaning agents for production processes, and tailored analytical testing services that ensure compliance with automotive standards. We partner with the industry to enable innovation in vehicle materials and manufacturing.',
        summary:
          'VUP provides essential chemical intermediates and services for automotive innovation, focusing on superior performance, durability, and compliance with stringent environmental and safety standards, enabling advancements in vehicle materials and manufacturing.',
        featuredImage: automotiveDoc.id,
        services: [researchDevelopment, analyticalTesting],
        challenges: [
          {
            title: 'Advanced Automotive Coatings (OEM & Refinish)',
            challenge:
              'Developing durable, high-performance, and environmentally compliant coatings (primers, basecoats, clearcoats) for vehicle bodies and components.',
            solution:
              'We supply key raw materials essential for modern automotive coatings. DMPA (CAS 4767-03-7) and DMBA (CAS 10097-02-6) are critical for producing waterborne Polyurethane Dispersions (PUDs) and polyester/alkyd resins used in eco-friendly, low-VOC automotive paints, contributing to excellent finish quality. HPVA (CAS 4835-90-9), particularly via its derivative HPN, is used in primers and solvent-borne paints to enhance properties like chip resistance. These methylolalkanoic acids are vital components for prime autocoatings.',
            image: automotiveChallenge1Doc.id,
            challengeLink: 'advanced-automotive-coatings',
            relatedProducts: [dmpa, dmba, hpva],
            relatedServices: [researchDevelopment, analyticalTesting],
            caseStudies: [],
          },
          {
            title: 'High-Performance Automotive Adhesives',
            challenge:
              'Bonding diverse materials securely and durably is essential in modern vehicle construction, often requiring high-performance adhesives, including waterborne systems.',
            solution:
              'DMBA (CAS 10097-02-6) serves as a crucial component in waterborne polyurethane, epoxy, and polyester adhesives used in automotive assembly. It enhances bonding strength and improves water resistance, contributing to the overall structural integrity and longevity of the vehicle.',
            image: automotiveChallenge2Doc.id,
            challengeLink: 'automotive-adhesives',
            relatedProducts: [dmba],
            relatedServices: [researchDevelopment],
            caseStudies: [],
          },
          {
            title: 'Surface Preparation & Cleaning',
            challenge:
              'Ensuring surfaces are properly cleaned and degreased is critical for achieving optimal adhesion and finish quality in painting, sealing, and bonding operations during automotive manufacturing and repair.',
            solution:
              'We offer OP VUPOL, a specialized degreasing agent recommended for use in the automotive industry. It is effective for applications such as degreasing brake linings and preparing surfaces prior to gluing, sealing, or painting.',
            image: automotiveChallenge3Doc.id,
            challengeLink: 'surface-preparation',
            relatedProducts: [],
            caseStudies: [],
          },
          {
            title: 'Component Testing & Compliance (VOCs)',
            challenge:
              'Meeting stringent industry standards and regulations for materials used in vehicle interiors and components, particularly regarding Volatile Organic Compound (VOC) emissions from plastics.',
            solution:
              'Our accredited ATBEL analytical laboratories (SNAS S-118) provide specialized testing services for the automotive sector, including the determination of VOC content in plastics according to the PV3341 automotive standard. We also offer regulatory support concerning the compliance of chemical raw materials (e.g., REACH).',
            image: automotiveChallenge4Doc.id,
            challengeLink: 'testing-compliance',
            relatedServices: [analyticalTesting],
            caseStudies: [],
          },
        ],
        slug: 'automotive',
      },
    }),
    payload.create({
      collection: 'industries',
      data: {
        name: 'Coatings, Paints & Inks',
        _status: 'published',
        description:
          'The coatings, paints, and inks industry continuously seeks innovations that enhance performance, durability, and environmental compatibility. Formulators face challenges in meeting stringent regulations (like low VOC targets) while delivering exceptional protection, aesthetics, and functionality. VUP, a.s., leverages over 70 years of chemical expertise to provide essential building blocks like Dimethylolpropionic Acid (DMPA) and the unique Dimethylolbutanoic Acid (DMBA), alongside other key intermediates, enabling the production of advanced waterborne systems and high-performance coatings. As a key European producer, we are your reliable partner for these critical raw materials, supported by robust R&D and regulatory know-how.',
        summary:
          'VUP offers key building blocks for waterborne systems and coatings, ensuring performance and regulatory compliance.',
        featuredImage: coatingsPaintsInksDoc.id,
        services: [researchDevelopment, analyticalTesting],
        keyProducts: [dmpa, dmba, hpva],
        challenges: [
          {
            title: 'Waterborne Coatings (PUDs, Alkyds, Polyesters)',
            challenge:
              'Developing stable, high-performance waterborne coatings with reduced environmental impact requires specialized hydrophilic monomers.',
            solution:
              'Our DMPA (CAS 4767-03-7) is a versatile building block ensuring stable dispersion of resins (polyurethanes, alkyds, polyesters) in water, leading to lower VOC formulations with enhanced adhesion, gloss, and impact resistance. Our unique DMBA (CAS 10097-02-6) offers potential advantages like superior solubility and faster reaction rates, beneficial for optimizing polyurethane production and application properties. Both are fully REACH registered, supporting regulatory compliance. We also offer Hydroxypivalic Acid (HPVA, CAS 4835-90-9), another key intermediate for durable waterborne resins.',
            image: coatingsChallenge1Doc.id,
            challengeLink: 'waterborne-coatings',
            relatedProducts: [dmpa, dmba, hpva],
            relatedServices: [researchDevelopment, analyticalTesting],
            caseStudies: [],
          },
          {
            title: 'Powder Coatings & Resin Modification',
            challenge:
              'Achieving optimal flow, leveling, durability, and flexibility in powder coatings and other resin systems often requires specific intermediates.',
            solution:
              'Hydroxypivalic Acid (HPVA) serves as a key intermediate for producing resins, including polyesters used in powder coatings where its derivative (HPN) improves flow and leveling. Acrylate esters of polyhydric alcohols act as versatile monomers providing crosslinking points, influencing hardness, flexibility, and durability in the final coating film. Our Custom Synthesis capabilities can further address specific monomer or additive needs.',
            image: coatingsChallenge2Doc.id,
            challengeLink: 'powder-coatings',
            relatedProducts: [hpva],
            relatedServices: [researchDevelopment],
            caseStudies: [],
          },
          {
            title: 'Meeting Environmental Regulations (Low VOC)',
            challenge:
              'Adhering to strict environmental regulations, particularly concerning Volatile Organic Compound (VOC) emissions, is critical for market access.',
            solution:
              "By supplying key monomers like DMPA and DMBA that enable high-performance waterborne formulations, VUP directly supports the industry's shift towards lower-VOC and more sustainable coating technologies. Our products are registered under REACH, and our Regulatory Support services can assist clients in navigating compliance requirements for their formulations.",
            image: coatingsChallenge3Doc.id,
            challengeLink: 'environmental-regulations',
            relatedProducts: [dmpa, dmba, hpva],
            relatedServices: [analyticalTesting],
            caseStudies: [],
          },
        ],
        slug: 'coatings-paints-inks',
      },
    }),
    payload.create({
      collection: 'industries',
      data: {
        name: 'Polymers & Plastics',
        _status: 'published',
        description:
          'The Polymers & Plastics industry relies on innovative chemistry to create materials with specific functionalities, enhanced durability, and improved processing characteristics. From controlling polymerization reactions to protecting final products from degradation, specialized chemical additives and intermediates play a critical role. VUP, a.s. provides key building blocks, stabilizers (like Hindered Amines/HALS), crosslinkers, and polymerization mediators (like TEMPO), supported by extensive R&D and analytical services, enabling our partners to develop advanced polymer solutions.',
        summary:
          'VUP offers building blocks and stabilizers for polymers, enhancing durability and processing with advanced R&D support.',
        featuredImage: polymersPlasticsDoc.id,
        services: [researchDevelopment, analyticalTesting],
        keyProducts: [tempo, hTempo, dmpa, dmba, hpva],
        challenges: [
          {
            title: 'Polymer Stabilization (Light, Heat, Oxidation)',
            challenge:
              'Protecting polymers from degradation caused by UV light, heat, and oxidation is crucial for extending product lifespan and maintaining performance, especially in demanding applications.',
            solution:
              'We offer Hindered Amines, including Hindered Amine Light Stabilizers (HALS) derived from our TAA production line. These additives act as potent radical scavengers, significantly inhibiting polymer degradation, preventing cracking and discoloration, and improving the long-term durability of plastics and coatings. Our TEMPO derivatives also contribute to polymer stability.',
            image: polymersChallenge1Doc.id,
            challengeLink: 'polymer-stabilization',
            relatedServices: [researchDevelopment, analyticalTesting],
            caseStudies: [],
          },
          {
            title: 'Controlled Polymerization & Architecture',
            challenge:
              'Achieving specific polymer properties often requires precise control over molecular weight, polydispersity, and architecture during synthesis.',
            solution:
              'TEMPO (CAS 2564-83-2) functions as a highly effective mediator in Nitroxide-Mediated Polymerization (NMP), allowing for the synthesis of polymers with well-defined structures. This control enables the development of materials with enhanced performance characteristics tailored for specific applications. H-TEMPO (CAS 2226-96-2) can serve as a polymerization inhibitor for process control or storage.',
            image: polymersChallenge2Doc.id,
            challengeLink: 'controlled-polymerization',
            relatedProducts: [tempo, hTempo],
            relatedServices: [researchDevelopment],
            caseStudies: [],
          },
          {
            title: 'Polyurethane Building Blocks',
            challenge:
              'Formulating high-performance polyurethanes (dispersions, elastomers, adhesives) requires specific intermediates to impart desired properties like water dispersibility, flexibility, and adhesion.',
            solution:
              "We provide key methylolalkanoic acids DMPA (CAS 4767-03-7) and DMBA (CAS 10097-02-6), essential for creating stable waterborne PUDs with enhanced performance. HPVA serves as an intermediate for durable polyester and polyurethane resins. Trimethylolethane (TME, CAS 77-85-0) offers an alternative polyol building block. Additionally, O,O'-Bis(3-aminopropyl)polyethyleneglycol can be used as a reactive component to impart flexibility and hydrophilicity.",
            image: polymersChallenge3Doc.id,
            challengeLink: 'polyurethane-building-blocks',
            relatedProducts: [dmpa, dmba, hpva],
            relatedServices: [researchDevelopment],
            caseStudies: [],
          },
          {
            title: 'Crosslinking & Property Enhancement',
            challenge:
              'Improving the mechanical strength, thermal stability, elasticity, and chemical resistance of polymers often involves creating crosslinked networks within the material.',
            solution:
              'We offer crosslinking agents such as Tetravup (VUP Brand) and Adipic acid dihydrazide. These multifunctional molecules react with polymer chains to enhance structural integrity and performance characteristics critical for demanding applications in adhesives, coatings, elastomers, and plastics.',
            image: polymersChallenge4Doc.id,
            challengeLink: 'crosslinking',
            relatedServices: [researchDevelopment, analyticalTesting],
            caseStudies: [],
          },
        ],
        slug: 'polymers-plastics',
      },
    }),
    payload.create({
      collection: 'industries',
      data: {
        name: 'Adhesives & Sealants',
        _status: 'published',
        description:
          'The Adhesives & Sealants industry demands materials that provide strong, durable bonds, excellent flexibility, and resistance to environmental factors, while increasingly favouring sustainable, low-VOC formulations. VUP, a.s. contributes key chemical intermediates that enable the development of advanced adhesive and sealant systems. We provide specialized building blocks like Dimethylolbutanoic Acid (DMBA) for high-performance waterborne adhesives, Hydroxypivalic Acid (HPVA) derivatives for reactive hot melts, and essential crosslinkers, supporting formulators in meeting performance and regulatory challenges.',
        summary:
          'VUP supplies intermediates for adhesives, enhancing strength, flexibility, and sustainability with low-VOC solutions.',
        featuredImage: adhesivesSealantsDoc.id,
        services: [researchDevelopment, analyticalTesting],
        keyProducts: [dmba, hpva, dmpa],
        challenges: [
          {
            title: 'Waterborne Adhesive Systems (Polyurethane, Polyester, Epoxy)',
            challenge:
              'Formulating high-performance waterborne adhesives requires intermediates that ensure stability, strong bonding, and water resistance.',
            solution:
              'Dimethylolbutanoic Acid (DMBA, CAS 10097-02-6) is a crucial component for waterborne polyurethane, epoxy, and polyester adhesives. Its superior water solubility improves processing efficiency, while its function as a cross-linking agent provides exceptional bonding strength and improved water resistance. Its potentially faster reaction rate can also enhance production throughput. We also offer DMPA, a related methylolalkanoic acid also used in PUDs for adhesives.',
            image: adhesivesChallenge1Doc.id,
            challengeLink: 'waterborne-adhesive-systems',
            relatedProducts: [dmba, dmpa],
            relatedServices: [researchDevelopment, analyticalTesting],
            caseStudies: [],
          },
          {
            title: 'Reactive Hot Melt Adhesives & Resin Modification',
            challenge:
              'Developing solvent-free reactive hot melts with good transparency, adhesion, and flexibility requires specific building blocks.',
            solution:
              "Hydroxypivalic Acid (HPVA, CAS 4835-90-9) is a precursor to Hydroxypivalic Acid Neopentyl Glycol Ester (HPN). HPN acts as a building block for polyurethane resins used in adhesives, contributing a favourable balance of hardness, flexibility, and adhesion. In reactive hot melts, HPN can improve transparency and reduce solvent requirements, supporting lower VOC formulations. VUP's Polyhydric Alcohols also serve as intermediates for resins used in this sector.",
            image: adhesivesChallenge2Doc.id,
            challengeLink: 'reactive-hot-melts',
            relatedProducts: [hpva],
            relatedServices: [researchDevelopment],
            caseStudies: [],
          },
          {
            title: 'Enhanced Strength & Durability via Crosslinking',
            challenge:
              'Achieving the necessary mechanical strength, thermal stability, and chemical resistance in high-performance adhesives and sealants often requires effective crosslinking.',
            solution:
              'We provide key crosslinking agents like Adipic acid dihydrazide. These components react within the adhesive or sealant formulation to create robust polymer networks, significantly enhancing the durability and performance characteristics required for demanding applications.',
            image: adhesivesChallenge3Doc.id,
            challengeLink: 'crosslinking-solutions',
            relatedServices: [analyticalTesting],
            caseStudies: [],
          },
          {
            title: 'Performance Additives & Custom Solutions',
            challenge:
              'Unique applications may require specialized additives or intermediates to achieve specific performance targets not met by standard components.',
            solution:
              'TEMPO derivatives show potential for enhancing polymerization processes or improving the thermal/mechanical strength of adhesives. Furthermore, our Custom Synthesis services allow us to develop and produce specific monomers or additives tailored to your unique adhesive or sealant formulation needs, backed by our extensive R&D capabilities.',
            image: adhesivesChallenge4Doc.id,
            challengeLink: 'custom-solutions',
            relatedProducts: [tempo],
            relatedServices: [researchDevelopment],
            caseStudies: [],
          },
        ],
        slug: 'adhesives-sealants',
      },
    }),
    payload.create({
      collection: 'industries',
      data: {
        name: 'Pharmaceuticals & Biotechnology',
        _status: 'published',
        description:
          'The Pharmaceutical and Biotechnology sectors demand exceptional purity, innovative chemistry, and strict adherence to regulatory standards. VUP, a.s. partners with companies in these critical industries by providing key chemical intermediates, specialized diagnostic aids, advanced biomedical materials, and expert R&D and custom synthesis services. Leveraging our 70+ years of chemical expertise, ISO 9001:2015 certification, and accredited analytical capabilities, we support the development and production of vital healthcare solutions.',
        summary:
          'VUP provides intermediates and services for pharma and biotech, ensuring purity and compliance with innovative chemistry.',
        featuredImage: pharmaceuticalsDoc.id,
        services: [researchDevelopment, analyticalTesting],
        keyProducts: [tempo, hTempo],
        challenges: [
          {
            title: 'API Synthesis & Pharmaceutical Intermediates',
            challenge:
              'Sourcing high-purity, reliably supplied raw materials and intermediates is crucial for Active Pharmaceutical Ingredient (API) manufacturing.',
            solution:
              "We specialize in the production of TEMPO (CAS 2564-83-2) and related nitroxide radicals, which serve as versatile catalysts, antioxidants, and raw materials, including use in APIs targeting Parkinson's disease. VUP's Custom Synthesis service provides tailored production of other complex organic intermediates needed for drug development pipelines, backed by robust quality control.",
            image: pharmaChallenge1Doc.id,
            challengeLink: 'api-synthesis',
            relatedProducts: [tempo, hTempo],
            relatedServices: [researchDevelopment, analyticalTesting],
            caseStudies: [],
          },
          {
            title: 'Biomedical Materials & Device Coatings',
            challenge:
              'Developing advanced medical devices and therapies often requires specialized biocompatible materials with unique functional properties.',
            solution:
              "VUP is the unique global producer of O,O'-Bis(3-aminopropyl)polyethyleneglycol (DAPEG), a high-value intermediate used to create lubricious, hydrophilic coatings for vascular intervention devices and other surgical applications. Building on this, we have developed pilot capabilities for PEG-diacrylamide (PEGDAA), a derivative with significant potential in tissue engineering, 3D bioprinting, and drug delivery systems. Our R&D team actively collaborates with partners like DSM Biomedical in this area.",
            image: pharmaChallenge2Doc.id,
            challengeLink: 'biomedical-materials',
            relatedServices: [researchDevelopment],
            caseStudies: [],
          },
          {
            title: 'Diagnostic Aids & Healthcare Products',
            challenge:
              'Reliable and safe consumable materials are essential for routine diagnostic procedures in healthcare settings.',
            solution:
              'We manufacture high-quality diagnostic gels, including GELSON for sonography and EV GEL for ECG/EEG examinations. These products are formulated using safe, dermatology/cosmetic-grade raw materials, are alcohol-free, non-irritating, and meet relevant health standards (Gelson holds a MoH SK health certificate). VUP also produces other fine chemicals and products for healthcare applications.',
            image: pharmaChallenge3Doc.id,
            challengeLink: 'diagnostic-aids',
            relatedServices: [analyticalTesting],
            caseStudies: [],
          },
          {
            title: 'Drug Discovery & Research Chemicals',
            challenge:
              'Researchers require access to specialized, high-purity chemicals and reagents for target identification, screening, and preclinical studies.',
            solution:
              'Our TEMPO derivatives serve as important tools (antioxidants, spin labels) in pharmaceutical research. VUP also produces unique laboratory chemicals specifically for medical applications and offers Custom Synthesis services to provide researchers with novel compounds or specific intermediates needed for their discovery programs.',
            image: pharmaChallenge4Doc.id,
            challengeLink: 'drug-discovery',
            relatedProducts: [tempo, hTempo],
            relatedServices: [researchDevelopment, analyticalTesting],
            caseStudies: [],
          },
        ],
        slug: 'pharmaceuticals',
      },
    }),
    payload.create({
      collection: 'industries',
      data: {
        name: 'Petrochemicals & Refineries',
        _status: 'published',
        description:
          'Born from the Petrochemical Research Institute founded in 1950, VUP, a.s. possesses deep historical roots and extensive expertise in petrochemical science and technology. While not a large-scale refiner, we partner with the Petrochemicals & Refineries sector by providing specialized chemical products (like fuel stabilizers and inhibitors), advanced analytical services, custom synthesis of intermediates, and expert R&D support for process optimization and development. Our commitment to quality (ISO 9001) and safety (Responsible Care) makes us a reliable partner for this demanding industry.',
        summary:
          'VUP offers specialized products and services for petrochemicals, focusing on quality, safety, and process optimization.',
        featuredImage: petrochemicalsRefineriesDoc.id,
        services: [researchDevelopment, analyticalTesting],
        challenges: [
          {
            title: 'Fuel Processing, Storage & Stability',
            challenge:
              'Ensuring fuel stability during processing, transportation, and storage is critical to prevent degradation, gum formation, and maintain quality specifications.',
            solution:
              'We produce specialized additives like VUPIN H37-B (Antioxidant/UV Stabilizer) designed for fuel processing and storage. Additionally, our expertise extends to polymerization inhibitors like H-TEMPO, which has been successfully used for years in refinery FCC units (e.g., at Slovnaft) to prevent unwanted reactions.',
            image: petroChallenge1Doc.id,
            challengeLink: 'fuel-processing-storage',
            relatedServices: [researchDevelopment, analyticalTesting],
            relatedProducts: [vupin, hTempo],
            caseStudies: [],
          },
          {
            title: 'Petrochemical Synthesis & Specialty Intermediates',
            challenge:
              'The petrochemical industry requires a wide range of specialized intermediates for downstream applications or specific process needs, often demanding custom chemical synthesis capabilities.',
            solution:
              'Leveraging our strong R&D foundation, we offer Custom Synthesis services for specialty organic intermediates. Our historical and ongoing research expertise includes areas directly relevant to petrochemical feedstocks and derivatives, such as acetylenic alcohols, epoxides, polyhydric alcohols, higher aldehydes, and brominated hydrocarbons.',
            image: petroChallenge2Doc.id,
            challengeLink: 'petrochemical-synthesis',
            relatedServices: [researchDevelopment],
            caseStudies: [],
          },
          {
            title: 'Raw Materials for Downstream Industries',
            challenge:
              'Refineries and petrochemical plants provide the fundamental building blocks for numerous downstream industries like polymers, plastics, coatings, and adhesives. Suppliers of intermediates for these sectors are key partners.',
            solution:
              'We manufacture key intermediates like DMPA, DMBA, and HPVA, which are derived from petrochemical value chains and are essential raw materials for producing high-performance polyurethanes (PUDs), polyesters, and alkyds used extensively in coatings, adhesives, and polymer applications.',
            image: petroChallenge3Doc.id,
            challengeLink: 'raw-materials',
            relatedProducts: [dmpa, dmba, hpva],
            relatedServices: [researchDevelopment],
            caseStudies: [],
          },
          {
            title: 'Process Optimization, Analysis & Safety',
            challenge:
              'Optimizing refinery and petrochemical processes, ensuring product quality, and maintaining high safety standards requires robust analytical support and technical expertise.',
            solution:
              'Our R&D services can assist with process development and optimization. Our accredited ATBEL Division (SNAS S-118) provides comprehensive analytical services relevant to this sector, including gas/liquid chromatography for composition analysis, VOC determination, physical property testing, and extensive technical-safety analyses (flash point, flammability, etc.) crucial for safe handling and process control.',
            image: petroChallenge4Doc.id,
            challengeLink: 'process-optimization',
            relatedServices: [researchDevelopment, analyticalTesting],
            caseStudies: [],
          },
        ],
        slug: 'petrochemicals-refineries',
      },
    }),
    payload.create({
      collection: 'industries',
      data: {
        name: 'Battery & Energy Storage',
        _status: 'published',
        description:
          'The global search for efficient, sustainable, and safe energy storage solutions is driving innovation beyond traditional lithium-ion batteries. Organic Radical Batteries (ORBs) represent a promising frontier, utilizing redox-active organic molecules like TEMPO (2,2,6,6-Tetramethylpiperidinooxy) and its derivatives. VUP, a.s., with its long-standing expertise in the R&D and production of high-purity TEMPO compounds, is positioned to support the development of this next generation of energy storage technology. Our scalable production capabilities and ongoing research efforts aim to provide key materials for ORBs and advanced redox flow batteries.',
        summary:
          'VUP supports energy storage innovation with TEMPO compounds for ORBs and redox flow batteries, focusing on sustainability and efficiency.',
        featuredImage: batteryEnergyStorageDoc.id,
        keyProducts: [tempo, hTempo],
        services: [researchDevelopment, analyticalTesting, customSynthesisManufacturing],
        challenges: [
          {
            title: 'Organic Radical Batteries (ORBs)',
            challenge:
              'Developing high-performance, metal-free, and potentially safer battery systems for applications ranging from portable electronics to grid storage.',
            solution:
              'TEMPO and its derivatives exhibit remarkable electrochemical performance, acting as highly efficient and reversible charge carriers. Their potential use as redox-active materials in ORB electrodes offers advantages like potentially high power density and fast charge/discharge rates. VUP produces high-purity TEMPO suitable for electrochemical research and development in this field.',
            image: batteryChallenge1Doc.id,
            challengeLink: 'organic-radical-batteries',
            relatedProducts: [tempo, hTempo],
            relatedServices: [researchDevelopment, customSynthesisManufacturing],
            caseStudies: [],
          },
          {
            title: 'Aqueous Redox Flow Batteries',
            challenge:
              'Improving the energy density, efficiency, and cost-effectiveness of aqueous redox flow batteries for grid-scale energy storage.',
            solution:
              "Research indicates significant potential for TEMPO-based catholytes to enhance the performance of aqueous redox flow batteries. VUP's expertise in TEMPO chemistry positions us to collaborate on developing and supplying tailored TEMPO derivatives optimized for stability and electrochemical potential in flow battery systems.",
            image: batteryChallenge2Doc.id,
            challengeLink: 'redox-flow-batteries',
            relatedProducts: [tempo],
            relatedServices: [researchDevelopment, customSynthesisManufacturing],
            caseStudies: [],
          },
          {
            title: 'Material Development & Optimization',
            challenge:
              'Optimizing the performance of TEMPO-based batteries requires understanding structure-property relationships and potentially synthesizing novel derivatives with enhanced stability, solubility, or redox potential. Performance optimization regarding energy density and charge/discharge efficiency is a key focus.',
            solution:
              'Leveraging our deep expertise in nitroxide radical chemistry and R&D capabilities, we partner with researchers and companies to develop and synthesize custom TEMPO derivatives. Our goal is to address specific performance bottlenecks and contribute to advancements in ORB and flow battery technology through targeted material innovation. VUP has technologies involving TEMPO ready for scaling up.',
            image: batteryChallenge3Doc.id,
            challengeLink: 'material-development',
            relatedServices: [researchDevelopment, customSynthesisManufacturing, analyticalTesting],
            caseStudies: [],
          },
        ],
        slug: 'battery-energy-storage',
      },
    }),
    payload.create({
      collection: 'industries',
      data: {
        name: 'Building & Construction',
        _status: 'published',
        description:
          'The Building & Construction industry continuously seeks materials and chemical solutions that improve durability, process efficiency, safety, and sustainability. VUP, a.s. contributes to this sector by providing specialized chemical preparations designed to enhance concrete and plaster properties (VUPPOR, VUPRANYL), improve formwork efficiency (VUPOFORM), and supply key intermediates (DMBA, DMPA) used in high-performance coatings and adhesives essential for modern construction. Our focus is on delivering reliable chemical solutions that add value to building materials and processes.',
        summary:
          'VUP enhances construction materials with chemical solutions for durability, efficiency, and sustainability.',
        featuredImage: buildingConstructionDoc.id,
        keyProducts: [dmba, dmpa, hpva],
        services: [researchDevelopment, analyticalTesting],
        challenges: [
          {
            title: 'Concrete & Cement Product Enhancement',
            challenge:
              'Improving the workability of concrete mixes and enhancing the properties of finished concrete products like paving stones, panels, and structures is key for efficiency and performance.',
            solution:
              'VUPPOR is specifically designed as an additive for concrete products. It improves processability and enhances thermal insulation properties. Recommended for a wide range of concrete items including pavings, edge-stones, gardening parts, construction panels, and monolithic constructions, VUPPOR contributes to better quality finished products. It is physiologically harmless and requires no special handling measures beyond standard practices.',
            image: constructionChallenge1Doc.id,
            challengeLink: 'concrete-cement-enhancement',
            relatedServices: [researchDevelopment],
            caseStudies: [],
          },
          {
            title: 'Improving Plasters & Coatings',
            challenge:
              'Enhancing the durability, application properties, and crack resistance of synthetic plasters and water-soluble coatings used in construction. Meeting low-VOC requirements for architectural coatings.',
            solution:
              'VUPRANYL, a stable water dispersion, serves as an additive for synthetic plasters and water-soluble coatings, leading to longer durability and a significant decrease in crack formation. Additionally, key intermediates like DMBA (CAS 10097-02-6) and DMPA (CAS 4767-03-7) are crucial for producing the waterborne polyurethane and polyester resins used in durable, low-VOC architectural and protective coatings, offering excellent adhesion and flexibility.',
            image: constructionChallenge2Doc.id,
            challengeLink: 'plasters-coatings',
            relatedProducts: [dmba, dmpa],
            relatedServices: [analyticalTesting],
            caseStudies: [],
          },
          {
            title: 'Efficient Formwork Release (Demoulding)',
            challenge:
              'Ensuring clean and easy release of concrete from formwork without damaging the forms or the concrete surface, while maintaining worker safety and environmental considerations.',
            solution:
              'VUPOFORM acts as a highly effective deforming (release) agent for all types of building forms. Its insolubility in water provides an excellent separation effect, allowing for multiple reuses of the form without reapplication. It does not attack sealing materials or corrode metal equipment. VUPOFORM offers significant safety and environmental benefits: negligible volatility (no air pollution), elimination of oil contamination in wastewater, and no special safety measures required for handling.',
            image: constructionChallenge3Doc.id,
            challengeLink: 'formwork-release',
            caseStudies: [],
          },
          {
            title: 'High-Performance Construction Adhesives & Sealants',
            challenge:
              'Modern construction relies on high-performance adhesives and sealants for bonding diverse materials, ensuring structural integrity, and providing effective sealing against environmental elements.',
            solution:
              'We supply key chemical intermediates like DMBA (CAS 10097-02-6), used in waterborne polyurethane, epoxy, and polyester adhesives where it enhances bonding strength and water resistance. Hydroxypivalic Acid (HPVA, CAS 4835-90-9), via its derivative HPN, contributes to the performance of adhesives and sealants by balancing hardness, flexibility, and adhesion, potentially enabling low-VOC formulations.',
            image: constructionChallenge4Doc.id,
            challengeLink: 'construction-adhesives-sealants',
            relatedProducts: [dmba, hpva],
            relatedServices: [researchDevelopment],
            caseStudies: [],
          },
        ],
        slug: 'building-construction',
      },
    }),
  ])

  //* -------------------- SEEDING CAREERS -------------------- *//

  payload.logger.info(`— Seeding careers...`)

  const [chemist, analyst] = await Promise.all([
    payload.create({
      collection: 'careers',
      depth: 0,
      data: {
        title: 'Senior Research Chemist',
        category: 'Research and Development',
        location: 'Prievidza, Slovakia',
        type: 'fulltime',
        description: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'We are seeking a ',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: 'highly motivated Senior Research Chemist',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: ' to join our R&D team in Prievidza. You will lead innovative research projects focused on developing new chemical products and optimizing existing processes. This role offers the opportunity to work with ',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 2,
                    mode: 'normal',
                    style: '',
                    text: 'cutting-edge technology',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: ' and contribute to sustainable chemistry solutions that make a real impact on global industries. As part of our team with 70+ years of chemical expertise and over 900 patents, you will drive innovation in specialty chemicals while working on projects that span from laboratory-scale synthesis to industrial production.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        keyResponsibilities: [
          {
            responsibility:
              'Design and execute complex research projects in organic and analytical chemistry, focusing on sustainable chemical processes and green chemistry principles',
          },
          {
            responsibility:
              'Lead cross-functional teams to develop new chemical products and processes, managing project timelines, budgets, and deliverables from concept to commercialization',
          },
          {
            responsibility:
              'Conduct route scouting and feasibility studies for synthetic pathways, utilizing literature research, patent analysis, and practical chemistry expertise',
          },
          {
            responsibility:
              'Develop and optimize synthetic methods for specialty chemicals, intermediates, and active pharmaceutical ingredients with focus on scalability',
          },
          {
            responsibility:
              'Collaborate with analytical and process development teams to establish robust analytical methods and quality control procedures',
          },
          {
            responsibility:
              'Mentor junior scientists and provide technical guidance on complex chemical synthesis and purification challenges',
          },
          {
            responsibility:
              'Prepare technical reports, patent applications, and scientific publications documenting research findings and innovations',
          },
          {
            responsibility:
              'Interface with clients and partners to understand technical requirements and provide expert chemical consultation',
          },
        ],
        requirements: [
          {
            requirement:
              'PhD in Chemistry, Chemical Engineering, or related field with demonstrated research excellence and strong publication record',
          },
          {
            requirement:
              '7+ years of experience in chemical research and development, preferably in specialty chemicals, pharmaceuticals, or fine chemicals industry',
          },
          {
            requirement:
              'Expertise in organic synthesis, including multi-step synthesis, purification techniques, and reaction optimization',
          },
          {
            requirement:
              'Strong knowledge of analytical techniques (NMR, GC-MS, HPLC, IR spectroscopy) for compound characterization and purity analysis',
          },
          {
            requirement:
              'Experience with process development and scale-up from laboratory to pilot plant operations',
          },
          {
            requirement:
              'Proven track record of project management and leading technical teams in research environments',
          },
          {
            requirement:
              'Excellent written and verbal communication skills in English; knowledge of Slovak or German is a plus',
          },
          {
            requirement:
              'Strong problem-solving abilities and innovative thinking for developing novel chemical solutions',
          },
        ],
        preferredQualifications: [
          {
            qualification:
              'Experience with green chemistry principles and sustainable manufacturing processes',
          },
          {
            qualification:
              'Knowledge of regulatory requirements for chemical products (REACH, FDA, ICH guidelines)',
          },
          {
            qualification:
              'Experience with computational chemistry tools and molecular modeling software',
          },
          {
            qualification:
              'Previous work in catalyst development, polymerization chemistry, or pharmaceutical intermediates',
          },
          {
            qualification: 'Patent application experience and intellectual property development',
          },
        ],
        benefits: [
          {
            benefit:
              'Competitive salary commensurate with experience and performance-based bonuses',
          },
          {
            benefit: 'Comprehensive health insurance and wellness programs for you and your family',
          },
          {
            benefit:
              'Professional development opportunities including conference attendance and continuing education support',
          },
          {
            benefit:
              'Access to state-of-the-art laboratory facilities and analytical instrumentation',
          },
          {
            benefit: 'Flexible working arrangements and generous vacation policy',
          },
          {
            benefit:
              'Opportunity to work on internationally recognized projects with leading industry partners',
          },
        ],
        slug: 'senior-research-chemist',
        slugLock: false,
        _status: 'published',
      },
    }),
    payload.create({
      collection: 'careers',
      depth: 0,
      data: {
        title: 'Analytical Chemist',
        category: 'Quality Control',
        location: 'Prievidza, Slovakia',
        type: 'fulltime',
        description: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'We are looking for an experienced ',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: 'Analytical Chemist',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: ' to join our SNAS-accredited Quality Control laboratory (ATBEL division). In this role, you will perform complex analytical testing and method development to support our product development and manufacturing processes. You will work in our ISO/IEC 17025 certified facility, ensuring the highest standards of analytical excellence while contributing to the development of innovative chemical solutions for international markets.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        keyResponsibilities: [
          {
            responsibility:
              'Conduct analytical testing using advanced instrumentation including HPLC, GC-MS, NMR, FT-IR, AAS, and UV-Vis spectroscopy',
          },
          {
            responsibility:
              'Develop and validate analytical methods for quality control, raw material analysis, and product characterization according to international standards',
          },
          {
            responsibility:
              'Perform quantitative and qualitative analysis of organic and inorganic compounds, including impurity profiling and stability studies',
          },
          {
            responsibility:
              'Execute method transfer and validation protocols for new analytical procedures, ensuring compliance with regulatory requirements',
          },
          {
            responsibility:
              'Support research and development projects by providing analytical expertise and troubleshooting analytical challenges',
          },
          {
            responsibility:
              'Maintain and calibrate analytical instruments, ensuring optimal performance and compliance with maintenance schedules',
          },
          {
            responsibility:
              'Prepare detailed analytical reports and certificates of analysis for internal and external customers',
          },
          {
            responsibility:
              'Participate in laboratory quality management system activities including internal audits and continuous improvement initiatives',
          },
          {
            responsibility:
              'Collaborate with production and R&D teams to resolve analytical issues and optimize testing procedures',
          },
        ],
        requirements: [
          {
            requirement:
              'MSc or PhD in Analytical Chemistry, Chemistry, or related field with strong academic performance',
          },
          {
            requirement:
              '4+ years of hands-on experience with analytical instrumentation and method development in industrial or research laboratory setting',
          },
          {
            requirement:
              'Proficiency in chromatographic techniques (HPLC, GC) and spectroscopic methods (NMR, FT-IR, UV-Vis)',
          },
          {
            requirement:
              'Experience with method validation, statistical analysis, and uncertainty calculations according to ICH/USP guidelines',
          },
          {
            requirement:
              'Knowledge of quality management systems (ISO/IEC 17025, ISO 9001) and good laboratory practices (GLP)',
          },
          {
            requirement:
              'Strong attention to detail and ability to work accurately under time constraints while maintaining high quality standards',
          },
          {
            requirement:
              'Excellent data analysis and interpretation skills with proficiency in analytical software packages',
          },
          {
            requirement:
              'Good communication skills in English; knowledge of Slovak language is preferred',
          },
        ],
        preferredQualifications: [
          {
            qualification:
              'Experience with mass spectrometry techniques (LC-MS, GC-MS) and structural elucidation',
          },
          {
            qualification:
              'Knowledge of pharmaceutical or specialty chemical analysis and regulatory requirements',
          },
          {
            qualification:
              'Experience with titration methods, thermal analysis, and physical-chemical property testing',
          },
          {
            qualification: 'Familiarity with LIMS systems and laboratory automation technologies',
          },
          {
            qualification:
              'Previous work in accredited testing laboratory environment with external customer service',
          },
          {
            qualification:
              'Understanding of environmental and workplace atmosphere monitoring methods',
          },
        ],
        benefits: [
          {
            benefit: 'Competitive salary with annual performance reviews and merit-based increases',
          },
          {
            benefit: 'Comprehensive health and dental insurance coverage with family options',
          },
          {
            benefit:
              'Professional development opportunities including training on new analytical techniques and equipment',
          },
          {
            benefit:
              'Access to cutting-edge analytical instrumentation and modern laboratory facilities',
          },
          {
            benefit:
              'Flexible working hours and excellent work-life balance in a collaborative environment',
          },
          {
            benefit:
              'Opportunity to work with international clients and contribute to globally recognized analytical standards',
          },
          {
            benefit: 'Pension plan and additional financial benefits package',
          },
        ],
        slug: 'analytical-chemist',
        slugLock: false,
        _status: 'published',
      },
    }),
  ])

  //* -------------------- SEEDING AUTHORS -------------------- *//

  payload.logger.info(`— Seeding authors...`)

  const demoAuthor = await payload.create({
    collection: 'users',
    data: {
      name: 'Dr. Sarah Chen',
      email: 'sarah.chen@vup-chemical.com',
      password: 'demo1234',
    },
  })

  payload.create({
    collection: 'users',
    data: {
      name: 'Demo Author',
      email: 'demo-author@example.com',
      password: 'password',
    },
  })

  //* -------------------- SEEDING POSTS -------------------- *//

  payload.logger.info(`— Seeding posts...`)

  // Do not create posts with `Promise.all` because we want the posts to be created in order
  // This way we can sort them by `createdAt` or `publishedAt` and they will be in the expected order
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

  // update each post with related posts
  // await payload.update({
  //   id: post1Doc.id,
  //   collection: 'posts',
  //   data: {
  //     relatedPosts: [post2Doc.id, post3Doc.id],
  //   },
  // })
  // await payload.update({
  //   id: post2Doc.id,
  //   collection: 'posts',
  //   data: {
  //     relatedPosts: [post1Doc.id, post3Doc.id],
  //   },
  // })
  // await payload.update({
  //   id: post3Doc.id,
  //   collection: 'posts',
  //   data: {
  //     relatedPosts: [post1Doc.id, post2Doc.id],
  //   },
  // })

  // payload.logger.info(`— Seeding contact form...`)

  // const contactForm = await payload.create({
  //   collection: 'forms',
  //   depth: 0,
  //   data: contactFormData,
  // })

  //* -------------------- SEEDING PAGES -------------------- *//

  payload.logger.info(`— Seeding pages...`)

  const [homePage, productsPage, industriesPage, sustainabilityPage, careersPage] =
    await Promise.all([
      payload.create({
        collection: 'pages',
        depth: 0,
        // @ts-expect-error This is working, but payload is not happy
        data: home({
          slide1HeroBgDoc: slide1HeroBgDoc,
          slide1HeroFeaturedItemDoc: slide1HeroFeaturedItemDoc,
          slide1HeroCard1Doc: slide1HeroCard1Doc,
          slide1HeroCard2Doc: slide1HeroCard2Doc,
          slide1HeroCard3Doc: slide1HeroCard3Doc,
          slide2HeroBgDoc: slide2HeroBgDoc,
          slide2HeroFeaturedItemDoc: slide2HeroFeaturedItemDoc,
          slide2HeroCard1Doc: slide2HeroCard1Doc,
          slide2HeroCard2Doc: slide2HeroCard2Doc,
          slide2HeroCard3Doc: slide2HeroCard3Doc,
          slide3HeroBgDoc: slide3HeroBgDoc,
          slide3HeroFeaturedItemDoc: slide3HeroFeaturedItemDoc,
          slide3HeroCard1Doc: slide3HeroCard1Doc,
          slide3HeroCard2Doc: slide3HeroCard2Doc,
          slide3HeroCard3Doc: slide3HeroCard3Doc,
          quickAccessCard1Doc: quickAccessCard1Doc,
          quickAccessCard2Doc: quickAccessCard2Doc,
          quickAccessCard3Doc: quickAccessCard3Doc,
          quickAccessCard4Doc: quickAccessCard4Doc,
          hydroxyAcids,
          hinderedAmines,
          glycolEthers,
          post1: post4Doc,
          post2: post1Doc,
          post3: post2Doc,
          sustainabilityImage1Doc: sustainabilityImage1Doc,
        }),
      }),

      payload.create({
        collection: 'pages',
        depth: 0,
        // @ts-expect-error This is working, but payload is not happy
        data: products({ featuredImage1: image1Doc }),
      }),

      payload.create({
        collection: 'pages',
        depth: 0,
        // @ts-expect-error This is working, but payload is not happy
        data: industries({ featuredImage1: image1Doc }),
      }),

      payload.create({
        collection: 'pages',
        depth: 0,
        // @ts-expect-error This is working, but payload is not happy
        data: sustainability({
          heroImage: sustainabilityHeroImageDoc,
          pillar1Image: sustainabilityPillar1Doc,
          pillar2Image: sustainabilityPillar2Doc,
          pillar3Image: sustainabilityPillar3Doc,
          pillar4Image: sustainabilityPillar4Doc,
          certificateImage1: ecovadisMedalDoc,
          focus1Image: sustainabilityFocus1Doc,
          focus2Image: sustainabilityFocus2Doc,
          focus3Image: sustainabilityFocus3Doc,
          focus4Image: sustainabilityFocus4Doc,
        }),
      }),

      payload.create({
        collection: 'pages',
        depth: 0,
        // @ts-expect-error This is working, but payload is not happy
        data: careers({ featuredImage1: image1Doc }),
      }),
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

  // Update all product categories with featured products

  //* -------------------- UPDATING PRODUCT CATEGORIES AND INDUSTRIES -------------------- *//

  payload.logger.info('— Updating product categories with featured products...')

  await Promise.all([
    payload
      .update({
        collection: 'productCategories',
        where: {
          slug: {
            equals: 'hydroxy-acids',
          },
        },
        data: {
          featuredProducts: [dmpa.id, dmba.id, hpva.id],
          image: dmpaStructureDoc.id,
        },
      })
      .catch((err) => {
        payload.logger.error(`— Error updating hydroxy-acids category: ${err}`)
      }),

    payload
      .update({
        collection: 'productCategories',
        where: {
          slug: {
            equals: 'hindered-amines',
          },
        },
        data: {
          featuredProducts: [
            temp.id,
            tempo.id,
            hTempo.id,
            aminoTempo.id,
            // oxoTempo.id,
            vupin.id,
            pentamethylpiperidine.id,
            pentamethylpiperidinol.id,
            aminoTmp.id,
            hals770.id,
            hals765.id,
            spiroTempoAcid.id,
            galvinoxyl.id,
          ],
          image: hTempoStructureDoc.id,
        },
      })
      .catch((err) => {
        payload.logger.error(`— Error updating hindered-amines category: ${err}`)
      }),

    payload
      .update({
        collection: 'productCategories',
        where: {
          slug: {
            equals: 'chromanols-derivatives',
          },
        },
        data: {
          featuredProducts: [trolox.id],
          image: troloxStructureDoc.id,
        },
      })
      .catch((err) => {
        payload.logger.error(`— Error updating chromanols-derivatives category: ${err}`)
      }),

    payload
      .update({
        collection: 'productCategories',
        where: {
          slug: {
            equals: 'diaminopolyethylene-glycols',
          },
        },
        data: {
          featuredProducts: [dapeg.id],
          image: dapegStructureDoc.id,
        },
      })
      .catch((err) => {
        payload.logger.error(`— Error updating diaminopolyethylene-glycols category: ${err}`)
      }),

    payload
      .update({
        collection: 'productCategories',
        where: {
          slug: {
            equals: 'phospholipid-precursors',
          },
        },
        data: {
          featuredProducts: [colaminPhosphate.id, colaminPhosphatesodiumSalt.id],
          image: colaminPhosphateStructureDoc.id,
        },
      })
      .catch((err) => {
        payload.logger.error(`— Error updating phospholipid-precursors category: ${err}`)
      }),

    payload
      .update({
        collection: 'productCategories',
        where: {
          slug: {
            equals: 'polymerisation-inhibitors',
          },
        },
        data: {
          featuredProducts: [vupin.id],
          image: vupinStructureDoc.id,
        },
      })
      .catch((err) => {
        payload.logger.error(`— Error updating polymerisation-inhibitors category: ${err}`)
      }),
  ])

  payload.logger.info('Seeded database successfully!')
}

async function fetchFileByURL(url: string): Promise<File> {
  const res = await fetch(url, {
    credentials: 'include',
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch file from ${url}, status: ${res.status}`)
  }

  const data = await res.arrayBuffer()
  const filename = url.split('/').pop() || 'file'
  const extension = filename.split('.').pop() || 'jpg'
  const nameWithoutExt = filename.split('.')[0]

  return {
    name: `${nameWithoutExt}-${Date.now()}.${extension}`,
    data: Buffer.from(data),
    mimetype: `image/${extension}`,
    size: data.byteLength,
  }
}
