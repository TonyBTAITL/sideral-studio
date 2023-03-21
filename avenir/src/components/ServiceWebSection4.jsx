import React from 'react';
import { Link } from 'react-router-dom';
const ServiceWebSection4 = () => {
  return (
    <>
      <section className="ServiceWebSection4" id="price">
        <div className="containt container">
          <div className="boxPrice" data-aos="fade-up" data-aos-duration="1000">
            <div className="title">
              <h3>Site vitrine</h3>
            </div>
            <div className="subtitle">
              <span>Site - one page</span>
            </div>
            <div className="price">
              <p>300 €</p>
            </div>
            <ul className="list">
              <h4>Service inclus :</h4>
              <li>
                <span className="material-symbols-rounded">chevron_right</span>Création et Refonte
              </li>
              <li>
                <span className="material-symbols-rounded">chevron_right</span>Maquette du site web
              </li>
              <li>
                <span className="material-symbols-rounded">chevron_right</span>Page d'accueil
              </li>
              <li>
                <span className="material-symbols-rounded">chevron_right</span>Page Contact
              </li>
              <li>
                <span className="material-symbols-rounded">chevron_right</span>Installation sur
                serveur web
              </li>
              <li>
                <span className="material-symbols-rounded">chevron_right</span>Référencement naturel
                (SEO)
              </li>
            </ul>
            <Link className="button" to="/contact">
              <button className="firstButton">Contactez-nous</button>
            </Link>
          </div>
          <div className="boxPrice" data-aos="fade-up" data-aos-duration="1000">
            <div className="title">
              <h3>Site vitrine +</h3>
            </div>
            <div className="subtitle">
              <span>Site - multi pages</span>
            </div>
            <div className="price">
              <p>600 €</p>
            </div>
            <ul className="list">
              <h4>Service inclus :</h4>
              <li>
                <span className="material-symbols-rounded">chevron_right</span>Création et Refonte
              </li>
              <li>
                <span className="material-symbols-rounded">chevron_right</span>Maquette du site web
              </li>
              <li>
                <span className="material-symbols-rounded">chevron_right</span>Page d'accueil & Page
                Contact
              </li>
              <li>
                <span className="material-symbols-rounded">chevron_right</span>
                administration
              </li>
              <li>
                <span className="material-symbols-rounded">chevron_right</span>Référencement naturel
                (SEO)
              </li>
              <li>
                <span className="material-symbols-rounded">chevron_right</span>Installation sur
                serveur web
              </li>
            </ul>
            <Link className="button" to="/contact">
              <button className="firstButton">Contactez-nous</button>
            </Link>
          </div>
          <div className="boxPrice" data-aos="fade-up" data-aos-duration="1000">
            <div className="title">
              <h3>Site E-commerce</h3>
            </div>
            <div className="subtitle">
              <span>Site - vente en ligne</span>
            </div>
            <div className="price">
              <p>900 €</p>
            </div>
            <ul className="list">
              <h4>Service inclus :</h4>
              <li>
                <span className="material-symbols-rounded">chevron_right</span>Création
              </li>
              <li>
                <span className="material-symbols-rounded">chevron_right</span>Maquette du site web
              </li>
              <li>
                <span className="material-symbols-rounded">chevron_right</span>Page d'accueil & Page
                Contact
              </li>
              <li>
                <span className="material-symbols-rounded">chevron_right</span>Page boutique
              </li>
              <li>
                <span className="material-symbols-rounded">chevron_right</span>Référencement naturel
                (SEO)
              </li>
              <li>
                <span className="material-symbols-rounded">chevron_right</span>Installation sur
                serveur web
              </li>
            </ul>
            <Link className="button" to="/contact">
              <button className="firstButton">Contactez-nous</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceWebSection4;
