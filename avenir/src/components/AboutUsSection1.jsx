import { React } from 'react';
import useWindowResize from '../hooks/useWindowResize';

const AboutUsSection1 = () => {
  const { width } = useWindowResize();

  return (
    <>
      {width < 900 ? (
        <section className="AboutUsSection1 container">
          <div
            className="header"
            style={{
              backgroundImage: `url("HeaderBackground.png")`
            }}>
            <h1>A propos</h1>
          </div>
          <div className="section">
            <div className="title">
              <h2>Qui sommes nous ?</h2>
            </div>
            <div className="text">
              <div className="subTitle">
                <h3>
                  A VOTRE SERVICE DEPUIS 1999 <br />
                  AVENIR INFORMATIQUE DRANCY 93 est une société de services informatique pour les
                  particuliers et les professionnels.
                </h3>
              </div>
              <div className="subText">
                <p>Nos domaines d'intervention sont les suivants:</p>
                <ul className="liste">
                  <li>Réparation pc portable toutes pannes</li>
                  <li>Réparation pc fixe toutes pannes</li>
                  <li>Dépannage pc portable</li>
                  <li>Dépannage pc fixe</li>
                  <li>Récupération de données</li>
                  <li>Réparation téléphone et tablette toutes marques</li>
                  <li>Réparation carte mère (MICRO SOUDURE)</li>
                </ul>
              </div>
              <div className="subText">
                <p>Assemblage PC GAMER pour débutant, confirmé, ou PRO</p>
                <p>
                  Vente de matériel informatique, ASUS - GIGABYTE - MSI - THERMALTAKE - INWIN etc..
                </p>
                <p>
                  AVENIR INFORMATIQUE vous offre des services de qualités professionnelles au
                  meilleur prix.
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="AboutUsSection1 container">
          <div className="left">
            <div className="title">
              <h1 data-aos="fade-up" data-aos-duration="500">
                Une entreprise moderne,
                <span>à l'écoute de ses clients</span>
              </h1>
            </div>
            <div className="text">
              <div className="subTitle">
                <h3 data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
                  A VOTRE SERVICE DEPUIS 1999 <br />
                  AVENIR INFORMATIQUE DRANCY 93 est une société de services informatique pour les
                  particuliers et les professionnels.
                </h3>
              </div>
              <div className="subText">
                <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="400">
                  Nos domaines d'intervention sont les suivants:
                </p>
                <ul
                  className="liste"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="600">
                  <li>Réparation pc portable toutes pannes</li>
                  <li>Réparation pc fixe toutes pannes</li>
                  <li>Dépannage pc portable</li>
                  <li>Dépannage pc fixe</li>
                  <li>Récupération de données</li>
                  <li>Réparation téléphone et tablette toutes marques</li>
                  <li>Réparation carte mère (MICRO SOUDURE)</li>
                </ul>
              </div>
              <div className="subText" data-aos="fade-up" data-aos-duration="500">
                <p>Assemblage PC GAMER pour débutant, confirmé, ou PRO</p>
                <p>
                  Vente de matériel informatique, ASUS - GIGABYTE - MSI - THERMALTAKE - INWIN etc..
                </p>
                <p>
                  AVENIR INFORMATIQUE vous offre des services de qualités professionnelles au
                  meilleur prix.
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="image" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="800">
              <img src="phone.png" alt="" />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AboutUsSection1;
