import React from 'react';

const Banner = () => {
  return (
    <section id="banner" className="py-16 bg-gray-100">
      <div className="content">
        <div className="banner-item relative">
          <div className="image-container relative w-full">
            <img src="/banner.png" alt="Background" className="w-full h-auto" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 rounded-lg">
              <div className="card-content text-white text-center mt-12 bg-black bg-opacity-50 smaller-text-xl md:text-5xl px-4 py-2 rounded-lg mb-10">
                <h2>Welcome to Home page</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;