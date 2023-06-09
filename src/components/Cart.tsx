import { useCallback, useRef, useState } from 'react'
import { CartIcon } from './Icons'
import { CartSection } from './CartSection'
import { useClickOutside } from '../hooks/useClickOutside'
import { useCart } from '../hooks/useCart'

const INITIAL_CART_COUNT = 0
export const Cart: React.FC = () => {
  const [show, setShow] = useState(false)
  const { cart } = useCart()
  const totalQuantityItems = cart?.reduce(
    (accumulator, product) => product.quantity + accumulator,
    INITIAL_CART_COUNT
  )

  const toggleShow = (): void => {
    setShow((prevState) => !prevState)
  }
  const onClose = useCallback((): void => {
    setShow(false)
  }, [show])
  const ref = useRef<HTMLDivElement>(null)

  useClickOutside({ callback: onClose, ref })

  return (
    <div ref={ref} className="inline-block">
      <div
        className="relative max-w-max bordern-solid bg-white rounded-full z-50 "
        onClick={toggleShow}
      >
        <CartIcon />

        {totalQuantityItems != null && totalQuantityItems > 0 && (
          <div className="absolute rounded-full border-solid bg-red-400 border-2 w-6 h-6 flex justify-center items-center text-white -top-2 -right-2 text-xs">
            {totalQuantityItems}
          </div>
        )}
      </div>
      {show && <CartSection onClose={onClose} />}
    </div>
  )
}
