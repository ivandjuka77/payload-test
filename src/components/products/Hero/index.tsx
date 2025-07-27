'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'
import { Product } from '@/payload-types'
import { Media } from '@/components/Media'

type Props = {
  product: Product
  badge: string
  chemicalName: string
  molecularFormula: string
  casNumber: string
  cta: string
}

export function ProductHero({
  product,
  badge,
  chemicalName,
  molecularFormula,
  casNumber,
  cta,
}: Props) {
  return (
    <section className="w-full relative pt-32 pb-10 md:py-24 lg:py-32 xl:pt-44 bg-gradient-to-b from-white to-gray-50/50 px-4 sm:px-6 lg:px-0">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div>
              <Badge
                variant="outline"
                className="mb-3 text-sm px-3 py-1 bg-primary/5 border-primary/10 text-primary"
              >
                {badge}
              </Badge>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter font-primary">
                {product.name}
              </h1>
              <div className="mt-2 space-y-1 text-sm sm:text-base text-muted-foreground font-secondary">
                <p>
                  <span className="font-medium">{chemicalName}:</span>{' '}
                  {product.technicalSpecifications?.chemicalName}
                </p>
                <p>
                  <span className="font-medium">{molecularFormula}:</span>{' '}
                  {product.technicalSpecifications?.molecularFormula}
                </p>
                <p>
                  <span className="font-medium">{casNumber}:</span>{' '}
                  {product.technicalSpecifications?.casNumber}
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground font-secondary">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                className="bg-primary hover:bg-primary/90 text-white flex-1"
                onClick={() =>
                  document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                {cta} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative h-[200px] sm:h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-gray-200 shadow-lg">
            <Media
              resource={product.chemicalStructureImage}
              fill
              imgClassName="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
