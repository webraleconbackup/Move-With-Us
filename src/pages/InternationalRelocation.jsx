import React from 'react'
import Service from '../components/Service'
import BottomBanner from '../components/BottomBanner'

const InternationalRelocation = () => {

 const internationalRelocationData = [
  {
    id: 1,
    title: "Efficient International Relocation Services in Mumbai",
    image: "/gallery/img4.jpg",
    description: [
      "Moving abroad from Mumbai requires expert support—and that's exactly what we deliver. Our international relocation services are designed to make your overseas move smooth, secure, and stress-free.",
      "With a skilled team experienced in global logistics, we manage everything from secure packing to customs guidance and safe international transportation. Every step is handled with precision and compliance.",
      "We prioritize comfort and clarity throughout your journey. Our team provides tailored plans, clear pricing, and continuous assistance so your relocation experience remains hassle-free.",
      "When you're ready to begin your new chapter overseas, trust Move With Us Packers & Movers to handle the transition with care and reliability."
    ],
    subtitle: "Relocate Anywhere, Worry-Free – International Expertise You Can Trust",
    points: [
      "Affordable and fully customized international relocation packages.",
      "Personalized assistance for global and domestic moving needs.",
      "Comprehensive door-to-door moving and logistics management.",
      "Reliable scheduling with assured on-time delivery worldwide.",
      "Careful packing and secure handling of all belongings.",
      "Round-the-clock support to guide you through every step."
    ]
  }
];



  return (
    <div>
      <Service servicesData={internationalRelocationData}/>
      <BottomBanner />
    </div>
  )
}

export default InternationalRelocation
