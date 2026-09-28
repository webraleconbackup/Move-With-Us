import React from 'react';

const IndustriesSection = ({ industries }) => {
  return (
    <section className='py-16 px-2 lg:px-40 bg-white'>
      <h2 className='text-lg lg:text-3xl font-semibold text-center mb-12 tracking-wide'>
        VERSATILE RELOCATION EXPERIENCE ACROSS INDUSTRIES
      </h2>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {industries.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className='p-6 bg-white rounded-2xl border border-zinc-200 shadow-md hover:shadow-xl 
              transition-all duration-300 hover:-translate-y-1 relative overflow-hidden'
            >
              {/* Hover Gradient Border */}
              <span className='absolute inset-0 rounded-2xl border border-transparent hover:border-red-400 transition-all duration-300'></span>

              <div className='flex items-center gap-4 mb-3'>
                {/* ICON STYLING */}
                <div className='w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-red-500 shadow-sm'>
                  <Icon size={26} />
                </div>

                <h3 className='text-lg font-semibold text-gray-800'>
                  {item.title}
                </h3>
              </div>

              <p className='text-gray-600 text-sm mb-4 leading-relaxed'>
                {item.description}
              </p>

              <a
                href={item.link}
                className='text-red-500 font-semibold hover:underline hover:text-red-600 transition'
              >
                Learn More →
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default IndustriesSection;
