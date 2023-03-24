import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
const ServiceWebSection3 = ({ web2 }) => {
  return (
    <>
      <section className="ServiceWebSection3 container" id="section">
        <div className="containt">
          {web2.map((e, key) => {
            if (e.id == 1) {
              return (
                <div className="box" data-aos="fade-up" data-aos-duration="1000" key={key}>
                  <p>
                    <span className="material-symbols-rounded">short_text</span>
                    {e.subtitle}
                  </p>
                  <h2>{e.main_title}</h2>
                </div>
              );
            } else if (e.id == 2 || e.id == 3 || e.id == 5 || e.id == 6 || e.id == 7) {
              const lien = e.title;
              const str = lien.replace(/\s/g, '');
              return (
                <div
                  className="box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  key={key}>
                  <HashLink to={`/identiteVisuelle#${str}`}>
                    <div className="image">
                      <img src={e.image} alt={e.alt} />
                    </div>
                    <div className="icon">
                      <span className="material-symbols-rounded">{e.icon}</span>
                    </div>
                    <div className="title">
                      <h3>{e.title}</h3>
                    </div>
                  </HashLink>
                </div>
              );
            }
          })}
          {web2.map((e, key) => {
            if (e.id == 4) {
              return (
                <div
                  className="boxing"
                  data-aos="fade-up"
                  data-aos-delay="800"
                  data-aos-duration="1000"
                  key={key}>
                  <div className="subtitle">
                    <span>{e.boxing_subtitle}</span>
                  </div>
                  <div className="title">
                    <h3>{e.boxing_title}</h3>
                  </div>
                  <HashLink className="button" to="#price" smooth>
                    <button className="firstButton">{e.boxing_button}</button>
                  </HashLink>
                </div>
              );
            }
          })}
        </div>
      </section>
    </>
  );
};

export default ServiceWebSection3;
