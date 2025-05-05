'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/ProductCard'
import { Product } from '@/payload-types'

interface ProductShowcaseBlockProps {
  title: string
  description: string
  products: { product: Product[] }[]
  cta: { title: string; description: string; links: { link: { url: string; label: string } }[] }
}

export const ProductShowcaseBlock: React.FC<ProductShowcaseBlockProps> = ({
  title,
  description,
  products,
  cta,
}) => {
  console.log('products', products)
  const productsItems = products[0]?.product || []

  console.log('productsItems', productsItems)

  if (productsItems.length === 0) {
    return null
  }

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-background to-gray-50/50">
      <div className="container px-4 md:px-6">
        {/* Section header - conditionally styled based on variant */}
        <div className="flex flex-col items-center text-center max-w-[900px] mx-auto mb-16 md:mb-24">
          <h2 className="font-bold tracking-tighter font-primary mb-4 relative text-3xl sm:text-4xl md:text-5xl">
            {title}
          </h2>

          <p className="text-muted-foreground font-secondary max-w-3xl mt-6 text-lg md:text-xl">
            {description}
          </p>
        </div>

        {/* Cards with improved layout and spacing */}
        <div className="grid gap-8 md:grid-cols-3">
          {productsItems.map((product: Product, index: number) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {cta && (
          <div className="mt-16 md:mt-24 flex flex-col md:flex-row items-center justify-between p-8 rounded-xl bg-gradient-to-r from-primary to-primary/20 ">
            <div className="mb-6 md:mb-0">
              <h3 className="font-bold font-primary mb-2 text-xl md:text-2xl text-white">
                {cta?.title}
              </h3>
              <p className="font-secondary text-white/90 text-lg">{cta?.description}</p>
            </div>
            {(cta?.links || []).map(({ link }: any, i: number) => {
              return (
                <Button
                  key={i}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white shadow-md"
                >
                  <Link href={link?.url || '#'} className="flex items-center">
                    {link?.label}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
