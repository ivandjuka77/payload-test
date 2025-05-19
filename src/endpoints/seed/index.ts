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

  const [dmpaStructureBuffer, dmbaStructureBuffer, hpvaStructureBuffer] = await Promise.all([
    fetchFileByURL('https://images.pexels.com/photos/2391/dirty-industry-stack-factory.jpg'),
    fetchFileByURL('https://images.pexels.com/photos/2391/dirty-industry-stack-factory.jpg'),
    fetchFileByURL('https://images.pexels.com/photos/2391/dirty-industry-stack-factory.jpg'),
  ])

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

  // Category assets
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

  //* -------------------- SEEDING SERVICES -------------------- *//
  payload.logger.info('— Seeding services...')

  const [researchDevelopment, analyticalTesting] = await Promise.all([
    payload.create({
      collection: 'services',
      data: {
        title: 'Research & Development',
        description:
          "VUP's R&D division serves as a cornerstone for solving difficult chemistry-related problems for diverse industries. We offer focused contract R&D, custom synthesis (from grams to pilot scale), route scouting, process development, optimization, and scale-up for chemical specialties, fine chemicals, and unique intermediates.",
        featuredImage: image1Doc.id,
        services: [
          { service: 'Route Scouting & Feasibility' },
          { service: 'Custom Synthesis' },
          { service: 'Process Development' },
          { service: 'Process Scale-Up' },
          { service: 'Analytical Development' },
          { service: 'Technical Support' },
        ],
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
        description:
          'Comprehensive analytical testing and method development services with state-of-the-art equipment and experienced specialists. We provide accurate, reliable results with fast turnaround times.',
        featuredImage: image2Doc.id,
        services: [
          { service: 'Method Development' },
          { service: 'Quality Control Testing' },
          { service: 'Stability Studies' },
          { service: 'Material Characterization' },
        ],
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
  ] = await Promise.all([
    payload.create({
      collection: 'industries',
      data: {
        name: 'The Automotive Industry',
        _status: 'published',
        description:
          'We provide essential chemical intermediates for the automotive industry, including low-VOC coatings, adhesives, and cleaning agents that meet strict quality and environmental standards. Our solutions help manufacturers innovate and ensure compliance.',
        featuredImage: image1Doc.id,
        services: [researchDevelopment, analyticalTesting],
        challenges: [
          {
            title: 'Advanced Automotive Coatings (OEM & Refinish)',
            challenge:
              'Developing durable, high-performance, and environmentally compliant coatings (primers, basecoats, clearcoats) for vehicle bodies and components.',
            solution:
              'We supply key raw materials essential for modern automotive coatings. DMPA (CAS 4767-03-7) and DMBA (CAS 10097-02-6) are critical for producing waterborne Polyurethane Dispersions (PUDs) and polyester/alkyd resins used in eco-friendly, low-VOC automotive paints, contributing to excellent finish quality.',
            image: image2Doc.id,
            challengeLink: 'advanced-automotive-coatings',
            relatedServices: [researchDevelopment, analyticalTesting],
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
          'The coatings, paints, and inks industry continuously seeks innovations that enhance performance, durability, and environmental compatibility. Formulators face challenges in meeting stringent regulations while delivering exceptional protection, aesthetics, and functionality.',
        featuredImage: image2Doc.id,
        services: [researchDevelopment, analyticalTesting],
        challenges: [
          {
            title: 'Waterborne Coatings (PUDs, Alkyds, Polyesters)',
            challenge:
              'Developing stable, high-performance waterborne coatings with reduced environmental impact requires specialized hydrophilic monomers.',
            solution:
              'Our DMPA and DMBA are versatile building blocks ensuring stable dispersion of resins in water, leading to lower VOC formulations with enhanced adhesion, gloss, and impact resistance.',
            image: image3Doc.id,
            challengeLink: 'waterborne-coatings',
            relatedServices: [researchDevelopment, analyticalTesting],
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
          'The Polymers & Plastics industry relies on innovative chemistry to create materials with specific functionalities, enhanced durability, and improved processing characteristics.',
        featuredImage: image1Doc.id,
        services: [researchDevelopment, analyticalTesting],
        challenges: [
          {
            title: 'Polymer Stabilization',
            challenge:
              'Protecting polymers from degradation caused by UV light, heat, and oxidation is crucial for extending product lifespan and maintaining performance.',
            solution:
              'We offer Hindered Amines, including Hindered Amine Light Stabilizers (HALS) derived from our TAA production line.',
            image: image2Doc.id,
            challengeLink: 'polymer-stabilization',
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
        featuredImage: image1Doc.id,
        services: [researchDevelopment, analyticalTesting],
        challenges: [
          {
            title: 'Waterborne Adhesive Systems (Polyurethane, Polyester, Epoxy)',
            challenge:
              'Formulating high-performance waterborne adhesives requires intermediates that ensure stability, strong bonding, and water resistance.',
            solution:
              'Dimethylolbutanoic Acid (DMBA, CAS 10097-02-6) is a crucial component for waterborne polyurethane, epoxy, and polyester adhesives. Its superior water solubility improves processing efficiency, while its function as a cross-linking agent provides exceptional bonding strength and improved water resistance. Its potentially faster reaction rate can also enhance production throughput. We also offer DMPA, a related methylolalkanoic acid also used in PUDs for adhesives.',
            image: image2Doc.id,
            challengeLink: 'waterborne-adhesive-systems',
            relatedServices: [researchDevelopment, analyticalTesting],
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
        featuredImage: image3Doc.id,
        services: [researchDevelopment, analyticalTesting],
        challenges: [
          {
            title: 'API Synthesis & Pharmaceutical Intermediates',
            challenge:
              'Sourcing high-purity, reliably supplied raw materials and intermediates is crucial for Active Pharmaceutical Ingredient (API) manufacturing.',
            solution:
              "We specialize in the production of TEMPO (CAS 2564-83-2) and related nitroxide radicals, which serve as versatile catalysts, antioxidants, and raw materials, including use in APIs targeting Parkinson's disease. VUP's Custom Synthesis service provides tailored production of other complex organic intermediates needed for drug development pipelines, backed by robust quality control.",
            image: image1Doc.id,
            challengeLink: 'api-synthesis',
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
        featuredImage: image2Doc.id,
        services: [researchDevelopment, analyticalTesting],
        challenges: [
          {
            title: 'Fuel Processing, Storage & Stability',
            challenge:
              'Ensuring fuel stability during processing, transportation, and storage is critical to prevent degradation, gum formation, and maintain quality specifications.',
            solution:
              'We produce specialized additives like VUPIN H37-B (Antioxidant/UV Stabilizer) designed for fuel processing and storage. Additionally, our expertise extends to polymerization inhibitors like H-TEMPO, which has been successfully used for years in refinery FCC units (e.g., at Slovnaft) to prevent unwanted reactions.',
            image: image3Doc.id,
            challengeLink: 'fuel-processing-storage',
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
        featuredImage: image1Doc.id,
        services: [researchDevelopment, analyticalTesting],
        challenges: [
          {
            title: 'Organic Radical Batteries (ORBs)',
            challenge:
              'Developing high-performance, metal-free, and potentially safer battery systems for applications ranging from portable electronics to grid storage.',
            solution:
              'TEMPO and its derivatives exhibit remarkable electrochemical performance, acting as highly efficient and reversible charge carriers. Their potential use as redox-active materials in ORB electrodes offers advantages like potentially high power density and fast charge/discharge rates. VUP produces high-purity TEMPO suitable for electrochemical research and development in this field.',
            image: image2Doc.id,
            challengeLink: 'organic-radical-batteries',
            relatedServices: [researchDevelopment, analyticalTesting],
            caseStudies: [],
          },
          {
            title: 'Aqueous Redox Flow Batteries',
            challenge:
              'Improving the energy density, efficiency, and cost-effectiveness of aqueous redox flow batteries for grid-scale energy storage.',
            solution:
              "Research indicates significant potential for TEMPO-based catholytes to enhance the performance of aqueous redox flow batteries. VUP's expertise in TEMPO chemistry positions us to collaborate on developing and supplying tailored TEMPO derivatives optimized for stability and electrochemical potential in flow battery systems.",
            image: image3Doc.id,
            challengeLink: 'redox-flow-batteries',
            relatedServices: [researchDevelopment, analyticalTesting],
            caseStudies: [],
          },
          {
            title: 'Material Development & Optimization',
            challenge:
              'Optimizing the performance of TEMPO-based batteries requires understanding structure-property relationships and potentially synthesizing novel derivatives with enhanced stability, solubility, or redox potential. Performance optimization regarding energy density and charge/discharge efficiency is a key focus.',
            solution:
              'Leveraging our deep expertise in nitroxide radical chemistry and R&D capabilities, we partner with researchers and companies to develop and synthesize custom TEMPO derivatives. Our goal is to address specific performance bottlenecks and contribute to advancements in ORB and flow battery technology through targeted material innovation. VUP has technologies involving TEMPO ready for scaling up.',
            image: image1Doc.id,
            challengeLink: 'material-development',
            relatedServices: [researchDevelopment, analyticalTesting],
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
        featuredImage: image2Doc.id,
        services: [researchDevelopment, analyticalTesting],
        challenges: [
          {
            title: 'Concrete & Cement Product Enhancement',
            challenge:
              'Improving the workability of concrete mixes and enhancing the properties of finished concrete products like paving stones, panels, and structures is key for efficiency and performance.',
            solution:
              'VUPPOR is specifically designed as an additive for concrete products. It improves processability and enhances thermal insulation properties. Recommended for a wide range of concrete items including pavings, edge-stones, gardening parts, construction panels, and monolithic constructions, VUPPOR contributes to better quality finished products. It is physiologically harmless and requires no special handling measures beyond standard practices.',
            image: image3Doc.id,
            challengeLink: 'concrete-cement-enhancement',
            relatedServices: [researchDevelopment, analyticalTesting],
            caseStudies: [],
          },
          {
            title: 'Improving Plasters & Coatings',
            challenge:
              'Enhancing the durability, application properties, and crack resistance of synthetic plasters and water-soluble coatings used in construction. Meeting low-VOC requirements for architectural coatings.',
            solution:
              'VUPRANYL, a stable water dispersion, serves as an additive for synthetic plasters and water-soluble coatings, leading to longer durability and a significant decrease in crack formation. Additionally, key intermediates like DMBA (CAS 10097-02-6) and DMPA (CAS 4767-03-7) are crucial for producing the waterborne polyurethane and polyester resins used in durable, low-VOC architectural and protective coatings, offering excellent adhesion and flexibility.',
            image: image1Doc.id,
            challengeLink: 'plasters-coatings',
            relatedServices: [researchDevelopment, analyticalTesting],
            caseStudies: [],
          },
          {
            title: 'Efficient Formwork Release (Demoulding)',
            challenge:
              'Ensuring clean and easy release of concrete from formwork without damaging the forms or the concrete surface, while maintaining worker safety and environmental considerations.',
            solution:
              'VUPOFORM acts as a highly effective deforming (release) agent for all types of building forms. Its insolubility in water provides an excellent separation effect, allowing for multiple reuses of the form without reapplication. It does not attack sealing materials or corrode metal equipment. VUPOFORM offers significant safety and environmental benefits: negligible volatility (no air pollution), elimination of oil contamination in wastewater, and no special safety measures required for handling.',
            image: image2Doc.id,
            challengeLink: 'formwork-release',
            relatedServices: [researchDevelopment, analyticalTesting],
            caseStudies: [],
          },
          {
            title: 'High-Performance Construction Adhesives & Sealants',
            challenge:
              'Modern construction relies on high-performance adhesives and sealants for bonding diverse materials, ensuring structural integrity, and providing effective sealing against environmental elements.',
            solution:
              'We supply key chemical intermediates like DMBA (CAS 10097-02-6), used in waterborne polyurethane, epoxy, and polyester adhesives where it enhances bonding strength and water resistance. Hydroxypivalic Acid (HPVA, CAS 4835-90-9), via its derivative HPN, contributes to the performance of adhesives and sealants by balancing hardness, flexibility, and adhesion, potentially enabling low-VOC formulations.',
            image: image3Doc.id,
            challengeLink: 'construction-adhesives-sealants',
            relatedServices: [researchDevelopment, analyticalTesting],
            caseStudies: [],
          },
        ],
        slug: 'building-construction',
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
  ] = await Promise.all([
    payload.create({
      collection: 'products',
      data: {
        name: 'Dimethylolpropionic Acid (DMPA)',
        _status: 'published',
        description:
          'A unique trifunctional molecule featuring two primary hydroxyl groups and one tertiary carboxylic group, essential for creating high-performance water-soluble alkyds, polyesters, and polyurethane dispersions (PUDs).',
        chemicalStructureImage: image1Doc.id,
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
        chemicalStructureImage: image2Doc.id,
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
        chemicalStructureImage: image3Doc.id,
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
        chemicalStructureImage: image1Doc.id,
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
        chemicalStructureImage: image2Doc.id,
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
        chemicalStructureImage: image3Doc.id,
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
        chemicalStructureImage: image2Doc.id,
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
        chemicalStructureImage: image3Doc.id,
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
        chemicalStructureImage: image1Doc.id,
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
        chemicalStructureImage: image2Doc.id,
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
        chemicalStructureImage: image3Doc.id,
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
        chemicalStructureImage: image2Doc.id,
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
        chemicalStructureImage: image3Doc.id,
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

  const [homePage, productsPage, industriesPage] = await Promise.all([
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
        post1: post1Doc,
        post2: post2Doc,
        post3: post3Doc,
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
  //             url: '/posts',
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
          featuredProducts: [dmpa.id, dmba.id, hpva.id],
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
            equals: 'glycol-ethers',
          },
        },
        data: {
          featuredProducts: [dmpa.id, dmba.id, hpva.id],
        },
      })
      .catch((err) => {
        payload.logger.error(`— Error updating glycol-ethers category: ${err}`)
      }),
  ])

  // Update all industries with featured products
  payload.logger.info('— Updating industries with featured products...')

  await Promise.all([
    payload
      .update({
        collection: 'industries',
        where: {
          slug: {
            equals: 'automotive',
          },
        },
        data: {
          keyProducts: [dmpa.id, dmba.id, hpva.id],
        },
      })
      .catch((err) => {
        payload.logger.error(`— Error updating automotive industry: ${err}`)
      }),

    payload
      .update({
        collection: 'industries',
        where: {
          slug: {
            equals: 'coatings-paints-inks',
          },
        },
        data: {
          keyProducts: [dmpa.id, dmba.id, hpva.id],
        },
      })
      .catch((err) => {
        payload.logger.error(`— Error updating coatings-paints-inks industry: ${err}`)
      }),

    payload
      .update({
        collection: 'industries',
        where: {
          slug: {
            equals: 'polymers-plastics',
          },
        },
        data: {
          keyProducts: [dmpa.id, dmba.id, hpva.id],
        },
      })
      .catch((err) => {
        payload.logger.error(`— Error updating polymers-plastics industry: ${err}`)
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
