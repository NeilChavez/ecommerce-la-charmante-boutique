import { PERCENTAGE_BASE, INITIAL_MAX_VALUE, RANGE_SLIDER_ID } from '../consts'

interface Props {
  minValue: number
  maxValue: number
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const RangeSlider: React.FC<Props> = ({
  minValue,
  maxValue,
  handleInputChange
}) => {
  const widthBar = (
    (maxValue / INITIAL_MAX_VALUE) * PERCENTAGE_BASE -
    (minValue / INITIAL_MAX_VALUE) * PERCENTAGE_BASE
  ).toString()
  const positionBar = ((minValue / maxValue) * PERCENTAGE_BASE).toString()
  const barStyles = {
    width: `${widthBar}%`,
    left: `${positionBar}%`
  }

  return (
    <div className="px-6 py-4">
      <div className="text-sm">
        <p>Min price: ${minValue}</p>
        <p>Max price: ${maxValue}</p>
      </div>
      <div className="relative w-[150px] pt-8">
        <div
          className={'bg-[blue] w-full h-1 absolute top-1/2 rounded '}
          style={barStyles}
        ></div>
        <input
          type="range"
          id={RANGE_SLIDER_ID.MIN}
          max={INITIAL_MAX_VALUE}
          value={minValue}
          onChange={handleInputChange}
          className="absolute top-1/2 -translate-y-1/2 w-full bg-transparent pointer-events-none appearance-none rangeSlider"
        />
        <input
          type="range"
          id={RANGE_SLIDER_ID.MAX}
          max={INITIAL_MAX_VALUE}
          value={maxValue}
          onChange={handleInputChange}
          className="absolute top-1/2 -translate-y-1/2 w-full bg-transparent pointer-events-none appearance-none rangeSlider"
        />
      </div>
    </div>
  )
}
