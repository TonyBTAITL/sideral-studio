import React from 'react';
import BoutiqueSection1 from '../../components/BoutiqueSection1';
import BoutiqueSection2 from '../../components/BoutiqueSection2';
import SlideMarque from '../../components/SlideMarque';
import './Boutique.css';
import './ResponsiveBoutique.css';
const Boutique = (props) => {
  const slide = props.slide;
  const vente = props.vente;
  return (
    <>
      <BoutiqueSection1 />
      <BoutiqueSection2 vente={vente} />
      <SlideMarque slide={slide} />
    </>
  );
};

export default Boutique;
