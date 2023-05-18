import { Card } from './Card'
import { type Product } from '../types'
import { type ReactNode } from 'react'

interface Props {
  product: Product
  children?: ReactNode
}

export const CardProduct: React.FC<Props> = ({ product, children }) => {
  const { title, price, image } = product

  return (
    <Card
      title={title}
      price={price}
      image={image}
    >
      {children}
    </Card>
  )
}
