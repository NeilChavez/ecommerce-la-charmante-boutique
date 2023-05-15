import { type Dispatch, type SetStateAction, useContext } from 'react'
import { type Product } from '../types'
import { CartContext } from '../context/CartContext'

export const useCart = (): {
  cart: Product[] | null
  setCart: Dispatch<SetStateAction<Product[] | null>>
} => {
  const context = useContext(CartContext)
  if (context === null || context === undefined) {
    throw new Error(
      'use useCart only in wrapped components by CartContextProvider component'
    )
  }
  const { cart, setCart } = context
  return {
    cart,
    setCart
  }
}
