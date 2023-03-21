import React from 'react';
import useWindowResize from '../hooks/useWindowResize';

const BoutiqueSection1 = () => {
  const { width } = useWindowResize();
  return (
    <>
      <section
        className="BoutiqueSection1"
        style={{
          backgroundImage: `url("HeaderBackground.png")`
        }}>
        <div className="header">
          <h1 data-aos="fade-in" data-aos-delay="100">
            La boutique
          </h1>
        </div>
      </section>
    </>
  );
};

export default BoutiqueSection1;
