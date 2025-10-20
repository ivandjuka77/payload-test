import type { Product, ProductDocument } from '@/payload-types'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { ProductTable as ProductTableClient } from './Component'

type ProductWithDocuments = Product & {
  documents: ProductDocument[]
}

type ProductTableBlockProps = {
  title?: string | null
  description?: string | null
  products?: Array<{
    product: number | Product
    id?: string | null
  }> | null
}

const getProductDocuments = async (productId: number): Promise<ProductDocument[]> => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'product-documents',
    where: {
      product: {
        equals: productId,
      },
    },
  })

  return result.docs
}

export const ProductTableBlock: React.FC<ProductTableBlockProps> = async ({
  title,
  description,
  products,
}) => {
  // Fetch full product data with documents
  const productsWithDocuments: ProductWithDocuments[] = await Promise.all(
    (products || []).map(async (item) => {
      const product = item.product as Product

      if (!product || typeof product === 'number') {
        return null
      }

      const documents = await getProductDocuments(product.id)

      return {
        ...product,
        documents,
      }
    }),
  ).then((results) => results.filter((p): p is ProductWithDocuments => p !== null))

  return (
    <ProductTableClient
      title={title}
      description={description}
      products={products}
      productsWithDocuments={productsWithDocuments}
    />
  )
}
