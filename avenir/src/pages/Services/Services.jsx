import { React, useEffect, useState } from 'react';
import ServiceSection1 from '../../components/ServiceSection1';
import ServiceSection2 from '../../components/ServiceSection2';
import './Services.css';
import './ResponsiveServices.css';
import SlideMarque from '../../components/SlideMarque';
const Service = (props) => {
  const service_3 = props.service_3;
  const service = props.service;
  const button = props.button;
  const slide = props.slide;
  const updateParentState = props.updateParentState;
  return (
    <>
      <ServiceSection1 />
      <ServiceSection2
        service_3={service_3}
        button={button}
        service={service}
        updateParentState={updateParentState}
      />
      <SlideMarque slide={slide} />
    </>
  );
};

export default Service;
