import React from 'react';
import Service from '../components/Service';
import BottomBanner from '../components/BottomBanner';

const ArtandArtEffect = () => {
  const artandEffectData = [
  {
    id: 1,
    title: 'Efficient Art & ArtEffects Relocation Services in Mumbai',
    image: '/service/artifacts.jpg',
    description: [
      'Moving valuable artwork requires precision, care, and complete reliability—and that’s exactly what we offer at Move With Us Packers & Movers. Our dedicated art relocation service is crafted for collectors, galleries, museums, and anyone who needs safe transportation of delicate pieces. Whether the move is within Mumbai or across the country, we ensure every item is handled with specialized attention.',
      'With expert packing methods, secure loading, climate-conscious transport, and careful placement at destination, we cover every aspect of the relocation process. Our strong understanding of Mumbai’s logistical network allows us to execute timely and smooth transfers, even in high-traffic zones. We focus on transparency, safety, and personalized assistance at every step.',
      'Connect with Move With Us Packers & Movers for dependable and well-organized art relocation services. We treat every piece with respect and care, ensuring it reaches its new home in perfect condition.'
    ],
    subtitle: 'From Canvas to Sculpture – We Move Art the Right Way',
    points: [
      'Tailored relocation solutions designed specifically for artwork and delicate items.',
      'Affordable, reliable, and flexible service for both short and long-distance moves.',
      'Complete door-to-door assistance, from packing to final placement.',
      'Punctual delivery backed by efficient planning and coordination.',
      'Enhanced safety measures to protect fragile and high-value items.',
      'Round-the-clock support for smooth communication and updates.'
    ],
  },
];


  return (
    <div>
      <Service servicesData={artandEffectData} />
      <BottomBanner />
    </div>
  );
};

export default ArtandArtEffect;
