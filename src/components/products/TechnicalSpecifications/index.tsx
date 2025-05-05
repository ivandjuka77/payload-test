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

export function TechnicalSpecifications({ product }: { product: Product }) {
  return (
    <section id="technical-specifications" className="w-full py-16">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 font-primary">
            Technical Specifications
          </h2>
          <p className="text-lg text-muted-foreground font-secondary">{product.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left column: Chemical identity and structure */}
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold font-primary mb-4">Chemical Identity</h3>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Chemical Name</TableCell>
                        <TableCell>{product.technicalSpecifications?.chemicalName}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Synonyms</TableCell>
                        <TableCell>
                          {product.technicalSpecifications?.synonyms
                            ?.map((syn) => syn.synonym)
                            .join(', ')}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">CAS Number</TableCell>
                        <TableCell>{product.technicalSpecifications?.casNumber}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">EC Number</TableCell>
                        <TableCell>{product.technicalSpecifications?.ecNumber}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Molecular Formula</TableCell>
                        <TableCell>{product.technicalSpecifications?.molecularFormula}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Molecular Weight</TableCell>
                        <TableCell>{product.technicalSpecifications?.molecularWeight}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right column: VUP Specifications */}
          <Card className="h-fit border-primary">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 font-primary">
                VUP Specifications (Standard Grade)
              </h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Property</TableHead>
                    <TableHead>Specification</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Appearance</TableCell>
                    <TableCell>{product.VupSpecifications?.appearance}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Purity</TableCell>
                    <TableCell>{product.VupSpecifications?.purity}</TableCell>
                  </TableRow>
                  {product.VupSpecifications?.acidValue && (
                    <TableRow>
                      <TableCell className="font-medium">Acid Value</TableCell>
                      <TableCell>{product.VupSpecifications.acidValue}</TableCell>
                    </TableRow>
                  )}
                  {product.VupSpecifications?.hydroxylValue && (
                    <TableRow>
                      <TableCell className="font-medium">Hydroxyl Value</TableCell>
                      <TableCell>{product.VupSpecifications.hydroxylValue}</TableCell>
                    </TableRow>
                  )}
                  {product.VupSpecifications?.waterContent && (
                    <TableRow>
                      <TableCell className="font-medium">Water Content</TableCell>
                      <TableCell>{product.VupSpecifications.waterContent}</TableCell>
                    </TableRow>
                  )}
                  {product.VupSpecifications?.ashContent && (
                    <TableRow>
                      <TableCell className="font-medium">Ash Content</TableCell>
                      <TableCell>{product.VupSpecifications.ashContent}</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800 font-secondary">
                  <strong>Note:</strong> Specifications are typical values and should not be
                  considered as guaranteed analysis.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
