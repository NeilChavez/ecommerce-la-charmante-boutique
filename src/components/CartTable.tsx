import { type productId, type Product, type ProductInCart } from '../types'
import { CardProduct } from './CardProduct'
import { Counter } from './Counter'
import { DeleteIcon } from './Icons'

interface Props {
  cart: ProductInCart[]
  addProductToCart: ({ product }: { product: Product }) => void
  removeOneItemFromCart: ({ id }: productId) => void
  removeFromCart: ({ id }: productId) => void
}
export const CartTable: React.FC<Props> = ({
  cart,
  addProductToCart,
  removeOneItemFromCart,
  removeFromCart
}) => {
  const totalCartPrice = cart?.reduce(
    (accumulator, product) => accumulator + product.totalPrice,
    0
  )

  return (
    <>
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
                <td className="basis-1/2">
                  <CardProduct product={product} direction="row" />
                </td>
                <td className="basis-1/8 flex justify-center">
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
                <td>
                  <strong> €{product.totalPrice.toFixed(2)} </strong>
                </td>
                <td className="basis-1/8 flex justify-center">
                  <button
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation()
                      removeFromCart({ id: product.id })
                    }}
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <p className="text-center">
        Your Total is: €<strong>{(totalCartPrice).toFixed(2)}</strong>
      </p>
    </>
  )
}
