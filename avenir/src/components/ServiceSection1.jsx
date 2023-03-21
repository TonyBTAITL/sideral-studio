import React from 'react';
import useWindowResize from '../hooks/useWindowResize';
const ServiceSection1 = () => {
  const { width } = useWindowResize();

  return (
    <>
      <section
        className="ServiceSection1"
        style={{
          backgroundImage: `url("HeaderBackground.png")`
        }}>
        {width < 900 ? (
          <div className="header">
            <h1 data-aos="fade-in" data-aos-delay="100">
              Nos services
            </h1>
          </div>
        ) : (
          <div className="header">
            <h1 data-aos="fade-in" data-aos-delay="100">
              Nos services
            </h1>
          </div>
        )}
      </section>
    </>
  );
};

export default ServiceSection1;
