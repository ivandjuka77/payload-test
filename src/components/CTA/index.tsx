'use client'

import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'

interface ContactCTAProps {
  title: string
  description: string
}

export function ContactCTA({ title, description }: ContactCTAProps) {
  return (
    <section className="w-full py-16 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-primary text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            {title}
          </h2>
          <p className="font-secondary text-lg text-muted-foreground mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Contact Our Experts
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
