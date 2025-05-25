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

const collections: CollectionSlug[] = [
  'services',
  'industries',
  'productCategories',
  'products',
  'media',
  'posts',
  'pages',
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
    fetchFileByURL('http://localhost:3000/assets/products/dmpa-sf.png'),
    fetchFileByURL('http://localhost:3000/assets/products/dmba-sf.png'),
    fetchFileByURL('http://localhost:3000/assets/products/hpva-sf.png'),
    fetchFileByURL('http://localhost:3000/assets/products/h-tempo-sf.png'),
    fetchFileByURL('http://localhost:3000/assets/products/trolox-sf.png'),
    fetchFileByURL('http://localhost:3000/assets/products/tempo-sf.png'),
    // fetchFileByURL('http://localhost:3000/assets/products/temp-sf.png'),
    fetchFileByURL('http://localhost:3000/assets/products/dapeg-sf.png'),
    fetchFileByURL('http://localhost:3000/assets/products/benzoyloxy-tmp-sf.png'),
    fetchFileByURL('http://localhost:3000/assets/products/acetamido-tempo-sf.png'),
    fetchFileByURL('http://localhost:3000/assets/products/tempone-sf.png'),
    // fetchFileByURL('http://localhost:3000/assets/products/colamin-sf.png'),
    fetchFileByURL('http://localhost:3000/assets/products/colamin-phosphate-sf.png'),
    // fetchFileByURL('http://localhost:3000/assets/products/colamin-phosphate-sodium-salt-sf.png'),
    fetchFileByURL('http://localhost:3000/assets/products/vupin-sf.png'),
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
          "VUP's R&D division serves as a cornerstone for solving difficult chemistry-related problems for diverse industries. We offer focused contract R&D, custom synthesis (from grams to pilot scale), route scouting, process development, optimization, and scale-up for chemical specialties, fine chemicals, and unique intermediates.",
        featuredImage: image1Doc.id,
        features: [
          {
            feature: 'Experience',
            description: '70+ years of expertise in chemical development and innovation',
          },
          {
            feature: 'Patents Granted',
            description: 'Over 900 patents demonstrating our innovation capabilities',
          },
          {
            feature: 'Quality Management',
            description: 'ISO 9001 certified processes ensuring consistent quality',
          },
          {
            feature: 'Pilot Capacity',
            description: '250 t/yr capacity for process scale-up and validation',
          },
        ],
        subServices: [
          {
            title: 'Route Scouting & Feasibility',
            description:
              'Expert evaluation and design of synthetic routes through comprehensive literature research and practical chemistry expertise.',
            image: image1Doc.id,
            displayItems: [
              { title: 'Literature & Patent Analysis' },
              { title: 'Route Evaluation' },
              { title: 'Risk Assessment' },
            ],
            features: [
              {
                feature: 'Comprehensive Research',
                description: 'Extensive literature and patent analysis',
              },
              {
                feature: 'Risk Mitigation',
                description: 'Detailed technical and commercial risk assessment',
              },
            ],
            link: 'route-scouting',
          },
          {
            title: 'Custom Synthesis',
            description:
              'Laboratory-scale synthesis of novel and known compounds, from grams to kilograms, with expertise in complex multi-step synthesis.',
            image: image2Doc.id,
            displayItems: [
              { title: 'Scale Flexibility' },
              { title: 'Complex Chemistry' },
              { title: 'Quality Control' },
            ],
            features: [
              {
                feature: 'Scale Options',
                description: 'From milligrams to kilograms capability',
              },
              {
                feature: 'Quality Assurance',
                description: 'Comprehensive analytical support',
              },
            ],
            link: 'custom-synthesis',
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
          'Comprehensive analytical testing and method development services with state-of-the-art equipment and experienced specialists. We provide accurate, reliable results with fast turnaround times.',
        featuredImage: image2Doc.id,
        features: [
          {
            feature: 'Modern Equipment',
            description: 'Latest analytical instruments for precise results',
          },
          {
            feature: 'Expert Team',
            description: 'Highly qualified analytical chemists',
          },
          {
            feature: 'Fast Turnaround',
            description: 'Efficient processing of analytical requests',
          },
          {
            feature: 'Quality System',
            description: 'ISO 17025 accredited laboratory',
          },
        ],
        subServices: [
          {
            title: 'Method Development',
            description:
              'Development and validation of analytical methods tailored to your specific needs.',
            image: image1Doc.id,
            displayItems: [
              { title: 'HPLC Method Development' },
              { title: 'GC Method Development' },
              { title: 'Validation Studies' },
            ],
            features: [
              {
                feature: 'Custom Methods',
                description: 'Tailored analytical solutions',
              },
              {
                feature: 'Validation',
                description: 'Comprehensive method validation',
              },
            ],
            link: 'method-development',
          },
          {
            title: 'Quality Control Testing',
            description:
              'Routine quality control testing with reliable results and quick turnaround times.',
            image: image2Doc.id,
            displayItems: [
              { title: 'Raw Material Testing' },
              { title: 'Product Testing' },
              { title: 'Impurity Analysis' },
            ],
            features: [
              {
                feature: 'Rapid Testing',
                description: 'Fast and accurate results',
              },
              {
                feature: 'Quality Assurance',
                description: 'Rigorous quality controls',
              },
            ],
            link: 'quality-control',
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
          "Leverage VUP's 70+ years of chemical production experience and dedicated cosmetics expertise (since 1990) for your custom cosmetic manufacturing needs. We offer flexible white label and private label solutions, from formulation development to large-scale production, ensuring high-quality, compliant products manufactured in Europe.",
        featuredImage: image1Doc.id,
        features: [
          {
            feature: 'Experience',
            description:
              '70+ years of chemical production expertise with dedicated cosmetics department since 1990',
          },
          {
            feature: 'Quality',
            description: 'ISO 9001 certified manufacturing with rigorous quality controls',
          },
          {
            feature: 'Compliance',
            description: 'Full adherence to EU cosmetic regulations and safety standards',
          },
          {
            feature: 'Capacity',
            description: 'Scalable production from small batches to large-scale manufacturing',
          },
        ],
        subServices: [
          {
            title: 'White Label Services',
            description:
              "Brand and sell VUP's existing, market-tested cosmetic formulations including hand creams, body lotions, massage oils and gels.",
            image: image1Doc.id,
            displayItems: [
              { title: 'Hand Creams & Body Lotions' },
              { title: 'Massage Oils & Gels' },
              { title: 'Medical & Diagnostic Gels' },
            ],
            features: [
              {
                feature: 'Proven Formulas',
                description: 'Market-tested, award-winning product formulations',
              },
              {
                feature: 'Quick Launch',
                description: 'Faster time-to-market with existing formulations',
              },
            ],
            link: 'white-label',
          },
          {
            title: 'Private Label Services',
            description:
              'Custom formulation and manufacturing of unique cosmetic products based on your specifications and requirements.',
            image: image2Doc.id,
            displayItems: [
              { title: 'Custom Formulation' },
              { title: 'Product Development' },
              { title: 'Regulatory Support' },
            ],
            features: [
              {
                feature: 'Customization',
                description: 'Tailored formulations to meet your exact needs',
              },
              {
                feature: 'Full Support',
                description: 'From concept to finished product',
              },
            ],
            link: 'private-label',
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
          "Navigate complex chemical regulations and overcome technical hurdles with VUP's expert support. We combine deep regulatory knowledge (REACH, ISO 9001) and 70+ years of chemical R&D expertise with accredited analytical capabilities (SNAS S-118) to provide reliable compliance guidance and effective technical solutions.",
        featuredImage: image1Doc.id,
        features: [
          {
            feature: 'REACH Expertise',
            description: 'Proven experience with successful REACH registrations and compliance',
          },
          {
            feature: 'Accredited Labs',
            description:
              'SNAS S-118 accredited analytical, technical-safety, and ecological laboratories',
          },
          {
            feature: 'Quality Certified',
            description: 'ISO 9001 certified quality management system',
          },
          {
            feature: 'Industry Recognition',
            description: 'Responsible Care certification and R&D Competency Certificate',
          },
        ],
        subServices: [
          {
            title: 'Regulatory Support',
            description:
              'Comprehensive guidance for chemical regulations including REACH compliance, ISO 9001 quality systems, cosmetics & medical device regulations, and safety & environmental compliance.',
            image: image1Doc.id,
            displayItems: [
              { title: 'REACH Compliance' },
              { title: 'Quality Management Systems' },
              { title: 'Safety & Environmental Regulations' },
              { title: 'Certification Support' },
            ],
            features: [
              {
                feature: 'Expert Guidance',
                description: 'Direct support from experienced regulatory specialists',
              },
              {
                feature: 'Comprehensive Coverage',
                description: 'Support across multiple regulatory frameworks',
              },
            ],
            link: 'regulatory-support',
          },
          {
            title: 'Technical Support',
            description:
              'In-depth technical consultation leveraging our R&D knowledge and analytical capabilities to help solve product and process challenges.',
            image: image2Doc.id,
            displayItems: [
              { title: 'Product Expertise' },
              { title: 'Problem Solving' },
              { title: 'Technical Data Provision' },
              { title: 'Process Consultation' },
            ],
            features: [
              {
                feature: 'Analytical Support',
                description: 'Access to accredited laboratory services',
              },
              {
                feature: 'Expert Consultation',
                description: '70+ years of chemical R&D expertise',
              },
            ],
            link: 'technical-support',
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
          'Partner with VUP for expert custom chemical synthesis and reliable small-scale manufacturing in Europe. We leverage 70+ years of R&D experience to tackle complex synthesis challenges and offer flexible production from grams to pilot-scale tonnes, all supported by accredited quality control and secure IP handling.',
        featuredImage: image1Doc.id,
        features: [
          {
            feature: 'Expert Problem Solving',
            description: "Leverage VUP's 70+ years R&D experience for complex synthetic challenges",
          },
          {
            feature: 'Quality Assured',
            description:
              'High-purity focus with rigorous QC backed by ISO 9001 and SNAS accredited labs',
          },
          {
            feature: 'Scalability',
            description: 'Seamless transition from gram-scale synthesis to pilot-scale production',
          },
          {
            feature: 'IP Security',
            description:
              'Strict confidentiality agreements and secure handling of intellectual property',
          },
        ],
        subServices: [
          {
            title: 'Custom Synthesis',
            description:
              'Specialized synthesis of non-catalogue fine chemicals, complex intermediates, reference standards, and chemical specialties. We tackle challenging multi-step synthetic routes leveraging our deep expertise in specific chemistries.',
            image: image1Doc.id,
            displayItems: [
              { title: 'Route Scouting & Feasibility' },
              { title: 'Laboratory Scale Synthesis' },
              { title: 'High Purity Standards' },
              { title: 'Multi-step Synthesis' },
            ],
            features: [
              {
                feature: 'Synthesis Expertise',
                description:
                  'Deep knowledge in complex organic synthesis and specialized chemistries',
              },
              {
                feature: 'Scale Range',
                description: 'From laboratory grams to kilogram quantities',
              },
            ],
            link: 'custom-synthesis',
          },
          {
            title: 'Process Development & Scale-Up',
            description:
              'Optimization of synthetic routes for improved efficiency, safety, yield, and cost-effectiveness. We provide comprehensive process development and scale-up services from laboratory to pilot plant validation.',
            image: image2Doc.id,
            displayItems: [
              { title: 'Process Optimization' },
              { title: 'Safety Assessment' },
              { title: 'Yield Improvement' },
              { title: 'Scale-up Validation' },
            ],
            features: [
              {
                feature: 'Production Capacity',
                description: 'Pilot plant infrastructure with up to 250 t/yr capacity',
              },
              {
                feature: 'Technical Support',
                description: 'Comprehensive process documentation and validation',
              },
            ],
            link: 'process-development',
          },
          {
            title: 'Small-Scale & Toll Manufacturing',
            description:
              'Reliable contract manufacturing of fine chemicals and specialties utilizing our versatile pilot plant infrastructure. We offer flexible toll manufacturing services for kilogram to multi-tonne campaigns.',
            image: image1Doc.id,
            displayItems: [
              { title: 'Contract Manufacturing' },
              { title: 'Toll Processing' },
              { title: 'Quality Control' },
              { title: 'Regulatory Support' },
            ],
            features: [
              {
                feature: 'Manufacturing Flexibility',
                description: 'Adaptable production capabilities for various batch sizes',
              },
              {
                feature: 'Quality Systems',
                description: 'ISO 9001 certified manufacturing processes',
              },
            ],
            link: 'toll-manufacturing',
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
  ] = await Promise.all([
    payload.create({
      collection: 'productCategories',
      data: {
        name: 'Hydroxy Acids',
        description:
          'Hydroxy acids are a type of organic compound that contain one or more hydroxyl groups (-OH) attached to a carbon atom. They play a critical role in enabling environmentally friendly waterborne systems (PUDs, alkyds, polyesters) and enhancing the stability and durability of polymers used in demanding applications like coatings, inks, adhesives, and lubricants.',
        image: imageHomeDoc.id,
        slug: 'hydroxy-acids',
        productComparison: false,
        applications: [
          {
            imageSrc: applicationsImage1Doc.id,
            title: 'Waterborne Coatings',
            description:
              'Eco-friendly coating solutions with reduced VOCs for sustainable industrial applications.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Polyurethane Dispersions',
            description:
              'Advanced water-based PU systems enabling high-performance coatings with low environmental impact.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Durable Polyesters',
            description:
              'Engineered high-performance resins providing exceptional durability in demanding environments.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Powder Coatings',
            description:
              'Premium solvent-free coating technology offering superior finish and environmental benefits.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Adhesives & Inks',
            description:
              'Specialized formulations for high-strength bonding and vibrant, durable printing applications.',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: 'Synthetic Lubricants',
            description:
              'Advanced industrial lubricants delivering exceptional performance in extreme conditions.',
          },
        ],
      },
    }),

    payload.create({
      collection: 'productCategories',
      data: {
        name: 'Hindered Amines',
        description:
          'VUP, a.s. offers a specialized and expanding range of high-purity hindered amines, characterized by their sterically hindered piperidine structure, alongside related stable radicals.',
        image: image2Doc.id,
        slug: 'hindered-amines',
        productComparison: true,
        applications: [
          {
            imageSrc: applicationsImage1Doc.id,
            title: 'Polymer Light Stabilization',
            description:
              'HALS & related intermediates for protecting polymers from UV degradation.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Polymerization Inhibition',
            description: 'Radical trapping & control for precise polymer synthesis.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Selective Oxidation',
            description: 'TEMPO catalysis for efficient and selective chemical transformations.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Pharmaceutical Intermediates',
            description: 'Specialized TEMPO derivatives for pharmaceutical synthesis.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Spin Labeling / EPR',
            description: 'Advanced spectroscopic research tools for molecular analysis.',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: 'Advanced Chemical Synthesis',
            description: 'Research & specialty chemicals for complex synthetic pathways.',
          },
        ],
      },
    }),

    payload.create({
      collection: 'productCategories',
      data: {
        name: 'Glycol Ethers',
        description:
          'Glycol ethers are versatile compounds containing both ether (-O-) and alcohol (-OH) functional groups, typically derived from ethylene glycol (E-series) or propylene glycol (P-series). These compounds serve as effective oxygenated solvents and coupling agents across various industrial applications.',
        image: image3Doc.id,
        slug: 'glycol-ethers',
        productComparison: true,
        applications: [
          {
            imageSrc: applicationsImage1Doc.id,
            title: 'Coatings & Paints',
            description: 'Advanced solvent systems enabling high-performance coating formulations.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Cleaning Products',
            description: 'Effective solvents for industrial and household cleaning applications.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Printing Inks',
            description: 'Specialized solvent systems for high-quality printing applications.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Chemical Synthesis',
            description: 'Key intermediates for the production of chemical derivatives.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Fuel Additives',
            description: 'Performance-enhancing components for fuel formulations.',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: 'Specialty Formulations',
            description: 'Essential components in VUPIN and other specialty products.',
          },
        ],
      },
    }),

    payload.create({
      collection: 'productCategories',
      data: {
        name: 'Phospholipid Precursors',
        description:
          'Essential biochemical building blocks necessary for synthesizing phospholipids – the foundation of healthy cell membranes. Our high-purity Colamin Phosphate and its salts are crucial ingredients for the supplement, veterinary, and pharmaceutical industries.',
        image: image3Doc.id,
        slug: 'phospholipid-precursors',
        productComparison: true,
        applications: [
          {
            imageSrc: applicationsImage1Doc.id,
            title: 'Dietary Supplements',
            description:
              'Advanced formulations supporting cognitive function and cellular health maintenance.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Veterinary Nutrition',
            description:
              'Specialized feed additives and supplements for optimal animal health and development.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Pharmaceutical',
            description:
              'High-purity intermediates and excipients for pharmaceutical manufacturing.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Cell Culture',
            description:
              'Essential media components for cellular research and biotechnology applications.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Research',
            description:
              'Premium-grade biochemical reagents for scientific investigation and development.',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: 'Formulation',
            description:
              'Customized solutions for specialized product development and optimization.',
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
            title: 'FCC Units',
            description:
              'Advanced protection systems for gasoline streams in fluid catalytic cracking units.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Monomer Storage',
            description:
              'Safe and efficient material handling solutions for reactive monomer storage.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Process Safety',
            description:
              'Comprehensive fouling prevention strategies for critical process equipment.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Equipment Protection',
            description: 'Long-term asset preservation through effective polymerisation control.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Quality Control',
            description:
              'Maintaining product stability and specifications through precise inhibition.',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: 'Process Control',
            description: 'Enhanced operational efficiency through optimized inhibitor systems.',
          },
        ],
      },
    }),

    payload.create({
      collection: 'productCategories',
      data: {
        name: 'Specialty Hindered Amines & Derivatives',
        description:
          'Beyond our key hindered amine products, VUP, a.s. leverages extensive R&D and synthetic expertise to offer a range of specialized derivatives and related compounds.',
        image: image3Doc.id,
        slug: 'specialty-hindered-amines',
        productComparison: true,
        applications: [
          {
            imageSrc: applicationsImage1Doc.id,
            title: 'HALS Synthesis',
            description:
              'Advanced intermediates for the production of high-performance light stabilizers.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Research Use',
            description: 'High-purity compounds for advanced materials research and development.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Building Blocks',
            description: 'Versatile components for custom synthesis and specialized applications.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Stabilization',
            description: 'Advanced solutions for polymer protection and material longevity.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Industrial',
            description: 'Scalable processes for large-scale manufacturing requirements.',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: 'Innovation',
            description: 'Cutting-edge materials for next-generation product development.',
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
        name: 'Dimethylolpropionic Acid (DMPA)',
        _status: 'published',
        description:
          'A unique trifunctional molecule featuring two primary hydroxyl groups and one tertiary carboxylic group, essential for creating high-performance water-soluble alkyds, polyesters, and polyurethane dispersions (PUDs).',
        chemicalStructureImage: dmpaStructureDoc.id,
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
            application: 'Waterborne Coatings (General)',
            description: 'Enables waterborne formulations',
            image: image1Doc.id,
          },
          {
            application: 'Polyurethane Dispersions (PUDs)',
            description: 'Improves coating properties',
            image: image2Doc.id,
          },
          {
            application: 'Alkyd Resin Coatings',
            description: 'Enhances adhesion',
            image: image3Doc.id,
          },
          {
            application: 'Polyester Resin Coatings',
            description: 'Provides versatile reactivity',
            image: image1Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Water Solubility / Dispersibility Agent',
            description: 'Enables waterborne formulations',
          },
          { feature: 'Adhesion Promotion', description: 'Improves coating adhesion to substrates' },
          {
            feature: 'Improved Flexibility',
            description: 'Enhances coating flexibility and durability',
          },
          { feature: 'Enhanced Gloss', description: 'Provides superior finish quality' },
          { feature: 'Reduced VOC', description: 'Waterborne formulation enabler' },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What are the main applications for DMPA?',
            answer:
              'DMPA is primarily used in waterborne coatings, polyurethane dispersions (PUDs), alkyd resin coatings, and polyester resin coatings.',
          },
          {
            question: 'What makes DMPA unique?',
            answer:
              'DMPA is a trifunctional molecule with two primary hydroxyl groups and one tertiary carboxylic group, making it ideal for creating water-soluble polymers.',
          },
          {
            question: 'How does DMPA contribute to VOC reduction?',
            answer:
              'DMPA enables the formulation of waterborne coatings, which significantly reduces the need for volatile organic compounds (VOCs) in coating applications.',
          },
        ],
        slug: 'dmpa',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: 'Dimethylolbutyric Acid (DMBA)',
        _status: 'published',
        description:
          'Enables solvent-free PUD synthesis with improved processing efficiency (lower temperature) and potentially enhanced film resistance.',
        chemicalStructureImage: dmbaStructureDoc.id,
        technicalSpecifications: {
          chemicalName: '2,2-Bis(hydroxymethyl)butyric acid',
          casNumber: '10097-02-6',
          ecNumber: '233-226-5',
          synonyms: [{ synonym: '2,2-Bis(hydroxymethyl)butyric acid' }, { synonym: 'DMBA' }],
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
        chemicalFamily: [hydroxyAcids, hinderedAmines],
        applications: [
          {
            application: 'Solvent-Free PUDs',
            description: 'Enables solvent-free processing',
            image: image1Doc.id,
          },
          {
            application: 'Waterborne Coatings',
            description: 'Provides water dispersibility',
            image: image2Doc.id,
          },
          {
            application: 'Polyurethane Dispersions',
            description: 'Enhances film resistance',
            image: image3Doc.id,
          },
        ],
        keyFeatures: [
          { feature: 'Solvent-Free Processing', description: 'Enables solvent-free PUD synthesis' },
          {
            feature: 'Lower Processing Temperature',
            description: 'Improves manufacturing efficiency',
          },
          { feature: 'Enhanced Film Resistance', description: 'Provides superior durability' },
          { feature: 'Improved Hydrophilicity', description: 'Better water compatibility' },
          { feature: 'Reduced VOC', description: 'Environmentally friendly formulations' },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'How does DMBA compare to DMPA?',
            answer:
              'DMBA offers improved processing efficiency at lower temperatures and potentially enhanced film resistance compared to DMPA.',
          },
          {
            question: 'What are the main applications for DMBA?',
            answer:
              'DMBA is primarily used in solvent-free PUDs, waterborne coatings, and polyurethane dispersions requiring enhanced film resistance.',
          },
          {
            question: 'Why choose DMBA for polyurethane dispersions?',
            answer:
              'DMBA enables solvent-free PUD synthesis with improved processing efficiency and enhanced film resistance properties.',
          },
        ],
        slug: 'dmba',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: '3-Hydroxypivalic Acid (HPVA)',
        _status: 'published',
        description:
          'A unique hydroxy acid featuring a neopentyl structure, essential for synthesizing high-performance polyesters and esters with exceptional stability.',
        chemicalStructureImage: hpvaStructureDoc.id,
        technicalSpecifications: {
          chemicalName: '3-Hydroxypivalic Acid',
          casNumber: '4835-90-9',
          ecNumber: '225-419-8',
          synonyms: [
            { synonym: 'Hydroxypivalic Acid' },
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
            application: 'Polyester Resins',
            description: 'Provides exceptional stability',
            image: image1Doc.id,
          },
          {
            application: 'Powder Coatings',
            description: 'Enhances durability',
            image: image2Doc.id,
          },
          {
            application: 'Coil Coatings',
            description: 'Improves weather resistance',
            image: image3Doc.id,
          },
          {
            application: 'Synthetic Lubricants',
            description: 'Offers thermal stability',
            image: image1Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Enhanced Hydrolytic Stability',
            description: 'Exceptional stability in various conditions',
          },
          { feature: 'Improved Thermal Stability', description: 'Withstands high temperatures' },
          {
            feature: 'Excellent Weather Resistance',
            description: 'Durable polymer building block',
          },
          { feature: 'High Chemical Resistance', description: 'Resistant to various chemicals' },
          { feature: 'Low Volatility', description: 'Stable in formulations' },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What makes HPVA unique?',
            answer:
              'HPVA features a neopentyl structure that provides exceptional stability in polyesters and esters.',
          },
          {
            question: 'What are the main applications for HPVA?',
            answer:
              'HPVA is used in polyester resins, powder coatings, coil coatings, and synthetic lubricants requiring high stability.',
          },
          {
            question: 'Why is HPVA preferred for weather-resistant applications?',
            answer:
              'The unique neopentyl structure of HPVA provides excellent weather resistance and durability in outdoor applications.',
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
          "A key functionalized derivative of TEMPO, featuring both a stable nitroxyl radical and a reactive hydroxyl group. Serves as a versatile antioxidant, catalyst, spin label, and a crucial intermediate for synthesizing specialty chemicals, including VUP's VUPIN range of polymerization inhibitors.",
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
            description: 'Key intermediate for inhibitors',
            image: image1Doc.id,
          },
          {
            application: 'Organic Synthesis',
            description: 'Versatile building block',
            image: image2Doc.id,
          },
          {
            application: 'Catalysis',
            description: 'Efficient catalyst',
            image: image3Doc.id,
          },
          {
            application: 'EPR Spectroscopy',
            description: 'Spin label applications',
            image: image1Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Functionalized stable radical',
            description: 'Unique reactive properties',
          },
          {
            feature: 'Key inhibitor intermediate',
            description: 'Essential for VUPIN products',
          },
          {
            feature: 'Versatile research tool',
            description: 'Multiple applications',
          },
          {
            feature: 'High purity product',
            description: 'Research grade quality',
          },
        ],
        faq: [
          {
            question: 'What are the main applications of H-TEMPO?',
            answer:
              'H-TEMPO is primarily used in polymerization inhibitor synthesis, as a catalyst, and in EPR spectroscopy applications.',
          },
          {
            question: 'What makes H-TEMPO unique?',
            answer:
              'H-TEMPO combines a stable nitroxyl radical with a reactive hydroxyl group, making it versatile for various applications.',
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
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'Antioxidant Research',
            description: 'Benchmark standard',
            image: image1Doc.id,
          },
          {
            application: 'TEAC Assay Reagent',
            description: 'Standard reference',
            image: image2Doc.id,
          },
          {
            application: 'Cell Culture Protection',
            description: 'Oxidative stress studies',
            image: image3Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Water-soluble antioxidant',
            description: 'Enhanced bioavailability',
          },
          {
            feature: 'Reference standard',
            description: 'Benchmark for assays',
          },
          {
            feature: 'Research grade purity',
            description: 'Reliable results',
          },
        ],
        faq: [
          {
            question: 'Why use Trolox as a standard?',
            answer:
              'Trolox is widely used as a standard due to its consistent antioxidant properties and water solubility.',
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
          'A highly versatile and stable nitroxyl radical, renowned for its utility as a catalyst in selective organic oxidations and as a mediator in controlled radical polymerization (NMP).',
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
            application: 'Organic Synthesis',
            description: 'Selective oxidation catalyst',
            image: image1Doc.id,
          },
          {
            application: 'Polymer Chemistry',
            description: 'Controlled polymerization',
            image: image2Doc.id,
          },
          {
            application: 'API Synthesis',
            description: 'Pharmaceutical intermediates',
            image: image3Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Selective oxidation catalyst',
            description: 'Precise control',
          },
          {
            feature: 'Stable radical source',
            description: 'Reliable performance',
          },
          {
            feature: 'High purity product',
            description: 'Research grade quality',
          },
        ],
        faq: [
          {
            question: 'What are the main applications of TEMPO?',
            answer:
              'TEMPO is primarily used as a catalyst in organic synthesis and as a mediator in controlled radical polymerization.',
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
            description: 'Essential HALS intermediate',
            image: image1Doc.id,
          },
          {
            application: 'TEMPO Synthesis',
            description: 'Direct TEMPO precursor',
            image: image2Doc.id,
          },
          {
            application: 'Organic Synthesis',
            description: 'Versatile building block',
            image: image3Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Essential HALS intermediate',
            description: 'Key building block for light stabilizers',
          },
          {
            feature: 'High purity product',
            description: 'Minimum 99% purity',
          },
          {
            feature: 'Pilot scale production',
            description: '25 t/yr capacity',
          },
        ],
        faq: [
          {
            question: 'What is TEMP used for?',
            answer:
              'TEMP is primarily used as a key intermediate in the production of Hindered Amine Light Stabilizers (HALS) and TEMPO.',
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
          'A specialized polymer featuring polyethylene glycol (PEG) chains capped at both ends with reactive primary amine groups. Essential for creating advanced hydrophilic and lubricious coatings, particularly for biomedical devices, and serves as a key building block for surface modification, PEGylation, and specialty polymer synthesis.',
        chemicalStructureImage: dapegStructureDoc.id,
        technicalSpecifications: {
          chemicalName: 'α-(3-Aminopropyl)-ω-(3-aminopropoxy)poly(oxy-1,2-ethanediyl)',
          casNumber: '34901-14-9',
          synonyms: [
            { synonym: 'DAPEG' },
            { synonym: 'Diaminopolyethylene Glycol' },
            { synonym: 'Amino-PEG-Amino' },
          ],
          molecularFormula: 'H₂N(CH₂)₃[O(CH₂)₂]nO(CH₂)₃NH₂',
          molecularWeight: '700-3400 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'Colorless to pale yellow liquid or white waxy solid',
          purity: 'min. 97.0 % wt',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'Biomedical Coatings',
            description: 'Advanced hydrophilic coatings',
            image: image1Doc.id,
          },
          {
            application: 'Surface Modification',
            description: 'Functionalization agent',
            image: image2Doc.id,
          },
          {
            application: 'PEGylation',
            description: 'Bioconjugation applications',
            image: image3Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Unique global supply',
            description: 'Exclusive VUP product',
          },
          {
            feature: 'High purity',
            description: 'Minimum 97% purity',
          },
          {
            feature: 'Multiple MW options',
            description: 'Various molecular weights available',
          },
        ],
        faq: [
          {
            question: 'What makes DAPEG unique?',
            answer:
              'DAPEG features reactive terminal amine groups on both ends of a PEG chain, making it ideal for biomedical applications and surface modifications.',
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
          'A functionalized hindered amine intermediate based on the TEMP structure. This compound serves as a valuable precursor for producing specific Hindered Amine Light Stabilizers (HALS) or other functional molecules where a benzoate-protected hydroxyl group is required on the piperidine ring.',
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
            description: 'Specialized precursor',
            image: image1Doc.id,
          },
          {
            application: 'Organic Synthesis',
            description: 'Versatile intermediate',
            image: image2Doc.id,
          },
          {
            application: 'Research Chemical',
            description: 'Development applications',
            image: image3Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Functionalized intermediate',
            description: 'Protected hydroxyl group',
          },
          {
            feature: 'High purity product',
            description: 'Research grade quality',
          },
          {
            feature: 'Selective reactivity',
            description: 'Controlled modifications',
          },
        ],
        faq: [
          {
            question: 'What is the main use of 4-Benzoyloxy-TMP?',
            answer:
              'It serves as a key intermediate for producing specific HALS and other functional molecules requiring a benzoate-protected hydroxyl group on the piperidine ring.',
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
          'A functionalized derivative of the stable nitroxyl radical TEMPO, primarily used as a valuable spin label probe for Electron Paramagnetic Resonance (EPR) spectroscopy in biochemical and materials science research.',
        chemicalStructureImage: acetamidoTempoStructureDoc.id,
        technicalSpecifications: {
          chemicalName: 'N-(1-Oxyl-2,2,6,6-tetramethylpiperidin-4-yl)acetamide',
          casNumber: '14691-89-5',
          ecNumber: '238-751-8',
          synonyms: [
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
            description: 'Spin label probe',
            image: image1Doc.id,
          },
          {
            application: 'Biochemical Research',
            description: 'Molecular dynamics studies',
            image: image2Doc.id,
          },
          {
            application: 'Polymer Studies',
            description: 'Chain mobility analysis',
            image: image3Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Functionalized Spin Label',
            description: 'EPR probe capabilities',
          },
          {
            feature: 'Research Grade Purity',
            description: 'High quality standard',
          },
          {
            feature: 'Versatile Research Tool',
            description: 'Multiple applications',
          },
        ],
        faq: [
          {
            question: 'What is the main use of 4-Acetamido-TEMPO?',
            answer:
              'It primarily serves as a spin label probe for EPR spectroscopy in biochemical and materials science research.',
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
          'A ketone-functionalized derivative of the stable nitroxyl radical TEMPO. This versatile compound serves as an oxidant and catalyst in specific organic synthesis reactions, potentially offering different reactivity or selectivity compared to TEMPO or H-TEMPO, and acts as an intermediate for further functionalization.',
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
            application: 'Organic Synthesis',
            description: 'Selective oxidation catalyst',
            image: image1Doc.id,
          },
          {
            application: 'Radical Chemistry',
            description: 'Research applications',
            image: image2Doc.id,
          },
          {
            application: 'Chemical Intermediate',
            description: 'Building block synthesis',
            image: image3Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Alternative Oxidant',
            description: 'Unique reactivity profile',
          },
          {
            feature: 'Versatile Intermediate',
            description: 'Synthetic building block',
          },
          {
            feature: 'High Purity Product',
            description: 'Research grade quality',
          },
        ],
        faq: [
          {
            question: 'What makes 4-Oxo-TEMPO unique?',
            answer:
              'It offers different reactivity and selectivity compared to TEMPO, making it valuable for specific organic synthesis applications and as an intermediate.',
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
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'Dietary Supplements',
            description: 'Bone health support',
            image: image1Doc.id,
          },
          {
            application: 'Veterinary Nutrition',
            description: 'Animal feed additives',
            image: image2Doc.id,
          },
          {
            application: 'Pharmaceutical',
            description: 'Active ingredients',
            image: image3Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Dual Nutrient Source',
            description: 'Calcium and phospholipid precursor',
          },
          {
            feature: 'Versatile Applications',
            description: 'Multiple industry uses',
          },
          {
            feature: 'High Quality Standard',
            description: 'Pharmaceutical grade',
          },
        ],
        faq: [
          {
            question: 'What are the main benefits of Colamin Phosphate Calcium Salt?',
            answer:
              'It provides both phospholipid precursors and calcium, supporting cellular membrane integrity and bone health in various applications.',
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
          'The fundamental biochemical precursor required for the synthesis of phosphatidylethanolamine (PE), a critical phospholipid component of all cell membranes. Essential for maintaining cellular structure and function in pharmaceutical applications, dietary supplements, veterinary feed additives, and biochemical research.',
        chemicalStructureImage: image1Doc.id,
        technicalSpecifications: {
          chemicalName: '2-Aminoethyl dihydrogen phosphate',
          casNumber: '1071-23-4',
          ecNumber: '213-988-5',
          synonyms: [
            { synonym: 'Phosphorylethanolamine' },
            { synonym: 'Ethanolamine Phosphate' },
            { synonym: 'O-Phosphoethanolamine' },
          ],
          molecularFormula: 'C₂H₈NO₄P',
          molecularWeight: '141.06 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'White crystalline powder/solid',
          purity: 'min. 98.0 % wt',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'Pharmaceuticals',
            description: 'Active ingredients',
            image: image1Doc.id,
          },
          {
            application: 'Dietary Supplements',
            description: 'Cellular health support',
            image: image2Doc.id,
          },
          {
            application: 'Cell Culture',
            description: 'Media components',
            image: image3Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Fundamental Building Block',
            description: 'Essential phospholipid precursor',
          },
          {
            feature: 'High Purity',
            description: 'Minimum 98% purity',
          },
          {
            feature: 'Versatile Applications',
            description: 'Multiple industry uses',
          },
        ],
        faq: [
          {
            question: 'What is the main function of Colamin Phosphate?',
            answer:
              'It serves as a critical precursor for phosphatidylethanolamine synthesis, essential for cell membrane structure and function.',
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
          'The sodium salt form of the fundamental phospholipid precursor, Phosphorylethanolamine. This salt may provide advantages in specific formulations where enhanced solubility, stability at certain pH values, or different handling characteristics are required compared to the parent compound.',
        chemicalStructureImage: image1Doc.id,
        technicalSpecifications: {
          chemicalName: 'Sodium (2-aminoethyl) phosphate',
          casNumber: '3842-01-5',
          synonyms: [
            { synonym: 'Phosphorylethanolamine Sodium Salt' },
            { synonym: 'Ethanolamine Phosphate Sodium Salt' },
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
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'Liquid Formulations',
            description: 'Enhanced solubility',
            image: image1Doc.id,
          },
          {
            application: 'Dietary Supplements',
            description: 'Bioavailable form',
            image: image2Doc.id,
          },
          {
            application: 'Cell Culture',
            description: 'Media optimization',
            image: image3Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Enhanced Solubility',
            description: 'Improved water solubility',
          },
          {
            feature: 'Formulation Flexibility',
            description: 'Versatile applications',
          },
          {
            feature: 'pH Modification Potential',
            description: 'Controlled formulation pH',
          },
        ],
        faq: [
          {
            question: 'What advantages does the sodium salt form offer?',
            answer:
              'The sodium salt form provides enhanced solubility and different handling characteristics, beneficial for specific formulations and applications.',
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
          'An effective liquid polymerization inhibitor formulation developed by VUP, a.s. It combines a potent TEMPO-based active ingredient (4-Hydroxy-TEMPO) with a high-performance glycol ether solvent (2-Butoxyethanol) to prevent unwanted polymerization in various petrochemical streams and monomer handling processes, ensuring process safety and efficiency.',
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
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'Polymerization Inhibition',
            description: 'Process safety',
            image: image1Doc.id,
          },
          {
            application: 'Petrochemicals',
            description: 'Stream stabilization',
            image: image2Doc.id,
          },
          {
            application: 'Fuel Additives',
            description: 'Gasoline stabilization',
            image: image3Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Effective Inhibition',
            description: 'Prevents unwanted polymerization',
          },
          {
            feature: 'Liquid Formulation',
            description: 'Easy handling and dosing',
          },
          {
            feature: 'Wide Compatibility',
            description: 'Multiple applications',
          },
        ],
        faq: [
          {
            question: 'What is the main application of VUPIN H37-B?',
            answer:
              'VUPIN H37-B is primarily used to prevent unwanted polymerization in petrochemical streams and monomer handling processes.',
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
          'An N-methylated hindered amine intermediate used for synthesizing specific types of HALS (like Tinuvin 765/292) and other functional molecules.',
        chemicalStructureImage: image1Doc.id,
        technicalSpecifications: {
          chemicalName: '1,2,2,6,6-Pentamethylpiperidine',
          casNumber: '79-55-0',
          synonyms: [{ synonym: 'N-Methyl-2,2,6,6-tetramethylpiperidine' }],
          molecularFormula: 'C₁₀H₂₁N',
          molecularWeight: '155.28 g/mol',
          labVerified: 'Verified',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'HALS Synthesis',
            description: 'Key intermediate for Tinuvin 765/292',
            image: image1Doc.id,
          },
          {
            application: 'Organic Synthesis',
            description: 'Versatile building block',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'N-methylated intermediate',
            description: 'Specific HALS precursor',
          },
          {
            feature: 'High purity',
            description: 'Research grade quality',
          },
        ],
        faq: [
          {
            question: 'What is the main use of Pentamethylpiperidine?',
            answer:
              'It is primarily used as an intermediate in the synthesis of specific HALS like Tinuvin 765/292.',
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
          'A functionalized N-methylated hindered amine containing a hydroxyl group, used as an intermediate for HALS synthesis (e.g., Tinuvin 765/292). VUP Lab Verified Synthesis.',
        chemicalStructureImage: image2Doc.id,
        technicalSpecifications: {
          chemicalName: '1,2,2,6,6-Pentamethyl-4-piperidinol',
          casNumber: '2403-89-6',
          synonyms: [{ synonym: 'N-Methyl-4-hydroxy-2,2,6,6-tetramethylpiperidine' }],
          molecularFormula: 'C₁₀H₂₁NO',
          molecularWeight: '171.28 g/mol',
          labVerified: 'Verified',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'HALS Synthesis',
            description: 'Intermediate for Tinuvin 765/292',
            image: image1Doc.id,
          },
          {
            application: 'Specialty Chemicals',
            description: 'Building block synthesis',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Functionalized intermediate',
            description: 'Contains hydroxyl group',
          },
          {
            feature: 'Lab verified synthesis',
            description: 'Quality assured product',
          },
        ],
        faq: [
          {
            question: 'What makes Pentamethylpiperidinol unique?',
            answer:
              'It contains both N-methyl and hydroxyl functionalities, making it a specific intermediate for HALS synthesis.',
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
          'A functionalized hindered amine containing a primary amino group, serving as a versatile intermediate for HALS and other specialty chemicals.',
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
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'HALS Synthesis',
            description: 'Versatile intermediate',
            image: image1Doc.id,
          },
          {
            application: 'Specialty Chemicals',
            description: 'Building block',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Primary amino group',
            description: 'Versatile functionality',
          },
          {
            feature: 'Multiple applications',
            description: 'Broad utility',
          },
        ],
        faq: [
          {
            question: 'What is special about 4-Amino-TMP?',
            answer:
              'It contains a primary amino group, making it a versatile intermediate for various HALS and specialty chemicals.',
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
          'Widely used high-molecular-weight HALS light stabilizer (equivalent to Tinuvin 770) for polymers like polyolefins and ABS. VUP Lab Verified Synthesis.',
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
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'Polyolefin Stabilization',
            description: 'Light stabilization',
            image: image1Doc.id,
          },
          {
            application: 'ABS Protection',
            description: 'UV protection',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'High molecular weight',
            description: 'Low volatility',
          },
          {
            feature: 'Proven performance',
            description: 'Industry standard',
          },
        ],
        faq: [
          {
            question: 'What polymers can HALS 770 stabilize?',
            answer:
              'HALS 770 is particularly effective in polyolefins and ABS, providing excellent UV and light stabilization.',
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
          'High-performance liquid HALS light stabilizer (equivalent to Tinuvin 765/292), often used in coatings, inks, and plastics. VUP Lab Verified Synthesis.',
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
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'Coating Stabilization',
            description: 'UV protection',
            image: image1Doc.id,
          },
          {
            application: 'Ink Stabilization',
            description: 'Light stability',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Liquid form',
            description: 'Easy processing',
          },
          {
            feature: 'Broad compatibility',
            description: 'Multiple applications',
          },
        ],
        faq: [
          {
            question: 'What are the main applications of HALS 765?',
            answer:
              'HALS 765 is primarily used in coatings, inks, and plastics for UV and light stabilization.',
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
          'Amino-functionalized TEMPO derivative used as a spin label or building block for functional materials and bioconjugation. VUP Lab Researched.',
        chemicalStructureImage: image3Doc.id,
        technicalSpecifications: {
          chemicalName: '4-Amino-2,2,6,6-tetramethylpiperidinyloxyl',
          casNumber: '14691-88-4',
          synonyms: [
            { synonym: '4-Amino-2,2,6,6-tetramethylpiperidinyloxyl' },
            { synonym: 'TEMPO-amine' },
          ],
          molecularFormula: 'C₉H₁₈N₂O',
          molecularWeight: '170.25 g/mol',
          labVerified: 'Researched',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'Spin Labeling',
            description: 'EPR studies',
            image: image1Doc.id,
          },
          {
            application: 'Bioconjugation',
            description: 'Molecular tagging',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Amino functionality',
            description: 'Versatile coupling',
          },
          {
            feature: 'Stable radical',
            description: 'Reliable spin label',
          },
        ],
        faq: [
          {
            question: 'What makes 4-Amino-TEMPO useful?',
            answer:
              'The combination of a stable nitroxyl radical and a reactive amino group makes it valuable for spin labeling and bioconjugation applications.',
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
          'Carboxylic acid functionalized TEMPO derivative with a spiro structure, used as a specialized spin label or building block. VUP Lab Researched.',
        chemicalStructureImage: image1Doc.id,
        technicalSpecifications: {
          chemicalName:
            '8-Oxyl-7,7,9,9-tetramethyl-1,4-dioxa-8-azaspiro[4.5]decane-2-carboxylic acid',
          casNumber: '71792-73-7',
          synonyms: [{ synonym: 'Spiro-TEMPO-acid' }],
          molecularFormula: 'C₁₂H₂₀NO₅',
          molecularWeight: '258.29 g/mol',
          labVerified: 'Researched',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'Spin Labeling',
            description: 'Specialized probe',
            image: image1Doc.id,
          },
          {
            application: 'Building Block',
            description: 'Synthetic intermediate',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Spiro structure',
            description: 'Unique geometry',
          },
          {
            feature: 'Carboxylic functionality',
            description: 'Reactive handle',
          },
        ],
        faq: [
          {
            question: 'What is unique about this spiro-TEMPO derivative?',
            answer:
              'It combines a spiro structure with carboxylic acid functionality, making it useful for specialized spin labeling applications.',
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
          'A stable phenoxyl radical (structurally different from TEMPO) used as a radical scavenger standard in research. (Note: VUP production not confirmed).',
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
          ],
          molecularFormula: 'C₂₉H₄₁O₂',
          molecularWeight: '421.64 g/mol',
          labVerified: 'Not Confirmed',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'Radical Scavenging',
            description: 'Research standard',
            image: image1Doc.id,
          },
          {
            application: 'Antioxidant Research',
            description: 'Reference compound',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Stable phenoxyl radical',
            description: 'Reliable standard',
          },
          {
            feature: 'Research grade',
            description: 'High purity',
          },
        ],
        faq: [
          {
            question: 'How is Galvinoxyl different from TEMPO?',
            answer:
              'Galvinoxyl is a phenoxyl-based radical, structurally distinct from the nitroxyl-based TEMPO, and is primarily used as a radical scavenging standard.',
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

  const [homePage, productsPage, industriesPage, sustainabilityPage] = await Promise.all([
    payload.create({
      collection: 'pages',
      depth: 0,
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
        featuredImage1Doc: image1Doc,
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
      data: products({ featuredImage1: image1Doc }),
    }),

    payload.create({
      collection: 'pages',
      depth: 0,
      data: industries({ featuredImage1: image1Doc }),
    }),

    payload.create({
      collection: 'pages',
      depth: 0,
      data: sustainability({
        heroImage: sustainabilityHeroImageDoc,
        pillar1Image: sustainabilityPillar1Doc,
        pillar2Image: sustainabilityPillar2Doc,
        pillar3Image: sustainabilityPillar3Doc,
        pillar4Image: sustainabilityPillar4Doc,
        focus1Image: sustainabilityFocus1Doc,
        focus2Image: sustainabilityFocus2Doc,
        focus3Image: sustainabilityFocus3Doc,
        focus4Image: sustainabilityFocus4Doc,
      }),
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
          featuredProducts: [hTempo.id, tempo.id, temp.id],
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
            equals: 'specialty-hindered-amines',
          },
        },
        data: {
          featuredProducts: [
            pentamethylpiperidine.id,
            pentamethylpiperidinol.id,
            aminoTmp.id,
            hals770.id,
            hals765.id,
            aminoTempo.id,
            spiroTempoAcid.id,
            galvinoxyl.id,
          ],
          image: pentamethylpiperidine.id,
        },
      })
      .catch((err) => {
        payload.logger.error(`— Error updating specialty-hindered-amines category: ${err}`)
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
          featuredProducts: [
            colaminPhosphate.id,
            colaminPhosphate.id,
            colaminPhosphatesodiumSalt.id,
          ],
          image: colaminPhosphate.id,
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
