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
  const web1 = props.web1;
  const web2 = props.web2;
  const web3 = props.web3;
  return (
    <>
      <ServiceWebSection1 />
      <ServiceWebSection2 web1={web1} />
      <ServiceWebSection3 web2={web2} />
      <ServiceWebSection4 web3={web3} />
      <ServiceWebSection5 siteWeb={siteWeb} />
    </>
  );
};

export default ServiceWeb;
