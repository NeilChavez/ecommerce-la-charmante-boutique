import { type CATEGORIES_VALUES } from './consts'

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}
export interface Rating {
  rate: number
  count: number
}

export interface ProductInCart extends Product {
  quantity: number
  totalPrice: number
}

export interface CartContextValue {
  cart: ProductInCart[]
  addProductToCart: ({ product }: { product: Product }) => void
  removeOneItemFromCart: ({ id }: productId) => void
  removeFromCart: ({ id }: productId) => void
}

export type FilterValue = typeof CATEGORIES_VALUES[keyof typeof CATEGORIES_VALUES]

export type productId = Pick<Product, 'id'>
