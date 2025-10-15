import './NavBar.css'

import { Link, Routes, Route } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='navbar'>
      <ul className="nav">
        <Link to="/"><button className='btn'>Home</button></Link>
        <Link to="/about"><button className='btn'>About</button></Link>
        <Link to="/contact"><button className='btn'>Contact</button></Link>
        <Link to="/blog"><button className='btn'>Blog</button></Link>
      </ul>
    </nav>
  );
}

export default NavBar;