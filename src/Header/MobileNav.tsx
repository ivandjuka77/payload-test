'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  X,
  ChevronDown,
  Factory,
  FlaskConical,
  Atom,
  Palette,
  Microscope,
  Beaker,
  ClipboardCheck,
  Sparkles,
  Lightbulb,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/utilities/ui'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Industry, ProductCategory, Service } from '@/payload-types'
import { useTranslations } from 'next-intl'
import { LanguageSwitcher } from './LanguageSwitcher'
import Image from 'next/image'

interface NavItem {
  name: string
  href: string
  hasDropdown?: boolean
}

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
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

export function MobileNav({
  isOpen,
  onClose,
  navItems,
  industries,
  productCategories,
  services,
}: MobileNavProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const t = useTranslations('header')

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <div className={cn('fixed inset-0 z-40 lg:hidden', isOpen ? 'block' : 'hidden')}>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Menu Panel */}
      <div
        className={cn(
          'fixed right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <ScrollArea className="h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Link href="/" onClick={onClose}>
              <Image
                src="/assets/logo-vup.png"
                alt="VUP Logo"
                width={150}
                height={50}
                className="h-auto w-28 "
              />
            </Link>
            <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
              <X size={20} />
            </Button>
          </div>

          {/* Navigation Items */}
          <div className="py-4">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      className="w-full flex items-center justify-between px-6 py-3 text-left font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      <span className="font-primary text-lg">{item.name}</span>
                      <ChevronDown
                        size={16}
                        className={cn(
                          'transition-transform duration-200',
                          activeDropdown === item.name ? 'rotate-180' : '',
                        )}
                      />
                    </button>

                    {/* Dropdown Content */}
                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-300 ease-in-out',
                        activeDropdown === item.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
                      )}
                    >
                      {item.name === t('nav.products') && (
                        <div className="bg-white px-4 py-2">
                          {productCategories.map((category, index) => (
                            <Link
                              key={index}
                              href={`/products/category/${category.slug}`}
                              className="block py-2 px-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                              onClick={onClose}
                            >
                              <div className="flex items-center gap-2">
                                <div className="text-blue-500">{productCategoryIcons[index]}</div>
                                <div>
                                  <div className="font-medium">{category.name}</div>
                                  <div className="text-xs text-gray-500 line-clamp-1">
                                    {category.description}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                          <Link
                            href="/products"
                            className="block py-2 px-2 mt-2 text-sm font-medium text-blue-600 border-t border-gray-200 pt-3"
                            onClick={onClose}
                          >
                            {t('products.viewAll')} →
                          </Link>
                        </div>
                      )}

                      {item.name === t('nav.services') && (
                        <div className="bg-white px-4 py-2">
                          {services.map((service, index) => (
                            <Link
                              key={index}
                              href={`/services/${service.slug}`}
                              className="block py-2 px-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                              onClick={onClose}
                            >
                              <div className="flex items-center gap-2">
                                <div className="text-blue-500">{serviceIcons[index]}</div>
                                <div>
                                  <div className="font-medium">{service.title}</div>
                                  <div className="text-xs text-gray-500 line-clamp-1">
                                    {service.description}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}

                          {/* VUP Cosmetics Special Link */}
                          <Link
                            href="http://vupcosmetics.sk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block py-2 px-2 text-sm bg-green-50 rounded-lg hover:bg-green-100 transition-colors my-2"
                            onClick={onClose}
                          >
                            <div className="flex items-center gap-2">
                              <div className="text-green-600">
                                <Sparkles size={24} />
                              </div>
                              <div>
                                <div className="font-medium text-gray-900">
                                  {t('vupCosmetics.title')}
                                </div>
                                <div className="text-xs text-gray-600 line-clamp-1">
                                  {t('vupCosmetics.descriptionShort')}
                                </div>
                              </div>
                            </div>
                          </Link>

                          <Link
                            href="/services"
                            className="block py-2 px-2 mt-2 text-sm font-medium text-blue-600 border-t border-gray-200 pt-3"
                            onClick={onClose}
                          >
                            {t('services.viewAll')} →
                          </Link>
                        </div>
                      )}

                      {item.name === t('nav.industries') && (
                        <div className="bg-white px-4 py-2">
                          {industries.map((industry) => (
                            <Link
                              key={industry.slug}
                              href={`/industries/${industry.slug}`}
                              className="block py-2 px-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                              onClick={onClose}
                            >
                              <div className="font-medium">{industry.name}</div>
                              <div className="text-xs text-gray-500 line-clamp-1">
                                {industry.description}
                              </div>
                            </Link>
                          ))}
                          <Link
                            href="/industries"
                            className="block py-2 px-2 mt-2 text-sm font-medium text-blue-600 border-t border-gray-200 pt-3"
                            onClick={onClose}
                          >
                            {t('industries.viewAll')} →
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-6 py-3 font-primary text-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                    onClick={onClose}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Language Selector */}
          <div className="border-t border-gray-100 p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">{t('language.label')}</span>
              <LanguageSwitcher />
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
