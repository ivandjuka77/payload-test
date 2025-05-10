import Link from 'next/link'
import { ArrowRight, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProductPageHero from '@/components/ProductPageHero'
import ProductFilter from '@/components/ProductFilter'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const products = await payload.find({
    collection: 'products',
    depth: 1,
    limit: 100,
    overrideAccess: false,
  })

  console.log('products.docs', products.docs)

  return (
    <main className="flex min-h-screen flex-col">
      <ProductPageHero />

      <ProductFilter products={products.docs} />

      <section className="bg-primary pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 rounded-full bg-primary/10 text-primary mb-6">
              <MessageSquare className="h-6 w-6" />
            </div>

            <h2 className="text-3xl md:text-4xl text-white font-bold font-primary mb-4">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>

            <p className="text-lg text-white font-secondary mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you identify the right chemical solutions for
              your specific needs or create custom formulations tailored to your requirements.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="py-6 px-8 text-base font-medium group">
                <Link href="/contact" className="flex items-center">
                  Contact Our Specialists
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button asChild variant="outline" className="py-6 px-8 text-base font-medium">
                <Link href="/custom-solutions">Learn About Custom Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
