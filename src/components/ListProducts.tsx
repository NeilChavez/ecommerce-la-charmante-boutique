import { type Product } from '../types'
import { CardProduct } from './CardProduct'
import { Loader } from './Loader'

interface Props {
  products: Product[] | null
  isLoading: boolean
  isError: boolean
}

export const ListProducts: React.FC<Props> = ({ products, isLoading, isError }) => {
  return (
    <section className="m-auto max-w-3xl ">
      {isLoading && <Loader />}
      <ul className="grid grid-cols-fluid gap-4 ">
        {isError && <p>Sucedio` un error :( </p>}
        {products?.map((product) => {
          return (
            <li key={product.id}>
              <CardProduct product={product} />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
