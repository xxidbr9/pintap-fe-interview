import type { Product } from "@domain/product/entities/iProductList.entity"

type ProductType = Product & { slug?: string, quantity?: number }

export type ProductCardProps = {
  data: ProductType
  onProductClick?: (id: string) => void
  onCartClick?: (product: Product) => void
  otherProducts?: ProductType[]
}


