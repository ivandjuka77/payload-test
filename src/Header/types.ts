import type { Industry, ProductCategory, Service } from '@/payload-types'

// Only what the navigation renders. Header data is serialized into every page, so
// full documents (challenge texts, related products, media sizes) add ~1MB to each one.
export type HeaderIndustry = Pick<
  Industry,
  'id' | 'name' | 'slug' | 'description' | 'featuredImage'
> & {
  challenges?: { title: string; challengeLink?: string | null; id?: string | null }[] | null
}

export type HeaderProductCategory = Pick<ProductCategory, 'id' | 'name' | 'slug' | 'description'>

export type HeaderService = Pick<Service, 'id' | 'title' | 'slug' | 'description' | 'features'>
