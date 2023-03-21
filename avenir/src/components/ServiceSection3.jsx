import { React, useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const ServiceSection3 = (props) => {
  const service_3 = props.service_3;
  return (
    <>
      {/* la table pour les buttons / trier par les 4 catégories */}
      <section className="ServiceSection3 container">
        <div className="containt">
          {service_3.map((e, key) => {
            const mot = props.filter;
            const list = e.category.indexOf(mot);
            const paragraphe = e.text;
            return (
              <Link
                to={`/serviceinfo#${e.id}`}
                key={key}
                className={mot == 'tous' || list + 1 > 0 ? 'show' : 'hide'}>
                <div className="element">
                  {/* <p>{e.category}</p> */}
                  <div className="image">
                    <img src={e.image} alt="" />
                  </div>
                  <div className="text">
                    <div className="title">
                      <h3>{e.title}</h3>
                    </div>
                    <div className="infos">
                      <p>{paragraphe.slice(0, 100)} ...</p>
                    </div>
                    <div className="buttonPlus">
                      <button>En savoir plus</button>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ServiceSection3;
