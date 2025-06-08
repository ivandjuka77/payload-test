'use client'

import { Product, ProductFilterBlock } from '@/payload-types'
import { useEffect, useState, useTransition, useCallback } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/ProductCard'
import {
  Search,
  Filter,
  Loader,
  MessageSquare,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import Link from 'next/link'
import { fetchFilteredProductsAction, fetchFilterOptionsAction } from '@/actions/productActions'
import debounce from 'lodash/debounce'

export const ProductFilter: React.FC<ProductFilterBlock> = ({
  title,
  description,
  enabledFilters,
  showCta,
  cta,
}) => {
  // State for immediate UI updates
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('All Categories')
  const [industryFilter, setIndustryFilter] = useState('All Industries')
  const [applicationFilter, setApplicationFilter] = useState('All Applications')
  const [currentPage, setCurrentPage] = useState(1)

  // State for filter options
  const [categoryOptions, setCategoryOptions] = useState<string[]>(['All Categories'])
  const [industryOptions, setIndustryOptions] = useState<string[]>(['All Industries'])
  const [applicationOptions, setApplicationOptions] = useState<string[]>(['All Applications'])

  // State for filtered results
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [totalProducts, setTotalProducts] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [hasNextPage, setHasNextPage] = useState(false)
  const [hasPrevPage, setHasPrevPage] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [isPending, startTransition] = useTransition()

  // Constants
  const PRODUCTS_PER_PAGE = 9

  // Fetch filter options on component mount
  useEffect(() => {
    const loadFilterOptions = async () => {
      try {
        const options = await fetchFilterOptionsAction()
        setCategoryOptions(options.categories)
        setIndustryOptions(options.industries)
        setApplicationOptions(options.applications)
      } catch (error) {
        console.error('Error loading filter options:', error)
        setError('Failed to load filter options.')
      }
    }

    loadFilterOptions()
  }, [])

  // Debounced function to apply filters
  const applyFilters = useCallback(
    debounce(
      async (criteria: {
        searchQuery: string
        categoryFilter: string
        industryFilter: string
        applicationFilter: string
        page: number
      }) => {
        setIsLoading(true)
        setError(null)

        try {
          const result = await fetchFilteredProductsAction({
            ...criteria,
            limit: PRODUCTS_PER_PAGE,
          })
          setFilteredProducts(result.docs)
          setTotalProducts(result.totalDocs)
          setTotalPages(result.totalPages)
          setHasNextPage(result.hasNextPage)
          setHasPrevPage(result.hasPrevPage)
        } catch (error) {
          console.error('Error fetching products:', error)
          setError(error instanceof Error ? error.message : 'Failed to load products.')
          setFilteredProducts([])
          setTotalProducts(0)
          setTotalPages(0)
          setHasNextPage(false)
          setHasPrevPage(false)
        } finally {
          setIsLoading(false)
        }
      },
      300,
    ),
    [],
  )

  // Effect to trigger filter application
  useEffect(() => {
    const criteria = {
      searchQuery,
      categoryFilter,
      industryFilter,
      applicationFilter,
      page: currentPage,
    }

    startTransition(() => {
      applyFilters(criteria)
    })

    return () => {
      applyFilters.cancel()
    }
  }, [searchQuery, categoryFilter, industryFilter, applicationFilter, currentPage, applyFilters])

  // Handlers for immediate state updates
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1) // Reset to first page when search changes
  }

  const handleCategoryChange = (value: string) => {
    setCategoryFilter(value)
    setCurrentPage(1) // Reset to first page when filter changes
  }

  const handleIndustryChange = (value: string) => {
    setIndustryFilter(value)
    setCurrentPage(1) // Reset to first page when filter changes
  }

  const handleApplicationChange = (value: string) => {
    setApplicationFilter(value)
    setCurrentPage(1) // Reset to first page when filter changes
  }

  // Reset filters function
  const resetFilters = () => {
    setSearchQuery('')
    setCategoryFilter('All Categories')
    setIndustryFilter('All Industries')
    setApplicationFilter('All Applications')
    setCurrentPage(1)
  }

  // Pagination handlers
  const handlePreviousPage = () => {
    if (hasPrevPage) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (hasNextPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  // Check if any filters are active
  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    categoryFilter !== 'All Categories' ||
    industryFilter !== 'All Industries' ||
    applicationFilter !== 'All Applications'

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5
    const halfVisible = Math.floor(maxVisiblePages / 2)

    let startPage = Math.max(1, currentPage - halfVisible)
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    // Adjust start page if we're near the end
    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    return pages
  }

  return (
    <section className="bg-gray-50 pt-14 px-4 sm:px-6 lg:px-0" id="product-grid">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-8">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-4xl font-bold font-primary">{title}</h2>
            <p className="text-lg text-muted-foreground max-w-[700px] font-secondary">
              {description}
            </p>
          </div>

          <div className="flex items-center">
            <Filter className="mr-2 h-5 w-5 text-gray-500" />
            <span className="text-gray-700 font-medium mr-4">Filters:</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] gap-4 mb-8">
          {/* Search Input */}
          <div className="relative">
            <Input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 w-full"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>

          {/* Category Filter */}
          {enabledFilters?.includes('category') && (
            <Select value={categoryFilter} onValueChange={handleCategoryChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                {categoryOptions.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          {/* Industry Filter */}
          {enabledFilters?.includes('industry') && (
            <Select value={industryFilter} onValueChange={handleIndustryChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Industries" />
              </SelectTrigger>
              <SelectContent>
                {industryOptions.map((industry) => (
                  <SelectItem key={industry} value={industry}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          {/* Application Filter */}
          {enabledFilters?.includes('application') && (
            <Select value={applicationFilter} onValueChange={handleApplicationChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Applications" />
              </SelectTrigger>
              <SelectContent>
                {applicationOptions.map((application) => (
                  <SelectItem key={application} value={application}>
                    {application}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          {/* Reset Filters Button */}
          <div className="flex items-center">
            <Button
              variant="outline"
              onClick={resetFilters}
              disabled={!hasActiveFilters}
              className="flex items-center gap-2 h-10 px-4 whitespace-nowrap"
            >
              <X className="h-4 w-4" />
              Reset Filters
            </Button>
          </div>
        </div>

        {/* Results Section */}
        <div className="mb-4 flex justify-between items-center">
          <p className="text-gray-600">
            Showing {Math.min((currentPage - 1) * PRODUCTS_PER_PAGE + 1, totalProducts)}-
            {Math.min(currentPage * PRODUCTS_PER_PAGE, totalProducts)} of {totalProducts} products
          </p>
          {totalPages > 1 && (
            <p className="text-gray-600">
              Page {currentPage} of {totalPages}
            </p>
          )}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {isLoading ? (
            <div className="col-span-full py-16 flex justify-center items-center">
              <Loader className="h-10 w-10 text-primary animate-spin" />
            </div>
          ) : error ? (
            <div className="col-span-full py-16 text-center text-red-500">
              <p className="text-xl mb-4">{error}</p>
              <Button variant="outline" onClick={resetFilters}>
                Try Clearing Filters
              </Button>
            </div>
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard variant="compact" key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full py-16 text-center">
              <p className="text-xl text-gray-500 mb-4">No products match your current filters.</p>
              <Button variant="outline" onClick={resetFilters}>
                Clear All Filters
              </Button>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && !isLoading && (
          <div className="flex justify-center items-center gap-x-4 pb-16">
            {/* Previous Button */}
            <Button
              variant="outline"
              onClick={handlePreviousPage}
              disabled={!hasPrevPage}
              className="flex items-center gap-1"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Page Numbers */}
            <div className="flex gap-1">
              {getPageNumbers().map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? 'default' : 'outline'}
                  onClick={() => handlePageChange(page)}
                  className="w-10 h-10 p-0"
                >
                  {page}
                </Button>
              ))}
            </div>

            {/* Next Button */}
            <Button
              variant="outline"
              onClick={handleNextPage}
              disabled={!hasNextPage}
              className="flex items-center gap-1"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* CTA Section */}
        {showCta && cta && (
          <section className="bg-primary pb-16">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center p-2 rounded-full bg-primary/10 text-primary mb-6">
                  <MessageSquare className="h-6 w-6" />
                </div>

                <h2 className="text-3xl md:text-4xl text-white font-bold font-primary mb-4">
                  {cta.title}
                </h2>

                <p className="text-lg text-white font-secondary mb-8 max-w-2xl mx-auto">
                  {cta.description}
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  {cta.links?.map((link) => (
                    <Button asChild key={link.id} className="py-6 px-8 text-base font-medium group">
                      <Link href={link.link.url || ''} className="flex items-center">
                        {link.link.label}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </section>
  )
}
