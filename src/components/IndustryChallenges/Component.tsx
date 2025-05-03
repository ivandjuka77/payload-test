import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/ProductCard'
import { ServiceCard } from '@/components/ServiceCard'
import { Industry } from '@/payload-types'
import { Media } from '../Media'

interface IndustryChallengesProps {
  industry: Industry
}

export function IndustryChallenges({ industry }: IndustryChallengesProps) {
  return (
    <section className="w-full bg-muted/30 py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-primary text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Industry Challenges
          </h2>
          <p className="mt-4 font-secondary text-muted-foreground">
            Discover the unique challenges faced by {industry.name} and how VUP Solutions can help
            overcome them.
          </p>
        </div>

        <div className="space-y-16">
          {industry.challenges?.map((challenge, index) => (
            <div
              key={index}
              id={challenge.challengeLink ?? ''}
              className="py-16 border-b border-border last:border-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="space-y-6">
                  <h3 className="font-primary text-3xl font-bold tracking-tight text-foreground">
                    {challenge.title}
                  </h3>

                  <div className="space-y-2">
                    <h4 className="font-primary text-xl font-semibold text-foreground">
                      Challenge:
                    </h4>
                    <p className="font-secondary text-muted-foreground">{challenge.challenge}</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-primary text-xl font-semibold text-foreground">
                      VUP Solutions:
                    </h4>
                    <p className="font-secondary text-muted-foreground">{challenge.solution}</p>
                  </div>
                </div>

                <div className="relative h-[300px] lg:h-auto rounded-lg overflow-hidden">
                  <Media
                    resource={challenge.image}
                    alt={challenge.title}
                    fill
                    imgClassName="object-cover"
                  />
                </div>
              </div>

              {challenge.relatedProducts && challenge.relatedProducts.length > 0 && (
                <div className="mt-12 bg-gray-50/50 py-12 rounded-lg">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <h4 className="font-primary text-2xl font-semibold text-foreground">
                      Relevant Products
                    </h4>
                    <Button
                      variant="link"
                      className="text-primary mt-2 md:mt-0 px-0 flex items-center gap-1 hover:gap-2 transition-all"
                      asChild
                    >
                      <Link href="/products">
                        View all products <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div
                    className={`grid gap-x-8 ${
                      challenge.relatedProducts.length === 3
                        ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                        : 'grid-cols-1 md:grid-cols-2'
                    }`}
                  >
                    {challenge.relatedProducts.map((product, index) => (
                      <ProductCard key={index} product={product} />
                    ))}
                  </div>
                </div>
              )}

              {challenge.relatedServices && challenge.relatedServices.length > 0 && (
                <div className="mt-12 bg-gray-50/50 py-12 rounded-lg">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <h4 className="font-primary text-2xl font-semibold text-foreground">
                      Relevant Services
                    </h4>
                    <Button
                      variant="link"
                      className="text-primary mt-2 md:mt-0 px-0 flex items-center gap-1 hover:gap-2 transition-all"
                      asChild
                    >
                      <Link href="/services">
                        View all services <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div
                    className={`grid gap-6 ${
                      challenge.relatedServices.length === 3
                        ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                        : 'grid-cols-1 md:grid-cols-2'
                    }`}
                  >
                    {challenge.relatedServices.map((service, index) => (
                      <ServiceCard key={index} service={service} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
