'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function NewsletterFooter() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Subscribe')
  }
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-xl font-bold mb-2 font-primary">Stay informed with VUP Insights</h3>
        <p className="text-muted-foreground font-secondary">
          Subscribe to our newsletter for industry overviews, chemical trends, and GTC updates.
        </p>
      </div>

      <form onSubmit={handleSubscribe} className="flex gap-2">
        <div className="flex-1">
          <Input
            type="email"
            placeholder="Your email address"
            className="h-12 border-primary/20 focus-visible:ring-primary/30"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p className="text-xs text-muted-foreground mt-2 font-secondary">
            By subscribing, you agree to our Privacy Policy.
          </p>
        </div>
        <Button type="submit" className="h-12 px-6">
          Subscribe
        </Button>
      </form>
    </div>
  )
}
