'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Search,
  Globe,
  Menu,
  X,
  ChevronDown,
  Factory,
  FlaskConical,
  Atom,
  FileText,
  Home,
  Palette,
  ArrowRight,
  Microscope,
  Beaker,
  ClipboardCheck,
  Sparkles,
  Lightbulb,
  Check,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn } from '@/utilities/ui'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Industry, Product, ProductCategory, Service } from '@/payload-types'

const navItems = [
  { name: 'About', href: '/about-us' },
  {
    name: 'Products',
    href: '/products',
    hasDropdown: true,
  },
  {
    name: 'Industries',
    href: '/industries',
    hasDropdown: true,
  },
  {
    name: 'Services',
    href: '/services',
    hasDropdown: true,
  },
  { name: 'Sustainability', href: '/sustainability' },
  { name: 'News', href: '/news' },
  { name: 'Career', href: '/career' },
  { name: 'Contact', href: '/contact' },
]

const serviceIcons = [
  <Microscope key="microscope" size={24} />,
  <Beaker key="beaker" size={24} />,
  <ClipboardCheck key="clipboard-check" size={24} />,
  <Sparkles key="sparkles" size={24} />,
  <Lightbulb key="lightbulb" size={24} />,
]

const languages = [
  { code: 'EN', name: 'English' },
  { code: 'SK', name: 'Slovak' },
  { code: 'JPN', name: 'Japanese' },
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
  return (
    <div className="container mx-auto py-6 px-6">
      <div className="grid grid-cols-3 gap-6">
        {industries.map((industry) => {
          return (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group relative overflow-hidden rounded-lg border border-gray-100 aspect-[16/7]"
              onClick={onClose}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transform group-hover:scale-[1.01] transition-transform duration-300"
                //@ts-expect-error This is fine, we need .url from the media object
                style={{ backgroundImage: `url(${industry.featuredImage.url})` }}
              />

              {/* Overlay - Enhanced on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20 opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Content Container - Animate position */}
              <div className="absolute inset-x-0 bottom-0 transition-transform duration-300 ease-out group-hover:-translate-y-2">
                {/* Main Content */}
                <div className="p-2.5">
                  <h3 className="text-md font-secondary font-medium text-white group-hover:text-blue-300 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-gray-300 line-clamp-2 opacity-85">
                    {industry.description}
                  </p>
                </div>

                {/* Applications badges - Hidden by default, shown on hover */}
                <div className="h-0 overflow-hidden transition-all duration-300 ease-out group-hover:h-[60px] px-2.5 pb-2.5">
                  <div className="flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[50ms] z-10">
                    {industry.challenges?.slice(0, 2).map((challenge: any, index: number) => (
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
        <p className="text-sm text-gray-500">
          Explore how VUP chemistry solutions serve various industries
        </p>
        <Link
          href="/industries"
          className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center"
          onClick={onClose}
        >
          View all industries
          <ArrowRight size={14} className="ml-1" />
        </Link>
      </div>
    </div>
  )
}

interface NavbarProps {
  industries: Industry[]
  productCategories: ProductCategory[]
  services: Service[]
}

export default function Navbar({ industries, productCategories, services }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchDialogOpen, setIsSearchDialogOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  // const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  // Quick links for search dialog when no query is entered
  const quickLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: FileText },
    { name: 'Products', href: '/products', icon: FlaskConical },
    { name: 'Industries', href: '/industries', icon: Factory },
    { name: 'Research', href: '/research', icon: Atom },
    { name: 'Sustainability', href: '/sustainability', icon: Palette },
  ]

  // Filter search results based on query
  //TODO: Connect with payload search
  const getSearchResults = () => {
    if (!searchQuery.trim()) return []

    const allItems = [
      ...navItems.map((item) => ({
        name: item.name,
        href: item.href,
        type: 'Page',
      })),
      ...industries.map((industry) => ({
        name: industry.name,
        href: `/industries/${industry.slug}`,
        type: 'Industry',
      })),
    ]

    return allItems.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
  }

  const featuredProducts = productCategories.flatMap(
    (category) => category.featuredProducts,
  ) as Product[]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm',
        isScrolled ? 'py-4' : 'py-6',
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <div className="flex items-center">
            <span className="font-primary font-bold text-3xl ">VUP</span>
            <span className="text-sm font-secondary ml-2 text-gray-600">Chemistry</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div key={item.name} className="relative group">
                <button
                  className="font-primary text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1"
                  onClick={() => toggleDropdown(item.name)}
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

        {/* Right side actions */}
        <div className="flex items-center space-x-5">
          {/* Search Dialog Trigger */}
          <Dialog open={isSearchDialogOpen} onOpenChange={setIsSearchDialogOpen}>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700 hover:text-blue-600 h-10 w-10"
              >
                <Search size={22} />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px] p-0">
              <div className="flex flex-col h-[450px]">
                <div className="flex items-center border-b px-3">
                  <Search className="mr-2 h-4 w-4 shrink-0 text-gray-500" />
                  <Input
                    className="flex h-12 w-full ring-0 bg-transparent py-3 text-sm outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50 border-0 focus-visible:ring-0 focus:ring-0 focus:outline-none focus-visible:outline-none focus:border-0 focus-visible:border-0 shadow-none"
                    placeholder="Type a command or search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    style={{ boxShadow: 'none' }}
                  />
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 text-gray-500"
                      onClick={() => setIsSearchDialogOpen(false)}
                    >
                      <X size={12} />
                    </Button>
                  </div>
                </div>
                <ScrollArea className="flex-1 px-3 py-2">
                  {searchQuery.trim() === '' ? (
                    <div className="py-2">
                      <h4 className="mb-2 text-xs font-semibold text-gray-500">Links</h4>
                      <div className="space-y-1">
                        {quickLinks.map((link, index) => (
                          <Link
                            key={index}
                            href={link.href}
                            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => setIsSearchDialogOpen(false)}
                          >
                            <link.icon className="h-4 w-4 text-gray-500" />
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="py-2">
                      <h4 className="mb-2 text-xs font-semibold text-gray-500">Search Results</h4>
                      <div className="space-y-1">
                        {getSearchResults().length > 0 ? (
                          getSearchResults().map((result, index) => (
                            <Link
                              key={index}
                              href={result.href}
                              className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => setIsSearchDialogOpen(false)}
                            >
                              <span>{result.name}</span>
                              <span className="text-xs text-gray-500">{result.type}</span>
                            </Link>
                          ))
                        ) : (
                          <div className="px-3 py-6 text-center text-sm text-gray-500">
                            No results found for &quot;{searchQuery}&quot;
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </ScrollArea>
              </div>
            </DialogContent>
          </Dialog>

          {/* Language selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Select language">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem key={lang.code}>{lang.code}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile menu toggle */}
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

      {/* Products Mega Menu */}
      <div
        className={cn(
          'absolute left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-20 hidden lg:block top-full overflow-hidden',
          activeDropdown === 'Products'
            ? 'animate-in fade-in duration-300 ease-out max-h-[800px] transition-[max-height,opacity,transform]'
            : 'animate-out fade-out duration-200 ease-in max-h-0 opacity-0 -translate-y-2 pointer-events-none',
        )}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="container mx-auto py-8 px-6">
          <div className="grid grid-cols-3 gap-6">
            {productCategories.map((productCategory, index) => (
              <Link
                key={index}
                href={`/products/category/${productCategory.slug}`}
                className="group p-5 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
              >
                <div className="flex flex-col">
                  <div className="flex items-start gap-4">
                    <div className="text-blue-500 mt-1">{productCategoryIcons[index]}</div>
                    <div>
                      <h3 className="text-lg font-secondary font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        {productCategory.name}
                      </h3>
                      <p className="mt-1 text-xs font-secondary text-gray-500 leading-relaxed line-clamp-2">
                        {productCategory.description}
                      </p>
                    </div>
                  </div>

                  {/* Products */}
                  <div className="mt-3 ml-8">
                    <ul className="space-y-1">
                      {featuredProducts.slice(0, 3).map((item, idx) => (
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

                  {/* Applications as badges */}
                  <div className="mt-3 ml-8 flex flex-wrap gap-2">
                    {productCategory.applications?.slice(0, 2).map((app, idx) => (
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
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
            <p className="text-sm text-gray-500">
              Discover our complete range of chemical products and solutions
            </p>
            <Link
              href="/products"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center"
            >
              View all products
              <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Industries Mega Menu */}
      <div
        className={cn(
          'absolute left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-20 hidden lg:block top-full overflow-hidden',
          activeDropdown === 'Industries'
            ? 'animate-in fade-in duration-300 ease-out max-h-[800px] transition-[max-height,opacity,transform]'
            : 'animate-out fade-out duration-200 ease-in max-h-0 opacity-0 -translate-y-2 pointer-events-none',
        )}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <IndustriesMegaMenu onClose={() => setActiveDropdown(null)} industries={industries} />
      </div>

      {/* Services Mega Menu */}
      <div
        className={cn(
          'absolute left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-20 hidden lg:block top-full overflow-hidden',
          activeDropdown === 'Services'
            ? 'animate-in fade-in duration-300 ease-out max-h-[800px] transition-[max-height,opacity,transform]'
            : 'animate-out fade-out duration-200 ease-in max-h-0 opacity-0 -translate-y-2 pointer-events-none',
        )}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="container mx-auto py-8 px-6">
          <div className="grid grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={`/services/${service.slug}`}
                className="group p-5 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
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
          </div>
          <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
            <p className="text-sm text-gray-500">
              Partner with us for end-to-end chemical solutions tailored to your business
            </p>
            <Link
              href="/services"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center"
            >
              View all services
              <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {/* TODO: Fix mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute inset-x-0 top-full bg-white shadow-lg animate-in fade-in duration-300 ease-out slide-in-from-top-1">
          <nav className="container mx-auto py-8 px-6 flex flex-col space-y-5">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <>
                    <button
                      className="font-secondary text-xl py-3 border-b border-gray-100 text-gray-800 hover:text-blue-600 transition-colors w-full text-left flex items-center justify-between"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {item.name}
                      <ChevronDown
                        size={20}
                        className={cn(
                          'transition-transform duration-200',
                          activeDropdown === item.name ? 'rotate-180' : '',
                        )}
                      />
                    </button>

                    {activeDropdown === 'Products' && item.name === 'Products' && (
                      <div className="pl-4 mt-3 space-y-4">
                        {featuredProducts.map((product, index) => (
                          <Link
                            key={index}
                            href={product.href}
                            className="block py-2 px-3 border border-gray-100 rounded-md text-gray-700 hover:text-blue-600 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="flex items-center gap-2">
                              <product.icon size={16} className="text-blue-500" />
                              <span className="font-medium">{product.title}</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">{product.description}</p>
                            <div className="mt-2">
                              <ul className="text-xs text-gray-600 space-y-1">
                                {product.products.map((item, idx) => (
                                  <li key={idx} className="flex items-center">
                                    <ArrowRight size={8} className="mr-1 text-blue-500" />
                                    <Link
                                      href={item.href}
                                      className="hover:text-blue-600 transition-colors"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-1">
                              {product.applications.map((app, idx) => (
                                <Link
                                  key={idx}
                                  href={app.href}
                                  onClick={(e) => e.stopPropagation()}
                                  className="text-xs px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
                                >
                                  {app.name}
                                </Link>
                              ))}
                            </div>
                          </Link>
                        ))}
                        <Link
                          href="/products"
                          className="py-2 text-blue-600 hover:text-blue-700 transition-colors font-medium flex items-center"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          View all products
                          <ArrowRight size={12} className="ml-1" />
                        </Link>
                      </div>
                    )}

                    {activeDropdown === 'Industries' && item.name === 'Industries' && (
                      <div className="pl-4 mt-3 space-y-3">
                        {industries.map((industry) => {
                          return (
                            <Link
                              key={industry.slug}
                              href={`/industries/${industry.slug}`}
                              className="block py-2 px-3 border border-gray-100 rounded-md text-gray-700 hover:text-blue-600 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <div className="flex items-center gap-2">
                                <div
                                  className="w-12 h-8 rounded bg-cover bg-center flex-shrink-0"
                                  style={{
                                    backgroundImage: `url(${industry.featuredImage})`,
                                  }}
                                />
                                <span className="font-medium">{industry.name}</span>
                              </div>
                              <p className="text-xs text-gray-500 mt-1">{industry.description}</p>
                            </Link>
                          )
                        })}
                        <Link
                          href="/industries"
                          className="py-2 text-blue-600 hover:text-blue-700 transition-colors font-medium flex items-center"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          View all industries
                          <ArrowRight size={12} className="ml-1" />
                        </Link>
                      </div>
                    )}

                    {activeDropdown === 'Services' && item.name === 'Services' && (
                      <div className="pl-4 mt-3 space-y-4">
                        {serviceCategories.map((service, index) => (
                          <Link
                            key={index}
                            href={service.href}
                            className="block py-2 px-3 border border-gray-100 rounded-md text-gray-700 hover:text-blue-600 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="flex items-center gap-2">
                              <service.icon size={16} className="text-blue-500" />
                              <span className="font-medium">{service.title}</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">{service.description}</p>
                            {service.features && (
                              <div className="mt-2 grid grid-cols-2 gap-x-2 gap-y-1">
                                {service.features.map((feature, idx) => (
                                  <div
                                    key={idx}
                                    className="text-xs text-gray-600 flex items-center"
                                  >
                                    <ArrowRight
                                      size={8}
                                      className="mr-1 text-blue-500 flex-shrink-0"
                                    />
                                    <span className="truncate">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          className="py-2 text-blue-600 hover:text-blue-700 transition-colors font-medium flex items-center"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          View all services
                          <ArrowRight size={12} className="ml-1" />
                        </Link>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="font-secondary text-xl py-3 border-b border-gray-100 text-gray-800 hover:text-blue-600 transition-colors block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
