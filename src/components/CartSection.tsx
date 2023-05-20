import { useCart } from '../hooks/useCart'
import { BackIcon } from './Icons'
import { CartTable } from './CartTable'

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
        'bg-white z-50 fixed top-0 right-0 w-full min-h-[50vh] sm:max-w-[70vw] md:max-w-[70vw] lg:max-w-[50vw] transition-transform overflow-y-auto max-h-screen py-10 px-4 max-w-3xl'
      }
    >
      <button className="border-2 border-yellow px-4" onClick={handleClose}>
        <BackIcon />
      </button>

      <CartTable
        cart={cart}
        addProductToCart={addProductToCart}
        removeOneItemFromCart={removeOneItemFromCart}
        removeFromCart={removeFromCart}
      />
    </aside>
  )
}
