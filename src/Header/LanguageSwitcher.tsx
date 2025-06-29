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
import flagUs from '@/../public/assets/flags/flag-us.svg'
import flagSk from '@/../public/assets/flags/flag-sk.svg'
import flagJp from '@/../public/assets/flags/flag-jp.svg'
import Image from 'next/image'

const languages = [
  { code: 'en', name: 'English', flag: flagUs },
  { code: 'sk', name: 'Slovak', flag: flagSk },
  { code: 'jp', name: 'Japanese', flag: flagJp },
]

export function LanguageSwitcher() {
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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-10 px-2 lg:px-3">
          <Image src={currentLanguage.flag} alt={currentLanguage.name} width={20} height={20} />
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
            <Image src={lang.flag} alt={lang.name} width={20} height={20} />
            <span className="text-sm font-medium">{lang.name}</span>
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
              <Image src={currentLanguage.flag} alt={currentLanguage.name} width={20} height={20} />
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
              <Image src={lang.flag} alt={lang.name} width={20} height={20} />
              <span className="text-sm font-medium">{lang.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
