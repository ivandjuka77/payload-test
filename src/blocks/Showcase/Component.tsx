import ProductCard from '@/components/ProductCard'
import { Product, Post, Industry, ProductCategory } from '@/payload-types'
import CategoryCard from '@/components/CategoryCard'
import SimpleCTA from '@/components/SimpleCTA'

interface ShowcaseProps {
  type: 'product' | 'category' | 'industry' | 'blogs'
  id?: string
  title: string
  description: string
  products?: Product[]
  categories?: ProductCategory[]
  industries?: Industry[]
  articles?: { content: Post[] }[]
  showCta?: boolean
  cta?: {
    title: string
    description: string
    links: { link: { url: string; label: string } }[]
  }
}

export const Showcase: React.FC<ShowcaseProps> = ({
  type,
  id,
  title,
  description,
  products,
  categories,
  // industries,
  // articles,
  showCta = true,
  cta,
}) => {
  // Handle different showcase types
  const renderContent = (type: string) => {
    switch (type) {
      case 'product':
        if (products?.length === 0) return null

        const gridClasses =
          products?.length === 1
            ? 'grid gap-4 sm:gap-6 md:gap-8 grid-cols-1'
            : 'grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'

        return (
          <div className={gridClasses}>
            {products?.map((product: Product, index: number) => (
              <ProductCard
                key={index}
                product={product}
                variant={products.length === 1 ? 'horizontal' : 'default'}
              />
            ))}
          </div>
        )

      case 'category':
        if (categories?.length === 0) return null

        return (
          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {categories?.map((category: ProductCategory, index: number) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <section
      id={id}
      className="relative w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-gray-50/50 px-4 sm:px-6 lg:px-0"
    >
      <div className="container">
        {/* Section header */}
        <div className="flex flex-col items-center text-center max-w-[800px] sm:max-w-[900px] mx-auto mb-10 sm:mb-12 md:mb-16 lg:mb-24">
          <h2 className="font-bold tracking-tighter font-primary mb-3 sm:mb-4 relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="text-muted-foreground font-secondary max-w-2xl sm:max-w-3xl mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg md:text-xl">
            {description}
          </p>
        </div>

        {renderContent(type)}

        {showCta && cta && <SimpleCTA cta={cta} />}
      </div>
    </section>
  )
}
