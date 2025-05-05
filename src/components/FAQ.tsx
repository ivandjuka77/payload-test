'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Product } from '@/payload-types'

export function FAQ({
  product,
  title,
  description,
}: {
  product: Product
  title: string
  description: string
}) {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 font-primary">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] font-secondary">
            {description}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {product.faq.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="border-b border-muted">
              <AccordionTrigger className="text-lg font-medium text-left font-primary py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-secondary pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
