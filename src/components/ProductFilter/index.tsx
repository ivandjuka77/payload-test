'use client'

import { Product, ProductCategory } from '@/payload-types'
import { useEffect, useState } from 'react'
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
import { Search, Filter, Loader } from 'lucide-react'

const categoryOptions = ['All Categories', 'Organic Chemicals', 'Inorganic Chemicals', 'Solvents']
const industryOptions = ['All Industries', 'Pharmaceutical', 'Agriculture', 'Manufacturing']
const applicationOptions = ['All Applications', 'Research', 'Production', 'Analysis']

export default function ProductFilter({ products }: { products: Product[] }) {
  // State for filters
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('All Categories')
  const [industryFilter, setIndustryFilter] = useState('All Industries')
  const [applicationFilter, setApplicationFilter] = useState('All Applications')
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Apply filters when any filter changes
  useEffect(() => {
    setIsLoading(true)

    const filtered = products.filter((product) => {
      // Search query filter - check name and description
      if (
        searchQuery &&
        !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !product.description?.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false
      }

      // Category filter
      if (
        categoryFilter !== 'All Categories' &&
        !product.chemicalFamily?.includes(categoryFilter as unknown as ProductCategory)
      ) {
        return false
      }

      //   // Industry filter
      //   if (industryFilter !== 'All Industries' && !product.applications?.includes(industryFilter)) {
      //     return false
      //   }

      // Application filter
      if (
        applicationFilter !== 'All Applications' &&
        !product.applications?.some((app) => app.application === applicationFilter)
      ) {
        return false
      }

      return true
    })

    setFilteredProducts(filtered)
    setIsLoading(false)
  }, [searchQuery, categoryFilter, industryFilter, applicationFilter, products])

  return (
    <section
      className="bg-gradient-to-b from-gray-50 via-primary/20 to-primary pt-14"
      id="product-grid"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-8">
          <h2 className="text-4xl font-bold font-primary">Product Catalog</h2>

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
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>

          {/* Category Filter */}
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
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

          {/* Industry Filter */}
          <Select value={industryFilter} onValueChange={setIndustryFilter}>
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

          {/* Application Filter */}
          <Select value={applicationFilter} onValueChange={setApplicationFilter}>
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
        </div>

        {/* Results Section */}
        <div className="mb-4">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {isLoading ? (
            <div className="col-span-full py-16 flex justify-center items-center">
              <Loader className="h-10 w-10 text-primary animate-spin" />
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
      </div>
    </section>
  )
}
