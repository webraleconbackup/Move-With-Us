import React, {useState} from "react";


const FlipCard = ({ steps }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className='w-full h-60 perspective'
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 ease-in-out transform-style-preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front */}
        <div className='absolute w-full h-full bg-white shadow-md rounded-xl p-8 flex flex-col items-center justify-center backface-hidden'>
          {steps.icon}
          <h3 className='text-lg font-semibold text-gray-900'>{steps.title}</h3>
        </div>

        {/* Back */}
        <div className='absolute w-full h-full bg-red-600 text-white shadow-md rounded-xl p-6 flex flex-col items-center justify-center text-center rotate-y-180 backface-hidden'>
          <h3 className='text-lg font-semibold text-white'>{steps.title}</h3>
          <p>{steps.backText}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;