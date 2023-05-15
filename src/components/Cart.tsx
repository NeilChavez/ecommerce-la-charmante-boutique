import { CartIcon } from './Icons'

export const Cart: React.FC = () => {
  return (
    <div className="relative max-w-max ">
      <CartIcon />
      <div
        className="absolute rounded-full border-solid bg-red-400 border-2 w-8 h-8 flex justify-center items-center text-white -top-4 -right-4"
      >
        {5}
      </div>
    </div>
  )
}
