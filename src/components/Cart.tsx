import { useRef, useState } from 'react'
import { CartIcon } from './Icons'
import { CartSection } from './CartSection'
import { useClickOutside } from '../hooks/useClickOutside'

export const Cart: React.FC = () => {
  const [show, setShow] = useState(false)
  const toggleShow = (): void => {
    setShow((prevState) => !prevState)
  }
  const onClose = (): void => {
    setShow(false)
  }
  const ref = useRef<HTMLDivElement>(null)
  useClickOutside({ callback: onClose, ref })

  return (
    <div ref={ref} className="inline-block fixed right-8 pt-4">
      <div
        className="relative max-w-max bordern-solid"
        onClick={toggleShow}
      >
        <CartIcon />
        <div className="absolute rounded-full border-solid bg-red-400 border-2 w-8 h-8 flex justify-center items-center text-white -top-4 -right-4">
          {5}
        </div>
      </div>
      {show && <CartSection onClose={onClose} />}
    </div>
  )
}
