import Link from 'next/link'
import { ArrowRight, Calendar, FileText, Rss } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Media as MediaType, NewsBlock, Post } from '@/payload-types'
import { Media } from '@/components/Media'

interface FeaturedNewsItemProps {
  post: Post
}

function FeaturedNewsItem({ post }: FeaturedNewsItemProps) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary via-primary/70 to-white shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col md:flex-row h-full">
        <div className="px-16 py-16 md:w-3/5 flex flex-col justify-center">
          <div className="inline-flex items-center  px-3 py-1 rounded-full bg-white text-primary text-sm font-medium mb-6 w-fit">
            <FileText className="w-4 h-4 mr-2" />
            <span>{post.type}</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-4 font-primary text-white">
            {post.title}
          </h3>

          <p className="text-muted-foreground mb-6 font-secondary text-white">
            {post.meta?.description}
          </p>

          <Button
            asChild
            variant="outline"
            className="w-fit group/btn bg-transparent border-white text-white hover:bg-white hover:text-primary px-8"
          >
            <Link href={`/news/${post.slug}`} className="inline-flex items-center gap-2">
              Read {post.type}
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="relative md:w-2/5 h-96 md:h-auto overflow-hidden">
          <Media
            resource={post.meta?.image as MediaType}
            fill
            imgClassName="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent md:from-transparent md:to-transparent" />
        </div>
      </div>
    </div>
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

function CompactNewsItem({
  type,
  title,
  description,
  featuredImage,
  slug,
  publishedAt,
}: CompactNewsItemProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative w-full h-48 min-h-[200px]">
        <Media resource={featuredImage} fill imgClassName="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="text-xs bg-primary text-white">
            {type}
          </Badge>
        </div>
      </div>

      <div className="p-6 w-full flex flex-col">
        {publishedAt && (
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
            <Calendar className="h-4 w-4" />
            <span>{new Date(publishedAt).toLocaleDateString()}</span>
          </div>
        )}

        <h3 className="font-bold text-primary text-xl mb-3 line-clamp-3 font-primary group-hover:text-primary/80 transition-colors">
          {title}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 font-secondary">
          {description}
        </p>

        <Link
          href={`/news/${slug}`}
          className="mt-auto inline-flex items-center gap-1 text-primary hover:underline text-sm font-medium group/link"
        >
          Continue reading
          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}

export const NewsSection: React.FC<NewsBlock> = ({
  title,
  description,
  badge,
  items,
  linkLabel,
}) => {
  if (!items) return null

  return (
    <section className="w-full py-16 md:py-24 relative bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-row items-center justify-between gap-4 mb-12">
          <div className="flex flex-col gap-4">
            <div className="inline-flex w-fit items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
              <Rss className="w-4 h-4 mr-2" />
              <span>{badge}</span>
            </div>

            <h2 className="font-bold tracking-tighter font-primary text-3xl md:text-4xl">
              {title}
            </h2>

            <p className="text-xl text-muted-foreground max-w-[700px] font-secondary">
              {description}
            </p>
          </div>

          <Button asChild variant="link">
            <Link href="/news" className="inline-flex items-center gap-2">
              {linkLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="space-y-12">
          {items?.[0] && <FeaturedNewsItem post={items[0] as Post} />}

          {/* Secondary articles - grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items
              ?.slice(1)
              .map((item, index) => (
                <CompactNewsItem
                  key={index}
                  type={(item as Post).type}
                  title={(item as Post).title}
                  description={(item as Post).meta?.description || ''}
                  featuredImage={(item as Post).meta?.image as MediaType}
                  slug={(item as Post).slug || ''}
                  publishedAt={(item as Post).publishedAt || null}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
