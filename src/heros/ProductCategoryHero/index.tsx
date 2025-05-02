'use client'

import { Media } from '@/components/Media'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ProductCategory } from '@/payload-types'
import { ArrowRight } from 'lucide-react'

export function ProductCategoryHero({ category }: { category: ProductCategory }) {
  return (
    <section className="w-full relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/20 z-0"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="animate-fadeIn">
            <Badge
              variant="outline"
              className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
            >
              Product Category
            </Badge>
            <h1 className="font-primary text-primary text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
              {category.name}
            </h1>
            <p className="font-secondary text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl">
              {category.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="group">
                Explore Properties{' '}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden bg-gray-50 shadow-xl shadow-primary/10">
            <Media resource={category.image} alt={category.name} fill imgClassName="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
