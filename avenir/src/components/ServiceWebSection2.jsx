import React from 'react';
import { HashLink } from 'react-router-hash-link';
const ServiceWebSection2 = ({ web1 }) => {
  const date = new Date().getFullYear().toString().substring(2);
  return (
    <>
      {web1.map((e, key) => (
        <section className="ServiceWebSection2 container" key={key}>
          <h2 data-aos="fade-in" data-aos-delay="400" data-aos-duration="500">
            {e.main_title}
          </h2>
          <div className="left">
            <div className="image animationImg">
              <div
                className="backgroundGrid"
                data-aos="fade-in"
                data-aos-delay="400"
                data-aos-duration="500"></div>
              <img
                src={e.image}
                alt={e.alt}
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="600"
              />
            </div>
            <div
              className="imageSurvol animationImg"
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="500">
              <img src="WebDesign.png" alt="" />
            </div>
            <div className="experience">
              <div className="icon">
                <span className="material-symbols-rounded">more_time</span>
              </div>
              <div className="text">
                <span>{date} ans d'expériences</span>
              </div>
            </div>
          </div>
          <div className="right" data-aos="fade-left" data-aos-delay="400" data-aos-duration="500">
            {/* <div className="subtitle">
            <span>Informations</span>
          </div> */}
            <div className="title" data-aos="fade-in" data-aos-delay="400" data-aos-duration="500">
              <h2 data-aos="fade-up" data-aos-delay="600" data-aos-duration="500">
                {e.title}
              </h2>
            </div>
            <div className="text">
              <p>{e.text}</p>
            </div>
            <div className="liste">
              <div
                className="sentence"
                data-aos="fade-in"
                data-aos-delay="100"
                data-aos-duration="500">
                <span className="material-symbols-rounded">task_alt</span>
                <p>{e.list_1}</p>
              </div>
              <div
                className="sentence"
                data-aos="fade-in"
                data-aos-delay="300"
                data-aos-duration="500">
                <span className="material-symbols-rounded">task_alt</span>
                <p>{e.list_2}</p>
              </div>
              <div
                className="sentence"
                data-aos="fade-in"
                data-aos-delay="500"
                data-aos-duration="500">
                <span className="material-symbols-rounded">task_alt</span>
                <p>{e.list_3}</p>
              </div>
            </div>
            <HashLink className="button" to="#section" smooth>
              <button
                className="firstButton"
                data-aos="fade-in"
                data-aos-delay="700"
                data-aos-duration="500">
                {e.button}
              </button>
            </HashLink>
          </div>
        </section>
      ))}
    </>
  );
};

export default ServiceWebSection2;
