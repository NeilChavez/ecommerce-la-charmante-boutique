import { useEffect, useState } from 'react'
import { type FilterValue, type Product } from '../types'
import { getProducts } from '../services/getProducts'
import {
  API_URL,
  CATEGORIES_VALUES,
  GAP_BETWEEN_MIN_MAX,
  INITIAL_MAX_VALUE,
  INITIAL_MIN_VALUE,
  RANGE_SLIDER_ID
} from '../consts'

export const useProducts = (): {
  products: Product[] | null
  isLoading: boolean
  isError: boolean
  filterSelected: FilterValue
  handleFilterSelecter: ({ filter }: { filter: FilterValue }) => void
  minValue: number
  maxValue: number
  onRangeChange: ({
    newValue,
    inputId
  }: {
    newValue: number
    inputId: string
  }) => void
} => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(CATEGORIES_VALUES.ALL)
  const [minValue, setMinValue] = useState(INITIAL_MIN_VALUE)
  const [maxValue, setMaxValue] = useState(INITIAL_MAX_VALUE)

  useEffect(() => {
    setIsLoading(true)
    getProducts({ endpoint: API_URL })
      .then((products) => {
        setProducts(products)
      })
      .catch(() => {
        setIsError(true)
      })
      .finally(() => {
        setIsLoading(false)
        setIsError(false)
      })
  }, [])

  const handleFilterSelecter = ({ filter }: { filter: FilterValue }): void => {
    setFilterSelected(filter)
  }
  const onRangeChange = ({
    newValue,
    inputId
  }: {
    newValue: number
    inputId: string
  }): void => {
    if (inputId === RANGE_SLIDER_ID.MIN) {
      if (newValue >= maxValue - GAP_BETWEEN_MIN_MAX) {
        newValue = maxValue - GAP_BETWEEN_MIN_MAX
      }
      setMinValue(newValue)
    } else {
      if (newValue <= minValue + GAP_BETWEEN_MIN_MAX) {
        newValue = minValue + GAP_BETWEEN_MIN_MAX
      }
      setMaxValue(newValue)
    }
  }
  const filteredProducts = products.filter((product) => {
    if (
      filterSelected === product.category &&
      product.price >= minValue &&
      product.price <= maxValue
    ) {
      return product
    }

    if (
      filterSelected === CATEGORIES_VALUES.ALL &&
      product.price >= minValue &&
      product.price <= maxValue
    ) {
      return product
    }
    return false
  })

  return {
    products: filteredProducts,
    isLoading,
    isError,
    filterSelected,
    handleFilterSelecter,
    minValue,
    maxValue,
    onRangeChange
  }
}
