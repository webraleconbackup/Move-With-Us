import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import BottomBanner from '../components/BottomBanner';

const faqs = [
  {
    question: 'What information should I tell movers on the first conversation?',
    answer:
      'We offer packing, moving, loading, unloading, transportation, and unpacking services for households, offices, and vehicles.',
  },
  {
    question: 'What questions should I ask movers before finalizing the deal?',
    answer:
      'Ask about pricing, hidden charges, insurance, packing material used, and estimated delivery time.',
  },
  {
    question: 'What to do if I don’t have a fixed date for moving?',
    answer:
      'Inform the movers and try to schedule a tentative date. Flexibility might help in getting better pricing.',
  },
  {
    question: 'When should I start looking for packers and movers?',
    answer:
      'Ideally, start looking 2–3 weeks in advance to compare prices and finalize the best vendor.',
  },
  {
    question: 'When is the ideal time to move?',
    answer:
      'Mid-month and weekdays are usually less busy and more affordable compared to weekends or month-end.',
  },
  {
    question: 'How much should I pay the movers before relocation?',
    answer:
      'Typically 10–30% upfront. Confirm terms and balance payment with the provider.',
  },
   {
    question: 'Will packers movers dismantle and reinstall my AC, TV, geyser, etc.',
    answer:
      'Many movers offer these services, but you should confirm if they are included or come at extra cost.',
  },
   {
    question: 'What items I should not shift with movers?',
    answer:
      'Avoid carrying jewelry, important documents, flammable items, and perishable goods.',
  },
   {
    question: 'What services do packers and movers offer in the basic package?',
    answer:
      'Loading, transport, unloading, and basic packing. Ask for a detailed breakdown.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className='bg-white py-12 px-4 md:px-16'>
        <h2 className='text-xl md:text-4xl text-center font-bold text-red-600 mb-2'>
          Frequently Asked Questions
        </h2>
        <p className='text-sm md:text-lg text-center text-amber-600 mb-8'>
          Got questions? We’ve got answers!
        </p>

        <div className='max-w-5xl mx-auto space-y-4'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='border border-amber-500 rounded-md overflow-hidden transition-all'
            >
              <button
                onClick={() => toggleFAQ(index)}
                className='w-full flex justify-between text-left px-4 py-4 font-medium text-md md:text-lg hover:bg-amber-50'
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-amber-600 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className='px-4 pb-4 text-gray-700 text-md lg:text-base bg-amber-50'>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <section>
        <BottomBanner />
      </section>
    </>
  );
};

export default FAQ;
