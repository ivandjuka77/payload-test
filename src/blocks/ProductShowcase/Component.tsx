'use client'

import Link from 'next/link'
import {
  ArrowRight,
  FlaskRoundIcon as Flask,
  Atom,
  Beaker,
  ChevronRight,
  Layers,
  Sparkles,
  Microscope,
  Zap,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProductShowcaseBlock as ProductShowcaseBlockType } from '@/payload-types'

// Update the variant type
type VariantType = 'modern' | 'bold' | 'detailed'

interface ProductCategoryProps {
  title: string
  description: string
  products: string[]
  icon: React.ReactNode
  href: string
  useCases: Array<{ icon: React.ReactNode; name: string }>
  index: number
  variant: VariantType
}

function ProductCategory({
  title,
  description,
  products,
  icon,
  href,
  useCases,
  index,
}: ProductCategoryProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
      {/* Top image area with gradient overlay */}
      <div className="relative h-48 bg-gradient-to-br from-primary/80 to-primary/40 overflow-hidden">
        {/* Abstract chemistry background pattern */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/30"
              style={{
                width: `${Math.random() * 40 + 10}px`,
                height: `${Math.random() * 40 + 10}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            />
          ))}
        </div>

        {/* Floating icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-20 w-20 flex items-center justify-center rounded-full bg-white/90 text-primary shadow-lg">
          <div className="text-3xl">{icon}</div>
        </div>

        {/* Category label */}
        <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
          Category {index + 1}
        </div>
      </div>

      {/* Content area */}
      <div className="p-6">
        {/* Title with badge */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold tracking-tight font-primary">{title}</h3>
          <span className="inline-flex items-center px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
            Product
          </span>
        </div>

        {/* Rich description */}
        <p className="mb-6 text-muted-foreground font-secondary">{description}</p>

        {/* Detailed products list */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-3 text-gray-900 uppercase tracking-wider">
            Key Products
          </h4>
          <div className="space-y-3 border-l-2 border-primary/20 pl-4">
            {products.map((product, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                </div>
                <div>
                  <span className="text-sm font-medium font-secondary text-gray-900">
                    {product}
                  </span>
                  <div className="h-1 w-12 bg-primary/10 rounded-full mt-1"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced use cases section */}
        <div className="mb-6 bg-gray-50 rounded-lg p-4 border border-gray-100">
          <h4 className="text-sm font-semibold mb-3 text-gray-900 flex items-center">
            <Beaker className="h-4 w-4 mr-2 text-primary" />
            Applications & Use Cases
          </h4>
          <div className="grid grid-cols-3 gap-3">
            {useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-3 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
              >
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {useCase.icon}
                </div>
                <span className="text-xs text-center font-medium font-secondary">
                  {useCase.name}
                </span>
                <span className="text-[10px] text-gray-500 mt-1">Industry Standard</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className="flex items-center justify-between">
          <Link
            href={href}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium transition-all hover:bg-primary/90"
          >
            View Details
            <ArrowRight className="h-4 w-4" />
          </Link>

          <div className="flex items-center gap-1 text-xs text-gray-500">
            <span>ID: {index + 1000}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export const ProductShowcaseBlock: React.FC<ProductShowcaseBlockType> = ({
  title,
  description,
  products,
  cta,
}) => {
  const categories = [
    {
      icon: <Flask className="h-6 w-6" />,
      title: 'TEMPO and Derivatives',
      description:
        'Advanced chemical solutions powering next-generation applications in pharmaceuticals.',
      products: ['Pharmaceutical processes', 'Polymer synthesis', 'Energy storage solutions'],
      href: '/products/tempo',
      useCases: [
        { icon: <Microscope className="h-4 w-4" />, name: 'Pharma' },
        { icon: <Atom className="h-4 w-4" />, name: 'Research' },
        { icon: <Beaker className="h-4 w-4" />, name: 'Biotech' },
      ],
    },
    {
      icon: <Atom className="h-6 w-6" />,
      title: 'DMPA, DMBA, HPVA',
      description:
        'Specialized chemicals enabling high-performance coatings and adhesive solutions.',
      products: ['Water Soluble Polyurethane', 'Industrial Coatings', 'Advanced Adhesives'],
      href: '/products/dmpa',
      useCases: [
        { icon: <Layers className="h-4 w-4" />, name: 'Coatings' },
        { icon: <Zap className="h-4 w-4" />, name: 'Adhesives' },
        { icon: <Beaker className="h-4 w-4" />, name: 'Polymers' },
      ],
    },
    {
      icon: <Beaker className="h-6 w-6" />,
      title: 'Industrial Solutions',
      description: 'Comprehensive range of chemicals for industrial and household applications.',
      products: ['Cleaning solutions', 'Industrial adhesives', 'Specialty coatings'],
      href: '/products/industrial',
      useCases: [
        { icon: <Flask className="h-4 w-4" />, name: 'Cleaning' },
        { icon: <Atom className="h-4 w-4" />, name: 'Automotive' },
        { icon: <Beaker className="h-4 w-4" />, name: 'Electronics' },
      ],
    },
  ]

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
          {categories.map((category, index) => (
            <ProductCategory key={index} {...category} index={index} variant="detailed" />
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
            {(cta?.links || []).map(({ link }, i) => {
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
