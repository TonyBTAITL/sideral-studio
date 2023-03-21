import { React, useEffect } from 'react';
import AccueilSection1 from '../../components/AccueilSection1';
import AccueilSection2 from '../../components/AccueilSection2';
import AccueilSection3 from '../../components/AccueilSection3';
import AccueilSection4 from '../../components/AccueilSection4';
import AccueilSection5 from '../../components/AccueilSection5';
import AccueilSection6 from '../../components/AccueilSection6';
import Header from '../../components/Header';
import './Accueil.css';
import './ResponsiveAccueil.css';

const Accueil = (props) => {
  const tableau0 = props.tableau0;
  const image = props.image;
  const tableau1 = props.tableau1;
  const tableau2 = props.tableau2;
  const tableau3 = props.tableau3;
  const tableau4 = props.tableau4;
  const tableau5 = props.tableau5;
  const tableau6 = props.tableau6;
  const avis = props.avis;
  const service = props.service;

  return (
    <>
      <Header tableau0={tableau0} image={image} />
      <AccueilSection1 tableau1={tableau1} image={image} />
      <AccueilSection2 image={image} tableau2={tableau2} />
      <AccueilSection3 tableau3={tableau3} />
      <AccueilSection4 tableau4={tableau4} service={service} />
      <AccueilSection6 tableau6={tableau6} />
      <AccueilSection5 tableau5={tableau5} avis={avis} />
    </>
  );
};

export default Accueil;
