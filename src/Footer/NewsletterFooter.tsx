'use client'

import { useTranslations } from 'next-intl'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function NewsletterFooter() {
  const t = useTranslations('footer.newsletter')
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here,
    // e.g., send the email to your newsletter service.
    console.log('Subscribed with:', email)
    setEmail('') // Optionally clear the input after submission
  }
  return (
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
      <div className="text-center md:text-left">
        <h3 className="font-primary text-xl font-bold mb-2">{t('title')}</h3>
        <p className="font-secondary text-muted-foreground">{t('description')}</p>
      </div>

      <form onSubmit={handleSubscribe} className="w-full">
        <div className="flex flex-col gap-2 sm:flex-row">
          <Input
            type="email"
            placeholder={t('emailPlaceholder')}
            className="h-12 flex-1 border-primary/20 focus-visible:ring-primary/30"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" className="w-full px-6 sm:w-auto">
            {t('subscribeButton')}
          </Button>
        </div>
        <p className="font-secondary mt-2 text-xs text-muted-foreground">{t('privacyNotice')}</p>
      </form>
    </div>
  )
}
