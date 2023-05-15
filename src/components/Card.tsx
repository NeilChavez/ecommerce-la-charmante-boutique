import { Counter } from './Counter'
import { CartIcon } from './Icons'

interface Props {
  image: string
  title: string
  price: number
  counter: number
  addProductToCart: () => void
}

export const Card: React.FC<Props> = ({
  image,
  title,
  price,
  counter,
  addProductToCart
}) => {
  const handleClick = (): void => {
    addProductToCart()
  }
  return (
    <div className="bg-white shadow rounded">
      <div className="h-48 w-full bg-gray-200 flex flex-col justify-center p-4 px-8 ">
        <img
          src={image}
          alt={title}
          className="max-h-full cover object-cover objec"
        />
      </div>
      <div className="p-4 flex flex-col items-center">
        <h1 className="text-gray-800 text-center text-sm mt-1 line-clamp-2 ">
          {title}
        </h1>
        <p className="text-center text-gray-800 mt-1">€{price}</p>
        <div className="inline-flex items-center mt-2">
          <Counter counter={counter} />
        </div>
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
          onClick={() => { handleClick() }}
        >
          Add to order
          <CartIcon />
        </button>
      </div>
    </div>
  )
}
