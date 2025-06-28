'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

// --- SVG Flag Components ---

const USFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 30"
    width="24"
    height="16"
    className="rounded-sm"
  >
    <rect width="50" height="30" fill="#BB133E" />
    <path fill="#fff" d="M0 6h50v4H0zm0 8h50v4H0zm0 8h50v4H0zM0 0h50v4H0zm0 8h50v4H0z" />
    <rect width="25" height="18" fill="#002664" />
    <g fill="#fff">
      {/* Simplified stars pattern */}
      <path d="m5 3 1 2.5-2.5-1h3l-2.5 1zm5 0 1 2.5-2.5-1h3l-2.5 1zm5 0 1 2.5-2.5-1h3l-2.5 1zm5 0 1 2.5-2.5-1h3l-2.5 1z" />
      <path d="m2.5 6 1 2.5-2.5-1h3l-2.5 1zm5 0 1 2.5-2.5-1h3l-2.5 1zm5 0 1 2.5-2.5-1h3l-2.5 1zm5 0 1 2.5-2.5-1h3l-2.5 1z" />
      <path d="m5 9 1 2.5-2.5-1h3l-2.5 1zm5 0 1 2.5-2.5-1h3l-2.5 1zm5 0 1 2.5-2.5-1h3l-2.5 1zm5 0 1 2.5-2.5-1h3l-2.5 1z" />
      <path d="m2.5 12 1 2.5-2.5-1h3l-2.5 1zm5 0 1 2.5-2.5-1h3l-2.5 1zm5 0 1 2.5-2.5-1h3l-2.5 1zm5 0 1 2.5-2.5-1h3l-2.5 1z" />
      <path d="m5 15 1 2.5-2.5-1h3l-2.5 1zm5 0 1 2.5-2.5-1h3l-2.5 1zm5 0 1 2.5-2.5-1h3l-2.5 1zm5 0 1 2.5-2.5-1h3l-2.5 1z" />
    </g>
  </svg>
)

const SKFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 900 600"
    width="24"
    height="16"
    className="rounded-sm"
  >
    <path fill="#fff" d="M0 0h900v600H0z" />
    <path fill="#003893" d="M0 200h900v400H0z" />
    <path fill="#EE1C25" d="M0 400h900v200H0z" />
    <path
      fill="#EE1C25"
      stroke="#fff"
      strokeWidth="10"
      d="M233 180v110h100v-50h33v50h100V180l-116.5 180L233 180z"
    />
    <path fill="#003893" d="M333 220a67 37 0 0 1 0 74a67 37 0 0 1 0-74" />
  </svg>
)

const JPFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 900 600"
    width="24"
    height="16"
    className="rounded-sm"
  >
    <path fill="#fff" d="M0 0h900v600H0z" />
    <circle cx="450" cy="300" r="180" fill="#bc002d" />
  </svg>
)

const languages = [
  { code: 'en', name: 'English', flag: <USFlag /> },
  { code: 'sk', name: 'Slovak', flag: <SKFlag /> },
  { code: 'jp', name: 'Japanese', flag: <JPFlag /> },
]

export function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  const handleLanguageChange = (newLocale: string) => {
    // This will replace the current path with the new locale.
    // e.g., /en/about -> /sk/about
    router.replace(
      `/${newLocale}${pathname.startsWith(`/${locale}`) ? pathname.substring(locale.length + 1) : pathname}`,
    )
  }

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-10 px-2 lg:px-3">
          {currentLanguage.flag}
          <span className="hidden lg:inline ml-2 text-sm font-medium">
            {currentLanguage.code.toUpperCase()}
          </span>
          <ChevronDown size={16} className="ml-1 text-gray-500" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className="flex items-center gap-3 cursor-pointer"
          >
            {lang.flag}
            <span className="text-sm">{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function MobileLanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  const handleLanguageChange = (newLocale: string) => {
    router.replace(
      `/${newLocale}${pathname.startsWith(`/${locale}`) ? pathname.substring(locale.length + 1) : pathname}`,
    )
  }

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0]

  return (
    <div className="p-4">
      <p className="text-sm font-medium text-gray-700 mb-2">Select Language</p>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full justify-between h-10">
            <div className="flex items-center gap-2">
              {currentLanguage.flag}
              <span>{currentLanguage.name}</span>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[calc(100vw-5rem)]">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className="flex items-center gap-3 cursor-pointer"
            >
              {lang.flag}
              <span>{lang.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
