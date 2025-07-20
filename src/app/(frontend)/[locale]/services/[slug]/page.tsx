import type { Metadata } from 'next'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@/payload.config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import { cache } from 'react'
import { generateMeta } from '@/utilities/generateMeta'
import { ServiceHero } from '@/heros/ServicesHero'
// import { ServicesGrid } from '@/components/ServiceGrid'
import { SubServiceBreakdown } from '@/components/SubServiceBreakdown'
import { TeamSection } from '@/components/TeamMembers'
import { IndustryShowcaseComponent } from '@/components/IndustryShowcaseComponent'
import { Industry, TeamMember } from '@/payload-types'
import { CaseStudiesShowcase } from '@/components/CaseStudiesShowcase'
import ServiceFeatures from '@/components/ServiceFeatures'
import { getTranslations } from 'next-intl/server'
import { TypedLocale } from 'payload'

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

  const locales = ['', 'sk', 'jp'] // '' represents default (English)
  const params = services.docs.flatMap(({ slug }) => {
    return locales.map((locale) => ({
      locale,
      slug,
    }))
  })

  console.log('Services', params.length)

  return params
}

type Args = {
  params: Promise<{
    slug?: string
    locale?: TypedLocale
  }>
}

export default async function Service({ params: paramsPromise }: Args) {
  const { slug = '', locale } = await paramsPromise
  const url = '/services/' + slug
  const service = await queryServiceBySlug({ slug, locale: locale as TypedLocale })

  const t = await getTranslations('service')

  if (!service) return <PayloadRedirects url={url} />

  return (
    <main>
      <PayloadRedirects disableNotFound url={url} />

      <ServiceHero
        service={service}
        translations={{
          accreditations: t('hero.accreditations'),
          exploreServices: t('hero.exploreServices'),
          learnMore: t('hero.learnMore'),
        }}
      />
      {/* <ServicesGrid
        title={service.title + ' Services'}
        description="From initial concept to scalable processes, our R&D services cover every aspect of chemical development. Each service is backed by our 70+ years of expertise and state-of-the-art facilities."
        services={service.subServices}
      /> */}

      <ServiceFeatures
        serviceName={service.title}
        features={service.features}
        translations={{
          title: t('features.title'),
          description: t('features.description', { serviceName: service.title }),
        }}
      />

      <SubServiceBreakdown
        title={t('subServices.title', { serviceName: service.title })}
        description={t('subServices.description')}
        services={service.subServices}
      />
      {service.team && service.team.length > 0 && (
        <TeamSection
          title={t('team.title', { serviceName: service.title })}
          description={t('team.description')}
          team={service.team as TeamMember[]}
        />
      )}
      {service.industries && service.industries.length > 0 && (
        <IndustryShowcaseComponent industries={service.industries as Industry[]} />
      )}
      {service.caseStudies && service.caseStudies.length > 0 && (
        <CaseStudiesShowcase
          title={t('caseStudies.title', { serviceName: service.title })}
          description={t('caseStudies.description')}
          caseStudies={service.caseStudies}
          translations={{
            readStudy: t('caseStudies.readStudy'),
            viewAll: t('caseStudies.viewAll'),
            application: t('caseStudies.application'),
          }}
        />
      )}
    </main>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '', locale } = await paramsPromise
  const service = await queryServiceBySlug({ slug, locale: locale as TypedLocale })

  return generateMeta({ doc: service })
}

const queryServiceBySlug = cache(
  async ({ slug, locale }: { slug: string; locale: TypedLocale }) => {
    const { isEnabled: draft } = await draftMode()

    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'services',
      draft,
      limit: 1,
      overrideAccess: draft,
      pagination: false,
      locale,
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    return result.docs?.[0] || null
  },
)

export async function queryServices({
  limit,
  locale = 'en',
}: {
  limit: number
  locale: TypedLocale
}) {
  const payload = await getPayload({ config: configPromise })
  const services = await payload.find({
    collection: 'services',
    draft: false,
    limit,
    overrideAccess: false,
    pagination: false,
    locale,
  })

  return services.docs || []
}
