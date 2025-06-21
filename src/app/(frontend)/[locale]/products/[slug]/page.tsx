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
import { getTranslations } from 'next-intl/server'

// Ensure pages are statically generated at build time with no ISR
// export const dynamic = 'force-static'
// export const dynamicParams = false
// export const revalidate = false

export async function generateStaticParams() {
  try {
    const payload = await getPayload({ config: configPromise })

    const products = await payload.find({
      collection: 'products',
      draft: false,
      overrideAccess: false,
      pagination: false,
      depth: 0, // Minimize data fetched since we only need slugs
      select: {
        slug: true,
      },
    })

    const locales = ['', 'sk', 'jp']

    const params = products.docs.flatMap(({ slug }) =>
      locales.map((locale) => ({
        locale,
        slug,
      })),
    )

    console.log(`[generateStaticParams] Successfully generated ${params.length} static paths`)
    console.log(`Products: ${products.docs.length}, Locales: ${locales.length}`)

    return params
  } catch (error) {
    console.error('[generateStaticParams] Error generating static paths:', error)
    throw error
  }
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

  const t = await getTranslations('product')

  if (!product) return <PayloadRedirects url={url} />

  return (
    <main>
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      <ProductHero
        product={product}
        badge={t('hero.badge')}
        chemicalName={t('hero.chemicalName')}
        molecularFormula={t('hero.molecularFormula')}
        casNumber={t('hero.casNumber')}
        cta={t('hero.requestQuote')}
      />

      {product.technicalSpecifications && (
        <TechnicalSpecifications
          product={product}
          title={t('sections.technicalSpecifications')}
          description={t('descriptions.technicalSpecifications', { productName: product.name })}
          table={{
            chemicalIdentity: {
              title: t('tables.chemicalIdentity.title'),
              chemicalName: t('tables.chemicalIdentity.chemicalName'),
              synonyms: t('tables.chemicalIdentity.synonyms'),
              casNumber: t('tables.chemicalIdentity.casNumber'),
              ecNumber: t('tables.chemicalIdentity.ecNumber'),
              molecularFormula: t('tables.chemicalIdentity.molecularFormula'),
              molecularWeight: t('tables.chemicalIdentity.molecularWeight'),
            },
            specifications: {
              title: t('tables.specifications.title'),
              property: t('tables.specifications.property'),
              specification: t('tables.specifications.specification'),
              appearance: t('tables.specifications.appearance'),
              purity: t('tables.specifications.purity'),
              acidValue: t('tables.specifications.acidValue'),
              hydroxylValue: t('tables.specifications.hydroxylValue'),
              waterContent: t('tables.specifications.waterContent'),
              ashContent: t('tables.specifications.ashContent'),
              note: t('tables.specifications.note'),
            },
          }}
        />
      )}

      {product.keyFeatures && product.keyFeatures.length > 0 && (
        <BlockShowcase
          title={t('sections.keyFeatures')}
          description={t('descriptions.keyFeatures', { productName: product.name })}
          features={product.keyFeatures}
        />
      )}

      {product.applications && product.applications.length > 0 && (
        <ApplicationsAndIndustries
          product={product}
          title={t('sections.applications')}
          description={t('descriptions.applications', { productName: product.name })}
        />
      )}

      {product.caseStudies && product.caseStudies.length > 0 && (
        <CaseStudies
          product={product}
          title={t('caseStudies.title')}
          viewAll={t('caseStudies.viewAll')}
          readStudy={t('caseStudies.readStudy')}
          application={t('caseStudies.application')}
        />
      )}

      <ProductDetails
        product={product}
        title={t('sections.productDetails')}
        description={t('descriptions.productDetails', { productName: product.name })}
        productInfo={{
          title: t('productInfo.title'),
          description: t('productInfo.description'),
          chemicalName: t('tables.chemicalIdentity.chemicalName'),
          synonyms: t('tables.chemicalIdentity.synonyms'),
          casNumber: t('tables.chemicalIdentity.casNumber'),
          ecNumber: t('tables.chemicalIdentity.ecNumber'),
        }}
        documents={{
          title: t('productInfo.documents.title'),
          description: t('productInfo.documents.description'),
          tds: {
            title: t('productInfo.documents.tds.title'),
            description: t('productInfo.documents.tds.description', { productName: product.name }),
          },
          sds: {
            title: t('productInfo.documents.sds.title'),
            description: t('productInfo.documents.sds.description', { productName: product.name }),
          },
        }}
        cta={{
          title: t('productInfo.cta.title'),
          button: t('productInfo.cta.button'),
        }}
      />

      {product.faq && product.faq.length > 0 && (
        <FAQ
          product={product}
          title={t('sections.faq')}
          description={t('descriptions.faq', { productName: product.name })}
        />
      )}

      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <Showcase
          type="product"
          products={product.relatedProducts as ProductType[]}
          showCta={false}
          title={t('sections.relatedProducts')}
          description={t('descriptions.relatedProducts', { productName: product.name })}
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
