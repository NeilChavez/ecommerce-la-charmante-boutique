import { type FilterValue } from '../types'
import { RangeSlider } from './RangeSlider'
import { SelectCategory } from './SelectCategory'

interface Props {
  filterSelected: FilterValue
  handleFilterSelecter: ({ filter }: { filter: FilterValue }) => void
  minValue: number
  maxValue: number
  onRangeChange: ({ newValue, inputId }: { newValue: number, inputId: string }) => void
}

export const Filters: React.FC<Props> = ({
  filterSelected,
  handleFilterSelecter,
  minValue,
  maxValue,
  onRangeChange
}) => {
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const newFilter = e.target.value
    handleFilterSelecter({ filter: newFilter as FilterValue })
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = Number(e.target.value)
    onRangeChange({ newValue, inputId: e.target.id })
  }

  return (
    <div className="flex m-auto max-w-3xl items-center ">
      <RangeSlider
        minValue={minValue}
        maxValue={maxValue}
        handleInputChange={handleInputChange}
      />
      <SelectCategory
        handleCategoryChange={handleCategoryChange}
        filterSelected={filterSelected}
      />
    </div>
  )
}
