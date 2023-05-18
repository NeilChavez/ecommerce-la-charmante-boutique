import {
  type ReactNode,
  createContext,
  useState,
  type Dispatch,
  type SetStateAction
} from 'react'
import { type ProductInCart } from '../types'

interface CartContextValue {
  cart: ProductInCart[] | null
  setCart: Dispatch<SetStateAction<ProductInCart[] | null>>
}
export const CartContext = createContext<CartContextValue | null>(null)

interface Props {
  children: ReactNode
}
export const CartContextProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<ProductInCart[] | null>([])

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
