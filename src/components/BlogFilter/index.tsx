'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { ArrowRight, Search } from 'lucide-react'
import { Post } from '@/payload-types'

interface ArticlesGridProps {
  articles: Post[]
  allTags: string[]
  showFilters?: boolean
}

export function ArticlesGrid({ articles, allTags, showFilters = true }: ArticlesGridProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedTag, setSelectedTag] = useState<string>('all')

  const tags = useMemo(() => {
    return ['all', ...allTags]
  }, [allTags])

  const types = ['all', 'news', 'research', 'case-study']

  const filteredArticles = useMemo(() => {
    if (!showFilters) return articles

    return articles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (article.description &&
          article.description.toLowerCase().includes(searchQuery.toLowerCase()))
      const matchesType = selectedType === 'all' || article.type === selectedType
      const matchesTag =
        selectedTag === 'all' ||
        (article.tags && article.tags.some((tagObj) => tagObj.tag === selectedTag))

      return matchesSearch && matchesType && matchesTag
    })
  }, [articles, searchQuery, selectedType, selectedTag, showFilters])

  const fallbackImageUrl = 'https://via.placeholder.com/400x300.png?text=No+Image'

  return (
    <section className="py-16 bg-gray-50 ">
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          {/* Filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {types.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedTag} onValueChange={setSelectedTag}>
                <SelectTrigger>
                  <SelectValue placeholder="Select tag" />
                </SelectTrigger>
                <SelectContent>
                  {tags.map((tag) => (
                    <SelectItem key={tag} value={tag}>
                      {tag === 'all' ? 'All Tags' : tag}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="text-sm text-muted-foreground self-center">
                {filteredArticles.length} articles found
              </div>
            </div>
          )}

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="group flex flex-col overflow-hidden rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={
                      typeof article.featuredImage === 'object' && article.featuredImage?.url
                        ? article.featuredImage.url
                        : fallbackImageUrl
                    }
                    alt={
                      typeof article.featuredImage === 'object' && article.featuredImage?.alt
                        ? String(article.featuredImage.alt)
                        : article.title
                    }
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs capitalize">
                      {article.type}
                    </Badge>
                    <span className="text-xs text-gray-500">
                      {article.publishedAt
                        ? new Date(article.publishedAt).toLocaleDateString()
                        : 'N/A'}
                    </span>
                  </div>

                  <h3 className="font-bold text-xl mb-3 line-clamp-2 font-primary group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2 font-secondary flex-1">
                    {article.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags?.map((tagObj) =>
                      tagObj.tag ? (
                        <Badge key={tagObj.id || tagObj.tag} variant="outline" className="text-xs">
                          {tagObj.tag}
                        </Badge>
                      ) : null,
                    )}
                  </div>

                  <Button asChild variant="outline" className="w-fit mt-auto">
                    <Link
                      href={article.slug ? `/news/${article.slug}` : '#'}
                      className="inline-flex items-center gap-2"
                    >
                      Read more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
