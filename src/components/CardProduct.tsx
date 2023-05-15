import { useState } from 'react'
import { Card } from './Card'
import { type Product } from '../types'

interface Props {
  product: Product
}
const INITIAL_COUNT = 1
export const CardProduct: React.FC<Props> = ({ product }) => {
  const [counter, setCounter] = useState(INITIAL_COUNT)
  const { title, price, image } = product
  const addProductToCart = (): void => {
    console.log(product)
  }

  return (
    <Card
      title={title}
      price={price}
      image={image}
      counter={counter}
      addProductToCart={addProductToCart}
    />
  )
}
