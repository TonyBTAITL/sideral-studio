import React from 'react';
import { Link } from 'react-router-dom';
const AccueilSection6 = ({ tableau6 }) => {
  return (
    <>
      {tableau6.map((e, key) => (
        <section className="AccueilSection6 container" key={key}>
          <div className="left">
            <div className="titre">
              <h2 data-aos="fade-up" data-aos-delay="200">
                {e.title}
              </h2>
            </div>
            <div className="text">
              <p data-aos="fade-up" data-aos-delay="400">
                {e.text}
              </p>
            </div>
            <Link className="button" to="/serviceinfo#15">
              <button className="firstButton" data-aos="fade-up" data-aos-delay="600">
                Découvrir
              </button>
            </Link>
          </div>

          <div className="right">
            <div className="image">
              <img
                src={e.image}
                alt=""
                data-aos="fade-in"
                data-aos-delay="600"
                data-aos-duration="1000"
              />
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default AccueilSection6;
