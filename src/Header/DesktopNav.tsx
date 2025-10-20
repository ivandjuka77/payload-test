'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ChevronDown,
  Factory,
  FlaskConical,
  Atom,
  Palette,
  ArrowRight,
  Microscope,
  Beaker,
  ClipboardCheck,
  Sparkles,
  Lightbulb,
  Check,
  ExternalLink,
} from 'lucide-react'
import { cn } from '@/utilities/ui'
import { Industry, Product, ProductCategory, Service } from '@/payload-types'
import { useTranslations } from 'next-intl'
import { useWindowSize } from './hooks/useWindowSize'

interface NavItem {
  name: string
  href: string
  hasDropdown?: boolean
}

interface DesktopNavProps {
  navItems: NavItem[]
  industries: Industry[]
  productCategories: ProductCategory[]
  services: Service[]
}

const serviceIcons = [
  <Microscope key="microscope" size={24} />,
  <Beaker key="beaker" size={24} />,
  <ClipboardCheck key="clipboard-check" size={24} />,
  <Sparkles key="sparkles" size={24} />,
  <Lightbulb key="lightbulb" size={24} />,
]

const productCategoryIcons = [
  <FlaskConical key="flask-conical" size={24} />,
  <Factory key="factory" size={24} />,
  <Atom key="atom" size={24} />,
  <Palette key="palette" size={24} />,
  <FlaskConical key="flask-conical" size={24} />,
  <Factory key="factory" size={24} />,
]

function IndustriesMegaMenu({
  onClose,
  industries,
}: {
  onClose: () => void
  industries: Industry[]
}) {
  const t = useTranslations('header')

  return (
    <div className="container mx-auto py-6 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {industries.map((industry) => {
          return (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group relative overflow-hidden rounded-lg border border-gray-100 aspect-[16/7]"
              onClick={onClose}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transform group-hover:scale-[1.01] transition-transform duration-300"
                //@ts-expect-error This is fine, we need .url from the media object
                style={{ backgroundImage: `url(${industry.featuredImage.url})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20 opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 transition-transform duration-300 ease-out group-hover:-translate-y-2">
                <div className="p-2.5">
                  <h3 className="text-md font-secondary font-medium text-white group-hover:text-blue-300 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-gray-300 line-clamp-2 opacity-85">
                    {industry.description}
                  </p>
                </div>
                <div className="h-0 overflow-hidden transition-all duration-300 ease-out group-hover:h-[60px] px-2.5 pb-2.5">
                  <div className="flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[50ms] z-10">
                    {industry.challenges?.slice(0, 2).map((challenge, index) => (
                      <Link
                        key={index}
                        href={`/industries/${industry.slug}#${challenge.challengeLink}`}
                        className="inline-flex text-[11px] px-2 py-0.5 bg-blue-500/20 hover:bg-blue-500/40 text-blue-300 duration-300 transition-colors rounded-full border border-blue-400/20"
                      >
                        {challenge.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
      <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
        <p className="text-sm text-gray-500">{t('industries.description')}</p>
        <Link
          href="/industries"
          className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center"
          onClick={onClose}
        >
          {t('industries.viewAll')}
          <ArrowRight size={14} className="ml-1" />
        </Link>
      </div>
    </div>
  )
}

function ProductsMegaMenu({
  onClose,
  productCategories,
}: {
  onClose: () => void
  productCategories: ProductCategory[]
}) {
  const t = useTranslations('header')

  const { height } = useWindowSize() // Get window height

  // Check for smaller screen height, default to false if height is not yet available
  const isCompact = height ? height <= 750 : false

  // Adjust item counts based on screen height
  const categoriesToShow = isCompact ? productCategories.slice(0, 6) : productCategories
  const featuredProductsCount = isCompact ? 2 : 3
  const applicationsCount = isCompact ? 1 : 2

  return (
    <div className="container mx-auto py-8 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categoriesToShow.map((productCategory, index) => {
          const featuredProducts = productCategory.featuredProducts as Product[]
          return (
            <Link
              key={index}
              href={`/products/category/${productCategory.slug}`}
              className="group p-5 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
              onClick={onClose}
            >
              <div className="flex flex-col">
                <div className="flex items-start gap-4">
                  <div className="text-blue-500 mt-1">{productCategoryIcons[index]}</div>
                  <div>
                    <h3 className="text-lg font-secondary leading-tight font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      {productCategory.name}
                    </h3>
                    <p className="mt-1 text-xs font-secondary text-gray-500 leading-relaxed line-clamp-2">
                      {productCategory.description}
                    </p>
                  </div>
                </div>
                <div className="mt-3 ml-8">
                  <ul className="space-y-1">
                    {featuredProducts.slice(0, featuredProductsCount).map((item, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-center">
                        <ArrowRight size={10} className="mr-1.5 text-blue-500" />
                        <Link
                          href={`/products/${item.slug}`}
                          className="hover:text-blue-600 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-3 ml-8 flex flex-wrap gap-2">
                  {productCategory.applications?.slice(0, applicationsCount).map((app, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
                    >
                      {app.title}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
      <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
        <p className="text-sm text-gray-500">{t('products.description')}</p>
        <Link
          href="/products"
          className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center"
          onClick={onClose}
        >
          {t('products.viewAll')}
          <ArrowRight size={14} className="ml-1" />
        </Link>
      </div>
    </div>
  )
}

function ServicesMegaMenu({ onClose, services }: { onClose: () => void; services: Service[] }) {
  const t = useTranslations('header')

  return (
    <div className="container mx-auto py-8 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Link
            key={index}
            href={`/services/${service.slug}`}
            className="group p-5 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
            onClick={onClose}
          >
            <div className="flex items-start gap-4">
              <div className="text-blue-500 mt-1">{serviceIcons[index]}</div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-secondary font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-1 text-xs font-secondary text-gray-500 leading-relaxed line-clamp-2">
                  {service.description}
                </p>
                {service.features && (
                  <ul className="mt-2 space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-center">
                        <Check size={10} className="mr-1.5 text-blue-500" />
                        <span>{feature.feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Link>
        ))}

        {/* VUP Cosmetics Special Link */}
        <Link
          href="http://vupcosmetics.sk/"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-5 rounded-lg bg-green-100 hover:bg-green-200 transition-colors border border-green-300"
          onClick={onClose}
        >
          <div className="flex items-start gap-4">
            <div className="text-green-600 mt-1">
              <Sparkles size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-secondary font-medium flex items-center gap-x-2 text-gray-900 group-hover:text-green-700 transition-colors">
                  {t('vupCosmetics.title')} <ExternalLink size={16} />
                </h3>
              </div>
              <p className="mt-1 text-xs font-secondary text-gray-600 leading-relaxed line-clamp-2">
                {t('vupCosmetics.description')}
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
        <p className="text-sm text-gray-500">{t('services.description')}</p>
        <Link
          href="/services"
          className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center"
          onClick={onClose}
        >
          {t('services.viewAll')}
          <ArrowRight size={14} className="ml-1" />
        </Link>
      </div>
    </div>
  )
}

export function DesktopNav({ navItems, industries, productCategories, services }: DesktopNavProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const t = useTranslations('header')

  return (
    <>
      <nav className="hidden lg:flex items-center space-x-4 lg:space-x-4 xl:space-x-8 ">
        {navItems.map((item) =>
          item.hasDropdown ? (
            <div key={item.name} className="relative group">
              <button
                className="font-primary text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1"
                onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                onMouseEnter={() => setActiveDropdown(item.name)}
              >
                {item.name}
                <ChevronDown
                  size={16}
                  className={cn(
                    'transition-transform duration-200',
                    activeDropdown === item.name ? 'rotate-180' : '',
                  )}
                />
              </button>
            </div>
          ) : (
            <Link
              key={item.name}
              href={item.href}
              className="font-primary text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              {item.name}
            </Link>
          ),
        )}
      </nav>

      {/* Products Mega Menu */}
      <div
        className={cn(
          'absolute left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-20 hidden lg:block top-full overflow-hidden',
          activeDropdown === t('nav.products')
            ? 'animate-in fade-in duration-300 ease-out max-h-[800px] transition-[max-height,opacity,transform]'
            : 'animate-out fade-out duration-200 ease-in max-h-0 opacity-0 -translate-y-2 pointer-events-none',
        )}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <ProductsMegaMenu
          onClose={() => setActiveDropdown(null)}
          productCategories={productCategories}
        />
      </div>

      {/* Services Mega Menu */}
      <div
        className={cn(
          'absolute left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-20 hidden lg:block top-full overflow-hidden',
          activeDropdown === t('nav.services')
            ? 'animate-in fade-in duration-300 ease-out max-h-[800px] transition-[max-height,opacity,transform]'
            : 'animate-out fade-out duration-200 ease-in max-h-0 opacity-0 -translate-y-2 pointer-events-none',
        )}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <ServicesMegaMenu onClose={() => setActiveDropdown(null)} services={services} />
      </div>

      {/* Industries Mega Menu */}
      <div
        className={cn(
          'absolute left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-20 hidden lg:block top-full overflow-hidden',
          activeDropdown === t('nav.industries')
            ? 'animate-in fade-in duration-300 ease-out max-h-[800px] transition-[max-height,opacity,transform]'
            : 'animate-out fade-out duration-200 ease-in max-h-0 opacity-0 -translate-y-2 pointer-events-none',
        )}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <IndustriesMegaMenu onClose={() => setActiveDropdown(null)} industries={industries} />
      </div>
    </>
  )
}
