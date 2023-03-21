import React from 'react';
import AboutUsSection1 from '../../components/AboutUsSection1';
import AboutUsSection2 from '../../components/AboutUsSection2';
import AboutUsSection3 from '../../components/AboutUsSection3';
import AboutUsSection4 from '../../components/AboutUsSection4';
import AboutUsSection5 from '../../components/AboutUsSection5';
import Footer from '../../components/Footer';
import './AboutUs.css';
import './ResponsiveAboutUs.css';
const AboutUs = () => {
  return (
    <>
      <AboutUsSection1 />
      <AboutUsSection2 />
      <AboutUsSection3 />
      <AboutUsSection4 />
      <AboutUsSection5 />
    </>
  );
};

export default AboutUs;
