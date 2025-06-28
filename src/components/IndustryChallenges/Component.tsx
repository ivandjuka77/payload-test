import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/ProductCard'
import { ServiceCard } from '@/components/ServiceCard'
import { Industry, Product, Service } from '@/payload-types'
import { Media } from '../Media'

interface IndustryChallengesProps {
  industry: Industry
  translations: {
    title: string
    description: string
    challenge: string
    vupSolutions: string
    relevantProducts: string
    relevantServices: string
    viewAllProducts: string
    viewAllServices: string
  }
}

export function IndustryChallenges({ industry, translations }: IndustryChallengesProps) {
  return (
    <section className="w-full bg-muted/30 py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-0">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-primary text-2xl sm:text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {translations.title}
          </h2>
          <p className="mt-4 font-secondary text-sm sm:text-base text-muted-foreground">
            {translations.description}
          </p>
        </div>

        <div className="space-y-16">
          {industry.challenges?.map((challenge, index) => (
            <div
              key={index}
              id={challenge.challengeLink ?? ''}
              className="py-16 border-b border-border last:border-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
                <div className="space-y-6">
                  <h3 className="font-primary text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                    {challenge.title}
                  </h3>

                  <div className="space-y-2">
                    <h4 className="font-primary text-lg sm:text-xl font-semibold text-foreground">
                      {translations.challenge}
                    </h4>
                    <p className="font-secondary text-sm sm:text-base text-muted-foreground">
                      {challenge.challenge}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-primary text-lg sm:text-xl font-semibold text-foreground">
                      {translations.vupSolutions}
                    </h4>
                    <p className="font-secondary text-sm sm:text-base text-muted-foreground">
                      {challenge.solution}
                    </p>
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
                <div className="mt-12 bg-gray-50/50 py-8 sm:py-12 rounded-lg">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <h4 className="font-primary text-xl sm:text-2xl font-semibold text-foreground">
                      {translations.relevantProducts}
                    </h4>
                    <Button
                      variant="link"
                      className="text-primary mt-2 md:mt-0 px-0 flex items-center gap-1 hover:gap-2 transition-all text-sm sm:text-base"
                      asChild
                    >
                      <Link href="/products">
                        {translations.viewAllProducts} <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div
                    className={
                      challenge.relatedProducts.length === 1
                        ? 'grid gap-4 sm:gap-6 md:gap-8 grid-cols-1'
                        : 'grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                    }
                  >
                    {challenge.relatedProducts.map((product, index) => (
                      <ProductCard
                        key={index}
                        product={product as Product}
                        variant={challenge.relatedProducts?.length === 1 ? 'horizontal' : 'default'}
                      />
                    ))}
                  </div>
                </div>
              )}

              {challenge.relatedServices && challenge.relatedServices.length > 0 && (
                <div className="mt-12 bg-gray-50/50 py-8 sm:py-12 rounded-lg">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <h4 className="font-primary text-xl sm:text-2xl font-semibold text-foreground">
                      {translations.relevantServices}
                    </h4>
                    <Button
                      variant="link"
                      className="text-primary mt-2 md:mt-0 px-0 flex items-center gap-1 hover:gap-2 transition-all text-sm sm:text-base"
                      asChild
                    >
                      <Link href="/services">
                        {translations.viewAllServices} <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div
                    className={`grid gap-4 sm:gap-6 ${
                      challenge.relatedServices.length === 3
                        ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                        : 'grid-cols-1 md:grid-cols-2'
                    }`}
                  >
                    {challenge.relatedServices.map((service, index) => (
                      <ServiceCard key={index} service={service as Service} />
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
