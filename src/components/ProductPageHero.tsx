import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

const ProductPageHero = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-primary to-primary text-white pt-32 pb-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1706554596440-d23a023f2b47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Chemistry laboratory with various chemicals"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-4">
            <span>Premium Quality Chemical Products</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-primary leading-tight mb-6">
            Discover Our Chemical Products
          </h1>
          <p className="text-xl text-white/90 font-secondary mb-8">
            Explore our comprehensive range of high-purity chemicals, intermediates, and specialty
            products tailored for various industries and applications.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 rounded-md py-6 px-8 text-base group"
            >
              <Link href="#product-grid" className="flex items-center">
                Browse Products
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              variant="link"
              size="lg"
              className="group border-none bg-transparent hover:text-white rounded-md py-6 px-8 text-base"
            >
              <span className="text-white flex items-center justify-center group-hover:text-white">
                Request Custom Solution{' '}
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPageHero
