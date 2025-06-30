import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Industry, Product } from '@/payload-types'
import { Media } from '@/components/Media'
import { useTranslations } from 'next-intl'

export function IndustryCard({ industry }: { industry: Industry }) {
  const t = useTranslations('industryCard')
  const keyProducts = industry.keyProducts as Product[]

  return (
    <Link href={`/industries/${industry.slug}`}>
      <div className="group relative overflow-hidden rounded-lg border border-border bg-background shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md">
        <div className="relative h-60 w-full overflow-hidden sm:h-72">
          <Media
            resource={industry.featuredImage}
            fill
            imgClassName="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
          {/* TODO - Add badge text */}
          {/* {industry.badgeText && (
          <div className='absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground'>
            {industry.badgeText}
          </div>
        )} */}
        </div>
        <div className="p-4 md:p-6">
          <h3 className="font-primary mb-3 text-lg md:text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
            {industry.name}
          </h3>
          <p className="font-secondary mb-5 text-sm md:text-base text-muted-foreground line-clamp-3">
            {industry.description}
          </p>

          {/* Key Stats */}
          {/* {keyStats && keyStats.length > 0 && (
          <div className='grid grid-cols-2 gap-4 mb-5'>
            {keyStats.map((stat, index) => (
              <div key={index} className='bg-muted/30 p-3 rounded-md text-center'>
                <p className='font-secondary text-sm text-muted-foreground'>{stat.label}</p>
                <p className='font-primary text-base font-medium text-foreground'>{stat.value}</p>
              </div>
            ))}
          </div>
        )} */}

          {/* Applications */}
          {industry.challenges && industry.challenges.length > 0 && (
            <div className="mb-5">
              <h4 className="font-primary mb-2 text-sm md:text-base font-medium text-foreground">
                {t('keyApplications')}
              </h4>
              <div className="flex flex-wrap gap-2">
                {industry.challenges.slice(0, 3).map((challenge, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                  >
                    {challenge.title}
                  </div>
                ))}
                {industry.challenges.length > 3 && (
                  <div className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                    {t('moreItems', { count: industry.challenges.length - 3 })}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Featured Products */}
          {keyProducts && keyProducts.length > 0 && (
            <div className="mb-5">
              <h4 className="font-primary mb-2 text-sm md:text-base font-medium text-foreground">
                {t('featuredProducts')}
              </h4>
              <ul className="space-y-1.5">
                {keyProducts.map((product, index) => (
                  <li key={index}>
                    <Link
                      href={`/products/${product.slug}`}
                      className="flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <ChevronRight className="mr-1 h-3.5 w-3.5 text-primary/70" />
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="inline-flex items-center gap-2 text-sm md:text-base font-medium text-primary transition-all duration-150 group-hover:gap-3">
            {t('exploreSolutions', { industryName: industry.name })}
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  )
}
