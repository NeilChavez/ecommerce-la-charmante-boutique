import { type ReactNode } from 'react'

interface Props {
  image: string
  title: string
  price: number
  children?: ReactNode
  direction?: 'row' | 'col'
}

export const Card: React.FC<Props> = ({
  image,
  title,
  price,
  children,
  direction
}) => {
  return (
    <div
      className={`bg-white shadow rounded flex justify-center items-center
     ${direction === 'row' ? 'flex-row' : 'flex-col'}`}
    >
      <div className="h-48 w-full bg-gray-200 flex flex-col justify-center">
        <img
          src={image}
          alt={title}
          className="max-h-full cover object-contain"
        />
      </div>
      <div className="p-4 flex items-center flex-col">
        <h1 className="text-gray-800 text-center text-sm mt-1 line-clamp-2 ">
          {title}
        </h1>
        <p className="text-center text-gray-800 mt-1">€{price}</p>
        <div className="inline-flex items-center mt-2"></div>
        {children}
      </div>
    </div>
  )
}
