import React from 'react';
import BottomBanner from '../components/BottomBanner';

const AwardAndAchivements = () => {
  return (
    <>
      <div className='text-center bg-gray-50 py-10 lg:py-20'>
        <h2 className='text-3xl lg:text-5xl font-semibold underline underline-offset-6 pb-4'>
          Certification
        </h2>
        <div className='flex items-center justify-center'>
          <img
            src='/home-image/certificate.jpg'
            alt='certificate'
            className='h-[400px] w-[300px] lg:h-[800px] lg:w-[700px] shadow-2xl rounded-lg'
          />
        </div>
      </div>
      <section>
        <BottomBanner />
      </section>
    </>
  );
};

export default AwardAndAchivements;
