import React from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import useWindowResize from '../hooks/useWindowResize';

// Default theme
import '@splidejs/react-splide/css';
const AccueilSection3 = ({ tableau3 }) => {
  const { width } = useWindowResize();
  if (width >= 310 && width <= 650) {
    var taille = 1;
    var time = 3000;
  } else if (width >= 650 && width <= 944) {
    var taille = 2;
    var time = 5000;
  } else if (width >= 944 && width <= 1260) {
    var taille = 3;
    var time = 5000;
  } else if (width > 1260) {
    var taille = 4;
    var time = 5000;
  }

  // splide.mount();
  return (
    <>
      <section className="AccueilSection3">
        <div className="container">
          <Splide
            hasTrack={false}
            options={{
              // type: 'fade',
              arrows: false,
              autoplay: true,
              perPage: taille,
              interval: time,
              rewind: true,
              perMove: 1
            }}>
            <div className="custom-wrapper">
              <SplideTrack>
                {tableau3.map((e, key) => (
                  <SplideSlide key={key} data-aos="fade-up" data-aos-delay={e.time}>
                    <div className="box">
                      <div className="image">
                        <img src={e.image} alt={e.alt} />
                      </div>
                      <div className="icon">
                        <span className="material-symbols-rounded">{e.icon}</span>
                      </div>
                      <div className="text">
                        <h3>{e.title}</h3>
                        <p>{e.text}</p>
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </SplideTrack>
            </div>
          </Splide>
        </div>
      </section>
    </>
  );
};

export default AccueilSection3;
