import { CATEGORIES_VALUES } from '../consts'
import { type FilterValue } from '../types'

interface Props {
  handleCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  filterSelected: FilterValue
}
export const SelectCategory: React.FC<Props> = ({
  filterSelected,
  handleCategoryChange
}) => {
  const currentValue = filterSelected ?? 'default'
  return (
    <select
      className="border-2 border-gray"
      onChange={handleCategoryChange}
      defaultValue={currentValue}
    >
      <option value={CATEGORIES_VALUES.ALL} disabled>
        Choose a Category
      </option>
      {Object.entries(CATEGORIES_VALUES).map(([_, value]) => {
        return (
          <option key={value} value={value}>
            {value}
          </option>
        )
      })}
    </select>
  )
}
