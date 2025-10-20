'use client'

import { useState } from 'react'
import type { Product, ProductDocument } from '@/payload-types'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Download, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProductDocumentModal } from '@/components/ProductDocumentModal'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

type ProductWithDocuments = Product & {
  documents: ProductDocument[]
}

type ProductTableProps = {
  title?: string | null
  description?: string | null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  products?: any
  productsWithDocuments: ProductWithDocuments[]
}

export const ProductTable: React.FC<ProductTableProps> = ({
  title: _title,
  description: _description,
  productsWithDocuments,
}) => {
  const t = useTranslations('productTable')
  const [showDocumentModal, setShowDocumentModal] = useState(false)
  const [selectedDocument, setSelectedDocument] = useState<{
    product: Product
    type: 'tds' | 'sds'
    url: string
  } | null>(null)

  const handleDocumentDownload = (product: Product, type: 'tds' | 'sds', url: string) => {
    setSelectedDocument({ product, type, url })
    setShowDocumentModal(true)
  }

  return (
    <section className="container py-16 md:py-20 px-4 sm:px-6 lg:px-0">
      {/* <div className="mb-8 flex flex-col items-left justify-center">
        {title && (
          <h2 className="font-primary mb-4 text-3xl font-bold text-foreground md:text-4xl">
            {title}
          </h2>
        )}
        {description && (
          <p className="font-secondary max-w-3xl text-base text-muted-foreground md:text-lg">
            {description}
          </p>
        )}
      </div> */}

      <div className="rounded-lg border border-border bg-card shadow-sm overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-primary hover:bg-primary">
              <TableHead className="font-bold text-primary-foreground border-r border-primary-foreground/20">
                {t('columns.productName')}
              </TableHead>
              <TableHead className="font-bold text-primary-foreground bg-primary/90 border-r border-primary-foreground/20">
                {t('columns.casNumber')}
              </TableHead>
              <TableHead className="font-bold text-primary-foreground border-r border-primary-foreground/20">
                {t('columns.ecNumber')}
              </TableHead>
              <TableHead className="font-bold text-primary-foreground text-center bg-primary/90 border-r border-primary-foreground/20">
                {t('columns.tds')}
              </TableHead>
              <TableHead className="font-bold text-primary-foreground text-center">
                {t('columns.sds')}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {productsWithDocuments && productsWithDocuments.length > 0 ? (
              productsWithDocuments.map((productData: ProductWithDocuments, index: number) => {
                const tdsDoc = productData.documents.find(
                  (doc: ProductDocument) => doc.type === 'tds',
                )
                const sdsDoc = productData.documents.find(
                  (doc: ProductDocument) => doc.type === 'sds',
                )

                return (
                  <TableRow key={productData.id} className={index % 2 === 1 ? 'bg-muted/30' : ''}>
                    <TableCell className="font-medium border-r border-border">
                      {productData.name}
                    </TableCell>
                    <TableCell className="bg-muted/20 border-r border-border">
                      {productData.technicalSpecifications?.casNumber || '-'}
                    </TableCell>
                    <TableCell className="border-r border-border">
                      {productData.technicalSpecifications?.ecNumber || '-'}
                    </TableCell>
                    <TableCell className="text-center bg-muted/20 border-r border-border">
                      {tdsDoc?.url ? (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-primary/10"
                          onClick={() => handleDocumentDownload(productData, 'tds', tdsDoc.url!)}
                        >
                          <Download className="h-4 w-4 text-primary" />
                        </Button>
                      ) : (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 cursor-not-allowed"
                          disabled
                        >
                          <Download className="h-4 w-4 text-gray-400" />
                        </Button>
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {sdsDoc?.url ? (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-primary/10"
                          onClick={() => handleDocumentDownload(productData, 'sds', sdsDoc.url!)}
                        >
                          <Download className="h-4 w-4 text-primary" />
                        </Button>
                      ) : (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 cursor-not-allowed"
                          disabled
                        >
                          <Download className="h-4 w-4 text-gray-400" />
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                )
              })
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                  {t('noProducts')}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* CTA Section */}
      <div className="mt-12 text-center">
        <div className="inline-flex flex-col items-center gap-4 rounded-lg border border-border bg-muted/30 p-8">
          <p className="font-secondary text-base text-muted-foreground md:text-lg">
            {t('cta.text')}
          </p>
          <Link href="/products">
            <Button className="group bg-primary hover:bg-primary/90 text-white">
              {t('cta.button')}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Document Download Modal */}
      {showDocumentModal && selectedDocument && (
        <ProductDocumentModal
          product={selectedDocument.product}
          documentType={selectedDocument.type}
          documentUrl={selectedDocument.url}
          isOpen={showDocumentModal}
          onClose={() => {
            setShowDocumentModal(false)
            setSelectedDocument(null)
          }}
        />
      )}
    </section>
  )
}
