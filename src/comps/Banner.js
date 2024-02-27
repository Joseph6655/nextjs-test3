import React from 'react'
import Link from 'next/link'

const Banner = () => {
  return (
    <section id="banner">
      <div className="banner-item">
        <div className="image-container">
          <img src="/banner.png" alt="Background" />
          <div className="card-content">
            <h2>Welcome to Home page </h2>
            
            <Link href="/page">
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner