import { type Products } from '../types'

export const getProducts = async ({ endpoint }: { endpoint: string }): Promise<Products[]> => {
  try {
    const res = await fetch(endpoint)
    if (!res.ok) {
      throw new Error('No se puedo obtener los productos!')
    }
    const json: Products[] = await res.json()
    const mappedProducts: Products[] = json.map(product => {
      const { id, title, image, price, description, category, rating } = product
      return { id, title, image, price, description, category, rating }
    })
    return mappedProducts
  } catch (e) {
    throw new Error('No se puedo obtener los productos!')
  }
}
