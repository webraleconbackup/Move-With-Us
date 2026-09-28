import React, { useState, useRef, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper/modules';

const LatestWork = ({ latestWorks }) => {
  return (
    <section className='pt-20 pb-10 bg-gray-100'>
      <div className=' px-4 lg:px-40'>
        <div className='pb-4 flex justify-between items-center'>
          <div>
            <h3 className='text-md font-semibold'>
              <span className='text-2xl text-blue-700 font-bold'>Move With Us </span>
              <span>
               Packers and Movers
              </span>
            </h3>
            <h3 className='text-2xl md:text-4xl mb-2 font-bold'>
              Our Latest Work
            </h3>
          </div>
         <div>
             <button className='bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500  text-white font-semibol text-sm lg:text-lg px-2 w-24 lg:w-36 py-3 lg:px-4 lg:py-3 rounded-md '>
            More Work
          </button>
         </div>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <div>
            {latestWorks.map((card, index) => (
              <SwiperSlide key={index} className='mb-4'>
                <div className='relative group rounded-md'>
                  <img
                    src={card.img}
                    alt={card.title}
                    className='object-fit object-center h-[250px] w-[400px] rounded-md border'
                  />
                </div>
                <p className='text-center text-zinc-600 mt-4'>{card.title}</p>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default LatestWork;
