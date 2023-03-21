import React from 'react';

const AboutUsSection5 = () => {
  return (
    <section className="AboutUsSection5 container">
      <div className="header">
        <div className="text">
          <h2 data-aos="fade-up" data-aos-duration="500" data-aos-delay="0">
            UNE ENTREPRISE MODERNE
          </h2>
          <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
            AVENIR INFORMATIQUE vous accueille dans des locaux spacieux et agréables. La partie
            comptoir pour un premier contact et la prise en compte de vos besoins (achat, dépannage,
            réparation, maintenance de matériel informatique). La partie atelier consacrée aux
            dépannages et réparations de votre matériel.
          </p>
        </div>
      </div>
      <div className="containt">
        <div className="element" data-aos="fade-up" data-aos-duration="500" data-aos-delay="400">
          <div className="image">
            <img src="technician-1.jpg" alt="boutique avenir informatique" />
          </div>
          <div className="subTitle">
            <p>Avenir Informatique</p>
          </div>
        </div>
        <div className="element" data-aos="fade-up" data-aos-duration="500" data-aos-delay="600">
          <div className="image">
            <img src="technician-2.jpg" alt="boutique avenir informatique" />
          </div>
          <div className="subTitle">
            <p>Accueil comptoir</p>
          </div>
        </div>
        <div className="element" data-aos="fade-up" data-aos-duration="500" data-aos-delay="800">
          <div className="image">
            <img src="technician-3.jpg" alt="boutique avenir informatique" />
          </div>
          <div className="subTitle">
            <p>Atelier</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection5;
