import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-all">

          <div className ="Footer-logo">
              <img src="/creoshiftlogo.jpg"/>
          </div>
          <div className="footer-links flex justify-center">
            <Link href="/" className="text-white mx-4">Home</Link>
           <span className="mx-6"></span> {/* Increase the space */}
            <Link href="/about" className="text-white mx-4">About</Link>
           <span className="mx-6"></span> {/* Increase the space */}
            <Link href="/contact" className="text-white mx-4">Contact</Link>
          </div>
         
        <div className="social-icons flex justify-end space-x-4">
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
    </footer>
  );
};

export default Footer;
