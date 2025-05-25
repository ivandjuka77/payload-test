import Link from 'next/link'
import { Button } from '../ui/button'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/utilities/ui'

interface SimpleCTAProps {
  cta: {
    title: string
    description: string
    links: { link: { url: string; label: string } }[]
  }
  variant?: 'default' | 'sustainability'
}

export default function SimpleCTA({ cta, variant = 'default' }: SimpleCTAProps) {
  return (
    <div
      className={cn(
        'mt-12 sm:mt-16 md:mt-20 lg:mt-24 flex flex-col md:flex-row items-center justify-between p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg sm:rounded-xl',
        variant === 'default' && 'bg-gradient-to-r from-primary to-primary md:to-primary/20',
        variant === 'sustainability' &&
          'bg-gradient-to-br from-[#00CC65] md:via-[#00CC65]/60 md:to-[#00CC65]/20 via-[#00CC65] to-[#00CC65]',
      )}
    >
      <div className="mb-6 md:mb-0 text-center md:text-left">
        <h3 className="font-bold font-primary mb-2 sm:mb-3 text-xl sm:text-xl md:text-2xl lg:text-3xl text-white">
          {cta?.title}
        </h3>
        <p className="font-secondary text-white/90 text-base sm:text-lg max-w-xl">
          {cta?.description}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto justify-center md:justify-end">
        {(cta?.links || []).map(({ link }: { link: { url: string; label: string } }, i: number) => {
          return (
            <Button
              key={i}
              size="lg"
              className={cn(
                'shadow-md w-full sm:w-auto',
                variant === 'default' &&
                  'bg-white text-primary md:bg-primary hover:bg-primary/90 md:text-white',
                variant === 'sustainability' &&
                  'md:bg-[#00CC65] md:hover:bg-[#00b359] md:text-white bg-white text-[#00CC65]',
              )}
            >
              <Link href={link?.url || '#'} className="flex items-center justify-center w-full">
                {link?.label}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )
        })}
      </div>
    </div>
  )
}
