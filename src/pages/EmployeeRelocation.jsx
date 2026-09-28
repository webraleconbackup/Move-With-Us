import React from 'react'
import Service from '../components/Service'
import BottomBanner from '../components/BottomBanner';

const EmployeeRelocation = () => {


    const employeerelpocationData = [
  {
    id: 1,
    title: 'Employee Relocation Service in Mumbai',
    image: '/gallery/img6.jpg',
    description: [
      'Moving to or within Mumbai becomes effortless with our dedicated employee relocation support. We handle each stage of the move with proper planning and care to ensure a smooth transition for working professionals.',
      'Our services cover every aspect of relocation—from careful packing and organized loading to secure transportation and timely unpacking. With a skilled team managing the entire process, employees experience a comfortable and stress-free move.',
      'We focus on offering flexible and personalized moving solutions that fit your budget and specific requirements. With an emphasis on safety, punctuality, and reliability, we ensure a seamless relocation experience in Mumbai.',
    ],
    subtitle: 'Trusted Partner for Stress-Free Employee Moves in Mumbai',
    points: [
      'Cost-effective and customized moving solutions tailored to your business needs.',
      'Stress-free, affordable, and personalized moving services, whether it\'s local or international.',
      'Hassle-free door-to-door moving solution, handling every step of the process for a seamless transition.',
      'Punctuality guaranteed with on-time delivery of your belongings.',
      'Prioritization of safety and security, ensuring a safe move for your household or office items.',
      '24/7 customer support available to assist you throughout the moving process.',
    ],
  },
];





  return (
    <div>
      <Service servicesData={employeerelpocationData}/>
      <BottomBanner />
    </div>
  )
}

export default EmployeeRelocation
