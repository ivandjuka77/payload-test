'use client'

import { ArrowRight, Handshake } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function SustainabilityPartner() {
  return (
    <section className="bg-gray-50 pb-24">
      <div className="container ">
        <div className="bg-gradient-to-br from-[hsl(149.71,100%,40%)] to-[hsl(149.71,100%,40%)]/80 rounded-2xl p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              <Handshake className="w-4 h-4 mr-2" />
              <span>Partner with Us</span>
            </div>

            <h2 className="text-4xl font-bold font-primary mb-6">
              Partner with a Sustainable Leader
            </h2>

            <p className="text-xl mb-8 font-secondary">
              Our EcoVadis Silver rating and long-standing certifications are testaments to our
              dedication. Let&apos;s discuss how our commitment can support your sustainability
              objectives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-[hsl(149.71,100%,40%)] hover:bg-white/90"
              >
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                <Link href="/certifications" className="inline-flex items-center gap-2">
                  View Our Certifications
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
