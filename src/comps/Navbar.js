import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="navbar">
      
        <div className ="logo">
          <img src="/creoshiftlogo.jpg"/>
          </div>
      <ul className="navList">
        <li className="navItem"><Link href="/" className="navLink">Home</Link>
        </li>
        <li className="navItem"><Link href="/about"className="navLink">About</Link>
        </li>
        <li className="navItem"><Link href="/contact" className="navLink">Contact</Link>
        </li>
      </ul>
      
    </nav>
  );
};

export default Navbar;
