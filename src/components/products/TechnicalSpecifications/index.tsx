import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Card, CardContent } from '@/components/ui/card'
import { Product } from '@/payload-types'
import { Media } from '@/components/Media'

type Props = {
  product: Product
  title: string
  description: string
  table: {
    chemicalIdentity: {
      title: string
      chemicalName: string
      synonyms: string
      casNumber: string
      ecNumber: string
      molecularFormula: string
      molecularWeight: string
    }
    specifications: {
      title: string
      appearance: string
      purity: string
      acidValue: string
      hydroxylValue: string
      waterContent: string
      ashContent: string
      note: string
      property: string
      specification: string
    }
  }
}

export function TechnicalSpecifications({ product, title, description, table }: Props) {
  return (
    <section id="technical-specifications" className="w-full py-16 px-4 sm:px-6 lg:px-0">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter mb-4 font-primary">
            {title}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-secondary">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 md:items-stretch">
          {/* Left column: Chemical identity and structure */}
          <Card className="flex flex-col">
            <CardContent className="p-4 sm:p-6 flex-1">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold font-primary mb-4">
                    {table.chemicalIdentity.title}
                  </h3>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium text-sm sm:text-base">
                            {table.chemicalIdentity.chemicalName}
                          </TableCell>
                          <TableCell className="text-sm sm:text-base">
                            {product.technicalSpecifications?.chemicalName}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-sm sm:text-base">
                            {table.chemicalIdentity.synonyms}
                          </TableCell>
                          <TableCell className="text-sm sm:text-base">
                            {product.technicalSpecifications?.synonyms
                              ?.map((syn) => syn.synonym)
                              .join(', ')}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-sm sm:text-base">
                            {table.chemicalIdentity.casNumber}
                          </TableCell>
                          <TableCell className="text-sm sm:text-base">
                            {product.technicalSpecifications?.casNumber}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-sm sm:text-base">
                            {table.chemicalIdentity.ecNumber}
                          </TableCell>
                          <TableCell className="text-sm sm:text-base">
                            {product.technicalSpecifications?.ecNumber}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-sm sm:text-base">
                            {table.chemicalIdentity.molecularFormula}
                          </TableCell>
                          <TableCell className="text-sm sm:text-base">
                            {product.technicalSpecifications?.molecularFormula}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-sm sm:text-base">
                            {table.chemicalIdentity.molecularWeight}
                          </TableCell>
                          <TableCell className="text-sm sm:text-base">
                            {product.technicalSpecifications?.molecularWeight}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>

                {/* Chemical Structure Image */}
                {product.chemicalStructureImage && (
                  <div>
                    <div className="flex justify-center">
                      <div className="max-w-xs w-full flex justify-center items-center">
                        <Media
                          resource={product.chemicalStructureImage}
                          className="w-3/4 h-auto rounded-lg scale-150 sm:scale-[2]"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Right column: VUP Specifications */}
          <Card className="flex flex-col border-primary">
            <CardContent className="p-4 sm:p-6 flex-1 flex flex-col">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 font-primary">
                {table.specifications.title}
              </h3>
              <div className="flex-1">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-sm sm:text-base">
                          {table.specifications.property}
                        </TableHead>
                        <TableHead className="text-sm sm:text-base">
                          {table.specifications.specification}
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium text-sm sm:text-base">
                          {table.specifications.appearance}
                        </TableCell>
                        <TableCell className="text-sm sm:text-base">
                          {product.VupSpecifications?.appearance}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-sm sm:text-base">
                          {table.specifications.purity}
                        </TableCell>
                        <TableCell className="text-sm sm:text-base">
                          {product.VupSpecifications?.purity}
                        </TableCell>
                      </TableRow>
                      {product.VupSpecifications?.acidValue && (
                        <TableRow>
                          <TableCell className="font-medium text-sm sm:text-base">
                            {table.specifications.acidValue}
                          </TableCell>
                          <TableCell className="text-sm sm:text-base">
                            {product.VupSpecifications.acidValue}
                          </TableCell>
                        </TableRow>
                      )}
                      {product.VupSpecifications?.hydroxylValue && (
                        <TableRow>
                          <TableCell className="font-medium text-sm sm:text-base">
                            {table.specifications.hydroxylValue}
                          </TableCell>
                          <TableCell className="text-sm sm:text-base">
                            {product.VupSpecifications.hydroxylValue}
                          </TableCell>
                        </TableRow>
                      )}
                      {product.VupSpecifications?.waterContent && (
                        <TableRow>
                          <TableCell className="font-medium text-sm sm:text-base">
                            {table.specifications.waterContent}
                          </TableCell>
                          <TableCell className="text-sm sm:text-base">
                            {product.VupSpecifications.waterContent}
                          </TableCell>
                        </TableRow>
                      )}
                      {product.VupSpecifications?.ashContent && (
                        <TableRow>
                          <TableCell className="font-medium text-sm sm:text-base">
                            {table.specifications.ashContent}
                          </TableCell>
                          <TableCell className="text-sm sm:text-base">
                            {product.VupSpecifications.ashContent}
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </div>

              {/* Note */}
              <div className="mt-6 p-3 sm:p-4 bg-muted/50 rounded-lg">
                <p className="text-xs sm:text-sm text-muted-foreground font-secondary">
                  {table.specifications.note}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
