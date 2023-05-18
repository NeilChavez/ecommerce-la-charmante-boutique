import { useReducer } from 'react'
import { cartReducer } from '../reducers/cartReducer'
import { type productId, type Product, type ProductInCart } from '../types'
import { TYPES } from '../actions/cartActions'

const initialState = {
  cart: []
}

interface cartReducerResults {
  cart: ProductInCart[]
  addProductToCart: ({ product }: {
    product: Product
  }) => void
  removeOneItemFromCart: ({ id }: productId) => void
  removeFromCart: ({ id }: productId) => void
}

export const useCartReducer = (): cartReducerResults => {
  const [{ cart }, dispatch] = useReducer(cartReducer, initialState)

  const addProductToCart = ({ product }: { product: Product }): void => {
    dispatch({ type: TYPES.ADD_PRODUCT, payload: product })
  }
  const removeOneItemFromCart = ({ id }: productId): void => {
    dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: { id } })
  }
  const removeFromCart = ({ id }: productId): void => {
    dispatch({ type: TYPES.REMOVE_PRODUCT, payload: { id } })
  }

  return {
    cart,
    addProductToCart,
    removeOneItemFromCart,
    removeFromCart
  }
}
