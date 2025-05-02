'use client'

import { Card, CardContent } from '@/components/ui/card'
import { FileText, ShieldCheck, FileBox, Download } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Product } from '@/payload-types'

export function ProductDetails({ product }: { product: Product }) {
  // DMPA specific documents
  const dmpaDocuments = [
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: 'Technical Data Sheet (TDS)',
      description:
        'Complete technical specifications, physical properties, and application information for VUP DMPA.',
      url: 'https://www.vupas.sk/pictures/cennik/30_45TDS_DMPACAS4767-03-7.pdf',
      format: 'PDF',
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: 'Safety Data Sheet (SDS)',
      description: 'Safety information, handling procedures, and regulatory details for VUP DMPA.',
      url: '#', // Placeholder for the actual SDS URL
      format: 'PDF',
    },
  ]

  return (
    <section className="w-full py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 font-primary">
              Product Information & Technical Documents
            </h2>
            <p className="text-lg text-muted-foreground max-w-[800px] font-secondary mb-2">
              Essential information and documentation for Dimethylolpropionic Acid (DMPA)
            </p>
          </div>

          {/* Regulatory Information Section */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Product Identification Card */}
              <Card className="border-primary/10 shadow-sm h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mr-4">
                      <FileBox className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-primary">Product Identification</h3>
                      <p className="text-sm text-muted-foreground">
                        Key product details and identifiers
                      </p>
                    </div>
                  </div>
                  <Separator className="mb-6" />
                  <div className="space-y-4">
                    <div className="p-4">
                      <div className="grid gap-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Chemical Name</span>
                          <span className="text-sm text-muted-foreground">
                            3-Hydroxy-2-(hydroxymethyl)-2-methylpropanoic acid
                          </span>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Synonyms</span>
                          <span className="text-sm text-muted-foreground">
                            DMPA, 2,2-Bis(hydroxymethyl)propionic acid
                          </span>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">CAS Number</span>
                          <span className="text-sm text-muted-foreground">4767-03-7</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">EC Number</span>
                          <span className="text-sm text-muted-foreground">225-306-3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Technical Documents Card */}
              <Card className="border-primary/10 shadow-sm h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mr-4">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-primary">Technical Documents</h3>
                      <p className="text-sm text-muted-foreground">
                        Download product documentation
                      </p>
                    </div>
                  </div>
                  <Separator className="mb-6" />
                  <div className="grid gap-4">
                    {dmpaDocuments.map((doc, index) => (
                      <Link
                        key={index}
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-4 rounded-xl border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                      >
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-lg bg-white shadow-sm flex items-center justify-center border border-primary/10">
                            {doc.icon}
                          </div>
                          <div>
                            <h4 className="text-base font-semibold font-primary group-hover:text-primary transition-colors">
                              {doc.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">{doc.description}</p>
                          </div>
                        </div>
                        <div className="ml-4 p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Download className="h-5 w-5 text-primary group-hover:translate-y-0.5 transition-transform duration-200" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
              <p className="text-sm text-muted-foreground font-secondary">
                Need additional technical information or regulatory documentation?
              </p>
              <Button
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() =>
                  document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Contact Our Technical Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
