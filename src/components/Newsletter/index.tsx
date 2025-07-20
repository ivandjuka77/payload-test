'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight, Mail, Linkedin, ExternalLink } from 'lucide-react'
import { toast } from 'sonner'
import Link from 'next/link'
import { cn } from '@/utilities/ui'
import { useTranslations, useLocale } from 'next-intl'

interface NewsletterProps {
  className?: string
  variant?: 'white' | 'blue'
}

export function Newsletter({ className, variant = 'white' }: NewsletterProps) {
  const [email, setEmail] = useState('')
  const t = useTranslations('newsletter')
  const locale = useLocale()

  // Debug logging
  console.log('Newsletter component - Current locale:', locale)
  console.log('Newsletter component - Translation test:', t('badge'))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success(t('toast.success'), {
      description: t('toast.description'),
    })
    setEmail('')
  }

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com/company/vup',
      label: 'LinkedIn',
      description: t('social.linkedin.description'),
      extendedDescription: t('social.linkedin.extendedDescription'),
      isPrimary: true,
    },
  ]

  return (
    <section
      className={cn(
        'w-full py-20 md:py-14',
        variant === 'white' ? 'bg-gray-50' : 'bg-primary text-white',
        className,
      )}
    >
      <div className="container px-4 md:px-6">
        <div className="border-t border-primary/10 pt-12 w-full" />
        <div className="text-center">
          <div
            className={cn(
              'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-6',
              variant === 'white' ? 'bg-primary/10 text-primary' : 'bg-white/10 text-white',
            )}
          >
            <Mail className="w-4 h-4 mr-2" />
            <span>
              {t('badge')} ({locale})
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-primary mb-6">
            {t('title')}
          </h2>
          <p
            className={cn(
              'text-xl font-secondary mb-10 max-w-2xl mx-auto',
              variant === 'white' ? 'text-muted-foreground' : 'text-white/80',
            )}
          >
            {t('description')}
          </p>
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto mb-16">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder={t('form.emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={cn(
                  'h-14 text-lg',
                  variant === 'white'
                    ? 'border-primary/20 focus-visible:ring-primary/30'
                    : 'bg-white/10 border-white/20 focus-visible:ring-white/30 text-white placeholder:text-white/70',
                )}
              />
              <Button
                type="submit"
                className={cn(
                  'h-14 px-8 text-lg',
                  variant === 'white' ? '' : 'bg-white text-primary hover:bg-white/90',
                )}
              >
                <span className="hidden sm:inline">{t('form.subscribe')}</span>
                <ArrowRight className="h-5 w-5 sm:ml-2" />
              </Button>
            </div>
            <p
              className={cn(
                'text-sm text-center mt-4 font-secondary',
                variant === 'white' ? 'text-muted-foreground' : 'text-white/80',
              )}
            >
              {t('form.privacyText')}{' '}
              <Link
                href={`/${locale}/privacy-policy`}
                className={cn(
                  'underline',
                  variant === 'white' ? 'hover:text-primary' : 'hover:text-white',
                )}
              >
                {t('form.privacyLink')}
              </Link>
              .
            </p>
          </form>
          <div
            className={cn(
              'border-t pt-12 max-w-5xl mx-auto mt-14',
              variant === 'white' ? 'border-primary/10' : 'border-white/10',
            )}
          />
          <div>
            <h3 className="text-2xl font-bold font-primary mb-6">{t('social.title')}</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {socialLinks.map((social) => (
                <div
                  key={social.label}
                  className={cn(
                    'p-6 rounded-xl border transition-all',
                    social.isPrimary ? 'md:col-span-2' : '',
                    variant === 'white'
                      ? social.isPrimary
                        ? 'bg-primary/5 border-primary/20 hover:border-primary/30'
                        : 'bg-white border-primary/10 hover:border-primary/30'
                      : social.isPrimary
                        ? 'bg-white/5 border-white/20 hover:border-white/30'
                        : 'bg-white/5 border-white/10 hover:border-white/30',
                    'hover:shadow-md',
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        'p-3 rounded-lg',
                        variant === 'white'
                          ? social.isPrimary
                            ? 'bg-primary/20'
                            : 'bg-primary/10'
                          : social.isPrimary
                            ? 'bg-white/20'
                            : 'bg-white/10',
                      )}
                    >
                      <social.icon
                        className={cn(
                          social.isPrimary ? 'w-8 h-8' : 'w-6 h-6',
                          variant === 'white' ? 'text-primary' : 'text-white',
                        )}
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <h4 className="font-primary font-semibold text-lg flex items-center gap-2">
                        {social.label}
                      </h4>
                      <p
                        className={cn(
                          'text-sm font-secondary mt-1',
                          variant === 'white' ? 'text-muted-foreground' : 'text-white/80',
                        )}
                      >
                        {social.description}
                      </p>
                    </div>
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'p-2 rounded-lg transition-colors',
                        variant === 'white'
                          ? social.isPrimary
                            ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                            : 'bg-primary/5 text-primary hover:bg-primary/10'
                          : social.isPrimary
                            ? 'bg-white text-primary hover:bg-white/90'
                            : 'bg-white/5 text-white hover:bg-white/10',
                      )}
                      aria-label={t('social.visitPage', { platform: social.label })}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>
                  {social.isPrimary && (
                    <div
                      className={cn(
                        'mt-4 text-sm font-secondary',
                        variant === 'white' ? 'text-muted-foreground' : 'text-white/80',
                      )}
                    >
                      <p>{social.extendedDescription}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
