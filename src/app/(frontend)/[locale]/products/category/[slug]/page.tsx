import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@/payload.config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import { cache } from 'react'
import { generateMeta } from '@/utilities/generateMeta'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { ProductCategoryHero } from '@/heros/ProductCategoryHero'
import { IndustryApplications } from '@/components/IndustryApplications'
import { ContactCTA } from '@/components/CTA'
import { Showcase } from '@/blocks/Showcase/Component'
import { Product as ProductType } from '@/payload-types'
import { getTranslations } from 'next-intl/server'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const categories = await payload.find({
    collection: 'productCategories',
    sort: '_order',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const locales = ['', 'sk', 'jp']
  const params = categories.docs.flatMap(({ slug }) => {
    return locales.map((locale) => ({
      locale,
      slug,
    }))
  })

  console.log('Product Categories', params.length)

  return params
}

type Args = {
  params: Promise<{
    slug?: string
    locale?: 'en' | 'sk' | 'jp'
  }>
}

export default async function ProductCategory({ params: paramsPromise }: Args) {
  const t = await getTranslations('')

  const { isEnabled: draft } = await draftMode()
  const { slug = '', locale = 'en' } = await paramsPromise
  const url = '/products/category/' + slug
  const category = await queryCategoryBySlug({ slug, locale })

  if (!category) return <PayloadRedirects url={url} />

  const translations = {
    hero: {
      badge: t('productCategory.productCategory'),
      title: category.name,
      description: t('productCategory.ourProductPortfolioDescription', {
        categoryName: category.name,
      }),
      cta: t('productCategory.exploreProperties'),
    },
    showcase: {
      title: t('productCategory.ourProductPortfolio', { categoryName: category.name }),
      description: t('productCategory.ourProductPortfolioDescription', {
        categoryName: category.name,
      }),
    },
    industryApplications: {
      title: t('productCategory.industryApplications', { categoryName: category.name }),
      description: t('productCategory.industryApplicationsDescription', {
        categoryName: category.name,
      }),
    },
    contactCta: {
      title: t('productCategory.needTechnicalSupport'),
      description: t('productCategory.needTechnicalSupportDescription', {
        categoryName: category.name,
      }),
      cta: t('productCategory.contactOurExperts'),
    },
  }

  return (
    <main>
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <ProductCategoryHero translations={translations.hero} category={category} />

      <Showcase
        type="product"
        products={category.featuredProducts as ProductType[]}
        showCta={false}
        title={translations.showcase.title}
        description={translations.showcase.description}
      />

      <IndustryApplications
        title={translations.industryApplications.title}
        description={translations.industryApplications.description}
        applications={category.applications}
      />

      <ContactCTA
        title={translations.contactCta.title}
        description={translations.contactCta.description}
        cta={translations.contactCta.cta}
      />
    </main>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '', locale = 'en' } = await paramsPromise
  const category = await queryCategoryBySlug({ slug, locale })

  return generateMeta({ doc: category })
}

const queryCategoryBySlug = cache(
  async ({ slug, locale }: { slug: string; locale: 'en' | 'sk' | 'jp' }) => {
    const { isEnabled: draft } = await draftMode()

    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'productCategories',
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
