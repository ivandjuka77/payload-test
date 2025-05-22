'use server'

import { Product } from '@/payload-types' // Ensure this path is correct
import { getPayload } from 'payload'
import configPromise from '@/payload.config' // Ensure this path is correct

interface FilterCriteria {
  searchQuery?: string
  categoryFilter?: string
  industryFilter?: string // Included, though not used in current query logic
  applicationFilter?: string
}

interface FilterOptions {
  categories: string[]
  industries: string[]
  applications: string[]
}

export async function fetchFilteredProductsAction(
  criteria: FilterCriteria,
): Promise<{ docs: Product[]; totalDocs: number }> {
  const { searchQuery, categoryFilter, industryFilter, applicationFilter } = criteria
  const payload = await getPayload({ config: configPromise })

  // Base query structure
  const query: any = {
    collection: 'products',
    draft: false,
    overrideAccess: false,
    depth: 2, // Increase depth to get related data
    where: {},
  }

  // Add search query filter (searches 'name' and 'description' fields)
  if (searchQuery) {
    query.where.or = [
      { name: { contains: searchQuery } },
      { description: { contains: searchQuery } },
    ]
  }

  // Add category filter - using exact match
  if (categoryFilter && categoryFilter !== 'All Categories') {
    // First get the exact category by name
    const category = await payload.find({
      collection: 'productCategories',
      draft: false,
      overrideAccess: false,
      where: {
        name: {
          equals: categoryFilter,
        },
      },
    })

    if (category.docs.length > 0) {
      // Then find products that have this exact category ID in their chemicalFamily
      query.where.chemicalFamily = {
        equals: category.docs[0].id,
      }
    }
  }

  // Add industry filter - using exact match
  if (industryFilter && industryFilter !== 'All Industries') {
    const industry = await payload.find({
      collection: 'industries',
      draft: false,
      overrideAccess: false,
      where: {
        name: {
          equals: industryFilter,
        },
      },
    })

    if (industry.docs.length > 0) {
      // Find case studies that reference this industry
      const caseStudies = await payload.find({
        collection: 'caseStudies',
        draft: false,
        overrideAccess: false,
        where: {
          industry: {
            equals: industry.docs[0].id,
          },
        },
      })

      // Get products that are referenced in these case studies
      if (caseStudies.docs.length > 0) {
        query.where.or = query.where.or || []
        query.where.or.push({
          id: {
            in: caseStudies.docs.flatMap((cs) => cs.relatedProducts || []),
          },
        })
      }
    }
  }

  // Add application filter - using exact match
  if (applicationFilter && applicationFilter !== 'All Applications') {
    query.where.applications = {
      application: {
        equals: applicationFilter,
      },
    }
  }

  try {
    const result = await payload.find(query)
    return {
      docs: result.docs as Product[],
      totalDocs: result.totalDocs,
    }
  } catch (error) {
    console.error('Error fetching products in server action:', error)
    throw new Error('Failed to fetch products. Please try again.')
  }
}

export async function fetchFilterOptionsAction(): Promise<FilterOptions> {
  const payload = await getPayload({ config: configPromise })

  try {
    // Fetch all products
    const products = await payload.find({
      collection: 'products',
      draft: false,
      overrideAccess: false,
    })

    // Fetch all product categories
    const categories = await payload.find({
      collection: 'productCategories',
      draft: false,
      overrideAccess: false,
    })

    // Fetch all industries
    const industries = await payload.find({
      collection: 'industries',
      draft: false,
      overrideAccess: false,
    })

    // Extract unique applications from products
    const applications = new Set<string>()
    products.docs.forEach((product) => {
      product.applications?.forEach((app) => {
        if (app.application) {
          applications.add(app.application)
        }
      })
    })

    return {
      categories: ['All Categories', ...categories.docs.map((cat) => cat.name)],
      industries: ['All Industries', ...industries.docs.map((ind) => ind.name)],
      applications: ['All Applications', ...Array.from(applications)],
    }
  } catch (error) {
    console.error('Error fetching filter options:', error)
    throw new Error('Failed to fetch filter options. Please try again.')
  }
}
