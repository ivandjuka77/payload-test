import Tag from '@/components/ui/tag'
import { Check, ArrowRight, Beaker } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Product } from '@/payload-types'
import { Media } from '@/components/Media'

export default function ProductCard({ product }: { product: Product }) {
  console.log(product)
  return (
    <div
      key={product.id}
      className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col h-full"
    >
      <div className="relative h-52 bg-gradient-to-b from-gray-300 to-white overflow-hidden">
        {product.chemicalStructureImage && (
          <Media
            resource={product.chemicalStructureImage}
            imgClassName="object-contain p-4 h-full w-full scale-[2]"
          />
        )}
        <Tag className="absolute bottom-4 left-4" type="product">
          Product
        </Tag>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-col items-start space-y-1 justify-between mb-6">
          <span className="text-sm text-gray-500">
            CAS: {product.technicalSpecifications?.casNumber || '123-45-67'}
          </span>
          <h3 className="text-2xl font-bold tracking-tight font-primary">{product.name}</h3>
        </div>

        <p className="mb-6 text-muted-foreground font-secondary line-clamp-3">
          {product.description}
        </p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-3 text-gray-900 uppercase tracking-wider">
            Key Properties
          </h4>
          <div className="space-y-3 border-l-2 border-primary/20 pl-4">
            {product.keyFeatures?.slice(0, 3).map((value, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <div>
                  <span className="text-sm font-medium font-secondary text-gray-900">
                    {value.feature}
                  </span>
                  <div className="h-1 w-12 bg-primary/10 rounded-full mt-1"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6 bg-gray-50 rounded-lg p-4 border border-gray-100 mt-auto">
          <h4 className="text-sm font-semibold mb-3 text-gray-900 flex items-center">
            <Beaker className="h-4 w-4 mr-2 text-primary" />
            Applications & Use Cases
          </h4>
          <div className="grid grid-cols-3 gap-3">
            {product.applications?.slice(0, 3).map((application, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-3 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:border-primary/30 hover:shadow-md h-24"
              >
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {}
                  {/* <DynamicIcon name={useCase.icon as any} className='h-5 w-5' /> */}
                </div>
                <span className="text-xs text-center font-medium font-secondary line-clamp-2">
                  {application.application}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full items-center justify-between gap-2">
          <Link href={'contact'} className="w-3/5">
            <Button variant="default" className="mr-2 w-full">
              Request Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>

          <Link href={`/products/${product.slug}`} className="w-2/5">
            <Button variant="outline" className="mr-2 w-full">
              View Details
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
