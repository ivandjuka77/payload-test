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
  locale?: 'en' | 'sk' | 'jp' | 'all'
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

interface ProductInquiryData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  company: string
  jobTitle?: string
  country?: string
  inquiryType: string
  quantity?: string
  message: string
  productId: number
  productName: string
}

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface CareerApplicationData {
  fullName: string
  email: string
  phone: string
  coverLetter?: string
  gdprConsent: boolean
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
    locale = 'en',
  } = criteria

  const payload = await getPayload({ config: configPromise })

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query: any = {
      collection: 'products',
      sort: '_order',
      draft: false,
      overrideAccess: false,
      depth: 2,
      page,
      limit,
      locale,
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
        sort: '_order',
        draft: false,
        overrideAccess: false,
        locale,
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
        locale,
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
            locale,
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

export async function fetchFilterOptionsAction(
  locale: 'en' | 'sk' | 'jp' | 'all' = 'en',
): Promise<FilterOptions> {
  const payload = await getPayload({ config: configPromise })

  try {
    // Fetch all product categories
    const categories = await payload.find({
      collection: 'productCategories',
      sort: '_order',
      draft: false,
      overrideAccess: false,
      locale,
      limit: 1000, // Ensure we get all categories
    })

    // Fetch all industries
    const industries = await payload.find({
      collection: 'industries',
      draft: false,
      overrideAccess: false,
      locale,
      limit: 1000, // Ensure we get all industries
    })

    // Fetch unique applications from products
    const products = await payload.find({
      collection: 'products',
      sort: '_order',
      draft: false,
      overrideAccess: false,
      locale,
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

export async function submitProductInquiry(
  inquiryData: ProductInquiryData,
): Promise<{ success: boolean; message: string }> {
  const payload = await getPayload({ config: configPromise })

  try {
    // Find the product inquiry form (should exist from seeding)
    const productInquiryForm = await payload.find({
      collection: 'forms',
      where: {
        title: { equals: 'Product Inquiry Form' },
      },
    })

    if (productInquiryForm.docs.length === 0) {
      throw new Error('Product Inquiry Form not found. Please ensure the database has been seeded.')
    }

    const formId = productInquiryForm.docs[0].id

    // Create the form submission data
    const submissionData = [
      { field: 'firstName', value: inquiryData.firstName },
      { field: 'lastName', value: inquiryData.lastName },
      { field: 'email', value: inquiryData.email },
      { field: 'company', value: inquiryData.company },
      { field: 'inquiryType', value: inquiryData.inquiryType },
      { field: 'message', value: inquiryData.message },
      { field: 'productId', value: inquiryData.productId.toString() },
      { field: 'productName', value: inquiryData.productName },
    ]

    // Add optional fields if they exist
    if (inquiryData.phone) {
      submissionData.push({ field: 'phone', value: inquiryData.phone })
    }
    if (inquiryData.jobTitle) {
      submissionData.push({ field: 'jobTitle', value: inquiryData.jobTitle })
    }
    if (inquiryData.country) {
      submissionData.push({ field: 'country', value: inquiryData.country })
    }
    if (inquiryData.quantity) {
      submissionData.push({ field: 'quantity', value: inquiryData.quantity })
    }

    // Create form submission with the existing form
    await payload.create({
      collection: 'form-submissions',
      data: {
        form: formId,
        submissionData,
      },
    })

    return {
      success: true,
      message: 'Product inquiry submitted successfully. We will get back to you within 24 hours.',
    }
  } catch (error) {
    console.error('Error submitting product inquiry:', error)
    return {
      success: false,
      message: 'Failed to submit inquiry. Please try again or contact us directly.',
    }
  }
}

export async function submitContactForm(
  contactData: ContactFormData,
): Promise<{ success: boolean; message: string }> {
  const payload = await getPayload({ config: configPromise })

  try {
    // Find the contact form (should exist from seeding)
    const contactForm = await payload.find({
      collection: 'forms',
      where: {
        title: { equals: 'Contact Form' },
      },
    })

    if (contactForm.docs.length === 0) {
      throw new Error('Contact Form not found. Please ensure the database has been seeded.')
    }

    const formId = contactForm.docs[0].id

    // Create the form submission data
    const submissionData = [
      { field: 'name', value: contactData.name },
      { field: 'email', value: contactData.email },
      { field: 'subject', value: contactData.subject },
      { field: 'message', value: contactData.message },
    ]

    // Create the form submission
    await payload.create({
      collection: 'form-submissions',
      data: {
        form: formId,
        submissionData,
      },
    })

    return {
      success: true,
      message: 'Contact form submitted successfully! We will get back to you within 24 hours.',
    }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return {
      success: false,
      message:
        'There was an error submitting your message. Please try again or contact us directly.',
    }
  }
}

export async function submitCareerApplication(
  applicationData: CareerApplicationData,
): Promise<{ success: boolean; message: string }> {
  const payload = await getPayload({ config: configPromise })

  try {
    // Find the career application form (should exist from seeding)
    const careerForm = await payload.find({
      collection: 'forms',
      where: {
        title: { equals: 'Career Application Form' },
      },
    })

    if (careerForm.docs.length === 0) {
      throw new Error(
        'Career Application Form not found. Please ensure the database has been seeded.',
      )
    }

    const formId = careerForm.docs[0].id

    // Create the form submission data
    const submissionData = [
      { field: 'fullName', value: applicationData.fullName },
      { field: 'email', value: applicationData.email },
      { field: 'phone', value: applicationData.phone },
      { field: 'gdprConsent', value: applicationData.gdprConsent.toString() },
    ]

    // Add optional cover letter if provided
    if (applicationData.coverLetter) {
      submissionData.push({ field: 'coverLetter', value: applicationData.coverLetter })
    }

    // Create the form submission
    await payload.create({
      collection: 'form-submissions',
      data: {
        form: formId,
        submissionData,
      },
    })

    return {
      success: true,
      message: 'Application submitted successfully! We will review it and get back to you soon.',
    }
  } catch (error) {
    console.error('Error submitting career application:', error)
    return {
      success: false,
      message:
        'There was an error submitting your application. Please try again or contact us directly.',
    }
  }
}
