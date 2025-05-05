'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'
import { Product } from '@/payload-types'
import { Media } from '@/components/Media'

export function ProductHero({ product }: { product: Product }) {
  return (
    <section className="w-full relative py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div>
              <Badge
                variant="outline"
                className="mb-3 text-sm px-3 py-1 bg-primary/5 border-primary/10 text-primary"
              >
                Product
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter font-primary">
                {product.name}
              </h1>
              <div className="mt-2 space-y-1 text-muted-foreground font-secondary">
                <p>
                  <span className="font-medium">Chemical Name:</span>{' '}
                  {product.technicalSpecifications?.chemicalName}
                </p>
                <p>
                  <span className="font-medium">Molecular Formula:</span>{' '}
                  {product.technicalSpecifications?.molecularFormula}
                </p>
                <p>
                  <span className="font-medium">CAS Number:</span>{' '}
                  {product.technicalSpecifications?.casNumber}
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground font-secondary">{product.description}</p>

            {/* <div className="grid grid-cols-2 md:grid-cols-2 gap-4 pt-2">
              {product.VupSpecifications?.map((highlight, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-gray-100 bg-white shadow-sm"
                >
                  <p className="text-sm font-medium text-muted-foreground">{highlight.label}</p>
                  <p className="text-xl font-semibold text-primary">{highlight.value}</p>
                </div>
              ))}
            </div> */}

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                className="bg-primary hover:bg-primary/90 text-white flex-1"
                onClick={() =>
                  document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              {/* <DataSheetCTA CTAtext="Technical Data Sheet" /> */}
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-gray-200 shadow-lg">
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
