
import { type RefObject, useEffect } from 'react'

export const useClickOutside = ({
  callback,
  ref
}: {
  callback: () => void
  ref: RefObject<HTMLElement>
}): void => {
  useEffect(() => {
    const callBack = (e: MouseEvent): void => {
      const target = e.target as Node
      if (ref.current !== null) {
        const hasClickedOuside = !ref.current.contains(target)
        hasClickedOuside && callback()
      }
    }
    document.addEventListener('click', callBack)
    return () => {
      document.removeEventListener('click', callBack)
    }
  }, [])
}
