'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/ProductCard'
import { Product, Post, Industry, ProductCategory } from '@/payload-types'
import CategoryCard from '@/components/CategoryCard'

interface ShowcaseProps {
  type: 'product' | 'category' | 'industry' | 'blogs' | 'feature'
  title: string
  description: string
  products?: Product[]
  categories?: ProductCategory[]
  industries?: Industry[]
  articles?: { content: Post[] }[]
  features?: { title: string; description: string; media: any }[]
  showCta?: boolean
  cta?: {
    title: string
    description: string
    links: { link: { url: string; label: string } }[]
  }
}

export const Showcase: React.FC<ShowcaseProps> = ({
  type,
  title,
  description,
  products,
  categories,
  industries,
  articles,
  features,
  showCta = true,
  cta,
}) => {
  // Handle different showcase types
  const renderContent = (type: string) => {
    switch (type) {
      case 'product':
        if (products?.length === 0) return null

        console.log('products', products)

        return (
          <div className="grid gap-8 md:grid-cols-3">
            {products?.map((product: Product, index: number) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        )

      case 'category':
        if (categories?.length === 0) return null

        console.log('categories', categories)

        return (
          <div className="grid gap-8 md:grid-cols-3">
            {categories?.map((category: ProductCategory, index: number) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>
        )

      case 'feature':
        if (!features || features.length === 0) return null

        return (
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              // Will implement FeatureCard component later
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                {/* <FeatureCard feature={feature} /> */}
                <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-background to-gray-50/50">
      <div className="container px-4 md:px-6">
        {/* Section header */}
        <div className="flex flex-col items-center text-center max-w-[900px] mx-auto mb-16 md:mb-24">
          <h2 className="font-bold tracking-tighter font-primary mb-4 relative text-3xl sm:text-4xl md:text-5xl">
            {title}
          </h2>

          <p className="text-muted-foreground font-secondary max-w-3xl mt-6 text-lg md:text-xl">
            {description}
          </p>
        </div>

        {renderContent(type)}

        {/* CTA Section */}
        {showCta && cta && (
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
