import { CartIcon } from './Icons'

interface Props {
  handleClick: () => void
}

export const AddToCartButton: React.FC<Props> = ({ handleClick }) => {
  return (
    <button
      className="py-2 px-4 bg-[#222] text-white text-sm hover:bg-[#555] active:bg-[#444] disabled:opacity-50 mt-4 w-full flex items-center justify-center gap-2"
      onClick={handleClick}
    >
      Add to order
      <div className="w-6 h-6">
        <CartIcon />
      </div>
    </button>
  )
}
