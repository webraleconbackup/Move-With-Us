import React from 'react'
import { Link } from 'react-router-dom';
import BottomBanner from '../components/BottomBanner';

const CargoService = () => {

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
    title: 'Cargo Service in Mumbai',
    image: '/service/goods-insurance.jpg',
    description: [
      "Move With Us offers dependable and efficient cargo services tailored for both personal and business needs. Whether you’re sending goods within India or overseas, our streamlined logistics solutions ensure safe handling, timely transportation, and complete peace of mind."
    ],
    types: 'Cargo Services Include:',
    firsttype: 'Air Cargo :',
    secondtype: 'Sea Cargo:',
    thirdtype: 'Road Cargo:',
    fourthtype: 'Door-to-Door Delivery:',
    fifth: 'Customs Clearance & Documentation:',
    dec1: 'Fast, secure, and time-bound air freight services ideal for urgent shipments.',
    dec2: 'Affordable and reliable sea freight options for bulk and container cargo (FCL & LCL).',
    dec3: 'Trusted ground transport services for regional, intercity, and last-mile deliveries.',
    dec4: 'Convenient pickup and delivery service right from your doorstep.',
    dec5: 'Professional support for customs paperwork, duty processes, and compliance.',
    subtitle: 'Reliable Cargo Services Tailored for Mumbai’s Demands',
    points: [
      'Customized and budget-friendly cargo solutions designed to meet your needs.',
      'Smooth, safe, and flexible services for both domestic and international cargo.',
      'End-to-end management from pickup to final delivery.',
      'Timely delivery ensured through efficient planning and execution.',
      'Secure handling of goods with trained logistics professionals.',
      'Round-the-clock customer support for updates and assistance.',
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
                <p className='text-text-md text-gray-700'>
                  <span className='font-bold text-lg'>
                    {' '}
                    {service.firsttype}{' '}
                  </span>{' '}
                  {service.dec1}
                </p>
                <p className='text-md text-gray-700'>
                  <span className='font-bold text-lg'>
                    {' '}
                    {service.secondtype}
                  </span>{' '}
                  {service.dec2}
                </p>
                 <p className='text-md text-gray-700'>
                  <span className='font-bold text-lg'>
                    {' '}
                    {service.thirdtype}
                  </span>{' '}
                  {service.dec3}
                </p>
                 <p className='text-md text-gray-700'>
                  <span className='font-bold text-lg'>
                    {' '}
                    {service.fourthtype}
                  </span>{' '}
                  {service.dec4}
                </p>
                 <p className='text-md text-gray-700'>
                  <span className='font-bold text-lg'>
                    {' '}
                    {service.fifth}
                  </span>{' '}
                  {service.dec5}
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
  )
}

export default CargoService
