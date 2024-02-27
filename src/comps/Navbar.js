import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className='nav-content'>
        <div className="logo">
          <img src="/creoshiftlogo.jpg" alt="Creoshift Logo" />
        </div>
        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`navList ${menuOpen ? 'open' : ''}`}>
          <li className="navItem">
            <Link href="/" className="navLink">Home</Link>
          </li>
          <li className="navItem">
            <Link href="/about" className="navLink">About</Link>
          </li>
          <li className="navItem">
            <Link href="/contact" className="navLink">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;