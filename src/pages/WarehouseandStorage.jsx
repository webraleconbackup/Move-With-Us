import React from 'react';
import BottomBanner from '../components/BottomBanner';
import Service from '../components/Service';
import { Link } from 'react-router-dom';

const WarehouseandStorage = () => {
  const services = [
    {
      label: 'EMPLOYEE RELOCATION',
      link: '/employeerelocation',
    },
    {
      label: 'HOME RELOCATION',
      link: '/homerelocation',
    },
    {
      label: 'BUSINESS RELOCATION',
      link: '/businessrelocation',
    },
    {
      label: 'ART & ARTEFFECTS RELOCATION',
      link: '/artandarteffect',
    },
    {
      label: 'INTERNATIONAL RELOCATION',
      link: '/internationalrelocation',
    },
    {
      label: 'VEHICLE TRANSPORTATION',
      link: '/vehicletransportation',
    },
    {
      label: 'WAREHOUSE AND STORAGE',
      link: '/warehouseandstorage',
    },
    {
      label: 'CARGO SERVICE',
      link: '/cargoservice',
    },
  ];

 const servicesData = [
  {
    id: 1,
    title: 'Warehouse Storage Service in Mumbai',
    image: '/service/storage-service.jpg',
    description: [
      'We offer secure and well-maintained warehouse and storage solutions across Mumbai and Navi Mumbai for both household and commercial goods.',
      'Every stored item is documented and managed with care, and insurance options are available to safeguard your belongings against unforeseen events.',
    ],
    types: 'Types of Warehouse Storage:',
    firsttype: 'Private Warehouses:',
    secondtype: 'Public Warehouses:',
    dec1: 'Individually managed facilities suitable for businesses seeking dedicated storage for long-term or high-volume requirements.',
    dec2: 'Shared storage spaces ideal for companies or individuals needing flexible, short-term, and budget-friendly storage options.',
    subtitle: 'Organized, Monitored & Hassle-Free Storage in Mumbai',
    points: [
      'Cost-effective and customizable storage plans for all needs.',
      'Safe, insured, and professionally supervised storage environments.',
      'Easy inventory tracking and complete warehousing assistance.',
      'Quick access, retrieval, and delivery of stored goods when required.',
      '24/7 surveillance and safety protocols for your items.',
      'Round-the-clock customer assistance for smooth coordination.',
    ],
  },
];

  return (
    <div>
      <div className='w-full py-10 md:px-10 bg-white'>
        {servicesData.map((service) => (
          <div
            key={service.id}
            className='max-w-7xl mx-auto grid md:grid-cols-[65%_35%] gap-8 items-start mb-10 rounded-md'
          >
            {/* Left Image Section + Text */}
            <div className='flex flex-col justify-center shadow-xl p-4'>
              <img
                src={service.image}
                alt={service.title}
                className='rounded-lg w-full h-[300px] md:h-[600px] object-cover mb-6 border border-blue-600'
              />
              <div>
                <h2 className='text-2xl md:text-3xl font-bold mb-4 text-gray-900'>
                  {service.title}
                </h2>

                {service.description.map((para, index) => (
                  <p key={index} className='text-gray-700 mb-4 leading-relaxed'>
                    {para}
                  </p>
                ))}

                <h3 className='text-lg md:text-xl font-semibold text-gray-800 mt-6 mb-3'>
                  {service.types}
                </h3>
                <p className='text-text-lg text-gray-700'>
                  <span className='font-bold text-lg'>
                    {' '}
                    {service.firsttype}{' '}
                  </span>{' '}
                  {service.dec1}
                </p>
                <p className='text-lg text-gray-700'>
                  <span className='font-bold text-lg'>
                    {' '}
                    {service.secondtype}
                  </span>{' '}
                  {service.dec2}
                </p>

                <h3 className='text-lg md:text-xl font-semibold text-gray-900 mt-6 mb-3'>
                  {service.subtitle}
                </h3>

                <ul className='list-disc list-inside text-gray-700 space-y-2'>
                  {service.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Services Section */}
            <div className='md:pl-4 shadow-xl p-4 rounded-lg'>
              <h2 className='text-xl md:text-2xl font-semibold text-orange-600 border-b-2 border-orange-600 inline-block mb-5'>
                Our Popular Services
              </h2>
              <ul className='space-y-4'>
                {services.map((item, index) => (
                  <li
                    key={index}
                    className='border-b border-gray-300 pb-2 text-gray-800 font-medium hover:text-orange-600 transition-colors duration-300 cursor-pointer'
                  >
                    <Link to={item.link}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <BottomBanner />
    </div>
  );
};

export default WarehouseandStorage;
