'use client'

import { Card, CardContent } from '@/components/ui/card'
import { FileText, FileBox, Download } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Product } from '@/payload-types'

type Props = {
  product: Product
  title: string
  description: string
  productInfo: {
    title: string
    description: string
    chemicalName: string
    synonyms: string
    casNumber: string
    ecNumber: string
  }
  documents: {
    title: string
    description: string
    tds: {
      title: string
      description: string
    }
    sds: {
      title: string
      description: string
    }
  }
  cta: {
    title: string
    button: string
  }
}

export function ProductDetails({
  product,
  title,
  description,
  productInfo,
  documents,
  cta,
}: Props) {
  const technicalDocumentsArray = [
    {
      icon: <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      title: documents.tds.title,
      description: documents.tds.description,
    },
    {
      icon: <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      title: documents.sds.title,
      description: documents.sds.description,
    },
  ]

  return (
    <section className="w-full py-16 bg-white px-4 sm:px-6 lg:px-0">
      <div className="container">
        <div className="">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter mb-4 font-primary">
              {title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-[800px] font-secondary mb-2">
              {description}
            </p>
          </div>

          {/* Regulatory Information Section */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
              {/* Product Identification Card */}
              <Card className="border-primary/10 shadow-sm h-full">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-6">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mr-3 sm:mr-4">
                      <FileBox className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-primary">
                        {productInfo.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {productInfo.description}
                      </p>
                    </div>
                  </div>
                  <Separator className="mb-6" />
                  <div className="space-y-4">
                    <div className="p-3 sm:p-4">
                      <div className="grid gap-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-xs sm:text-sm font-medium">
                            {productInfo.chemicalName}
                          </span>
                          <span className="text-xs sm:text-sm text-muted-foreground">
                            {product.technicalSpecifications?.chemicalName}
                          </span>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center">
                          <span className="text-xs sm:text-sm font-medium">
                            {productInfo.synonyms}
                          </span>
                          <span className="text-xs sm:text-sm text-muted-foreground">
                            {product.technicalSpecifications?.synonyms
                              ?.map((syn) => syn.synonym)
                              .join(', ')}
                          </span>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center">
                          <span className="text-xs sm:text-sm font-medium">
                            {productInfo.casNumber}
                          </span>
                          <span className="text-xs sm:text-sm text-muted-foreground">
                            {product.technicalSpecifications?.casNumber}
                          </span>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center">
                          <span className="text-xs sm:text-sm font-medium">
                            {productInfo.ecNumber}
                          </span>
                          <span className="text-xs sm:text-sm text-muted-foreground">
                            {product.technicalSpecifications?.ecNumber}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Technical Documents Card */}
              <Card className="border-primary/10 shadow-sm h-full">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-6">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mr-3 sm:mr-4">
                      <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-primary">
                        {documents.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {documents.description}
                      </p>
                    </div>
                  </div>
                  <Separator className="mb-6" />
                  <div className="grid gap-3 sm:gap-4">
                    {technicalDocumentsArray.map((doc, index) => (
                      <span
                        key={index}
                        className="group flex items-center justify-between p-3 sm:p-4 rounded-xl border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                      >
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-white shadow-sm flex items-center justify-center border border-primary/10">
                            {doc.icon}
                          </div>
                          <div>
                            <h4 className="text-sm sm:text-base font-semibold font-primary group-hover:text-primary transition-colors">
                              {doc.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-muted-foreground">
                              {doc.description}
                            </p>
                          </div>
                        </div>
                        <div className="ml-3 sm:ml-4 p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Download className="h-4 w-4 sm:h-5 sm:w-5 text-primary group-hover:translate-y-0.5 transition-transform duration-200" />
                        </div>
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-center justify-center">
              <p className="text-xs sm:text-sm text-muted-foreground font-secondary text-center md:text-left">
                {cta.title}
              </p>
              <Button
                className="bg-primary hover:bg-primary/90 text-white text-sm sm:text-base"
                onClick={() =>
                  document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                {cta.button}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
