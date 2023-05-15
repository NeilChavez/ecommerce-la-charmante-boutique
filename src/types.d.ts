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
export type FilterValue = typeof CATEGORIES_VALUES[keyof typeof CATEGORIES_VALUES]
