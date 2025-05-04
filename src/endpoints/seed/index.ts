import type { CollectionSlug, Payload, PayloadRequest, File } from 'payload'

import { contactForm as contactFormData } from './contact-form'
import { contact as contactPageData } from './contact-page'
import { home } from './home'
import { image1 } from './image-1'
import { image2 } from './image-2'
import { imageHero1 } from './image-hero-1'
import { post1 } from './post-1'
import { post2 } from './post-2'
import { post3 } from './post-3'

const collections: CollectionSlug[] = ['productCategories', 'industries', 'services', 'media']
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

  const [demoAuthor, image1Doc, image2Doc, image3Doc, imageHomeDoc] = await Promise.all([
    payload.create({
      collection: 'users',
      data: {
        name: 'Demo Author',
        email: 'demo-author@example.com',
        password: 'password',
      },
    }),
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

  payload.logger.info(`— Seeding industries...`)

  const [automotive, coatingsPaintsInks, polymersPlastics] = await Promise.all([
    payload.create({
      collection: 'industries',
      data: {
        name: 'The Automotive Industry',
        description:
          'We provide essential chemical intermediates for the automotive industry, including low-VOC coatings, adhesives, and cleaning agents that meet strict quality and environmental standards. Our solutions help manufacturers innovate and ensure compliance.',
        featuredImage: image1Doc.id,
        services: [
          {
            service: 'Advanced Automotive Coatings',
          },
          {
            service: 'High-Performance Adhesives',
          },
          {
            service: 'Surface Preparation & Cleaning',
          },
          {
            service: 'Component Testing & Compliance',
          },
        ],
        challenges: [
          {
            title: 'Advanced Automotive Coatings (OEM & Refinish)',
            challenge:
              'Developing durable, high-performance, and environmentally compliant coatings (primers, basecoats, clearcoats) for vehicle bodies and components.',
            solution:
              'We supply key raw materials essential for modern automotive coatings. DMPA (CAS 4767-03-7) and DMBA (CAS 10097-02-6) are critical for producing waterborne Polyurethane Dispersions (PUDs) and polyester/alkyd resins used in eco-friendly, low-VOC automotive paints, contributing to excellent finish quality.',
            image: image2Doc.id,
            challengeLink: 'advanced-automotive-coatings',
            relatedServices: [
              {
                service: 'Advanced Automotive Coatings',
              },
            ],
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
        description:
          'The coatings, paints, and inks industry continuously seeks innovations that enhance performance, durability, and environmental compatibility. Formulators face challenges in meeting stringent regulations while delivering exceptional protection, aesthetics, and functionality.',
        featuredImage: image2Doc.id,
        services: [
          {
            service: 'Waterborne Coatings',
          },
          {
            service: 'Powder Coatings',
          },
          {
            service: 'Environmental Compliance',
          },
        ],
        challenges: [
          {
            title: 'Waterborne Coatings (PUDs, Alkyds, Polyesters)',
            challenge:
              'Developing stable, high-performance waterborne coatings with reduced environmental impact requires specialized hydrophilic monomers.',
            solution:
              'Our DMPA and DMBA are versatile building blocks ensuring stable dispersion of resins in water, leading to lower VOC formulations with enhanced adhesion, gloss, and impact resistance.',
            image: image3Doc.id,
            challengeLink: 'waterborne-coatings',
            relatedServices: [
              {
                service: 'Waterborne Coatings',
              },
            ],
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
        description:
          'The Polymers & Plastics industry relies on innovative chemistry to create materials with specific functionalities, enhanced durability, and improved processing characteristics.',
        featuredImage: image1Doc.id,
        services: [
          {
            service: 'Polymer Stabilization',
          },
          {
            service: 'Controlled Polymerization',
          },
          {
            service: 'Polyurethane Building Blocks',
          },
        ],
        challenges: [
          {
            title: 'Polymer Stabilization',
            challenge:
              'Protecting polymers from degradation caused by UV light, heat, and oxidation is crucial for extending product lifespan and maintaining performance.',
            solution:
              'We offer Hindered Amines, including Hindered Amine Light Stabilizers (HALS) derived from our TAA production line.',
            image: image2Doc.id,
            challengeLink: 'polymer-stabilization',
            relatedServices: [
              {
                service: 'Polymer Stabilization',
              },
            ],
            caseStudies: [],
          },
        ],
        slug: 'polymers-plastics',
      },
    }),
  ])

  payload.logger.info('— Seeding products...')

  await Promise.all([
    payload.create({
      collection: 'products',
      data: {
        name: 'Dimethylolpropionic Acid (DMPA)',
        description:
          'A unique trifunctional molecule featuring two primary hydroxyl groups and one tertiary carboxylic group, essential for creating high-performance water-soluble alkyds, polyesters, and polyurethane dispersions (PUDs).',
        chemicalName: '3-Hydroxy-2-(hydroxymethyl)-2-methylpropanoic acid',
        keyProperties: [
          { property: 'Enables waterborne formulations' },
          { property: 'Improves coating properties' },
          { property: 'Enhances adhesion' },
          { property: 'High purity & consistency' },
          { property: 'Versatile reactivity' },
        ],
        useCases: [
          { name: 'Waterborne Coatings' },
          { name: 'PUDs' },
          { name: 'Adhesives' },
          { name: 'Printing Inks' },
          { name: 'Powder Coatings' },
          { name: 'Lubricant Additives' },
        ],
        synonyms: [{ synonym: '2,2-Bis(hydroxymethyl)propionic acid' }, { synonym: 'DMPA' }],
        chemicalStructureImage: image1Doc.id,
        casNumber: '4767-03-7',
        ecNumber: '225-306-3',
        molecularFormula: 'C₅H₁₀O₄',
        molecularWeight: '134.13 g/mol',
        VupSpecifications: {
          appearance: 'White crystalline powder',
          purity: 'min. 98.5 % wt',
          acidValue: 'min. 412 mg KOH/g',
          hydroxylValue: 'min. 824 mg KOH/g',
          waterContent: 'max. 0.3 % wt',
          ashContent: 'max. 0.03 % wt',
        },
        challenges: [{ challenge: 'Concrete Enhancement' }, { challenge: 'Construction Coatings' }],
        'chemicalFamily (Category)': [
          { family: 'Hydroxy Acids' },
          { family: 'Dimethylolpropionic Acid' },
        ],
        benefits: [
          { benefit: 'Water Solubility / Dispersibility Agent' },
          { benefit: 'Adhesion Promotion' },
          { benefit: 'Improved Flexibility' },
          { benefit: 'Enhanced Gloss' },
          { benefit: 'Improved Stability (Hydrolytic)' },
          { benefit: 'Reduced VOC / Waterborne Formulation Enabler' },
          { benefit: 'Low Toxicity Profile' },
        ],
        labVerified: 'Verified',
        categories: [{ category: 'Hydroxy Acids' }],
        industries: [{ industry: 'Building & Construction' }],
        applications: [
          { application: 'Waterborne Coatings (General)' },
          { application: 'Polyurethane Dispersions (PUDs)' },
          { application: 'Alkyd Resin Coatings' },
          { application: 'Polyester Resin Coatings' },
        ],
        slug: 'dmpa',
      },
    }),

    payload.create({
      collection: 'products',
      data: {
        name: 'Dimethylolbutyric Acid (DMBA)',
        description:
          'Enables solvent-free PUD synthesis with improved processing efficiency (lower temperature) and potentially enhanced film resistance.',
        chemicalName: '2,2-Bis(hydroxymethyl)butyric acid',
        keyProperties: [
          { property: 'Enables solvent-free PUD synthesis' },
          { property: 'Lower processing temperature' },
          { property: 'Enhanced film resistance' },
          { property: 'Improved hydrophilicity' },
          { property: 'High purity (min. 99%)' },
        ],
        useCases: [
          { name: 'Solvent-Free' },
          { name: 'PUDs' },
          { name: 'Efficiency' },
          { name: 'Coatings' },
          { name: 'Adhesives' },
        ],
        synonyms: [{ synonym: '2,2-Bis(hydroxymethyl)butyric acid' }, { synonym: 'DMBA' }],
        chemicalStructureImage: image2Doc.id,
        casNumber: '10097-02-6',
        ecNumber: '233-226-5',
        molecularFormula: 'C₆H₁₂O₄',
        molecularWeight: '148.16 g/mol',
        VupSpecifications: {
          appearance: 'White crystalline powder',
          purity: 'min. 99.0 % wt',
          acidValue: 'min. 375 mg KOH/g',
          hydroxylValue: 'min. 750 mg KOH/g',
          waterContent: 'max. 0.3 % wt',
          ashContent: 'max. 0.03 % wt',
        },
        challenges: [{ challenge: 'Concrete Enhancement' }, { challenge: 'Construction Coatings' }],
        'chemicalFamily (Category)': [
          { family: 'Hydroxy Acids' },
          { family: 'Dimethylolbutyric Acid' },
        ],
        benefits: [
          { benefit: 'Solvent-Free Processing' },
          { benefit: 'Lower Processing Temperature' },
          { benefit: 'Enhanced Film Resistance' },
          { benefit: 'Improved Hydrophilicity' },
          { benefit: 'Water Dispersibility Agent' },
          { benefit: 'Reduced VOC' },
        ],
        labVerified: 'Verified',
        categories: [{ category: 'Hydroxy Acids' }],
        industries: [{ industry: 'Building & Construction' }],
        applications: [
          { application: 'Solvent-Free PUDs' },
          { application: 'Waterborne Coatings' },
          { application: 'Low-Temperature Processing' },
          { application: 'Polyurethane Dispersions' },
        ],
        slug: 'dmba',
      },
    }),

    payload.create({
      collection: 'products',
      data: {
        name: '3-Hydroxypivalic Acid (HPVA)',
        description:
          'A unique hydroxy acid featuring a neopentyl structure, essential for synthesizing high-performance polyesters and esters with exceptional stability.',
        chemicalName: '3-Hydroxypivalic Acid',
        keyProperties: [
          { property: 'Exceptional stability' },
          { property: 'Durable polymer building block' },
          { property: 'Versatile ester intermediate' },
          { property: 'High purity (min. 98%)' },
          { property: 'Modifier potential' },
        ],
        useCases: [
          { name: 'Polyester Resins' },
          { name: 'Powder Coatings' },
          { name: 'Synthetic Lubricants' },
          { name: 'Chemical Intermediate' },
          { name: 'Polymer Modifier' },
        ],
        synonyms: [
          { synonym: 'Hydroxypivalic Acid' },
          { synonym: '2,2-Dimethyl-3-hydroxypropionic acid' },
        ],
        chemicalStructureImage: image3Doc.id,
        casNumber: '4835-90-9',
        ecNumber: '225-419-8',
        molecularFormula: 'C₅H₁₀O₃',
        molecularWeight: '118.13 g/mol',
        VupSpecifications: {
          appearance: 'White crystalline powder/solid',
          purity: 'min. 98.0 % wt',
          meltingPoint: '122 – 124 °C',
        },
        challenges: [{ challenge: 'Polymer Performance Enhancement' }],
        'chemicalFamily (Category)': [
          { family: 'Hydroxy Acids' },
          { family: 'Aliphatic Carboxylic Acid' },
          { family: '3-Hydroxypivalic Acid' },
        ],
        benefits: [
          { benefit: 'Enhanced Hydrolytic Stability' },
          { benefit: 'Improved Thermal Stability' },
          { benefit: 'Excellent Weather Resistance' },
          { benefit: 'High Chemical Resistance' },
          { benefit: 'Durability Enhancement' },
          { benefit: 'Building Block' },
          { benefit: 'Good Solubility' },
          { benefit: 'Low Volatility' },
        ],
        labVerified: 'Verified',
        categories: [{ category: 'Hydroxy Acids' }],
        industries: [{ industry: 'Polymers & Plastics' }],
        applications: [
          { application: 'Polyester Resins' },
          { application: 'Powder Coatings' },
          { application: 'Coil Coatings' },
          { application: 'Synthetic Lubricants' },
        ],
        slug: 'hpva',
      },
    }),
  ])

  payload.logger.info('— Seeding product categories...')

  await Promise.all([
    payload.create({
      collection: 'productCategories',
      data: {
        name: 'Hydroxy Acids',
        description:
          'Hydroxy acids are a type of organic compound that contain one or more hydroxyl groups (-OH) attached to a carbon atom.',
        image: imageHomeDoc.id,
        slug: 'hydroxy-acids',
        productComparison: false,
        applications: [
          {
            imageSrc: image1Doc.id,
            title: 'Waterborne Coatings',
            description:
              'Eco-friendly coating solutions with reduced VOCs for sustainable industrial applications.',
          },
          {
            imageSrc: image2Doc.id,
            title: 'Polyurethane Dispersions',
            description:
              'Advanced water-based PU systems enabling high-performance coatings with low environmental impact.',
          },
          {
            imageSrc: image3Doc.id,
            title: 'Durable Polyesters',
            description:
              'Engineered high-performance resins providing exceptional durability in demanding environments.',
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
            imageSrc: image1Doc.id,
            title: 'Polymer Light Stabilization',
            description:
              'HALS & related intermediates for protecting polymers from UV degradation.',
          },
          {
            imageSrc: image2Doc.id,
            title: 'Polymerization Inhibition',
            description: 'Radical trapping & control for precise polymer synthesis.',
          },
          {
            imageSrc: image3Doc.id,
            title: 'Selective Oxidation',
            description: 'TEMPO catalysis for efficient and selective chemical transformations.',
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
            imageSrc: image1Doc.id,
            title: 'Coatings & Paints',
            description: 'Advanced solvent systems enabling high-performance coating formulations.',
          },
          {
            imageSrc: image2Doc.id,
            title: 'Cleaning Products',
            description: 'Effective solvents for industrial and household cleaning applications.',
          },
          {
            imageSrc: image3Doc.id,
            title: 'Printing Inks',
            description: 'Specialized solvent systems for high-quality printing applications.',
          },
        ],
      },
    }),
  ])

  payload.logger.info('— Seeding services...')

  await Promise.all([
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

  // payload.logger.info(`— Seeding posts...`)

  // Do not create posts with `Promise.all` because we want the posts to be created in order
  // This way we can sort them by `createdAt` or `publishedAt` and they will be in the expected order
  // const post1Doc = await payload.create({
  //   collection: 'posts',
  //   depth: 0,
  //   context: {
  //     disableRevalidate: true,
  //   },
  //   data: post1({ heroImage: image1Doc, blockImage: image2Doc, author: demoAuthor }),
  // })

  // const post2Doc = await payload.create({
  //   collection: 'posts',
  //   depth: 0,
  //   context: {
  //     disableRevalidate: true,
  //   },
  //   data: post2({ heroImage: image2Doc, blockImage: image3Doc, author: demoAuthor }),
  // })

  // const post3Doc = await payload.create({
  //   collection: 'posts',
  //   depth: 0,
  //   context: {
  //     disableRevalidate: true,
  //   },
  //   data: post3({ heroImage: image3Doc, blockImage: image1Doc, author: demoAuthor }),
  // })

  // // update each post with related posts
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

  // payload.logger.info(`— Seeding pages...`)

  // const [_, contactPage] = await Promise.all([
  //   payload.create({
  //     collection: 'pages',
  //     depth: 0,
  //     data: home({ heroImage: imageHomeDoc, metaImage: image2Doc }),
  //   }),
  //   payload.create({
  //     collection: 'pages',
  //     depth: 0,
  //     data: contactPageData({ contactForm: contactForm }),
  //   }),
  // ])

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

  return {
    name: url.split('/').pop() || `file-${Date.now()}`,
    data: Buffer.from(data),
    mimetype: `image/${url.split('.').pop()}`,
    size: data.byteLength,
  }
}
