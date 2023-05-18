import { CartIcon } from './Icons'

interface Props {
  handleClick: () => void
}

export const AddToCartButton: React.FC<Props> = ({ handleClick }) => {
  return (
    <button
      className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
      onClick={handleClick}
    >
      Add to order
      <CartIcon />
    </button>
  )
}
