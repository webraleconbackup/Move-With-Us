import React from 'react'
import BottomBanner from '../components/BottomBanner'
import Service from '../components/Service'

const VehicleTransportation = () => {

  const vehicleRelocationData = [
  {
    id: 1,
    title: 'Professional Vehicle Transportation Service in Mumbai',
    image: '/service/vehicle-transport.jpg',
    description: [
      "Transporting your car or bike should be stress-free—and our expert vehicle relocation service ensures exactly that. Move With Us Packers & Movers provides reliable and secure vehicle transportation across Mumbai and beyond.",
      "Whether you're shifting within the city, moving to another state, or sending your vehicle across borders, we offer customized solutions to match your needs.",
      "Our team uses specialized equipment, modern carriers, and professional loading methods to make sure your vehicle remains safe throughout the journey. Every car, bike, or commercial vehicle is handled with complete care from pickup to delivery.",
      "We maintain clear communication, transparent pricing, and real-time updates so you always know your vehicle’s status during transit.",
      "Choose Move With Us Packers & Movers for a smooth, damage-free, and on-time vehicle delivery experience. Contact us today for trusted and affordable vehicle transport services."
    ],
    subtitle: 'Relocate Anywhere, Worry-Free – International Expertise You Can Trust',
    points: [
      'Cost-effective and tailored international moving solutions.',
      'Personalized service for both local and international moves.',
      'Complete door-to-door relocation management.',
      'Guaranteed on-time delivery and logistics coordination.',
      'Safety-focused handling of your valuables and cargo.',
      '24/7 customer support to assist you at every stage.',
    ],
  },
];


  
  return (
    <div>
      <Service servicesData={vehicleRelocationData}/>
      <BottomBanner />
    </div>
  )
}

export default VehicleTransportation
