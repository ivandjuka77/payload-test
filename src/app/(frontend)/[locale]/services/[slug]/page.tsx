import type { Metadata } from 'next'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import { cache } from 'react'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { ServiceHero } from '@/heros/ServicesHero'
import { ServicesGrid } from '@/components/ServiceGrid'
import { SubServiceBreakdown } from '@/components/SubServiceBreakdown'
import { TeamSection } from '@/components/TeamMembers'
import { IndustryShowcaseComponent } from '@/components/IndustryShowcaseComponent'
import { Industry, TeamMember } from '@/payload-types'
import { CaseStudiesShowcase } from '@/components/CaseStudiesShowcase'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const services = await payload.find({
    collection: 'services',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = services.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Service({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise
  const url = '/services/' + slug
  const service = await queryServiceBySlug({ slug })

  if (!service) return <PayloadRedirects url={url} />

  return (
    <main>
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      <ServiceHero service={service} />
      <ServicesGrid
        title={service.title + ' Services'}
        description="From initial concept to scalable processes, our R&D services cover every aspect of chemical development. Each service is backed by our 70+ years of expertise and state-of-the-art facilities."
        services={service.subServices}
      />
      <SubServiceBreakdown
        title={service.title + ' Services'}
        description="From initial concept to scalable processes, our R&D services cover every aspect of chemical development. Each service is backed by our 70+ years of expertise and state-of-the-art facilities."
        services={service.subServices}
      />
      <TeamSection
        title={service.title + ' Team'}
        description="Our team is dedicated to providing the highest quality services to our clients. We are a team of experienced professionals who are dedicated to providing the best possible service to our clients."
        team={service.team as TeamMember[]}
      />
      <IndustryShowcaseComponent
        title={service.title + ' Industries'}
        subtitle="Our team is dedicated to providing the highest quality services to our clients. We are a team of experienced professionals who are dedicated to providing the best possible service to our clients."
        industries={service.industries as Industry[]}
      />
      <CaseStudiesShowcase
        title={service.title + ' Case Studies'}
        description="Our team is dedicated to providing the highest quality services to our clients. We are a team of experienced professionals who are dedicated to providing the best possible service to our clients."
        caseStudies={service.caseStudies}
      />
    </main>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const service = await queryServiceBySlug({ slug })

  return generateMeta({ doc: service })
}

const queryServiceBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'services',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
