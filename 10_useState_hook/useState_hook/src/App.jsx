import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyComponent />
      <Counter />
    </>
  )
}

export default App
