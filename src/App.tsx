import { ListProducts } from './components/ListProducts'
import { Filters } from './components/Filters'
import { useProducts } from './hooks/useProducts'
import './index.css'

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
      <h1 className="text-center text-4xl p-8">Le Coin Enchanté</h1>
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
    </>
  )
}
