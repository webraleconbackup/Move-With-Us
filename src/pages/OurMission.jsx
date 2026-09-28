import React from 'react';
import { Clock, ClipboardCheck, ShieldCheck } from 'lucide-react';
import BottomBanner from '../components/BottomBanner';

const missions = [
  {
    id: 1,
    icon: <Clock className='w-12 h-12 text-red-500 mx-auto' />,
    title: 'Fast Service',
  },
  {
    id: 2,
    icon: <ClipboardCheck className='w-12 h-12 text-red-500 mx-auto' />,
    title: '100% Accuracy',
  },
  {
    id: 3,
    icon: <ShieldCheck className='w-12 h-12 text-red-500 mx-auto' />,
    title: 'Safe Moving',
  },
];

export default function OurMission() {
  return (
    <>
      <section className='bg-gray-50 py-16'>
        <div className='text-center mb-10'>
          <h2 className='text-3xl md:text-4xl font-bold text-red-500'>
            Our Mission
          </h2>
        </div>

        <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6'>
          {missions.map((item) => (
            <div
              key={item.id}
              className='bg-white shadow-sm hover:shadow-md transition-all duration-300 rounded-xl p-8 text-center'
            >
              <div className='mb-4'>{item.icon}</div>
              <h3 className='text-lg font-medium text-gray-800'>
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section>
        <BottomBanner />
      </section>
    </>
  );
}
