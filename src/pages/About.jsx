import React from 'react';
import WelcomeSection from '../components/WelcomeSection ';
import { welcomeData } from '../data';
import BottomBanner from '../components/BottomBanner';

const About = () => {
  return (
    <div>
      <WelcomeSection welcomeData={welcomeData} />
      <BottomBanner />
    </div>
  );
};

export default About;
