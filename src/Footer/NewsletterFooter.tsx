'use client'

import { useTranslations } from 'next-intl'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { toast } from 'sonner'
import { subscribeToNewsletter } from '@/actions/productActions'

export default function NewsletterFooter() {
  const t = useTranslations('footer.newsletter')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await subscribeToNewsletter({ email })
      if (result.success) {
        toast.success('Success!', {
          description: result.message,
        })
        setEmail('')
      } else {
        toast.error('Error', {
          description: result.message,
        })
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      toast.error('Error', {
        description: 'Failed to subscribe. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
      <div className="text-center md:text-left">
        <h3 className="text-primary font-primary text-2xl font-bold mb-2">{t('title')}</h3>
        <p className="font-secondary text-muted-foreground">{t('description')}</p>
      </div>

      <form onSubmit={handleSubscribe} className="w-full">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Input
            type="email"
            placeholder={t('emailPlaceholder')}
            className="h-10 flex-1 border-primary/20 text-black focus-visible:ring-primary/30"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" disabled={isSubmitting} className="w-full px-6 sm:w-auto h-10">
            {isSubmitting ? 'Subscribing...' : t('subscribeButton')}
          </Button>
        </div>
        <p className="font-secondary mt-2 text-xs text-muted-foreground">{t('privacyNotice')}</p>
      </form>
    </div>
  )
}
