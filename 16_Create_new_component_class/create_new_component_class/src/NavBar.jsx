import React from "react";
import { Link } from 'rect-router-dom'

const NavBar = () => (
    <ul className="NavBar">
        <li>
            <Link to="/">
                <button>Shop</button>
            </Link>
        </li>
            
        <li>
            <Link to="/blog">
                <button>blog</button>
            </Link>
        </li>
            
        <li>
            <Link to="/about">
                <button>Shop</button>
            </Link>
        </li>

        <li>
            <Link to="/contact">
                <button>Shop</button>
            </Link>
        </li>
    </ul>
)

export default NavBar;