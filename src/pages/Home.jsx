import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhoneAlt } from 'react-icons/fa';
import Getquote from '../components/Getquote';
import IndustriesSection from '../components/IndustriesSection';
import {
  industriesData,
  latestWorks,
  relocationData,
  reviews,
  servicesData,
  welcomeData,
} from '../data';
import WelcomeSection from '../components/WelcomeSection ';
import Video from '../components/Video';
import ServicesSection from '../components/ServiceSection';
import LatestWork from '../components/LatestWork';
import WorkProcess from '../components/WorkProcess';
import RelocationList from '../components/Relocation';
import Testimonial from '../components/Testimonial';
import BottomBanner from '../components/BottomBanner';

const FadeInSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <>
      <section
        className='relative text-white h-[950px] lg:h-[0px] lg:min-h-screen flex flex-col md:flex-row items-center pb-10 bg-cover bg-center -z-50'
        style={{ backgroundImage: "url('home-image/banner1.jpg')" }}
      >
        <div className='absolute inset-0 bg-black opacity-70'></div>

        <motion.div
          className='relative px-4 lg:px-40 pt-20 lg:pt-0'
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className='text-2xl lg:text-4xl font-bold mb-4'>
            Your Reliable Shifting Company
          </h1>
          <p className='text-lg mb-4'>
            Domestic/International Moving Made Easy.
          </p>
          <p className='text-lg mb-6 font-semibold'>
            पैकर्स और मूवर्स की सेवा के लिए संपर्क करें !!!!
          </p>

          <div className='flex items-center gap-3 text-lg font-semibold'>
            <FaPhoneAlt className='text-red-500 text-2xl' />
            <a href='tel:+919137238757' className='hover:underline'>
              +91 9137238757
            </a>
          </div>
        </motion.div>
      </section>

      <section className='absolute top-124 lg:top-50 lg:right-30'>
        <FadeInSection>
          <Getquote />
        </FadeInSection>
      </section>

      <FadeInSection>
        <section>
          <IndustriesSection industries={industriesData} />
        </section>
      </FadeInSection>

      <FadeInSection>
        <WelcomeSection welcomeData={welcomeData} />
      </FadeInSection>

      <FadeInSection>
        <section>
          <div className='px-2'>
            <h2 className='text-2xl md:text-3xl px-4 font-bold mb-6 text-gray-800 text-center'>
              Our Packaging Process
            </h2>
            <Video
              src='/videos/video1.mp4'
              poster='/home-image/banner1.jpg'
              autoPlay={false}
              controls={true}
            />
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className='lg:py-16 px-4 lg:px-40'>
          <ServicesSection servicesData={servicesData} />
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className='my-10'>
          <LatestWork latestWorks={latestWorks} />
        </section>
      </FadeInSection>

      <FadeInSection>
        <section>
          <WorkProcess />
        </section>
      </FadeInSection>

      {/* <FadeInSection>
        <section>
          <div className='px-4 lg:px-40'>
            <RelocationList relocationData={relocationData} />
          </div>
        </section>
      </FadeInSection> */}

      <FadeInSection>
        <section>
          <Testimonial reviews={reviews} />
        </section>
      </FadeInSection>

      <FadeInSection>
        <section>
          <BottomBanner />
        </section>
      </FadeInSection>
    </>
  );
};

export default Home;
