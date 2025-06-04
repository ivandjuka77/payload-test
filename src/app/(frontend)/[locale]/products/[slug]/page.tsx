import type { Metadata } from 'next'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@/payload.config'
import { getPayload } from 'payload'
import { cache } from 'react'
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
import { getInitializedPayload } from '@/utilities/payloadClient'

// Force static generation without revalidation since products rarely change
export const dynamic = 'force-static'
export const dynamicParams = false // Return 404 for non-existent product pages instead of SSR fallback

export async function generateStaticParams() {
  console.log('[generateStaticParams] Attempting to get Payload client...')
  const payload = await getInitializedPayload()
  console.log('[generateStaticParams] Payload client obtained. Fetching products for params...')
  const products = await payload.find({
    collection: 'products',
    draft: false,
    limit: 50,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })
  console.log(`[generateStaticParams] Found ${products.docs.length} products for param generation.`)

  const locales = ['', 'sk', 'jp']
  const params = products.docs.flatMap(({ slug }) => {
    return locales.map((locale) => ({
      locale,
      slug,
    }))
  })

  console.log(
    `[generateStaticParams] Total params generated: ${params.length}. Products: ${products.docs.length}, Locales: ${locales.length}`,
  )
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
      {product.technicalSpecifications && <TechnicalSpecifications product={product} />}
      {product.keyFeatures && product.keyFeatures.length > 0 && (
        <BlockShowcase
          title="Key Features & Benefits"
          description={`Discover the unique advantages of VUP's ${product.name} for your applications.`}
          features={product.keyFeatures}
        />
      )}
      {product.applications && product.applications.length > 0 && (
        <ApplicationsAndIndustries product={product} />
      )}
      {product.caseStudies && product.caseStudies.length > 0 && <CaseStudies product={product} />}
      <ProductDetails product={product} />
      {product.faq && product.faq.length > 0 && (
        <FAQ
          product={product}
          title="Frequently Asked Questions"
          description={`Discover answers to common questions about ${product.name}`}
        />
      )}
      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <Showcase
          type="product"
          products={product.relatedProducts as ProductType[]}
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

// Optimized query function for static generation
const queryProductBySlug = cache(
  async ({ slug, locale }: { slug: string; locale: TypedLocale }) => {
    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'products',
      draft: false,
      limit: 1,
      overrideAccess: false,
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
