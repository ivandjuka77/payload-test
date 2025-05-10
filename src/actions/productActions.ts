'use server'

import { Product } from '@/payload-types' // Ensure this path is correct
import { getPayload } from 'payload'
import configPromise from '@payload-config' // Ensure this path is correct

interface FilterCriteria {
  searchQuery?: string
  categoryFilter?: string
  industryFilter?: string // Included, though not used in current query logic
  applicationFilter?: string
}

export async function fetchFilteredProductsAction(
  criteria: FilterCriteria,
): Promise<{ docs: Product[]; totalDocs: number }> {
  const { searchQuery, categoryFilter, applicationFilter } = criteria
  const payload = await getPayload({ config: configPromise })

  // Base query structure
  const query: any = {
    collection: 'products',
    where: {},
    // Consider adding limit/pagination here if your dataset is large
    // limit: 10,
    // page: 1,
  }

  // Add search query filter (searches 'name' and 'description' fields)
  if (searchQuery) {
    query.where.or = [{ name: { like: searchQuery } }, { description: { like: searchQuery } }]
  }

  // Add category filter (assumes 'chemicalFamily' field on product)
  if (categoryFilter && categoryFilter !== 'All Categories') {
    query.where.chemicalFamily = { equals: categoryFilter }
  }

  // Add application filter
  // Assuming 'application' is a direct text/select field on the Product collection.
  // If your field is named differently or is nested (e.g., 'applications.type'), adjust 'application' accordingly.
  if (applicationFilter && applicationFilter !== 'All Applications') {
    query.where.application = { equals: applicationFilter }
  }

  // Note: industryFilter is received but not currently used in this query logic,
  // matching the behavior of your original component.
  // If you need to filter by industry, add the relevant query.where clause here.
  // Example: if (industryFilter && industryFilter !== 'All Industries') {
  //   query.where.industry = { equals: industryFilter };
  // }

  try {
    const result = await payload.find(query)
    return {
      docs: result.docs as Product[],
      totalDocs: result.totalDocs,
    }
  } catch (error) {
    console.error('Error fetching products in server action:', error)
    // Consider how you want to handle errors, e.g., rethrow or return a specific error structure
    throw new Error('Failed to fetch products. Please try again.')
  }
}
