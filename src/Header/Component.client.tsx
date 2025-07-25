'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/utilities/ui'
import { Industry, ProductCategory, Service } from '@/payload-types'
import { SearchDialog } from '@/components/Search'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { LanguageSwitcher } from './LanguageSwitcher'
import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'

interface NavbarProps {
  industries: Industry[]
  productCategories: ProductCategory[]
  services: Service[]
}

export default function Navbar({ industries, productCategories, services }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const t = useTranslations('header')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: t('nav.about'), href: '/about-us' },
    { name: t('nav.products'), href: '/products', hasDropdown: true },
    { name: t('nav.industries'), href: '/industries', hasDropdown: true },
    { name: t('nav.services'), href: '/services', hasDropdown: true },
    { name: t('nav.sustainability'), href: '/sustainability' },
    { name: t('nav.news'), href: '/news' },
    { name: t('nav.career'), href: '/career' },
    { name: t('nav.contact'), href: '/contact' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm',
        isScrolled ? 'py-4' : 'py-6',
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <Image
            src="/assets/logo-vup.png"
            alt="VUP Logo"
            width={150}
            height={50}
            className="h-auto w-28 lg:w-[120px] xl:w-[150px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav
          navItems={navItems}
          industries={industries}
          productCategories={productCategories}
          services={services}
        />

        {/* Right side actions */}
        <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-5">
          <SearchDialog>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-700 hover:text-blue-600 h-10 w-10"
            >
              <Search size={22} />
            </Button>
          </SearchDialog>

          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-gray-700 hover:text-blue-600 h-10 w-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
        industries={industries}
        productCategories={productCategories}
        services={services}
      />
    </header>
  )
}
