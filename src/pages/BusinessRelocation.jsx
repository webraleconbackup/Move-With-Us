import React from 'react';
import Service from '../components/Service';
import BottomBanner from '../components/BottomBanner';

const BusinessRelocation = () => {
  const businessRelocationData = [
  {
    id: 1,
    title: 'Efficient Business Relocation Services in Mumbai',
    image: '/service/businessRelocation.jpg',
    description: [
      'Shifting your business in Mumbai’s busy environment calls for accuracy, planning, and a dependable team. At Move With Us Packers and Movers, we offer well-organized office relocation services that help you move without interrupting daily operations. Whether it’s a small office or a large corporate setup, we ensure a smooth transition with minimal downtime.',
      'Our trained team handles everything—from dismantling office furniture and securely packing your equipment to transporting and reinstalling everything at your new workplace. With strong experience across Mumbai’s commercial areas, we deliver a safe and hassle-free moving process tailored to your business requirements.',
      'With transparent pricing, dedicated coordination, and timely execution, Move With Us Packers and Movers is the trusted choice for business relocation in Mumbai. Connect with us today for a seamless move that keeps your workflow uninterrupted.'
    ],
    subtitle:
      'Relocate Smarter – Reliable Business Moving Solutions in Mumbai',
    points: [
      'Cost-effective and tailored moving solutions for your business.',
      'Stress-free, affordable, and professional moving services.',
      'End-to-end relocation management including packing and reassembly.',
      'Guaranteed on-time delivery of office assets.',
      'High priority on safety and protection of office equipment.',
      '24/7 customer support for real-time assistance.',
    ],
  },
];

  return (
    <div>
      <Service servicesData={businessRelocationData} />
      <BottomBanner />
    </div>
  );
};

export default BusinessRelocation;
