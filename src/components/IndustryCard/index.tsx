import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Industry, Product } from '@/payload-types'
import { Media } from '@/components/Media'

export function IndustryCard({ industry }: { industry: Industry }) {
  const keyProducts = industry.keyProducts as Product[]

  return (
    <Link href={`/industries/${industry.slug}`}>
      <div className="group relative overflow-hidden rounded-lg border border-border bg-background shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30">
        <div className="relative h-72 w-full overflow-hidden">
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
        <div className="p-6">
          <h3 className="font-primary text-xl font-semibold text-foreground mb-3 transition-colors group-hover:text-primary">
            {industry.name}
          </h3>
          <p className="font-secondary text-sm text-muted-foreground mb-5 line-clamp-3">
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
              <h4 className="font-primary text-sm font-medium text-foreground mb-2">
                Key Applications
              </h4>
              <div className="flex flex-wrap gap-2">
                {industry.challenges.slice(0, 3).map((challenge, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center px-2 py-1 rounded-md bg-primary/10 text-xs text-primary font-medium transition-colors hover:bg-primary/20"
                  >
                    {challenge.title}
                  </div>
                ))}
                {industry.challenges.length > 3 && (
                  <div className="inline-flex items-center px-2 py-1 rounded-md bg-muted text-xs text-muted-foreground font-medium">
                    +{industry.challenges.length - 3} more
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Featured Products */}
          {keyProducts && keyProducts.length > 0 && (
            <div className="mb-5">
              <h4 className="font-primary text-sm font-medium text-foreground mb-2">
                Featured Products
              </h4>
              <ul className="space-y-1.5">
                {keyProducts.map((product, index) => (
                  <li key={index}>
                    <Link
                      href={`/products/${product.slug}`}
                      className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ChevronRight className="h-3.5 w-3.5 mr-1 text-primary/70" />
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Link
            href={`/industries/${industry.slug}`}
            className="inline-flex items-center gap-2 text-primary text-sm font-medium z-10 transition-all duration-150 hover:gap-3"
          >
            Explore {industry.name} solutions
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Link>
  )
}
