import { ListProducts } from './components/ListProducts'
import { Filters } from './components/Filters'
import { useProducts } from './hooks/useProducts'
import { CartContextProvider } from './context/CartContext'
import { Hero } from './components/Hero'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
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

      <CartContextProvider>
        <Header />
        <Hero />
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
        <Footer/>
      </CartContextProvider>
  )
}
