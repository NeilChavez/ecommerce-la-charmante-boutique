import { useContext } from 'react'
import { type CartContextValue } from '../types'
import { CartContext } from '../context/CartContext'

export const useCart = (): CartContextValue => {
  const context = useContext(CartContext)
  if (context === null || context === undefined) {
    throw new Error(
      'use useCart only in wrapped components by CartContextProvider component'
    )
  }

  return context
}
