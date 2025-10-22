'use client'

import type { Product, ProductDocument } from '@/payload-types' // These types are no longer used but kept for context if you re-add download logic
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
// import { ProductDocumentModal } from '@/components/ProductDocumentModal' // No longer needed
import { useTranslations } from 'next-intl'
import Link from 'next/link'

// Define a simpler type for our hardcoded data
type ResearchProduct = {
  id: string
  name: string
  casNumber: string | null
  ecNumber: string | null
}

// Props no longer include product data
type ProductTableProps = {
  title?: string | null
  description?: string | null
}

export const ProductTable: React.FC<ProductTableProps> = ({
  title: _title,
  description: _description,
}) => {
  const t = useTranslations('productTable')
  // State for modal is removed as we have no documents to download

  // Hardcoded list of research products
  const researchProducts: ResearchProduct[] = [
    { id: '100-49-2', name: 'Cyclohexanemethanol', casNumber: '100-49-2', ecNumber: '202-857-8' },
    {
      id: '107-54-0',
      name: '3,5-Dimethyl-1-hexyn-3-ol',
      casNumber: '107-54-0',
      ecNumber: '203-500-9',
    },
    {
      id: '142-30-3',
      name: '2,5-Dimethyl-3-hexyne-2,5-diol',
      casNumber: '142-30-3',
      ecNumber: '205-533-4',
    },
    {
      id: '19549-98-5',
      name: '3,6-Dimethyl-1-heptyne-3-ol',
      casNumber: '19549-98-5',
      ecNumber: null,
    },
    {
      id: '126-86-3',
      name: '2,4,7,9-Tetramethyl-5-decyne-4,7-diol',
      casNumber: '126-86-3',
      ecNumber: '204-809-1',
    },
    {
      id: '3923-52-2',
      name: '1,1-Diphenyl-2-propyne-1-ol',
      casNumber: '3923-52-2',
      ecNumber: null,
    },
    {
      id: '1991-52-2',
      name: '2,5-Di-tert-butyl-4-hydroxyanisole',
      casNumber: '1991-52-2',
      ecNumber: '217-873-0',
    },
    {
      id: '489-01-0',
      name: '3,5-Di-tert-butyl-4-hydroxyanisole',
      casNumber: '489-01-0',
      ecNumber: '207-693-0',
    },
    {
      id: '68227-33-8',
      name: '2,5,8,11-Tetramethyl-6-dodecyne-5,8-diol',
      casNumber: '68227-33-8',
      ecNumber: '269-348-0',
    },
    {
      id: '1483-74-5',
      name: '1,1,4,4-Tetraphenyl-2-butyne-1,4-diol',
      casNumber: '1483-74-5',
      ecNumber: null,
    },
    { id: '111-43-3', name: 'Dipropyl ether', casNumber: '111-43-3', ecNumber: '203-896-6' },
    {
      id: '637-92-3',
      name: 'Ethyl tert-butyl ether',
      casNumber: '637-92-3',
      ecNumber: '211-309-7',
    },
    {
      id: '83016-70-0',
      name: 'N,N,N-Trimethyl-N-(2-hydroxyethyl)bis(2-aminoethyl) ether',
      casNumber: '83016-70-0',
      ecNumber: '406-080-7',
    },
    {
      id: '1071-73-4',
      name: '5-Hydroxy-2-pentanone, mixture of monomer and dimer',
      casNumber: '1071-73-4',
      ecNumber: '213-994-8',
    },
    { id: '141-79-7', name: 'Mezityl oxide alfa', casNumber: '141-79-7', ecNumber: '205-502-5' },
    { id: '593-08-8', name: 'Methylundecylketone', casNumber: '593-08-8', ecNumber: '209-784-0' },
    {
      id: '943-29-3',
      name: '4-tert-Butylcyclohexanecarboxylic acid, pure trans isomer',
      casNumber: '943-29-3',
      ecNumber: null,
    },
    {
      id: '5959-52-4',
      name: '3-Amino-2-naphthoic acid',
      casNumber: '5959-52-4',
      ecNumber: '227-726-2',
    },
    {
      id: '116668-47-4',
      name: '6-Amino-2-naphthoic acid',
      casNumber: '116668-47-4',
      ecNumber: null,
    },
    {
      id: '14002-80-3',
      name: '2,2-Dimethyl-3-hydroxypropionic acid methyl ester',
      casNumber: '14002-80-3',
      ecNumber: '237-805-3',
    },
    {
      id: '18672-70-3',
      name: 'Calcium bis(2-aminoethylhydrogenphosphat), assay Calcium',
      casNumber: '18672-70-3',
      ecNumber: null,
    },
    {
      id: '3367-95-1',
      name: 'N,N-Diethylnipecotamide',
      casNumber: '3367-95-1',
      ecNumber: '222-136-1',
    },
    {
      id: '693-05-0',
      name: 'N-Methyl-B-alanine nitril',
      casNumber: '693-05-0',
      ecNumber: '211-740-0',
    },
    { id: '21539-47-9', name: 'N-Ethyl-B-alaninenitrile', casNumber: '21539-47-9', ecNumber: null },
    {
      id: '51299-82-2',
      name: '3-n-Propoxypropionitrile',
      casNumber: '51299-82-2',
      ecNumber: '257-118-2',
    },
    {
      id: '6959-71-3',
      name: '3-n-Butoxypropionitrile',
      casNumber: '6959-71-3',
      ecNumber: '230-153-0',
    },
    {
      id: '5327-02-6',
      name: '3-Hexyloxypropiononitrile',
      casNumber: '5327-02-6',
      ecNumber: '226-208-3',
    },
    {
      id: '2826-26-8',
      name: '(4-Methoxybenzylidene) malononitrile',
      casNumber: '2826-26-8',
      ecNumber: null,
    },
    {
      id: '6328-54-7',
      name: '3-(2-phenoxyethoxy)propionitrile',
      casNumber: '6328-54-7',
      ecNumber: null,
    },
    {
      id: '4747-21-1',
      name: 'N-Isopropylmethylamine',
      casNumber: '4747-21-1',
      ecNumber: '225-266-7',
    },
    {
      id: '38256-93-8',
      name: '(2-Methoxyethyl)-methylamine',
      casNumber: '38256-93-8',
      ecNumber: null,
    },
    { id: '96-15-1', name: '2-Methylbutylamine', casNumber: '96-15-1', ecNumber: '202-483-5' },
    {
      id: '14610-37-8',
      name: 'N-tert-Butylmethylamine',
      casNumber: '14610-37-8',
      ecNumber: '238-646-2',
    },
    {
      id: '111-39-7',
      name: 'N-Propylethylenediamine',
      casNumber: '111-39-7',
      ecNumber: '203-864-9',
    },
    {
      id: '918-02-5',
      name: 'N,N-Dimethyl-tert-butylamine',
      casNumber: '918-02-5',
      ecNumber: '213-041-6',
    },
    {
      id: '23764-31-0',
      name: 'N-Propyl-1,3-propanediamine',
      casNumber: '23764-31-0',
      ecNumber: '245-869-9',
    },
    {
      id: '73918-56-6',
      name: '4-Bromophenethylamine',
      casNumber: '73918-56-6',
      ecNumber: '277-636-2',
    },
    {
      id: '1195-42-2',
      name: 'N-cyclohexylisopropylamin',
      casNumber: '1195-42-2',
      ecNumber: '214-798-5',
    },
    {
      id: '771-97-1',
      name: '2,3-Diaminonaphthalene',
      casNumber: '771-97-1',
      ecNumber: '212-241-0',
    },
    { id: '544-00-3', name: 'Diisopentylamine', casNumber: '544-00-3', ecNumber: '208-856-9' },
    {
      id: '65473-13-4',
      name: 'N-Methyl-1-naphthalenemethylamine hydrochloride',
      casNumber: '65473-13-4',
      ecNumber: null,
    },
    { id: '3007-31-6', name: 'Didodecylamine', casNumber: '3007-31-6', ecNumber: '221-114-9' },
    {
      id: '78307-76-3',
      name: '1-(Dimethylamino)-1H-pyrrole',
      casNumber: '78307-76-3',
      ecNumber: null,
    },
    {
      id: '6325-91-3',
      name: '2-Mercapto-5-nitrobenzimidazole',
      casNumber: '6325-91-3',
      ecNumber: null,
    },
    {
      id: '27231-36-3',
      name: '2-Mercapto-5-methylbenzimidazole',
      casNumber: '27231-36-3',
      ecNumber: '248-350-5',
    },
    {
      id: '7193-87-5',
      name: '2,4-Diethoxy-5-methylpyrimidine',
      casNumber: '7193-87-5',
      ecNumber: '230-558-2',
    },
    {
      id: '5044-38-2',
      name: '1-(4-Chlorophenyl)-1H-pyrrole',
      casNumber: '5044-38-2',
      ecNumber: null,
    },
    {
      id: '827-60-1',
      name: '1-(4-Methylphenyl)-1H-pyrrole',
      casNumber: '827-60-1',
      ecNumber: null,
    },
    {
      id: '5145-71-1',
      name: '1-(4-Methoxyphenyl)-1H-pyrrole',
      casNumber: '5145-71-1',
      ecNumber: null,
    },
    {
      id: '53825-32-4',
      name: 'Triacetoneamine glycerol ketal',
      casNumber: '53825-32-4',
      ecNumber: null,
    },
    { id: '150980-90-8', name: 'TEMPO - glycerol ketal', casNumber: '150980-90-8', ecNumber: null },
    { id: '1071-93-8', name: 'Adipic dihydrazide', casNumber: '1071-93-8', ecNumber: '213-995-5' },
    {
      id: '40908-37-0',
      name: '4-acetamido-2,2,6,6-tetramethylpiperidine',
      casNumber: '40908-37-0',
      ecNumber: '255-137-0',
    },
    {
      id: '4605-14-5',
      name: 'N,N-Bis(3aminopropyl-)-1,3-propanediamine',
      casNumber: '4605-14-5',
      ecNumber: '225-007-8',
    },
    {
      id: '26275-88-7',
      name: 'Benzoyloxy-2,2,6,6-tetramethylpiperidine',
      casNumber: '26275-88-7',
      ecNumber: null,
    },
    {
      id: '2245-30-9',
      name: '3,3-Dimethyl-1,2-epoxybutane',
      casNumber: '2245-30-9',
      ecNumber: null,
    },
    { id: '2426-07-5', name: '1,2,7,8-Diepoxyoctane', casNumber: '2426-07-5', ecNumber: null },
  ]

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
            {researchProducts && researchProducts.length > 0 ? (
              researchProducts.map((product, index: number) => {
                // No TDS/SDS documents for this hardcoded list
                return (
                  <TableRow key={product.id} className={index % 2 === 1 ? 'bg-muted/30' : ''}>
                    <TableCell className="font-medium border-r border-border">
                      {product.name}
                    </TableCell>
                    <TableCell className="bg-muted/20 border-r border-border">
                      {product.casNumber || '-'}
                    </TableCell>
                    <TableCell className="border-r border-border">
                      {product.ecNumber || '-'}
                    </TableCell>
                    <TableCell className="text-center bg-muted/20 border-r border-border">
                      {/* Hardcoded disabled button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 cursor-not-allowed"
                        disabled
                      >
                        <Download className="h-4 w-4 text-gray-400" />
                      </Button>
                    </TableCell>
                    <TableCell className="text-center">
                      {/* Hardcoded disabled button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 cursor-not-allowed"
                        disabled
                      >
                        <Download className="h-4 w-4 text-gray-400" />
                      </Button>
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
      <div className="mt-12 text-center w-full">
        <div className="flex  items-center justify-center gap-x-10">
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

      {/* Document Download Modal removed */}
    </section>
  )
}
