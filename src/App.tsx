import { ListProducts } from './components/ListProducts'
import { Filters } from './components/Filters'
import { useProducts } from './hooks/useProducts'
import { Cart } from './components/Cart'
import './index.css'
import { CartContextProvider } from './context/CartContext'

export const App: React.FC = () => {
  const {
    products,
    isLoading,
    isError,
    filterSelected,
    handleFilterSelecter,
    minValue,
    maxValue,
    onRangeChange
  } = useProducts()

  return (
    <>
      <CartContextProvider>
        <header className="flex justify-between px-4 pt-4 ">
          <div className=" flex-grow">
            <h1 className="text-center text-4xl p-8">La Charmante Boutique</h1>
          </div>
          <Cart />
        </header>
        <Filters
          filterSelected={filterSelected}
          minValue={minValue}
          maxValue={maxValue}
          onRangeChange={onRangeChange}
          handleFilterSelecter={handleFilterSelecter}
        />
        <ListProducts
          products={products}
          isLoading={isLoading}
          isError={isError}
        />
      </CartContextProvider>
    </>
  )
}
