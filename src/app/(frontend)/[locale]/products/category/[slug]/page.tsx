import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@/payload.config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import { cache } from 'react'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { ProductCategoryHero } from '@/heros/ProductCategoryHero'
import { IndustryApplications } from '@/components/IndustryApplications'
import { ContactCTA } from '@/components/CTA'
import { Showcase } from '@/blocks/Showcase/Component'
import { Product as ProductType } from '@/payload-types'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const categories = await payload.find({
    collection: 'productCategories',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = categories.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function ProductCategory({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/products/category/' + slug
  const category = await queryCategoryBySlug({ slug })

  if (!category) return <PayloadRedirects url={url} />

  return (
    <main>
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <ProductCategoryHero category={category} />

      <Showcase
        type="product"
        contentItems={[]}
        products={category.featuredProducts as ProductType[]}
        features={[]}
        showCta={false}
        title={`Our ${category.name} Portfolio`}
        description={`Discover our range of high-quality ${category.name} products for your specific application needs.`}
      />

      <IndustryApplications
        title={`Industry Applications for ${category.name}`}
        description={`Our ${category.name} serve diverse applications across industry sectors.`}
        applications={category.applications}
      />

      <ContactCTA
        title="Need Technical Support or Product Information?"
        description="Our experts are ready to assist you with hydroxy acids selection and application guidance for your specific needs."
      />
    </main>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const category = await queryCategoryBySlug({ slug })

  return generateMeta({ doc: category })
}

const queryCategoryBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'productCategories',
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
