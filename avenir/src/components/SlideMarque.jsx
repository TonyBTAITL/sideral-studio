import React from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import useWindowResize from '../hooks/useWindowResize';
import '@splidejs/react-splide/css';
const SlideMarque = ({ slide }) => {
  const { width } = useWindowResize();
  if (width >= 310 && width <= 650) {
    var taille = 1;
  } else if (width >= 650 && width <= 944) {
    var taille = 3;
  } else if (width >= 944 && width <= 1260) {
    var taille = 4;
  } else if (width > 1260) {
    var taille = 5;
  }
  const options = {
    rewind: true,
    autoplay: 'play',
    arrows: false,
    perPage: taille,
    perMove: 1,
    interval: 3000
  };
  return (
    <>
      <section
        className="container slideMarque"
        data-aos="fade-in"
        data-aos-delay="400"
        data-aos-duration="500">
        <Splide hasTrack={false} options={options}>
          <SplideTrack>
            {slide.map((e, key) => (
              <SplideSlide key={key}>
                <img src={`slide/${e.image}`} alt="" />
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
      </section>
    </>
  );
};

export default SlideMarque;
