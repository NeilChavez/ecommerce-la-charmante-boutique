import React from 'react'
import { useCart } from '../hooks/useCart'
import { CardProduct } from './CardProduct'
import { Counter } from './Counter'
import { DeleteIcon } from './Icons'

interface Props {
  onClose: () => void
}

export const CartSection: React.FC<Props> = ({ onClose }) => {
  const { cart, addProductToCart, removeOneItemFromCart, removeFromCart } =
    useCart()

  const handleClose = (e: React.MouseEvent): void => {
    e.stopPropagation()
    onClose()
  }

  return (
    <aside
      className={
        'border-2 bg-blue-300 border-solid border-green-400 z-50 fixed top-20 right-0 w-2/3 min-h-[40vh] transition-transform overflow-y-auto max-h-screen py-10'
      }
    >
      <button
        className="border-2 border-yellow px-4"
        onClick={handleClose}
      >
        x
      </button>
      <h2 className="text-2xl">Your cart</h2>
      <ul>
      {cart.map((product) => {
        return (
          <li key={product.id}>
            <CardProduct product={product}>
              <Counter
                counter={product.quantity}
                increment={(e: React.MouseEvent): void => {
                  e.stopPropagation()
                  addProductToCart({ product })
                }}
                decrement={(e: React.MouseEvent): void => {
                  e.stopPropagation()
                  removeOneItemFromCart({ id: product.id })
                }}
              />
            </CardProduct>
            <button onClick={(e: React.MouseEvent) => {
              e.stopPropagation()
              removeFromCart({ id: product.id })
            }}> <DeleteIcon /> </button>
          </li>
        )
      })}
      </ul>
    </aside>
  )
}
