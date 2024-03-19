import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';

const Banner = ({ images, cardContent, textColor }) => {
  const swiperParams = {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  return (
    <section id="banner" className="py-16 bg-gray-100">
      <div className="content">
        <Swiper {...swiperParams}>
          {Array.isArray(images) && images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="banner-item relative">
                <div className="image-container relative w-full">
                  <img src={image} alt={`Background ${index}`} className="w-full h-screen" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 rounded-lg">
                    <div className={`card-content text-white text-center mt-12 bg-black bg-opacity-50 smaller-text-xl md:text-5xl px-4 py-2 rounded-lg mb-10 ${textColor}`}>
                      <h2>{cardContent}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;