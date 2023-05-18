import { type Dispatch, type SetStateAction, useContext } from 'react'
import { type Product, type ProductInCart } from '../types'
import { CartContext } from '../context/CartContext'

interface CartResults {
  cart: ProductInCart[]
  setCart: Dispatch<SetStateAction<ProductInCart[] | null>>
  addProductToCart: ({ product }: { product: Product }) => void
  removeOneItemFromCart: ({ id }: { id: number }) => void
  removeFromCart: ({ id }: { id: number }) => void
}

export const useCart = (): CartResults => {
  const context = useContext(CartContext)
  if (context === null || context === undefined) {
    throw new Error(
      'use useCart only in wrapped components by CartContextProvider component'
    )
  }
  const { cart, setCart } = context
  if (cart === null) throw new Error('Cart is null')

  const addProductToCart = ({ product }: { product: Product }): void => {
    const isInCart = cart.some(
      (singleProduct) => singleProduct.id === product.id
    )

    let newCart: ProductInCart[]
    if (isInCart) {
      newCart = cart.map((singleProduct) => {
        if (singleProduct.id === product.id) {
          return {
            ...singleProduct,
            quantity: singleProduct.quantity + 1
          }
        }
        return singleProduct
      })
    } else {
      newCart = [...cart, { ...product, quantity: 1 }]
    }
    setCart(newCart)
  }

  const removeOneItemFromCart = ({ id }: { id: number }): void => {
    const productInCart = cart.find(
      (singleProduct) => singleProduct.id === id
    ) as ProductInCart

    const newCart =
      productInCart.quantity > 1
        ? cart.map((singleProduct) => {
          if (singleProduct.id === id) {
            // diminuir la cantidad
            return {
              ...singleProduct,
              quantity: singleProduct.quantity - 1
            }
          }
          return singleProduct
        })
        : cart.filter((singleProduct) => singleProduct.id !== id)

    setCart(newCart)
  }

  const removeFromCart = ({ id }: { id: number }): void => {
    const newCart = cart.filter((singleProduct) => singleProduct.id !== id)
    setCart(newCart)
  }

  return {
    cart,
    setCart,
    addProductToCart,
    removeOneItemFromCart,
    removeFromCart
  }
}
