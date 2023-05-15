import { type Product } from '../types'

export const getProducts = async ({ endpoint }: { endpoint: string }): Promise<Product[]> => {
  try {
    const res = await fetch(endpoint)
    if (!res.ok) {
      throw new Error('Failed to retrieve the products!')
    }
    const json: Product[] = await res.json()
    const mappedProducts: Product[] = json.map(product => {
      const { id, title, image, price, description, category, rating } = product
      return { id, title, image, price, description, category, rating }
    })
    return mappedProducts
  } catch (e) {
    throw new Error(
      'Something went wrong, and the products could not be retrieved!'
    )
  }
}
