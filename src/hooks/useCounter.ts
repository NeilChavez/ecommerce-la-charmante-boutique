import { useState } from 'react'

interface CounterResults {
  counter: number
  increment: () => void
  decrement: () => void
}

export const useCounter = ({ initialValue }: { initialValue: number }): CounterResults => {
  const [counter, setCounter] = useState(initialValue)
  const increment = (): void => {
    setCounter((prev) => prev + 1)
  }
  const decrement = (): void => {
    let newValue: number = counter
    if (counter <= 1) {
      newValue = 1
    } else {
      newValue = counter - 1
    }
    setCounter(newValue)
  }

  return {
    counter,
    increment,
    decrement
  }
}
