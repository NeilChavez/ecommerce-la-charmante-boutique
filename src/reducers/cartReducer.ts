import { TYPES } from '../actions/cartActions'
import { type productId, type Product, type ProductInCart } from '../types'

interface AddAction {
  type: 'ADD_PRODUCT'
  payload: Product
}
interface RemoveOneAction {
  type: 'REMOVE_ONE_PRODUCT'
  payload: productId
}
interface RemoveProductAction {
  type: 'REMOVE_PRODUCT'
  payload: productId
}

interface StateValue {
  cart: ProductInCart[]
}

const setInLocalStorage = (key: string, cart: ProductInCart[]): void => {
  window.localStorage.setItem(key, JSON.stringify(cart))
}

export const cartReducer = (
  state: StateValue,
  action: AddAction | RemoveOneAction | RemoveProductAction
): StateValue => {
  const { type, payload } = action
  switch (type) {
    case TYPES.ADD_PRODUCT: {
      const isInCart = state.cart.some(
        (singleProduct) => singleProduct.id === payload.id
      )

      let newCart: ProductInCart[]
      if (isInCart) {
        newCart = state.cart.map((singleProduct) => {
          if (singleProduct.id === payload.id) {
            const newQuantity = singleProduct.quantity + 1
            return {
              ...singleProduct,
              totalPrice: newQuantity * singleProduct.price,
              quantity: newQuantity
            }
          }
          return singleProduct
        })
      } else {
        const newProduct: ProductInCart = {
          ...payload,
          quantity: 1,
          totalPrice: payload.price * 1
        }
        newCart = [...state.cart, newProduct]
      }

      setInLocalStorage('cart', newCart)
      return {
        ...state,
        cart: newCart
      }
    }
    case TYPES.REMOVE_ONE_PRODUCT: {
      const productInCart = state.cart.find(
        (singleProduct) => singleProduct.id === payload.id
      ) as ProductInCart
      const newCart =
        productInCart.quantity > 1
          ? state.cart.map((singleProduct) => {
            if (singleProduct.id === payload.id) {
              const newQuantity = singleProduct.quantity - 1
              return {
                ...singleProduct,
                totalPrice: newQuantity * singleProduct.price,
                quantity: newQuantity
              }
            }
            return singleProduct
          })
          : state.cart.filter(
            (singleProduct) => singleProduct.id !== payload.id
          )
      setInLocalStorage('cart', newCart)
      return {
        ...state,
        cart: newCart
      }
    }
    case TYPES.REMOVE_PRODUCT: {
      const newCart = state.cart.filter(
        (singleProduct) => singleProduct.id !== payload.id
      )
      setInLocalStorage('cart', newCart)
      return {
        ...state,
        cart: newCart
      }
    }

    default:
      return state
  }
}
