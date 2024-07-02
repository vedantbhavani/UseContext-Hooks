import ComA from './ComA'
import { createContext } from 'react'

const ThemeContext = createContext(null)
const App = () => {
  return (
    <div>
      <ThemeContext.Provider value="Vedant">
        <ComA/>
      </ThemeContext.Provider>
    </div>
  )
}
export default App
export {ThemeContext}