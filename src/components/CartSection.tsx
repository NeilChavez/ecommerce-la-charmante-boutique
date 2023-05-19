import { useCart } from '../hooks/useCart'
import { CardProduct } from './CardProduct'
import { Counter } from './Counter'
import { BackIcon, DeleteIcon } from './Icons'

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
        'bg-white z-50 fixed top-0 right-0 w-2/3 min-h-[50vh] transition-transform overflow-y-auto max-h-screen py-10 max-w-3xl'
      }
    >
      <button className="border-2 border-yellow px-4" onClick={handleClose}>
        <BackIcon />
      </button>

      <table className="w-full">
        <thead>
          <tr>
            <th>
              <h2 className="text-2xl">Your cart</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          {cart?.map((product) => {
            return (
              <tr
                key={product.id}
                className="flex items-center justify-between gap-2 w-full bg-[#f7f7f8] mt-2"
              >
                <td className="basis-1/3">
                  <CardProduct product={product}></CardProduct>
                </td>
                <td className="basis-1/3 flex justify-center">
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
                </td>
                <td className="basis-1/3  flex justify-center">
                  <button
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation()
                      removeFromCart({ id: product.id })
                    }}
                  >
                    <DeleteIcon />{' '}
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
        <p className="text-center">
          Your Total is: <strong>4567890</strong>
        </p>
      </table>
    </aside>
  )
}

//  ;<ul>
//    {cart?.map((product) => {
//      return (
//        <li key={product.id}>
//          <CardProduct product={product}>
//            <Counter
//              counter={product.quantity}
//              increment={(e: React.MouseEvent): void => {
//                e.stopPropagation()
//                addProductToCart({ product })
//              }}
//              decrement={(e: React.MouseEvent): void => {
//                e.stopPropagation()
//                removeOneItemFromCart({ id: product.id })
//              }}
//            />
//          </CardProduct>
//          <button
//            onClick={(e: React.MouseEvent) => {
//              e.stopPropagation()
//              removeFromCart({ id: product.id })
//            }}
//          >
//            {' '}
//            <DeleteIcon />{' '}
//          </button>
//        </li>
//      )
//    })}
//  </ul>
