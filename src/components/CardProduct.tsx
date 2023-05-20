import { Card } from './Card'
import { type Product } from '../types'
import { type ReactNode } from 'react'

interface Props {
  product: Product
  children?: ReactNode
  direction?: 'row' | 'col'
}

export const CardProduct: React.FC<Props> = ({ product, direction, children }) => {
  const { title, price, image } = product

  return (
    <Card title={title} price={price} image={image} direction={direction}>
      {children}
    </Card>
  )
}
