import { React, useState, useEffect } from 'react';

const AboutUsSection4 = () => {
  const [navig, setNavig] = useState(1);
  const [select, setSelect] = useState([]);
  useEffect(() => {
    const navigateur = document.querySelectorAll('.explorer .element');
    setSelect(navigateur);
  }, []);
  select.forEach((element) => {
    element.addEventListener('click', (event) => {
      var current = document.querySelector('.active');
      current.classList.remove('active');
      element.classList.add('active');
      setNavig(element.id);
    });
  });
  return (
    <>
      <section className="AboutUsSection4 container">
        <div className="section">
          <div className="explorer">
            <div
              className="element active"
              id="1"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="0">
              <img src="chrome.png" alt="" />
              {/* <h3>Google chrome</h3> */}
            </div>
            <div
              className="element"
              id="2"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="100">
              <img src="safari.png" alt="" />
              {/* <h3>Safari</h3> */}
            </div>
            <div
              className="element"
              id="3"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="200">
              <img src="firefox.png" alt="" />
              {/* <h3>Firefox</h3> */}
            </div>
            <div
              className="element"
              id="4"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="300">
              <img src="edge.png" alt="" />
              {/* <h3>Edge</h3> */}
            </div>
          </div>
          <div
            className="actions_list"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="200">
            {navig == 1 ? (
              <div className="element">
                <h3>Sur Google Chrome</h3>
                <p>
                  1. Cliquez sur l'icône représentant une clé à molette qui est située dans la barre
                  d'outils du navigateur.
                </p>
                <p>2. Sélectionnez Paramètres.</p>
                <p>3. Cliquez sur Afficher les paramètres avancés.</p>
                <p>
                  4. Dans la section " Confidentialité ", cliquez sur le bouton Paramètres de
                  contenu.
                </p>
                <p>
                  5. Dans la section " Cookies ", vous pouvez bloquer les cookies et données de
                  sites tiers.
                </p>
              </div>
            ) : (
              ''
            )}
            {navig == 2 ? (
              <div className="element">
                <h3>Sur safari</h3>
                <p>1. Allez dans Réglages - Préférences</p>
                <p>2. Cliquez sur l'onglet Confidentialité</p>
                <p>3. Dans la zone "Bloquer les cookies" </p>
                <p>4. cochez la case " toujours ".</p>
              </div>
            ) : (
              ''
            )}
            {navig == 3 ? (
              <div className="element">
                <h3>Sur Firefox</h3>
                <p>1. En haut de la fenêtre de Firefox, cliquez sur le bouton Firefox</p>
                <p>2. Sélectionnez le panneau Vie privée.</p>
                <p>
                  3. Paramétrez Règles de conservation : à utiliser les paramètres personnalisés
                  pour l'historique.
                </p>
                <p>4. Décochez Accepter les cookies.</p>
              </div>
            ) : (
              ''
            )}
            {navig == 4 ? (
              <div className="element">
                <h3>Sur Edge</h3>
                <p>1. Allez dans Outils - Options Internet.</p>
                <p>2. Cliquez sur l'onglet confidentialité.</p>
                <p>3. Cliquez sur le bouton avancé</p>
                <p>
                  4. Cochez la case <br />
                  "Ignorer la gestion automatique des cookies"
                </p>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection4;
