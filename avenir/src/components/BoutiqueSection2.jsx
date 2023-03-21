import { React, useState } from 'react';
import useWindowResize from '../hooks/useWindowResize';

const BoutiqueSection2 = ({ vente }) => {
  const { width } = useWindowResize();
  const [catego, setCatego] = useState('tous');
  const [toggle, setToggle] = useState(false);
  const ChangeCategory = (a) => {
    setCatego(a);
  };

  const [isOpen, setIsOpen] = useState({});

  const toggleOpen = (category) => {
    setIsOpen({
      ...isOpen,
      [category]: !isOpen[category]
    });
  };
  return (
    <>
      <section className="BoutiqueSection2">
        <div className="title_magasin">
          <h3 data-aos="fade-in" data-aos-delay="200" data-aos-duration="1000">
            Produits disponibles uniquement en boutique
          </h3>
        </div>
        <div className="container">
          <div className="menu" data-aos="fade-in" data-aos-delay="500" data-aos-duration="1000">
            <button
              className={catego == 'tous' ? 'active' : ''}
              onClick={() => ChangeCategory('tous')}>
              Tous
            </button>
            <button
              onClick={() => ChangeCategory('neufs')}
              className={catego == 'neufs' ? 'active' : ''}>
              Produit neufs
            </button>
            <button
              onClick={() => ChangeCategory('occasions')}
              className={catego == 'occasions' ? 'active' : ''}>
              Produit d'occasion
            </button>
            <button
              onClick={() => ChangeCategory('detaches')}
              className={catego == 'detaches' ? 'active' : ''}>
              Pièces détachées
            </button>
            <button
              onClick={() => ChangeCategory('logiciels')}
              className={catego == 'logiciels' ? 'active' : ''}>
              Logiciels
            </button>
            <button
              onClick={() => ChangeCategory('consommables')}
              className={catego == 'consommables' ? 'active' : ''}>
              Consommables
            </button>
            <button
              onClick={() => ChangeCategory('reseaux')}
              className={catego == 'reseaux' ? 'active' : ''}>
              Produits réseau
            </button>
            <button
              onClick={() => ChangeCategory('divers')}
              className={catego == 'divers' ? 'active' : ''}>
              Divers
            </button>
          </div>
          {width < 900 ? (
            <div className="containt">
              {vente.map((e, key) => {
                const mot = catego;
                const take = e.category.indexOf(mot);
                const high = e.highlighted;
                const nouveau = e.new;
                if (mot == 'tous' || take + 1 > 0) {
                  if (high == 1) {
                    return (
                      <div className="highlighted" key={key}>
                        <div className="class">
                          <span>{e.brand}</span>
                        </div>
                        <div className="image">
                          <img src={e.image} alt="" />
                        </div>
                        <div className="infos">
                          {nouveau == 1 ? (
                            <div className="new">
                              <span>Nouveau</span>
                            </div>
                          ) : (
                            ''
                          )}
                          <div className="title">
                            <h3>{e.titre}</h3>
                          </div>
                          <div className="subtitle">
                            <h4>{e.subtitle}</h4>
                          </div>
                          <div className="price">
                            <span>{e.price} €</span>
                          </div>
                        </div>
                        <div className={`description ${isOpen[e.titre] ? 'active' : ''}`}>
                          <div className="openDescription">
                            <span
                              className="material-symbols-rounded"
                              onClick={() => {
                                toggleOpen(e.titre);
                              }}>
                              expand_less
                            </span>
                          </div>
                          <p>{e.description}</p>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div className="element" key={key}>
                        <div className="image">
                          <img src={e.image} alt="" />
                        </div>
                        <div className="infos">
                          {nouveau == 1 ? (
                            <div className="new">
                              <span>Nouveau</span>
                            </div>
                          ) : (
                            ''
                          )}
                          <div className="class">
                            <span>{e.brand}</span>
                          </div>
                          <div className="title">
                            <h3>{e.titre}</h3>
                          </div>
                          <div className="subtitle">
                            <h4>{e.subtitle}</h4>
                          </div>
                          <div className="price">
                            <span>{e.price} €</span>
                          </div>
                        </div>
                        <div className={`description ${isOpen[e.titre] ? 'active' : ''}`}>
                          <div className="openDescription">
                            <span
                              className="material-symbols-rounded"
                              onClick={() => {
                                toggleOpen(e.titre);
                              }}>
                              expand_less
                            </span>
                          </div>
                          <p>{e.description}</p>
                        </div>
                      </div>
                    );
                  }
                }
              })}
            </div>
          ) : (
            <div className="containt">
              {vente.map((e, key) => {
                const mot = catego;
                const take = e.category.indexOf(mot);
                const high = e.highlighted;
                const nouveau = e.new;
                if (mot == 'tous' || take + 1 > 0) {
                  if (high == 1) {
                    return (
                      <div
                        className="highlighted"
                        key={key}
                        data-aos="fade-in"
                        data-aos-duration="1500">
                        <div className="class">
                          <span>{e.brand}</span>
                        </div>
                        <div className="image">
                          <img src={e.image} alt="" />
                        </div>
                        <div className="infos">
                          {nouveau == 1 ? (
                            <div className="new">
                              <span>Nouveau</span>
                            </div>
                          ) : (
                            ''
                          )}
                          <div className="title">
                            <h3>{e.titre}</h3>
                          </div>
                          <div className="subtitle">
                            <h4>{e.subtitle}</h4>
                          </div>
                          <div className="price">
                            <span>{e.price} €</span>
                          </div>
                        </div>
                        <div className="description">
                          <div className="openDescription">
                            <span className="material-symbols-rounded">expand_less</span>
                          </div>
                          <p>{e.description}</p>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        className="element"
                        key={key}
                        data-aos="fade-in"
                        data-aos-duration="1500">
                        <div className="image">
                          <img src={e.image} alt="" />
                        </div>
                        <div className="infos">
                          {nouveau == 1 ? (
                            <div className="new">
                              <span>Nouveau</span>
                            </div>
                          ) : (
                            ''
                          )}
                          <div className="class">
                            <span>{e.brand}</span>
                          </div>
                          <div className="title">
                            <h3>{e.titre}</h3>
                          </div>
                          <div className="subtitle">
                            <h4>{e.subtitle}</h4>
                          </div>
                          <div className="price">
                            <span>{e.price} €</span>
                          </div>
                        </div>
                        <div className="description">
                          <div className="openDescription">
                            <span className="material-symbols-rounded">expand_less</span>
                          </div>
                          <p>{e.description}</p>
                        </div>
                      </div>
                    );
                  }
                }
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BoutiqueSection2;
