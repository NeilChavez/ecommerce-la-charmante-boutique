import { type ReactNode, createContext } from 'react'
import { type CartContextValue } from '../types'
import { useCartReducer } from '../hooks/useCartReducer'

export const CartContext = createContext<CartContextValue | null>(null)

interface Props {
  children: ReactNode
}

export const CartContextProvider: React.FC<Props> = ({ children }) => {
  const { cart, addProductToCart, removeOneItemFromCart, removeFromCart } =
    useCartReducer()

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeOneItemFromCart,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
