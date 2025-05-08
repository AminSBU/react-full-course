import { useState } from 'react'
import './App.css'
import Button from './Button.jsx'
import './Button.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <Button onClick={handleClick} />
      <p>Count: {count}</p>
    </div>
  )
}

export default App