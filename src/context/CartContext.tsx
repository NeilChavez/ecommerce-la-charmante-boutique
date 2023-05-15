import { type ReactNode, createContext, useState, type Dispatch, type SetStateAction } from 'react'
import { type Product } from '../types'

interface CartContextValue {
  cart: Product[] | null
  setCart: Dispatch<SetStateAction<Product[] | null>>
}
export const CartContext = createContext<CartContextValue | null>(null)

interface Props {
  children: ReactNode
}
export const CartContextProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<Product[] | null>(null)
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
