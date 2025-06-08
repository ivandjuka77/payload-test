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

export function TechnicalSpecifications({ product }: { product: Product }) {
  return (
    <section id="technical-specifications" className="w-full py-16 px-4 sm:px-6 lg:px-0">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter mb-4 font-primary">
            Technical Specifications
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-secondary">
            {product.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 md:items-stretch">
          {/* Left column: Chemical identity and structure */}
          <Card className="flex flex-col">
            <CardContent className="p-4 sm:p-6 flex-1">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold font-primary mb-4">
                    Chemical Identity
                  </h3>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium text-sm sm:text-base">
                            Chemical Name
                          </TableCell>
                          <TableCell className="text-sm sm:text-base">
                            {product.technicalSpecifications?.chemicalName}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-sm sm:text-base">
                            Synonyms
                          </TableCell>
                          <TableCell className="text-sm sm:text-base">
                            {product.technicalSpecifications?.synonyms
                              ?.map((syn) => syn.synonym)
                              .join(', ')}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-sm sm:text-base">
                            CAS Number
                          </TableCell>
                          <TableCell className="text-sm sm:text-base">
                            {product.technicalSpecifications?.casNumber}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-sm sm:text-base">
                            EC Number
                          </TableCell>
                          <TableCell className="text-sm sm:text-base">
                            {product.technicalSpecifications?.ecNumber}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-sm sm:text-base">
                            Molecular Formula
                          </TableCell>
                          <TableCell className="text-sm sm:text-base">
                            {product.technicalSpecifications?.molecularFormula}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-sm sm:text-base">
                            Molecular Weight
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
                VUP Specifications (Standard Grade)
              </h3>
              <div className="flex-1">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-sm sm:text-base">Property</TableHead>
                        <TableHead className="text-sm sm:text-base">Specification</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium text-sm sm:text-base">
                          Appearance
                        </TableCell>
                        <TableCell className="text-sm sm:text-base">
                          {product.VupSpecifications?.appearance}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-sm sm:text-base">Purity</TableCell>
                        <TableCell className="text-sm sm:text-base">
                          {product.VupSpecifications?.purity}
                        </TableCell>
                      </TableRow>
                      {product.VupSpecifications?.acidValue && (
                        <TableRow>
                          <TableCell className="font-medium text-sm sm:text-base">
                            Acid Value
                          </TableCell>
                          <TableCell className="text-sm sm:text-base">
                            {product.VupSpecifications.acidValue}
                          </TableCell>
                        </TableRow>
                      )}
                      {product.VupSpecifications?.hydroxylValue && (
                        <TableRow>
                          <TableCell className="font-medium text-sm sm:text-base">
                            Hydroxyl Value
                          </TableCell>
                          <TableCell className="text-sm sm:text-base">
                            {product.VupSpecifications.hydroxylValue}
                          </TableCell>
                        </TableRow>
                      )}
                      {product.VupSpecifications?.waterContent && (
                        <TableRow>
                          <TableCell className="font-medium text-sm sm:text-base">
                            Water Content
                          </TableCell>
                          <TableCell className="text-sm sm:text-base">
                            {product.VupSpecifications.waterContent}
                          </TableCell>
                        </TableRow>
                      )}
                      {product.VupSpecifications?.ashContent && (
                        <TableRow>
                          <TableCell className="font-medium text-sm sm:text-base">
                            Ash Content
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

              <div className="mt-6 p-3 sm:p-4 bg-blue-50 rounded-lg">
                <p className="text-xs sm:text-sm text-blue-800 font-secondary">
                  <strong>Note:</strong> Specifications that are provided above are typical values
                  and should not be considered as guaranteed analysis.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
