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
import { Search, Filter, Loader, MessageSquare, ArrowRight } from 'lucide-react'
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

  // State for filter options
  const [categoryOptions, setCategoryOptions] = useState<string[]>(['All Categories'])
  const [industryOptions, setIndustryOptions] = useState<string[]>(['All Industries'])
  const [applicationOptions, setApplicationOptions] = useState<string[]>(['All Applications'])

  // State for filtered results
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [totalProducts, setTotalProducts] = useState(0)
  const [error, setError] = useState<string | null>(null)

  const [isPending, startTransition] = useTransition()

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
      }) => {
        setIsLoading(true)
        setError(null)

        try {
          const result = await fetchFilteredProductsAction(criteria)
          setFilteredProducts(result.docs)
          setTotalProducts(result.totalDocs)
        } catch (e: any) {
          console.error('Error fetching products:', e)
          setError(e.message || 'Failed to load products.')
          setFilteredProducts([])
          setTotalProducts(0)
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
    }

    startTransition(() => {
      applyFilters(criteria)
    })

    return () => {
      applyFilters.cancel()
    }
  }, [searchQuery, categoryFilter, industryFilter, applicationFilter, applyFilters])

  // Handlers for immediate state updates
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleCategoryChange = (value: string) => {
    setCategoryFilter(value)
  }

  const handleIndustryChange = (value: string) => {
    setIndustryFilter(value)
  }

  const handleApplicationChange = (value: string) => {
    setApplicationFilter(value)
  }

  return (
    <section className="bg-gray-50 pt-14" id="product-grid">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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
        </div>

        {/* Results Section */}
        <div className="mb-4">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {totalProducts} products
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {isLoading ? (
            <div className="col-span-full py-16 flex justify-center items-center">
              <Loader className="h-10 w-10 text-primary animate-spin" />
            </div>
          ) : error ? (
            <div className="col-span-full py-16 text-center text-red-500">
              <p className="text-xl mb-4">{error}</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('')
                  setCategoryFilter('All Categories')
                  setIndustryFilter('All Industries')
                  setApplicationFilter('All Applications')
                }}
              >
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
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('')
                  setCategoryFilter('All Categories')
                  setIndustryFilter('All Industries')
                  setApplicationFilter('All Applications')
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>

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
