import { Cart } from './Cart'
import { Logo } from './Icons'

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-[#f7f7f8]">
      <div className="flex justify-between items-center py-2 px-2 md:px-0 m-auto max-w-3xl">
        <a href="#">
          <Logo />
        </a>
        <div className="flex-grow">
          <a href="#">
            <h1 className="text-center text-2xl">La Charmante Boutique</h1>
          </a>
        </div>
        <div className=" w-8 h-8">
          <Cart />
        </div>
      </div>
    </header>
  )
}
