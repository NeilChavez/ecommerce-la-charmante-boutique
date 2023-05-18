import { type ReactNode } from 'react'

interface Props {
  children: ReactNode
  handleClick?: (e: React.MouseEvent) => void
  position?: 'left' | 'right'
}

export const Button: React.FC<Props> = ({ children, position, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`bg-white ${
        position === 'right' ? 'rounded-r' : 'rounded-l'
      } border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 ${
        position === 'right' ? 'border-r' : 'border-l'
      } border-gray-200`}
    >
      {children}
    </button>
  )
}
