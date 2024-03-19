import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

const Banner = ({ images, cardContent, textColor }) => {
  const swiperRef = useRef(null);

  const nextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const prevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const swiperParams = {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `
          <span class="${className}">
            <span>${index + 1}</span>
          </span>`;
      },
    },
  };

  return (
    <section id="banner" className="py-16 bg-gray-100">
      <div className="content">
        <Swiper {...swiperParams} ref={swiperRef}>
          {images.map((image, index) => (
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
        <div className="swiper-button-next" onClick={nextSlide}></div>
        <div className="swiper-button-prev" onClick={prevSlide}></div>
        
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Banner;