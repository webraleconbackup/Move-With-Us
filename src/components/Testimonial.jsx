import React from 'react';
import { Link } from 'react-router-dom';



const Testimonial = ({reviews}) => {
  return (
    <div className="bg-gray-100 py-12 px-4 text-center">
      <h3 className="text-lg font-semibold text-gray-700">EXCELLENT</h3>
      <p className="mt-2 text-xl font-bold text-gray-900">
        4.9 Rating{' '}
        <span className="text-yellow-400">★★★★★</span> 17+ Reviews on{' '}
        <Link
          to="#"
          className="text-blue-600 hover:underline"
        >
          Assure Shift
        </Link>
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:px-40">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-left flex gap-4"
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {review.initials}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">{review.name}</h4>
              <div className="text-yellow-400 text-sm mb-2">
                {'★'.repeat(review.rating)}
              </div>
              <p className="text-gray-600 text-sm">{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
