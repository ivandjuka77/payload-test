import type { Payload } from 'payload'
import type { SeededMedia } from './1-media'

export const seedTeamMembers = async (payload: Payload, media: SeededMedia) => {
  payload.logger.info('- Seeding team members...')

  // Destructure the needed media documents
  const { demoImageDoc, image2Doc, image3Doc } = media

  const [rdDoc, commercialDoc, atbelDoc, cosmeticsDoc] = await Promise.all([
    // payload.create({
    //   collection: 'teamMembers',
    //   data: {
    //     name: 'Roman Karlubik',
    //     role: 'Chief Executive Officer',
    //     bio: "Leading VUP's strategic direction and commitment to innovation and sustainable growth.",
    //     image: demoImageDoc.id,
    //     linkedin: null,
    //     email: null,
    //     isHeadOfDepartment: false,
    //   },
    // }),
    payload.create({
      collection: 'teamMembers',
      data: {
        name: 'Ing. Peter Grolmus',
        role: 'Director of Research & Development',
        bio: "Overseeing VUP's extensive R&D programs, driving innovation in chemical synthesis, process development, and new product creation.",
        image: image2Doc.id,
        linkedin: null,
        email: null,
        isHeadOfDepartment: true,
      },
    }),
    payload.create({
      collection: 'teamMembers',
      data: {
        name: 'Ing. Ján Chalupka',
        role: 'Head of Commercial Department',
        bio: "Managing VUP's commercial strategy, client partnerships, and market development for our diverse product and service portfolio.",
        image: image3Doc.id,
        linkedin: null,
        email: null,
        isHeadOfDepartment: true,
      },
    }),
    payload.create({
      collection: 'teamMembers',
      data: {
        name: 'Ing. Ľudovít Žiak, PhD',
        role: 'Head of ATBEL Division (Analytical, Technical-Safety, and Ecological Laboratories)',
        bio: 'Leading our SNAS S-118 accredited laboratories, ensuring high-quality analytical services, technical safety testing, and environmental monitoring.',
        image: demoImageDoc.id,
        linkedin: null,
        email: null,
        isHeadOfDepartment: true,
      },
    }),
    payload.create({
      collection: 'teamMembers',
      data: {
        name: 'Ing. Denisa Juríčeková',
        role: 'Head of Production Department for Cosmetics',
        bio: "Overseeing the development, manufacturing, and quality assurance of VUP's cosmetic products, including custom and private label solutions.",
        image: image2Doc.id,
        linkedin: null,
        email: null,
        isHeadOfDepartment: true,
      },
    }),
  ])

  payload.logger.info('✓ Team members seeded')

  return {
    rdDoc,
    commercialDoc,
    atbelDoc,
    cosmeticsDoc,
  }
}

export type SeededTeamMembers = Awaited<ReturnType<typeof seedTeamMembers>>
