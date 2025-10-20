import Link from 'next/link'
import { ArrowRight, Calendar, FileText, Rss } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Media as MediaType, NewsBlock, Post } from '@/payload-types'
import { Media } from '@/components/Media'
import { getTranslations } from 'next-intl/server'

interface FeaturedNewsItemProps {
  post: Post
}

async function FeaturedNewsItem({ post }: FeaturedNewsItemProps) {
  const t = await getTranslations('news.block')
  return (
    <Link href={`/news/${post.slug}`} className="block">
      <div className="relative overflow-hidden rounded-lg sm:rounded-xl bg-gradient-to-r from-primary via-primary to-primary md:via-primary/70 md:to-white shadow-md hover:shadow-lg transition-all duration-300 group">
        <div className="flex flex-col md:flex-row h-full">
          <div className="px-6 py-8 sm:px-8 sm:py-10 md:px-12 lg:px-16 md:py-16 md:w-3/5 flex flex-col justify-center">
            <div className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full bg-white text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-5 md:mb-6 w-fit">
              <FileText className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              <span>{post.type}</span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 font-primary text-white">
              {post.title}
            </h3>

            <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4 sm:mb-5 md:mb-6 font-secondary leading-relaxed">
              {post.meta?.description}
            </p>

            <div className="w-fit group/btn bg-transparent border border-white text-white hover:bg-white hover:text-primary px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-md transition-colors">
              <span className="inline-flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                {t('continueReading')}
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>

          <div className="relative md:w-2/5 h-64 sm:h-80 md:h-auto overflow-hidden">
            <Media
              resource={post.meta?.image as MediaType}
              fill
              imgClassName="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent md:from-transparent md:to-transparent" />
          </div>
        </div>
      </div>
    </Link>
  )
}

interface CompactNewsItemProps {
  type: Post['type']
  title: string
  description: string
  featuredImage: MediaType
  slug: string
  publishedAt: string | null
}

async function CompactNewsItem({
  type,
  title,
  description,
  featuredImage,
  slug,
  publishedAt,
}: CompactNewsItemProps) {
  const t = await getTranslations('news.block')
  return (
    <Link href={`/news/${slug}`} className="block h-full">
      <div className="group flex flex-col h-full overflow-hidden rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="relative w-full h-40 sm:h-44 md:h-48 min-h-[160px] sm:min-h-[176px] md:min-h-[200px]">
          <Media resource={featuredImage} fill imgClassName="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
            <Badge variant="secondary" className="text-xs bg-primary text-white px-2 py-1">
              {type}
            </Badge>
          </div>
        </div>

        <div className="p-4 sm:p-5 md:p-6 w-full flex flex-col flex-1">
          {publishedAt && (
            <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground text-xs sm:text-sm mb-2">
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>{new Date(publishedAt).toLocaleDateString()}</span>
            </div>
          )}

          <h3 className="font-bold text-primary text-base sm:text-lg md:text-xl mb-2 sm:mb-3 line-clamp-3 font-primary group-hover:text-primary/80 transition-colors">
            {title}
          </h3>

          <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3 font-secondary leading-relaxed">
            {description}
          </p>

          <div className="mt-auto inline-flex items-center gap-1 sm:gap-1.5 text-primary hover:underline text-xs sm:text-sm font-medium group/link">
            <span>{t('continueReading')}</span>
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export const NewsSection: React.FC<NewsBlock> = async ({
  title,
  description,
  badge,
  items,
  linkLabel,
}) => {
  if (!items) return null

  return (
    <section className="w-full py-12 sm:py-14 md:py-16 lg:py-24 relative bg-gray-50 px-4 sm:px-6 lg:px-0">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="inline-flex w-fit items-center px-2.5 sm:px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-1 sm:mb-2">
              <Rss className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              <span>{badge}</span>
            </div>

            <h2 className="font-bold tracking-tighter font-primary text-2xl sm:text-3xl md:text-4xl">
              {title}
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-[600px] sm:max-w-[700px] font-secondary">
              {description}
            </p>
          </div>

          <Button asChild variant="link" className="self-start sm:self-center">
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base"
            >
              {linkLabel}
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
          </Button>
        </div>

        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {items?.[0] && (await FeaturedNewsItem({ post: items[0] as Post }))}

          {/* Secondary articles - grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {await Promise.all(
              items?.slice(1).map(async (item, index) => (
                <div key={index}>
                  {await CompactNewsItem({
                    type: (item as Post).type,
                    title: (item as Post).title,
                    description: (item as Post).meta?.description || '',
                    featuredImage: (item as Post).meta?.image as MediaType,
                    slug: (item as Post).slug || '',
                    publishedAt: (item as Post).publishedAt || null,
                  })}
                </div>
              )) || [],
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
