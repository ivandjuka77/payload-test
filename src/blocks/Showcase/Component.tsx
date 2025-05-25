'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/ProductCard'
import { Product, Post, Industry, ProductCategory } from '@/payload-types'
import CategoryCard from '@/components/CategoryCard'
import SimpleCTA from '@/components/SimpleCTA'

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
  // industries,
  // articles,
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
          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {products?.map((product: Product, index: number) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        )

      case 'category':
        if (categories?.length === 0) return null

        console.log('categories', categories)

        return (
          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {categories?.map((category: ProductCategory, index: number) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>
        )

      case 'feature':
        if (!features || features.length === 0) return null

        return (
          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              // Will implement FeatureCard component later
              <div
                key={index}
                className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* <FeatureCard feature={feature} /> */}
                <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-gray-50/50">
      <div className="container px-4 sm:px-5 md:px-6">
        {/* Section header */}
        <div className="flex flex-col items-center text-center max-w-[800px] sm:max-w-[900px] mx-auto mb-10 sm:mb-12 md:mb-16 lg:mb-24">
          <h2 className="font-bold tracking-tighter font-primary mb-3 sm:mb-4 relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="text-muted-foreground font-secondary max-w-2xl sm:max-w-3xl mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg md:text-xl px-4 sm:px-0">
            {description}
          </p>
        </div>

        {renderContent(type)}

        {showCta && cta && <SimpleCTA cta={cta} />}
      </div>
    </section>
  )
}
