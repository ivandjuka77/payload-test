import Tag from '@/components/ui/tag'
import { Check, ArrowRight, Beaker, FlaskConical, Atom } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Product, ProductCategory } from '@/payload-types'
import { Media } from '@/components/Media'
import { useTranslations } from 'next-intl'

export default function CategoryCard({
  category,
  variant = 'default',
}: {
  category: ProductCategory
  variant?: 'default' | 'compact'
}) {
  const t = useTranslations('categoryCard')
  const featuredProducts = category.featuredProducts as Product[]

  const applicationIcons = {
    1: <Atom />,
    2: <Beaker />,
    3: <FlaskConical />,
  }

  return (
    <div
      key={category.id}
      className="group relative overflow-hidden rounded-lg sm:rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col h-full"
    >
      <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 bg-gradient-to-b from-gray-300 to-white overflow-hidden flex items-center justify-center">
        {category.image && (
          <Media
            resource={category.image}
            imgClassName="object-contain p-2 sm:p-3 md:p-4 h-full w-full"
          />
        )}
        <Tag
          className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4"
          type="product"
        >
          {t('tag')}
        </Tag>
      </div>

      <div className="p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col flex-1">
        <div className="flex flex-col items-start space-y-1 min-h-[3rem] sm:min-h-[4rem] md:min-h-[5rem] mb-2">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight font-primary">
            {category.name}
          </h3>
        </div>

        <div className="min-h-[2rem] sm:min-h-[3rem] md:min-h-[4rem]">
          <p className="text-muted-foreground font-secondary line-clamp-2 sm:line-clamp-3 text-sm sm:text-base">
            {category.description}
          </p>
        </div>

        {variant === 'default' && (
          <div className="my-4 sm:my-5 md:my-6 flex-1">
            <h4 className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-gray-900 uppercase tracking-wider">
              {t('keyProducts')}
            </h4>
            <div className="space-y-2 sm:space-y-3 border-l-2 border-primary/20 pl-2 sm:pl-3 md:pl-4">
              {featuredProducts?.slice(0, 3).map((product) => (
                <div key={product.id} className="flex items-center gap-2 sm:gap-3">
                  <div className="flex h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-medium font-secondary text-gray-900">
                      {product.name}
                    </span>
                    <div className="h-0.5 sm:h-1 w-8 sm:w-10 md:w-12 bg-primary/10 rounded-full mt-0.5 sm:mt-1"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mb-4 sm:mb-5 md:mb-6 bg-gray-50 rounded-lg p-2 sm:p-3 md:p-4 border border-gray-100">
          <h4 className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-gray-900 flex items-center">
            <Beaker className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-primary" />
            {t('applicationsUseCases')}
          </h4>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {category.applications?.slice(0, 3).map((application, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-2 sm:p-3 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:border-primary/30 hover:shadow-md h-20 sm:h-24 md:h-28 lg:h-32"
              >
                <div className="mb-1 sm:mb-2 flex h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {applicationIcons[(idx + 1) as keyof typeof applicationIcons]}
                </div>
                <span className="text-xs text-center font-medium font-secondary line-clamp-2">
                  {application.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full items-center gap-2 mt-auto">
          <Link href={`/products/category/${category.slug}`} className="w-full">
            <Button variant="default" className="w-full text-sm sm:text-base">
              {t('exploreCategory')}
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
