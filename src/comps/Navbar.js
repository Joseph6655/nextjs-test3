import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar bg-gray-800">
      <div className="nav-content container mx-auto flex justify-between">
        <div className="logo">
          <img src="/creoshiftlogo.jpg" alt="Logo" className="h-12" />
        </div>
        <button className="burger-button md:hidden" onClick={toggleNav}>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </button>
        <ul className={`navList md:flex md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <li className="navItem">
            <Link href="/" className="navLink text-white">Home</Link>
          </li>
          <li className="navItem">
            <Link href="/about" className="navLink text-white">About</Link>
          </li>
          <li className="navItem">
            <Link href="/contact" className="navLink text-white">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;