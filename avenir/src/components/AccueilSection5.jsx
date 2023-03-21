import React from 'react';
import { Link } from 'react-router-dom';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
const AccueilSection5 = ({ tableau5, avis }) => {
  if (window.innerWidth >= 310 && window.innerWidth <= 650) {
    var size = 1;
  } else if (window.innerWidth >= 650 && window.innerWidth <= 900) {
    var size = 2;
  } else if (window.innerWidth >= 900) {
    var size = 1;
  }
  return (
    <>
      <section className="AccueilSection5">
        <div className="container">
          {tableau5.map((e, key) => (
            <div className="left" key={key}>
              <h2 data-aos="fade-up" data-aos-delay="200">
                {e.title}
              </h2>
              <p data-aos="fade-up" data-aos-delay="500">
                {e.text}
              </p>
              <Link to="/about-us" className="firstButton" data-aos="fade-up" data-aos-delay="700">
                <span>A propos</span>
              </Link>
            </div>
          ))}

          <div className="right">
            <Splide
              hasTrack={false}
              options={{
                arrows: false,
                gap: 15,
                perPage: size,
                perMove: 1
              }}>
              <SplideTrack>
                {avis.map((e, key) => (
                  <SplideSlide key={key} data-aos="fade-in" data-aos-delay="500">
                    <div className="testimonial">
                      <div className="testimonialLeft">
                        <div className="stars">
                          <span className="material-symbols-rounded">grade</span>
                          <span className="material-symbols-rounded">grade</span>
                          <span className="material-symbols-rounded">grade</span>
                          <span className="material-symbols-rounded">grade</span>
                          <span className="material-symbols-rounded">grade</span>
                        </div>
                        <div className="text">
                          <p>{e.text}</p>
                          <Link to="#">{e.name}</Link>
                        </div>
                      </div>
                      <div className="testimonialRight">
                        <img src={e.image} alt="" />
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </SplideTrack>
            </Splide>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccueilSection5;
