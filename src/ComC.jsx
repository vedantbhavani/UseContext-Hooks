import { useContext } from 'react'
import { ThemeContext } from './App'

const ComC = () => {
  const lastValue = useContext(ThemeContext)
  return (
    <div>
      <h1>My Name is {lastValue}</h1>
    </div>
  )
}

export default ComC
