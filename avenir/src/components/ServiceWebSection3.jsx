import React from 'react';
import { HashLink } from 'react-router-hash-link';

const ServiceWebSection3 = () => {
  return (
    <>
      <section className="ServiceWebSection3 container" id="section">
        <div className="containt">
          <div className="box" data-aos="fade-up" data-aos-duration="1000">
            <p>
              <span className="material-symbols-rounded">short_text</span>Nous proposons
            </p>
            <h2>Une gamme complete de services</h2>
          </div>
          <div className="box" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <div className="image">
              <img src="webmarketing.png" alt="" />
            </div>
            <div className="icon">
              <span className="material-symbols-rounded">campaign</span>
            </div>
            <div className="title">
              <h3>Web Marketing</h3>
            </div>
          </div>
          <div className="box" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <div className="image">
              <img src="securitysystem.png" alt="" />
            </div>
            <div className="icon">
              <span className="material-symbols-rounded">verified_user</span>
            </div>
            <div className="title">
              <h3>Security System</h3>
            </div>
          </div>
          <div className="box" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
            <div className="image">
              <img src="webdevelopment.png" alt="" />
            </div>
            <div className="icon">
              <span className="material-symbols-rounded">draw</span>
            </div>
            <div className="title">
              <h3>Web Development</h3>
            </div>
          </div>
          <div className="box" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
            <div className="image">
              <img src="webapplication.png" alt="" />
            </div>
            <div className="icon">
              <span className="material-symbols-rounded">captive_portal</span>
            </div>
            <div className="title">
              <h3>Web Application</h3>
            </div>
          </div>
          <div className="box" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">
            <div className="image">
              <img src="uiuxdesigning.png" alt="" />
            </div>
            <div className="icon">
              <span className="material-symbols-rounded">view_quilt</span>
            </div>
            <div className="title">
              <h3>UI UX Designing</h3>
            </div>
          </div>
          <div className="boxing" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
            <div className="subtitle">
              <span>Nous sommes là pour vous aider</span>
            </div>
            <div className="title">
              <h3>
                Faites confiance aux experts pour tous vos besoins de conception et de développement
                Web
              </h3>
            </div>
            <HashLink className="button" to="#price" smooth>
              <button className="firstButton">Votre solution</button>
            </HashLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceWebSection3;
