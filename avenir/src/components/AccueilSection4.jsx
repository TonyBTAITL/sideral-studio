import React from 'react';
import { Link } from 'react-router-dom';
const AccueilSection4 = ({ tableau4, service }) => {
  return (
    <>
      <section className="AccueilSection4 container">
        <div className="left">
          {tableau4.map((e, key) => (
            <div className="text" key={key}>
              <h2 data-aos="fade-up" data-aos-delay="500">
                {e.title}
              </h2>
              <p data-aos="fade-up" data-aos-delay="500">
                {e.text}
              </p>
            </div>
          ))}

          <Link to="/services" className="firstButton" data-aos="fade-up" data-aos-delay="500">
            <span>Services</span>
          </Link>
        </div>

        <div className="right">
          <div className="containt">
            {service.map((e, key) => (
              <Link to={`/services#${e.name}`} key={key} data-aos="zoom-in" data-aos-delay={e.time}>
                <div className="card">
                  <img src={e.image} alt={e.alt} />
                  <div className="element">
                    <h3>{e.name}</h3>
                    <div className="link">
                      En savoir plus <span className="material-symbols-rounded">double_arrow</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AccueilSection4;
