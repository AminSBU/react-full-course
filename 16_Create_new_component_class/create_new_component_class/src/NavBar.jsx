import React from "react";
import { Link, Routes, Route } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <Link to="/"><button>Home</button></Link>
        <Link to="/about"><button>About</button></Link>
        <Link to="/contact"><button>Contact</button></Link>
        <Link to="/blog"><button>Blog</button></Link>
      </ul>
    </nav>
  );
}

export default NavBar;