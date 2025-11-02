import type { Metadata } from 'next'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@/payload.config'
import { getPayload, TypedLocale } from 'payload'
import { draftMode } from 'next/headers'
import { cache } from 'react'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { IndustryChallenges } from '@/components/IndustryChallenges/Component'
import { ProductShowcase } from '@/components/ProductShowcaseComponent'
import { Media, Product } from '@/payload-types'
import IndustryHero from '@/components/IndustryHero'
import { getTranslations } from 'next-intl/server'

export async function generateStaticParams() {
  try {
    const payload = await getPayload({ config: configPromise })
    const industries = await payload.find({
      collection: 'industries',
      draft: false,
      limit: 1000,
      overrideAccess: false,
      pagination: false,
      select: {
        slug: true,
      },
    })

    const locales: TypedLocale[] = ['en', 'sk', 'jp']
    const params = industries.docs.flatMap(({ slug }) => {
      return locales.map((locale) => ({
        locale,
        slug,
      }))
    })

    return params
  } catch (error) {
    console.error('Error generating static params for industries:', error)
    return []
  }
}

type Args = {
  params: Promise<{
    slug?: string
    locale?: TypedLocale
  }>
}

export default async function Industry({ params: paramsPromise }: Args) {
  const { slug = '', locale = 'en' } = await paramsPromise
  const url = `/${locale}/industries/${slug}`
  const industry = await queryIndustryBySlug({ slug, locale })
  const t = await getTranslations('industry')

  if (!industry) return <PayloadRedirects url={url} />

  return (
    <main>
      <PageClient />

      <PayloadRedirects disableNotFound url={url} />

      <IndustryHero
        image={industry.featuredImage as Media}
        title={industry.name}
        summary={industry.summary}
        challenges={industry.challenges as any}
        translations={{
          exploreSolutions: t('hero.exploreSolutions'),
          keyApplications: t('hero.keyApplications'),
          learnMore: t('hero.learnMore'),
        }}
      />

      <IndustryChallenges
        industry={industry}
        translations={{
          title: t('challenges.title'),
          description: t('challenges.description', { industryName: industry.name }),
          challenge: t('challenges.challenge'),
          vupSolutions: t('challenges.vupSolutions'),
          relevantProducts: t('challenges.relevantProducts'),
          relevantServices: t('challenges.relevantServices'),
          viewAllProducts: t('challenges.viewAllProducts'),
          viewAllServices: t('challenges.viewAllServices'),
        }}
      />

      {industry.keyProducts && industry.keyProducts.length > 0 && (
        <ProductShowcase
          products={industry.keyProducts as Product[]}
          title={t('showcase.title')}
          description={t('showcase.description')}
          translations={{
            noProductsFound: t('showcase.noProductsFound'),
          }}
        />
      )}
    </main>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '', locale = 'en' } = await paramsPromise
  const industry = await queryIndustryBySlug({ slug, locale })

  return generateMeta({ doc: industry, locale, pathPrefix: `/industries/${slug}` })
}

const queryIndustryBySlug = cache(
  async ({ slug, locale }: { slug: string; locale: TypedLocale }) => {
    const { isEnabled: draft } = await draftMode()

    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'industries',
      draft,
      limit: 1,
      locale,
      overrideAccess: draft,
      pagination: false,
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    return result.docs?.[0] || null
  },
)
