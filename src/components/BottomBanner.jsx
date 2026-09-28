import React from 'react';
import { Link } from 'react-router-dom';

const BottomBanner = () => {
  return (
    <>
      <section className='flex flex-col lg:flex-row justify-between items-center  bg-red-600 px-4 lg:px-40 mb-16 py-2 md:py-8'>
        <h3 className='text-white text-2xl lg:text-4xl font-semibold mb-8'>
          Are you looking for professional Services for relocation?
        </h3>
        <Link to='/contactus'>
          <button className='px-6 py-3 bg-white text-red-600 font-semibold rounded-md cursor-pointer'>
            Contact Us
          </button>
        </Link>
      </section>
    </>
  );
};

export default BottomBanner;
