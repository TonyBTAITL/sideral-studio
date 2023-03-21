import React from 'react';

const AboutUsSection3 = () => {
  return (
    <>
      <section className="AboutUsSection3 container">
        <div className="section">
          <div className="image">
            <img
              src="search.png"
              alt=""
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="0"
            />
          </div>
          <div className="text">
            <div className="subText_cookie">
              <h3 data-aos="fade-up" data-aos-duration="500" data-aos-delay="0">
                Qu'est-ce qu'un cookie et à quoi sert-il ?
              </h3>
              <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
                Un cookie (ou témoin de connexion) est un fichier texte susceptible d'être
                enregistré, sous réserve de vos choix, dans un espace dédié du disque dur de votre
                terminal (ordinateur, tablette …) à l'occasion de la consultation d'un service en
                ligne grâce à votre logiciel de navigation. Il est transmis par le serveur d'un site
                internet à votre navigateur. A chaque cookie est attribué un identifiant anonyme. Le
                fichier cookie permet à son émetteur d'identifier le terminal dans lequel il est
                enregistré pendant la durée de validité ou d'enregistrement du cookie concerné. Un
                cookie ne permet pas de remonter à une personne physique. Lorsque vous consultez le
                site avenir-informatique.fr, nous pouvons être amenés à installer, sous réserve de
                votre choix, différents cookies et notamment des cookies publicitaires.
              </p>
            </div>
            <div className="subText_cookie">
              <h3 data-aos="fade-up" data-aos-duration="500" data-aos-delay="400">
                Quels types de cookies sont déposés par le site Web ?
              </h3>
              <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="600">
                Cookies de Statistiques Google Analytics Ces cookies permettent d'établir des
                statistiques de fréquentation du site avenir-informatique.fr et de détecter des
                problèmes de navigation afin de suivre et d'améliorer la qualité de nos services.
                Exercez vos choix selon le navigateur que vous utilisez Vous pouvez à tout moment
                paramétrer votre navigateur afin d'exprimer et de modifier vos souhaits en matière
                de cookies et notamment concernant les cookies de statistique. Vous pouvez exprimer
                vos choix en paramétrant votre navigateur de façon à refuser certains cookies. Si
                vous refusez nos cookies et ceux de nos partenaires, votre visite du site
                avenir-informatique.fr ne sera plus comptabilisée dans Google Analytics et vous ne
                pourrez plus bénéficier d'un certain nombre de fonctionnalités qui sont néanmoins
                nécessaires pour naviguer dans certaines de nos pages. Nous vous informons que vous
                pouvez toutefois vous opposer à l'enregistrement de cookies en suivant le mode
                opératoire disponible ci-dessous{' '}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection3;
