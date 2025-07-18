'use server'

import { CaseStudy, Industry, Product, ProductCategory } from '@/payload-types'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'

interface FilterCriteria {
  searchQuery?: string
  categoryFilter?: string
  industryFilter?: string
  applicationFilter?: string
  page?: number
  limit?: number
}

interface PaginatedResult {
  docs: Product[]
  totalDocs: number
  totalPages: number
  currentPage: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

interface FilterOptions {
  categories: string[]
  industries: string[]
  applications: string[]
}

export async function fetchFilteredProductsAction(
  criteria: FilterCriteria,
): Promise<PaginatedResult> {
  const {
    searchQuery,
    categoryFilter,
    industryFilter,
    applicationFilter,
    page = 1,
    limit = 9,
  } = criteria

  const payload = await getPayload({ config: configPromise })

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query: any = {
      collection: 'products',
      draft: false,
      overrideAccess: false,
      depth: 2,
      page,
      limit,
      where: {
        and: [],
      },
    }

    // Add search query filter
    if (searchQuery && searchQuery.trim()) {
      query.where.and.push({
        or: [
          { name: { contains: searchQuery.trim() } },
          { description: { contains: searchQuery.trim() } },
        ],
      })
    }

    // Add category filter
    if (categoryFilter && categoryFilter !== 'All Categories') {
      const category = await payload.find({
        collection: 'productCategories',
        draft: false,
        overrideAccess: false,
        where: {
          name: { equals: categoryFilter },
        },
      })

      if (category.docs.length > 0) {
        query.where.and.push({
          chemicalFamily: { equals: category.docs[0].id },
        })
      }
    }

    // Add application filter
    if (applicationFilter && applicationFilter !== 'All Applications') {
      query.where.and.push({
        'applications.application': { equals: applicationFilter },
      })
    }

    // Handle industry filter - this is more complex as it involves relationships
    if (industryFilter && industryFilter !== 'All Industries') {
      const industry = await payload.find({
        collection: 'industries',
        draft: false,
        overrideAccess: false,
        depth: 1,
        where: {
          name: { equals: industryFilter },
        },
      })

      if (industry.docs.length > 0) {
        const selectedIndustry = industry.docs[0]

        // Try to get products directly from industry keyProducts first
        if (selectedIndustry.keyProducts && selectedIndustry.keyProducts.length > 0) {
          const keyProductIds = selectedIndustry.keyProducts.map((product: Product | number) =>
            typeof product === 'number' ? product : product.id,
          )

          query.where.and.push({
            id: { in: keyProductIds },
          })
        } else {
          // Fallback: get products through case studies
          const caseStudies = await payload.find({
            collection: 'caseStudies',
            draft: false,
            overrideAccess: false,
            where: {
              industry: { equals: selectedIndustry.id },
            },
          })

          if (caseStudies.docs.length > 0) {
            const relatedProductIds = caseStudies.docs.flatMap(
              (cs: CaseStudy) => cs.relatedProducts || [],
            )

            if (relatedProductIds.length > 0) {
              query.where.and.push({
                id: { in: relatedProductIds },
              })
            } else {
              // No products found for this industry
              return {
                docs: [],
                totalDocs: 0,
                totalPages: 0,
                currentPage: page,
                hasNextPage: false,
                hasPrevPage: false,
              }
            }
          } else {
            // No case studies found for this industry
            return {
              docs: [],
              totalDocs: 0,
              totalPages: 0,
              currentPage: page,
              hasNextPage: false,
              hasPrevPage: false,
            }
          }
        }
      }
    }

    // If no filters are applied, remove the empty and array
    if (query.where.and.length === 0) {
      delete query.where.and
      query.where = {}
    }

    const result = await payload.find(query)

    return {
      docs: result.docs as Product[],
      totalDocs: result.totalDocs,
      totalPages: result.totalPages,
      currentPage: result.page || page,
      hasNextPage: result.hasNextPage || false,
      hasPrevPage: result.hasPrevPage || false,
    }
  } catch (error) {
    console.error('Error fetching products:', error)
    throw new Error('Failed to fetch products. Please try again.')
  }
}

export async function fetchFilterOptionsAction(): Promise<FilterOptions> {
  const payload = await getPayload({ config: configPromise })

  try {
    // Fetch all product categories
    const categories = await payload.find({
      collection: 'productCategories',
      draft: false,
      overrideAccess: false,
      limit: 1000, // Ensure we get all categories
    })

    // Fetch all industries
    const industries = await payload.find({
      collection: 'industries',
      draft: false,
      overrideAccess: false,
      limit: 1000, // Ensure we get all industries
    })

    // Fetch unique applications from products
    const products = await payload.find({
      collection: 'products',
      draft: false,
      overrideAccess: false,
      limit: 1000, // Get more products to ensure we capture all applications
    })

    const applications = new Set<string>()
    products.docs.forEach((product: Product) => {
      product.applications?.forEach((app: NonNullable<Product['applications']>[number]) => {
        if (app.application && typeof app.application === 'string') {
          applications.add(app.application)
        }
      })
    })

    return {
      categories: [
        'All Categories',
        ...categories.docs.map((cat: ProductCategory) => cat.name).filter(Boolean),
      ],
      industries: [
        'All Industries',
        ...industries.docs.map((ind: Industry) => ind.name).filter(Boolean),
      ],
      applications: ['All Applications', ...Array.from(applications).sort()],
    }
  } catch (error) {
    console.error('Error fetching filter options:', error)
    throw new Error('Failed to fetch filter options. Please try again.')
  }
}
