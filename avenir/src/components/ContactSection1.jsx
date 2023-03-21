import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useWindowResize from '../hooks/useWindowResize';
const ContactSection1 = () => {
  const { width } = useWindowResize();
  return (
    <>
      {width < 900 ? (
        <section className="ContactSection1 container">
          <div
            className="header"
            style={{
              backgroundImage: `url("HeaderBackground.png")`
            }}>
            <h1>Contact</h1>
          </div>
          <div className="section">
            <div className="text">
              <div className="subText">
                <h3>Adresse Postale :</h3>
                <p>AVENIR INFORMATIQUE</p>
                <p>16, place de l'Hôtel de Ville 93700 Drancy</p>
              </div>
              <div className="subText">
                <h3>Téléphone :</h3>
                <p>01.41.60.18.18</p>
              </div>
              <div className="subText">
                <h3>Horaires:</h3>
                <p>
                  Du lundi au vendredi <br /> de 09h00 à 12h00 et de 13h30 à 18h00
                </p>
              </div>
            </div>
            <div className="button">
              <HashLink to="#contact" className="firstButton" smooth>
                Contact
              </HashLink>
              <Link to="/about-us" className="secondButton">
                A propos
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <section className="ContactSection1 container">
          <div className="left">
            <div className="title">
              <h1 data-aos="fade-up" data-aos-duration="500" data-aos-delay="0">
                Vous desirez <br />
                <span>Nous contacter</span>
              </h1>
            </div>
            <div className="text">
              <div
                className="subText"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="200">
                <h3>Adresse Postale :</h3>
                <p>AVENIR INFORMATIQUE</p>
                <p>16, place de l'Hôtel de Ville 93700 Drancy</p>
              </div>
              <div
                className="subText"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="400">
                <h3>Téléphone :</h3>
                <p>01.41.60.18.18</p>
              </div>
              <div
                className="subText"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="600">
                <h3>Horaires:</h3>
                <p>
                  Du lundi au vendredi <br /> de 09h00 à 12h00 et de 13h30 à 18h00
                </p>
              </div>
            </div>
            <div className="button">
              <HashLink
                to="#contact"
                className="firstButton"
                smooth
                data-aos="fade-in"
                data-aos-duration="500"
                data-aos-delay="800">
                Contact
              </HashLink>
              <Link
                to="/about-us"
                className="secondButton"
                data-aos="fade-in"
                data-aos-duration="500"
                data-aos-delay="1000">
                A propos
              </Link>
            </div>
          </div>
          <div className="right">
            <div className="image" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">
              <img src="contact-1.png" alt="" />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ContactSection1;
