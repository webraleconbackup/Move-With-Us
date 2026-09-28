import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WelcomeSection = ({ welcomeData }) => {
  const phoneNumber = '919137238757';
  const message = 'I am interested in your service';

  return (
    <section className='py-16 px-4 lg:px-40 bg-white'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        
        {/* Right Image (show first in mobile) */}
        <div className='order-1 lg:order-2'>
          <img
            src={welcomeData.image}
            alt='Move With Us Packers and Movers'
            className='rounded lg:rounded-2xl shadow-lg bg-cover h-[300px] lg:h-[450px] w-full'
          />
        </div>

        {/* Left Content (show second in mobile) */}
        <div className='order-2 lg:order-1'>
          <h2 className='text-lg lg:text-3xl font-bold mb-4 grid-2'>
            {welcomeData.heading} <br />
            <div>
              <span className='text-red-600'>{welcomeData.company}</span>
              <span className='text-black'> {welcomeData.last}</span>
            </div>
          </h2>
          <p className='text-gray-700 mb-6'>{welcomeData.description}</p>

          {/* Decorative line */}
          <div className='w-12 h-1 bg-orange-500 mb-6 relative'>
            <span className='absolute -bottom-1 left-1/2 w-3 h-3 rotate-45 bg-orange-500'></span>
          </div>

          {/* Points from array */}
          <ul className='space-y-3 text-gray-700'>
            {welcomeData.points.map((point, index) => (
              <li key={index}>➔ {point}</li>
            ))}
          </ul>

          {/* Highlighted text */}
          <p className='mt-6 text-gray-800 font-medium'>
            <span className='text-red-600 font-semibold md:font-bold'>
              {welcomeData.highlight.title}
            </span>{' '}
            {welcomeData.highlight.text}
          </p>
        </div>
      </div>

      {/* WhatsApp Button */}
      <Link 
        to={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      >
        <button className='flex items-center mt-6 gap-x-2 border text-red-500 font-semibold rounded border-red-500 px-4 py-3'>
          <FaWhatsapp className='text-green-500 text-2xl' />
          Chat With Us
        </button>
      </Link>
    </section>
  );
};

export default WelcomeSection;
