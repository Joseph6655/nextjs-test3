import React from 'react';


const Banner = () => {
  return (
    <section id="banner" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="banner-item">
          <div className="image-container relative">
            <img src="/banner.png" alt="Background" className="w-full h-auto" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="card-content">
            <h2>Welcome to Home page </h2>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;