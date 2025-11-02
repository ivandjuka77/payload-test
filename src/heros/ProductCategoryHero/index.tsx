'use client'

import { Media } from '@/components/Media'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ProductCategory } from '@/payload-types'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function ProductCategoryHero({
  translations,
  category,
}: {
  translations: { badge: string; title: string; description: string; cta: string }
  category: ProductCategory
}) {
  return (
    <section className="w-full relative pt-32 pb-10 md:py-28 xl:pt-44 overflow-hidden px-4 sm:px-6 lg:px-0">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/20 z-0"></div>

      <div className="container lg:px-6 relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="animate-fadeIn">
            <Badge
              variant="outline"
              className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
            >
              {translations.badge}
            </Badge>
            <h1 className="font-primary text-primary text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-6">
              {category.name}
            </h1>
            <p className="font-secondary text-base md:text-lg lg:text-xl text-muted-foreground mb-6 max-w-2xl">
              {category.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="group">
                <Link href="#product-category-showcase">
                  {translations.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[200px] md:h-[300px] lg:h-[450px] rounded-2xl overflow-hidden bg-gray-50 shadow-xl shadow-primary/10">
            <Media resource={category.image} alt={category.name} fill imgClassName="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
