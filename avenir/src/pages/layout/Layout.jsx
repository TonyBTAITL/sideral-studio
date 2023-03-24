import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import useWindowResize from '../../hooks/useWindowResize';
import useScrollPosition from '../../hooks/useScrollPosition';
import './layout.css';
const Layout = () => {
  const { width } = useWindowResize();
  const scrollPosition = useScrollPosition();
  const position = 50 - scrollPosition;
  const [burger, setBurger] = useState(false);
  const OpenMenu = () => {
    setBurger(!burger);
  };
  return (
    <>
      <header>
        {width > 1150 ? (
          <div
            className="header-top"
            data-aos-duration="500"
            data-aos="fade-down"
            data-aos-delay="100">
            <div className="container headerContain">
              <p>
                <span className="material-symbols-rounded">schedule</span>Lundi au Vendredi |
                9h00-12h00 / 13h30-18h00
              </p>
              <a href="mailto:serviceclient@avenir-informatique.fr">
                <span className="material-symbols-rounded">mail</span>
                serviceclient@avenir-informatique.fr
              </a>
              <a href="tel:0141601818">
                <span className="material-symbols-rounded">call</span>01 41 60 18 18
              </a>
            </div>
          </div>
        ) : (
          ''
        )}
        <nav
          style={{ top: scrollPosition < 50 && width > 1150 ? position : ' 0px' }}
          data-aos-duration="500"
          data-aos="fade-down">
          <div className="container navigation">
            <NavLink to="/">
              <div className="logo">
                <img src="logo.png" alt="Logo Avenir Informatique" />
              </div>
            </NavLink>
            {width < 1150 ? (
              <div className="burger" onClick={OpenMenu}>
                <span className="material-symbols-rounded">menu</span>
              </div>
            ) : (
              ''
            )}
            {width < 1150 ? (
              <ul className={`phone ${burger ? 'active' : ''} `}>
                <span className="material-symbols-rounded" onClick={OpenMenu}>
                  close
                </span>
                <div className="nav" onClick={OpenMenu}>
                  <li style={{ transitionDelay: '100ms' }}>
                    <NavLink to="/">Accueil</NavLink>
                  </li>
                  <li style={{ transitionDelay: '200ms' }}>
                    <NavLink to="/services">Services</NavLink>
                  </li>
                  <li style={{ transitionDelay: '300ms' }}>
                    <NavLink to="/boutique">Boutique</NavLink>
                  </li>
                  <li style={{ transitionDelay: '400ms' }}>
                    <NavLink to="/creaSite">Service Web</NavLink>
                  </li>
                  <li style={{ transitionDelay: '500ms' }}>
                    <NavLink to="/about-us">A propos</NavLink>
                  </li>
                  <li style={{ transitionDelay: '600ms' }}>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </div>
              </ul>
            ) : (
              <div className="nav">
                <ul className="computer">
                  <li>
                    <NavLink to="/">Accueil</NavLink>
                  </li>
                  <li>
                    <NavLink to="/services">Services</NavLink>
                  </li>
                  <li>
                    <NavLink to="/boutique">Boutique</NavLink>
                  </li>
                  <li>
                    <NavLink to="/creaSite">Service Web</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about-us">A propos</NavLink>
                  </li>
                  <NavLink to="/contact" className="firstButton">
                    <span>Contact</span>
                  </NavLink>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
