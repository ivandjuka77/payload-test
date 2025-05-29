'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, Loader2 } from 'lucide-react'
import { Input } from '@/components/ui/input'

interface SearchResult {
  id: string
  title: string
  slug: string
  description?: string
  meta?: {
    title?: string
    description?: string
  }
  categories?: any[]
  doc?: {
    relationTo: string
    value: any
  }
}

// Helper function to generate correct URL based on collection
const getSearchResultUrl = (result: SearchResult): string => {
  const collection = result.doc?.relationTo

  switch (collection) {
    case 'posts':
      return `/news/${result.slug}`
    case 'products':
      return `/products/${result.slug}`
    case 'productCategories':
      return `/products/category/${result.slug}`
    case 'industries':
      return `/industries/${result.slug}`
    case 'services':
      return `/services/${result.slug}`
    case 'careers':
      return `/career/${result.slug}`
    case 'pages':
      return `/${result.slug}`
    default:
      return `/search?q=${encodeURIComponent(result.title)}`
  }
}

// Helper function to get collection display name
const getCollectionDisplayName = (collection: string): string => {
  switch (collection) {
    case 'posts':
      return 'News'
    case 'products':
      return 'Product'
    case 'productCategories':
      return 'Category'
    case 'industries':
      return 'Industry'
    case 'services':
      return 'Service'
    case 'careers':
      return 'Career'
    case 'pages':
      return 'Page'
    default:
      return 'Content'
  }
}

interface MobileSearchProps {
  onResultClick: () => void
}

export default function MobileSearch({ onResultClick }: MobileSearchProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)

  // Debounced search effect
  useEffect(() => {
    const searchTimeout = setTimeout(async () => {
      if (searchQuery.trim()) {
        await performSearch(searchQuery.trim())
      } else {
        setSearchResults([])
      }
    }, 300) // 300ms debounce

    return () => clearTimeout(searchTimeout)
  }, [searchQuery])

  const performSearch = async (query: string) => {
    if (!query.trim()) return

    setIsSearching(true)

    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      })

      if (!response.ok) {
        throw new Error('Search request failed')
      }

      const data = await response.json()
      setSearchResults(data.docs || [])
    } catch (error) {
      console.error('Search error:', error)
      setSearchResults([])
    } finally {
      setIsSearching(false)
    }
  }

  const handleResultClick = () => {
    setSearchQuery('')
    setSearchResults([])
    onResultClick()
  }

  return (
    <div className="p-4 border-b border-gray-100">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search..."
          className="pl-10 h-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {searchQuery.trim() && (
        <div className="mt-2 max-h-32 overflow-y-auto">
          {searchResults.length > 0 ? (
            <div className="space-y-1">
              {searchResults.map((result, index) => (
                <Link
                  key={index}
                  href={getSearchResultUrl(result)}
                  className="flex items-center justify-between p-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                  onClick={handleResultClick}
                >
                  <span className="flex-1 truncate">{result.title}</span>
                  {result.doc?.relationTo && (
                    <span className="ml-2 text-xs text-gray-500">
                      {getCollectionDisplayName(result.doc.relationTo)}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          ) : !isSearching ? (
            <div className="p-2 text-sm text-gray-500 text-center">
              <div>No results found</div>
              <Link
                href={`/search?q=${encodeURIComponent(searchQuery)}`}
                className="text-blue-600 hover:text-blue-700 text-xs mt-1 inline-block"
                onClick={handleResultClick}
              >
                Try advanced search →
              </Link>
            </div>
          ) : (
            <div className="p-2 text-sm text-gray-500 text-center">
              <Loader2 className="h-4 w-4 animate-spin mx-auto" />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
