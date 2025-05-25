import type { Metadata } from 'next'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@/payload.config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { ProductHero } from '@/components/products/Hero'
import { TechnicalSpecifications } from '@/components/products/TechnicalSpecifications'
import { ApplicationsAndIndustries } from '@/components/products/Applications'
import { CaseStudies } from '@/components/products/CaseStudies'
import { ProductDetails } from '@/components/products/ProductDetails'
import { FAQ } from '@/components/FAQ'
import { TypedLocale } from 'payload'
import { Showcase } from '@/blocks/Showcase/Component'
import { Product as ProductType } from '@/payload-types'
import { BlockShowcase } from '@/components/BlockShowcase'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const products = await payload.find({
    collection: 'products',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = products.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
    locale?: TypedLocale
  }>
}

export default async function Product({ params: paramsPromise }: Args) {
  const { slug = '', locale } = await paramsPromise
  const url = '/products/' + slug
  const product = await queryProductBySlug({ slug, locale: locale as TypedLocale })

  if (!product) return <PayloadRedirects url={url} />

  return (
    <main>
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      <ProductHero product={product} />
      <TechnicalSpecifications product={product} />
      <BlockShowcase
        title="Key Features & Benefits"
        description={`Discover the unique advantages of VUP's ${product.name} for your applications.`}
        features={product.keyFeatures}
      />
      <ApplicationsAndIndustries product={product} />
      <CaseStudies product={product} />
      <ProductDetails product={product} />
      <FAQ
        product={product}
        title="Frequently Asked Questions"
        description={`Discover answers to common questions about ${product.name}`}
      />
      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <Showcase
          type="product"
          products={product.relatedProducts as ProductType[]}
          features={[]}
          showCta={false}
          title="Related Products"
          description="Discover other products that complement your needs"
        />
      )}
    </main>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '', locale } = await paramsPromise
  const product = await queryProductBySlug({ slug, locale: locale as TypedLocale })

  return generateMeta({ doc: product })
}

const queryProductBySlug = cache(
  async ({ slug, locale }: { slug: string; locale: TypedLocale }) => {
    const { isEnabled: draft } = await draftMode()

    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'products',
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
