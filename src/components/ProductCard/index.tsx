'use client'

import Tag from '@/components/ui/tag'
import { Check, Beaker, ArrowUpRight, CheckCircle, Atom, FlaskConical } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Product } from '@/payload-types'
import { Media } from '@/components/Media'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { ProductInquiryModal } from '../ProductInquiryModal/index'
import { useTranslations } from 'next-intl'

export default function ProductCard({
  product,
  variant = 'default',
}: {
  product: Product
  variant?: 'default' | 'compact' | 'horizontal'
}) {
  const t = useTranslations('productCard')
  // Horizontal variant for full-width layout

  const applicationIcons = {
    1: <Atom />,
    2: <Beaker />,
    3: <FlaskConical />,
  }

  if (variant === 'horizontal') {
    return (
      <Link
        href={`/products/${product.slug}`}
        key={product.id}
        className="relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group block"
      >
        <div className="flex flex-col-reverse lg:flex-row h-full">
          {/* Content section */}
          <div className="p-6 sm:p-8 lg:px-12 lg:py-12 lg:w-3/5 flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 font-primary text-gray-900">
              {product.name}
            </h3>
            <span className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3 sm:mb-4">
              {t('casLabel')}
              <span className="font-normal">
                {product.technicalSpecifications?.casNumber || '123-45-67'}
              </span>
            </span>

            <p className="text-gray-600 mb-4 sm:mb-6 font-secondary text-sm sm:text-base leading-relaxed">
              {product.description}
            </p>

            {/* Key Properties */}
            {product.keyFeatures && product.keyFeatures.length > 0 && (
              <div className="mb-6 sm:mb-8">
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3 sm:mb-4">
                  {t('keyProperties')}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-md">
                  {product.keyFeatures.slice(0, 4).map((value, idx) => (
                    <div key={idx} className="flex items-center gap-2 sm:gap-3">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-xs sm:text-sm font-medium text-gray-700">
                        {value.feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Applications */}
            {product.applications && product.applications.length > 0 && (
              <div className="mb-6 sm:mb-8">
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3 sm:mb-4 flex items-center">
                  <Beaker className="h-4 w-4 mr-2 text-primary" />
                  {t('applications')}
                </h4>
                <div className="flex flex-wrap gap-2 max-w-md">
                  {product.applications.slice(0, 3).map((application, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs sm:text-sm"
                    >
                      {application.application}
                    </span>
                  ))}
                  {product.applications.length > 3 && (
                    <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs sm:text-sm">
                      {t('moreApplications', { count: product.applications.length - 3 })}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
              <Dialog>
                <DialogTrigger
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center justify-center gap-2 w-full xs:w-fit bg-primary text-white hover:bg-primary/90 px-4 sm:px-8 py-2 sm:py-3 rounded-md font-medium transition-colors text-sm sm:text-base"
                >
                  {t('requestQuote')}
                  <ArrowUpRight className="h-4 w-4" />
                </DialogTrigger>
                <DialogContent className="w-full !max-w-[90vw] md:!max-w-[70vw] rounded-md">
                  <ProductInquiryModal product={product} />
                </DialogContent>
              </Dialog>

              <Button
                variant="outline"
                className="w-full xs:w-auto px-4 sm:px-8 py-2 sm:py-3 rounded-md font-medium text-sm sm:text-base"
              >
                {t('viewDetails')}
              </Button>
            </div>
          </div>

          {/* Right image */}
          <div className="relative lg:w-2/5 h-48 sm:h-56 lg:h-auto overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
            {product.chemicalStructureImage ? (
              <Media
                resource={product.chemicalStructureImage}
                imgClassName="object-contain p-6 sm:p-8 h-full w-full"
              />
            ) : (
              <div className="text-gray-400 text-center">
                <Beaker className="h-8 sm:h-12 w-8 sm:w-12 mx-auto mb-2" />
                <span className="text-xs sm:text-sm">{t('chemicalStructure')}</span>
              </div>
            )}
            <Tag className="absolute top-3 sm:top-4 right-3 sm:right-4" type="product">
              {t('tag')}
            </Tag>
          </div>
        </div>
      </Link>
    )
  }

  // Original vertical layout for 'default' and 'compact' variants
  return (
    <Link
      href={`/products/${product.slug}`}
      key={product.id}
      className="group relative overflow-hidden rounded-lg sm:rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col h-full cursor-pointer"
    >
      <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 bg-gradient-to-b from-gray-300 to-white overflow-hidden flex items-center justify-center">
        {product.chemicalStructureImage && (
          <Media
            resource={product.chemicalStructureImage}
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
          <span className="text-xs sm:text-sm text-gray-500">
            {t('casLabel')} {product.technicalSpecifications?.casNumber || '123-45-67'}
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight font-primary">
            {product.name}
          </h3>
        </div>

        <div className="min-h-[2rem] sm:min-h-[3rem] md:min-h-[4rem]">
          <p className="text-muted-foreground font-secondary line-clamp-2 sm:line-clamp-3 text-sm sm:text-base">
            {product.description}
          </p>
        </div>

        <div className="my-4 sm:my-5 md:my-6 flex-1">
          <h4 className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-gray-900 uppercase tracking-wider">
            {t('keyProperties')}
          </h4>
          <div className="space-y-2 sm:space-y-3 border-l-2 border-primary/20 pl-2 sm:pl-3 md:pl-4">
            {product.keyFeatures?.slice(0, 3).map((value, idx) => (
              <div key={idx} className="flex items-center gap-2 sm:gap-3">
                <div className="flex h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-medium font-secondary text-gray-900">
                    {value.feature}
                  </span>
                  <div className="h-0.5 sm:h-1 w-8 sm:w-10 md:w-12 bg-primary/10 rounded-full mt-0.5 sm:mt-1"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {variant === 'default' && (
          <div className="mb-4 sm:mb-5 md:mb-6 bg-gray-50 rounded-lg p-2 sm:p-3 md:p-4 border border-gray-100 hidden md:block">
            <h4 className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-gray-900 flex items-center">
              <Beaker className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-primary" />
              {t('applicationsUseCases')}
            </h4>
            <div
              className={`grid gap-2 sm:gap-3 ${
                product.applications?.length === 1
                  ? 'grid-cols-1'
                  : product.applications?.length === 2
                    ? 'grid-cols-1 sm:grid-cols-2'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {product.applications?.slice(0, 3).map((application, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center p-2 sm:p-3 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:border-primary/30 hover:shadow-md h-20 sm:h-24 md:h-28 lg:h-32"
                >
                  <div className="mb-1 sm:mb-2 flex h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {applicationIcons[(idx + 1) as keyof typeof applicationIcons]}
                  </div>
                  <span className="text-xs text-center font-medium font-secondary line-clamp-2">
                    {application.application}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row w-full items-center gap-2 mt-auto">
          <Dialog>
            <DialogTrigger
              onClick={(e) => e.preventDefault()}
              className="w-full rounded-sm flex items-center justify-center bg-primary text-white hover:bg-primary/90 h-9 sm:h-10 text-xs sm:text-sm px-2 sm:w-3/5 truncate"
            >
              <span className="truncate">{t('requestQuote')}</span>
              <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2 flex-shrink-0" />
            </DialogTrigger>
            <DialogContent className=" w-full !max-w-[90vw] md:!max-w-[70vw] rounded-md">
              <ProductInquiryModal product={product} />
            </DialogContent>
          </Dialog>

          <Button variant="outline" className="w-full sm:w-2/5 text-xs sm:text-sm px-2 truncate">
            <span className="truncate">{t('viewDetails')}</span>
          </Button>
        </div>
      </div>
    </Link>
  )
}
