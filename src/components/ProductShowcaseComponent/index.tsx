import { Product } from '@/payload-types'
import ProductCard from '../ProductCard'

export function ProductShowcase({
  products,
  title,
  description,
  translations,
}: {
  products: Product[]
  title: string
  description: string
  translations: {
    noProductsFound: string
  }
}) {
  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-background to-gray-50/50 px-4 sm:px-6 lg:px-0">
      <div className="container">
        <div className="flex flex-col items-center text-center max-w-[900px] mx-auto mb-16 md:mb-24">
          <h2 className="font-bold tracking-tighter font-primary mb-4 relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="text-muted-foreground font-secondary max-w-3xl mt-6 text-sm sm:text-base lg:text-lg xl:text-xl">
            {description}
          </p>
        </div>

        {/* Cards with improved layout and spacing */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {products && products.length > 0 ? (
            products.map((product, index) => <ProductCard key={index} product={product} />)
          ) : (
            <div className="flex justify-center items-center text-muted-foreground text-center font-secondary w-full mt-6 text-base sm:text-lg md:text-xl">
              {translations.noProductsFound}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
