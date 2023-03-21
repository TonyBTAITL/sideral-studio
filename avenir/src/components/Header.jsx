import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useWindowResize from '../hooks/useWindowResize';
const Header = ({ tableau0, image }) => {
  const { width } = useWindowResize();

  return (
    <>
      <section
        className="headerAccueil"
        style={{
          backgroundImage: `url("HeaderBackground.png")`
        }}>
        <div className="background-image container ">
          {tableau0.map((e, key) => (
            <div key={key} className="header">
              <h1 id="titre" data-aos="fade-up" data-aos-duration="500">
                {e.title} <span>{e.subtitle}</span>
              </h1>
              {width < 900 ? (
                ''
              ) : (
                <div className="text">
                  <span data-aos="fade-right" data-aos-delay="300">
                    {e.text}
                  </span>
                  <span data-aos="fade-right" data-aos-delay="500">
                    {e.text1}
                  </span>
                  <span data-aos="fade-right" data-aos-delay="700">
                    {e.text2}
                  </span>
                  <span data-aos="fade-right" data-aos-delay="900">
                    {e.text3}
                  </span>
                </div>
              )}
              <div className="button">
                <Link
                  to="/services"
                  className="firstButton"
                  data-aos="zoom-in"
                  data-aos-delay="900">
                  <span>Services</span>
                </Link>
                <Link
                  to="tel:0141601818"
                  className="secondButton"
                  data-aos="zoom-in"
                  data-aos-delay="1100">
                  01 41 60 18 18
                </Link>
              </div>
            </div>
          ))}

          {width < 900 ? (
            <div className="informations">
              <span className="material-symbols-rounded">schedule</span>
              <p>Lundi au Vendredi</p>
              <p>9h00-12h00 / 13h30-18h00</p>
            </div>
          ) : (
            <div className="right">
              {image.map((e, key) => {
                if (e.id == 1) {
                  return (
                    <div className="image" key={key} data-aos-delay="900" data-aos="fade-left">
                      <img
                        src={e.image}
                        alt=""
                        data-aos-delay="1300"
                        data-aos="fade-in"
                        data-aos-duration="1000"
                      />
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Header;
