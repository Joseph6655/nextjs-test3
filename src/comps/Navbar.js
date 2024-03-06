import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar bg-black">
    <div className="nav-content container  max-w-50 mx-auto flex justify-between bg-black ">
      <div className="logo ml-2 p-2">
        <img src="/creoshiftlogo.jpg" alt="Logo" className="h-12" />
      </div>
        
        <ul className={`navList flex  p-6 `}>
          <li className="navItem mr-4 ">
            <Link href="/" className="navLink text-white"> Home</Link>
          </li>
          <li className="navItem mr-4">
            <Link href="/about" className="navLink text-white"> About </Link>
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