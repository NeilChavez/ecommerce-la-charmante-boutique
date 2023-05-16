
interface Props {
  onClose: () => void

}

export const CartSection: React.FC<Props> = ({ onClose }) => {
  return (
    <aside
      className={'border-2 bg-blue-300 border-solid border-green-400 z-10 fixed top-20 right-0 w-2/3 min-h-[50vh] transition-transform '}
    >
      <button
        className="border-2 border-yellow px-4"
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
      >
        x
      </button>
      <h2 className="text-2xl">Your cart</h2>
    </aside>
  )
}
