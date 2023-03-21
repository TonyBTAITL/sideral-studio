import React from 'react';
import './ServiceWeb.css';
import './ResponsiveServiceWeb.css';
import ServiceWebSection1 from '../../components/ServiceWebSection1';
import ServiceWebSection2 from '../../components/ServiceWebSection2';
import ServiceWebSection3 from '../../components/ServiceWebSection3';
import ServiceWebSection4 from '../../components/ServiceWebSection4';
import ServiceWebSection5 from '../../components/ServiceWebSection5';
const ServiceWeb = (props) => {
  const siteWeb = props.siteWeb;
  return (
    <>
      <ServiceWebSection1 />
      <ServiceWebSection2 />
      <ServiceWebSection3 />
      <ServiceWebSection4 />
      <ServiceWebSection5 siteWeb={siteWeb} />
    </>
  );
};

export default ServiceWeb;
