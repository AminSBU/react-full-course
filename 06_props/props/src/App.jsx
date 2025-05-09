import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './Student.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Student name="Amin" age="33" isStudent={false}/>
    </>
  )
}

export default App
