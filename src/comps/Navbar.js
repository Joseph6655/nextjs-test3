import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  

  return (
    <nav className="navbar bg-black items-centre mx-auto p-5">
    <div className="nav-content container flex justify-between bg-black mx-auto ">
      <div className="logo ml-2">
        <img src="/creoshiftlogo.jpg" alt="Logo" className="h-12" />
      </div>
        
        <ul className={`navList flex mt-2`}>
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