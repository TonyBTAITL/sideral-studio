import React from 'react';
import useWindowResize from '../hooks/useWindowResize';

const AboutUsSection2 = () => {
  const { width } = useWindowResize();
  return (
    <>
      <section className="AboutUsSection2 container">
        <div className="section">
          {width < 900 ? (
            <div className="image">
              <img src="mentions-legales.jpg" alt="" />
            </div>
          ) : (
            <div className="left">
              <div
                className="image"
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration="800">
                <img src="book.png" alt="" />
              </div>
            </div>
          )}

          <div className="right">
            <div className="title">
              <h2 data-aos="fade-up" data-aos-duration="500" data-aos-delay="0">
                Mentions légales
              </h2>
            </div>
            <div className="text">
              <div
                className="subText"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="200">
                <h3>Éditeur :</h3>
                <p>SARL AVENIR INFORMATIQUE</p>
                <p>16, place de l'Hôtel de Ville 93700 Drancy SIREN : RCS :</p>
              </div>
              <div
                className="subText"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="400">
                <h3>Sites Web :</h3>
                <p>http://www.avenir-informatique.fr</p>
                <p>Téléphone : 01.41.60.18.18</p>
                <p>email : serviceclient@avenir-informatique.fr</p>
              </div>
              <div
                className="subText"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="600">
                <h3>Hébergeur:</h3>
                <p>Icodia</p>
                <p>22 rue de l'Erboniere 35510 Cesson Sevigne (Fr)</p>
                <p>Contact: 0825 59 59 35 Fax: 08 26 80 02 79</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection2;
