'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, X, Loader2, FlaskConical, Factory, Atom, LeafIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useLocale } from 'next-intl'

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

interface SearchDialogProps {
  children: React.ReactNode
}

export default function SearchDialog({ children }: SearchDialogProps) {
  const [isSearchDialogOpen, setIsSearchDialogOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [searchError, setSearchError] = useState<string | null>(null)

  const locale = useLocale()

  // Debounced search effect
  useEffect(() => {
    const searchTimeout = setTimeout(async () => {
      if (searchQuery.trim()) {
        await performSearch(searchQuery.trim())
      } else {
        setSearchResults([])
        setSearchError(null)
      }
    }, 300) // 300ms debounce

    return () => clearTimeout(searchTimeout)
  }, [searchQuery])

  const performSearch = async (query: string) => {
    if (!query.trim()) return

    setIsSearching(true)
    setSearchError(null)

    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, locale }),
      })

      if (!response.ok) {
        throw new Error('Search request failed')
      }

      const data = await response.json()
      setSearchResults(data.docs || [])
    } catch (error) {
      console.error('Search error:', error)
      setSearchError('Failed to search. Please try again.')
      setSearchResults([])
    } finally {
      setIsSearching(false)
    }
  }

  // Quick links for search dialog when no query is entered
  const quickLinks = [
    { name: 'Products', href: '/products', icon: FlaskConical },
    { name: 'Industries', href: '/industries', icon: Factory },
    { name: 'Research', href: '/research', icon: Atom },
    { name: 'Sustainability', href: '/sustainability', icon: LeafIcon },
    { name: 'Services', href: '/services', icon: FlaskConical },
  ]

  // Reset search when dialog closes
  const handleDialogClose = (open: boolean) => {
    setIsSearchDialogOpen(open)
    if (!open) {
      setSearchQuery('')
      setSearchResults([])
      setSearchError(null)
    }
  }

  return (
    <Dialog open={isSearchDialogOpen} onOpenChange={handleDialogClose}>
      <DialogTrigger className="block lg:hidden xl:block" asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-[90%] mx-auto rounded-md sm:max-w-[550px] p-0">
        <div className="flex flex-col h-[450px]">
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 text-gray-500" />
            <Input
              className="flex h-12 w-full ring-0 bg-transparent py-3 text-sm outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50 border-0 focus-visible:ring-0 focus:ring-0 focus:outline-none focus-visible:outline-none focus:border-0 focus-visible:border-0 shadow-none"
              placeholder="Search products, industries, services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              style={{ boxShadow: 'none' }}
            />
            <div className="flex items-center gap-1">
              {isSearching && <Loader2 className="h-4 w-4 animate-spin text-gray-500 mr-2" />}
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-gray-500"
                onClick={() => handleDialogClose(false)}
              >
                <X size={12} />
              </Button>
            </div>
          </div>
          <ScrollArea className="flex-1 px-3 py-2">
            {searchQuery.trim() === '' ? (
              <div className="py-2">
                <h4 className="mb-2 text-xs font-semibold text-gray-500">Quick Links</h4>
                <div className="space-y-1">
                  {quickLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => handleDialogClose(false)}
                    >
                      <link.icon className="h-4 w-4 text-gray-500" />
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="py-2">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-semibold text-gray-500">Search Results</h4>
                  {searchResults.length > 0 && (
                    <span className="text-xs text-gray-400">
                      {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  {searchError ? (
                    <div className="px-3 py-6 text-center text-sm text-red-500">{searchError}</div>
                  ) : searchResults.length > 0 ? (
                    searchResults.map((result) => (
                      <Link
                        key={result.id}
                        href={getSearchResultUrl(result)}
                        className="block rounded-md px-3 py-3 text-sm hover:bg-gray-100 transition-colors"
                        onClick={() => handleDialogClose(false)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-gray-900 line-clamp-1">
                              {result.title}
                            </div>
                            {(result.description || result.meta?.description) && (
                              <div className="text-xs text-gray-500 mt-1 line-clamp-2">
                                {result.description || result.meta?.description}
                              </div>
                            )}
                          </div>
                          {result.doc?.relationTo && (
                            <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-gray-100 text-gray-600 flex-shrink-0">
                              {getCollectionDisplayName(result.doc.relationTo)}
                            </span>
                          )}
                        </div>
                        {result.categories && result.categories.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {result.categories.slice(0, 2).map((category: any, index: number) => (
                              <span
                                key={index}
                                className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-blue-50 text-blue-600"
                              >
                                {typeof category === 'string'
                                  ? category
                                  : category.title || category.name}
                              </span>
                            ))}
                          </div>
                        )}
                      </Link>
                    ))
                  ) : !isSearching ? (
                    <div className="px-3 py-6 text-center text-sm text-gray-500">
                      <div className="mb-2">No results found for &quot;{searchQuery}&quot;</div>
                    </div>
                  ) : null}
                </div>
              </div>
            )}
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  )
}
