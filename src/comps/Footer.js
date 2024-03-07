import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black relative bottom-0 left-0 w-full items-center mx-auto p-5">
      <div className="footer-all mx-auto">
        <div className="nav-content container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="logo  flex justify-center md:justify-start">
            <img src="/creoshiftlogo.jpg" alt="Logo" className="h-12" />
          </div>
          <div className="footer-links flex flex-col md:flex-row justify-center items-center p-2">
            <Link href="/" className="text-white mx-4">Home</Link>
            <Link href="/about" className="text-white mx-4">About</Link>
            <Link href="/contact" className="text-white mx-4">Contact</Link>
          </div>
          <div className="social-icons flex justify-center md:justify-end space-x-3 p-1"> 
            <Link href="https://www.Whatsup.com" className="whats-up-icon">
              <img src="/wtslogo1.jpg" alt="WhatsApp" className="h-6" />
            </Link>
            <Link href="https://www.Facebook.com" className="Facebook-icon">
              <img src="/fb1.png" alt="Facebook" className="h-6" />
            </Link>
            <Link href="https://www.Instagram.com" className="Instagram-icon">
              <img src="/insta1.jpg" alt="Instagram" className="h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;