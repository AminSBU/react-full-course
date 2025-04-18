import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header.jsx'
import Card   from './card.jsx'
import Footer from './footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Card/>
      <Footer/>
    </>
  );
}

export default App;
