import { Button } from './Button'
import { MinusIcon, PlusIcon } from './Icons'

interface Props {
  counter: number
}

export const Counter: React.FC<Props> = ({ counter }) => {
  return (
    <>
      <Button position="left">
        <MinusIcon />
      </Button>
      <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
        {counter}
      </div>
      <Button position="right">
        <PlusIcon />
      </Button>
    </>
  )
}
