import React, { useState } from 'react';
import { FaDesktop, FaBoxOpen, FaTruck, FaUsers } from 'react-icons/fa';

import FlipCard from './FlipCard';

const WorkProcess = () => {
  const steps = [
    {
      icon: <FaDesktop className='text-5xl text-red-600 mb-4' />,
      title: 'Book Our Service',
      backText: 'Easily book our service online or via call.',
    },
    {
      icon: <FaBoxOpen className='text-5xl text-red-600 mb-4' />,
      title: 'We Pack Things',
      backText: 'Our experts safely pack all your belongings.',
    },
    {
      icon: <FaTruck className='text-5xl text-red-600 mb-4' />,
      title: 'We Move Things',
      backText: 'We transport your items with full care.',
    },
    {
      icon: <FaUsers className='text-5xl text-red-600 mb-4' />,
      title: 'Safely Delivered',
      backText: 'Your items are delivered safely & on time.',
    },
  ];

  return (
    <section className='py-16 bg-gray-100 text-center'>
      <h2 className='text-3xl font-bold mb-2'>Our Work Process</h2>
      <p className='text-gray-800 mb-10 px-2'>
        These are the 4 steps followed by Move With Us Packer to execute their
        work.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 lg:px-40'>
        {steps.map((step, index) => (
          <FlipCard key={index} steps={step} />
        ))}
      </div>
    </section>
  );
};



export default WorkProcess;
