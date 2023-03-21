import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useWindowResize from '../hooks/useWindowResize';
import ServiceSection3 from './ServiceSection3';
const ServiceSection2 = ({ service_3, button, service }) => {
  const { width } = useWindowResize();
  const [category, setCategory] = useState(null);
  const urlcourante = document.location.hash;
  const urlNew = urlcourante.replace('#', '');

  const [state, setState] = useState(null);
  if (urlNew) {
    const url = urlNew.toLowerCase();
    var [categoryFilter, setCategoryFilter] = useState(url);
    var [filter, setFilter] = useState(url);
  } else {
    var [categoryFilter, setCategoryFilter] = useState('tous');
    var [filter, setFilter] = useState('tous');
  }
  const shoot = (a) => {
    setFilter(a.toLowerCase());
    setState(a);
  };
  const ChangeListCategory = (a) => {
    setCategoryFilter(a.toLowerCase());
    setFilter(a.toLowerCase());
    setState(a);
  };

  return (
    <>
      <section className="ServiceSection2 container">
        <div className="title">
          <h3 data-aos="fade-in" data-aos-delay="400" data-aos-duration="500">
            Choisissez votre matériel
          </h3>
        </div>
        {width < 900 ? (
          <div className="containt">
            {service.map((e, key) => {
              const name = e.name;
              return (
                <HashLink smooth to="#section" key={key} onClick={() => ChangeListCategory(name)}>
                  <div className="element">
                    <div className="title">
                      <h3>{e.name}</h3>
                    </div>
                    <div className="image">
                      <img src={e.photo} alt="" />
                    </div>
                  </div>
                </HashLink>
              );
            })}
          </div>
        ) : (
          <div className="containt">
            {service.map((e, key) => {
              const name = e.name;
              return (
                <HashLink smooth to="#section" key={key} onClick={() => ChangeListCategory(name)}>
                  <div
                    className="element"
                    data-aos="fade-up"
                    data-aos-delay={e.time}
                    data-aos-duration="500">
                    <div className="title">
                      <h3>{e.name}</h3>
                    </div>
                    <div className="image">
                      <span className="material-symbols-rounded">add</span>
                      <img src={e.photo} alt="" />
                    </div>
                    <div className="text">
                      <h4>
                        En savoir plus{' '}
                        <span className="material-symbols-rounded">double_arrow</span>
                      </h4>
                      <p className="hover">{e.text}</p>
                    </div>
                  </div>
                </HashLink>
              );
            })}
          </div>
        )}
      </section>
      <div className="gallery-filter" id="section">
        <div className="buttonCategory">
          {categoryFilter == 'tous' ? (
            <button onClick={() => ChangeListCategory('tous')} disabled={true}>
              Toutes les catégories
            </button>
          ) : (
            <button onClick={() => ChangeListCategory('tous')} disabled={false}>
              Toutes les catégories
            </button>
          )}
        </div>
        <div
          className="button_list"
          data-aos="fade-in"
          data-aos-delay="400"
          data-aos-duration="500">
          <button onClick={() => shoot('tous')} className={`${filter == 'tous' && 'active'}`}>
            Tous
          </button>
          {button.map((e, key) => {
            const mot = categoryFilter;
            const list = e.category.indexOf(mot);
            const titre = e.title;

            return (
              <button
                onClick={() => shoot(titre)}
                key={key}
                disabled={list + 1 > 0 || mot == 'tous' ? false : true}
                className={`${state == titre && 'active'}`}>
                {titre}
              </button>
            );
          })}
        </div>
      </div>
      <ServiceSection3 service_3={service_3} category={category} filter={filter} />
    </>
  );
};

export default ServiceSection2;
