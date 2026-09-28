import React, { useState } from 'react';
import BottomBanner from '../components/BottomBanner';

export default function ContactForm() {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult('Sending...');
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append('access_key', '6c355479-afcc-42a2-9021-1818083f324d'); // 🔑 Replace with your Web3Forms access key

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Message sent successfully ✅');
      e.target.reset();
    } else {
      console.log('Error:', data);
      setResult('Something went wrong ❌');
    }

    setLoading(false);
  };

  return (
    <>
      <section className='flex justify-center items-center py-16 px-4 bg-gray-50'>
        <div className='max-w-3xl w-full bg-white shadow-md rounded-lg p-8'>
          {/* Title and Description */}
          <div className='text-center mb-8'>
            <h2 className='text-3xl font-semibold text-gray-800 mb-2'>
              Get in Touch
            </h2>
            <p className='text-gray-600 text-base'>
              We'd love to hear from you! Fill out the form below and our team
              will get back to you soon.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label className='block text-gray-700 font-medium mb-2'>
                Name
              </label>
              <input
                type='text'
                name='name'
                required
                placeholder='Your Name'
                className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
              />
            </div>

            <div>
              <label className='block text-gray-700 font-medium mb-2'>
                Email
              </label>
              <input
                type='email'
                name='email'
                required
                placeholder='your@email.com'
                className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
              />
            </div>

            <div>
              <label className='block text-gray-700 font-medium mb-2'>
                Phone No.
              </label>
              <input
                type='text'
                name='phone'
                required
                placeholder='Your Phone'
                className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
              />
            </div>

            <div>
              <label className='block text-gray-700 font-medium mb-2'>
                Message
              </label>
              <textarea
                name='message'
                required
                placeholder='Your message here...'
                rows='4'
                className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
              ></textarea>
            </div>

            <button
              type='submit'
              disabled={loading}
              className={`w-full ${
                loading ? 'bg-blue-300' : 'bg-blue-400 hover:bg-blue-500'
              } text-white font-semibold py-3 rounded-md transition duration-300`}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Result Message */}
          {result && (
            <p className='text-center text-gray-700 font-medium mt-4'>
              {result}
            </p>
          )}
        </div>
      </section>

      <section>
        <BottomBanner />
      </section>
    </>
  );
}
