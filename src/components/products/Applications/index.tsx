'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Product } from '@/payload-types'

interface ApplicationsAndIndustriesProps {
  product: Product
}

export function ApplicationsAndIndustries({ product }: ApplicationsAndIndustriesProps) {
  const gridItems = [
    ...product.applications.map((item) => ({
      id: `app-${item.application?.toLowerCase().replace(/\s+/g, '-')}`,
      title: item.application || '',
      description: product.description,
      imageSrc: '/placeholder.svg',
      imageAlt: item.application || '',
      badgeText: 'Application',
    })),
    ...product.industries.map((item) => ({
      id: `ind-${item.industry?.toLowerCase().replace(/\s+/g, '-')}`,
      title: item.industry || '',
      description: product.description,
      imageSrc: '/placeholder.svg',
      imageAlt: item.industry || '',
      badgeText: 'Industry',
    })),
  ]

  return (
    <section className="w-full relative py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 font-primary">
            Applications & Industries
          </h2>
          <p className="text-lg text-muted-foreground max-w-[800px] font-secondary">
            {product.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-fr">
          {gridItems.map((item, index) => (
            <div
              key={item.id}
              className={`p-6 border bg-white hover:bg-gray-50/50 transition-colors group cursor-pointer ${
                index % 2 === 0 ? 'border-primary/20' : 'border-gray-200'
              } flex flex-col`}
            >
              <div className="relative h-48 mb-4 overflow-hidden rounded-md">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <Badge className="absolute bottom-2 left-2 bg-primary/90 hover:bg-primary/80">
                  {item.badgeText}
                </Badge>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors font-primary">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm font-secondary flex-grow">
                {item.description}
              </p>

              <div className="mt-4 flex justify-end">
                <Badge
                  variant="outline"
                  className="group-hover:bg-primary group-hover:text-white transition-colors"
                >
                  Learn more
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
