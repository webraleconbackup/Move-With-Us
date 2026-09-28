import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PayOnline = () => {
  const phoneNumber = '919137238757';
  const message = 'I am interested in your service';

  return (
    <div className='mt-40'>
      <div className='py-10 text-center'>
        <div>
          <h2 className='text-xl px-4 lg:text-3xl text-zinc-700 font-bold'>
            Here is the QR to make the payment
          </h2>
          <p className='text-lg text-zinc-600'>Scan here</p>
        </div>
        <div className='text-center flex justify-center items-center py-6'>
          <img
            src='/logo/Gpay.jpg'
            alt='QR'
            className='w-[350px] h-[450px] border-20 rounded text-gray-800'
          />
        </div>
        <div className='flex flex-col justify-center items-center w-full gap-4'>
          <p className='font-semibold text-lg text-zinc-700'>
            Send Screenshot to our WhatsApp Number :
          </p>
          <Link
            to={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              message
            )}`}
          >
            <div className='flex items-center gap-4 border cursor-pointer text-red-600 hover:bg-red-600 transition-all duration-500 rounded-md px-4'>
              <span>
                <FaWhatsapp className='text-green-600 text-2xl' />
              </span>
              <button className='block text-red-600 hover:text-white font-semibold py-4 cursor-pointer'>
                Send Screenshort Here
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PayOnline;
