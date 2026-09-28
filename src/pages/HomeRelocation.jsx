import React from 'react'
import Service from '../components/Service';
import BottomBanner from '../components/BottomBanner';

const HomeRelocation = () => {
  const employeerelpocationData = [
  {
    id: 1,
    title: 'Home Relocation Service in Mumbai',
    image: '/service/household-shifting.jpg',
    description: [
      'Moving your home within a busy city like Mumbai requires careful planning and reliable support. Move With Us Packers and Movers provides smooth and organized home relocation services designed for individuals and families of all sizes. Whether you are shifting locally within the city or planning a long-distance move, our team ensures a well-managed and hassle-free experience.',
      'We focus on quality packing, secure loading, safe transportation, and careful unloading to keep your belongings protected throughout the journey. Our team understands Mumbai’s routes and requirements, helping you shift quickly and efficiently with complete peace of mind.',
      'With transparent pricing, dedicated assistance, and a customer-first approach, we make your relocation simple, safe, and comfortable. Contact us today to begin your move with confidence.'
    ],
    subtitle: 'Safe, Swift & Stress-Free Home Relocation Across Mumbai',
    points: [
      'Cost-effective and customized moving solutions tailored to your needs.',
      'Stress-free, affordable, and personalized services whether local or international.',
      'Hassle-free door-to-door service, handling every step of the move.',
      'On-time delivery with guaranteed punctuality.',
      'Priority on safety and secure handling of your belongings.',
      '24/7 customer support to assist throughout the process.',
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

export default HomeRelocation
