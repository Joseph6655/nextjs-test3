import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo">
          <img src="/creoshiftlogo.jpg" alt="Logo" />
        </div>
        <button className="burger-button" onClick={toggleNav}>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </button>
        <ul className={`navList ${isOpen ? 'showNav' : ''}`}>
          <li className="navItem">
            <Link href="/" className="navLink"> Home</Link>
          </li>
          <li className="navItem">
            <Link href="/about" className="navLink"> About </Link>
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