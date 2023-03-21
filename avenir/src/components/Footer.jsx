import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="left">
            <div className="element">
              <div className="image">
                <img src="logo.png" alt="Logo société Avenir Informatique Drancy" />
              </div>
              <div className="text">
                <h4>Information commerciales</h4>
                <p>
                  Nos équipes se tiennent à votre disposition pour toute information sur les prix et
                  caractéristiques de nos produits et services.
                </p>
                <p>
                  Confidentialité des données : Conformément à la loi Informatique et liberté n°
                  78-17 datant du 6 janvier 1978, l'utilisateur dispose d'un droit d'accès, de
                  rectification et de suppression des données le concernant qu'il peut exercer en
                  s'adressant à l'adresse suivante.
                </p>
              </div>
              <div className="adress">
                <h4>Avenir Informatique</h4>
                <Link
                  to="https://www.google.com/maps/place/AVENIR+INFORMATIQUE/@48.9226726,2.4455227,15z/data=!4m2!3m1!1s0x0:0x9e527d5b5d43036f?sa=X&ved=2ahUKEwi--K3Vgsz9AhVqVKQEHX3FCcIQ_BJ6BAhVEAg"
                  target="_blank">
                  16, place de l'Hôtel de Ville 93700 Drancy
                </Link>
                <Link to="tel:0141601818">Tel: 01.41.60.18.18</Link>
              </div>
              <div className="partenaireLink">
                <h4>Liens partenaires</h4>
                <Link to="http://persienneriedranceenne.fr/">La persiennerie dranceenne</Link>
                <Link to="http://www.fontanier-immo.com/">Fontanier immobilier</Link>
                <Link to="http://kathyburke.paris/">Kathy BURKE</Link>
                <Link to="http://www.typo.fr/">Typo</Link>
                <Link to="https://www.aimboo.fr/">Aimboo</Link>
              </div>
            </div>
            <div className="element">
              <div className="titre">
                <h3>Services</h3>
              </div>
              <div className="text">
                <p>Service Dépannage informatique et Commercial</p>
                <Link to="tel:0141601818">Tel: 01.41.60.18.18</Link>
              </div>
              <div className="hour">
                <p>09h00 - 12h00 / 13h30 - 18h00</p>
              </div>
              <div className="adress">
                <h4>Avenir Informatique</h4>
                <Link
                  to="https://www.google.com/maps/place/AVENIR+INFORMATIQUE/@48.9226726,2.4455227,15z/data=!4m2!3m1!1s0x0:0x9e527d5b5d43036f?sa=X&ved=2ahUKEwi--K3Vgsz9AhVqVKQEHX3FCcIQ_BJ6BAhVEAg"
                  target="_blank">
                  16, place de l'Hôtel de Ville 93700 Drancy
                </Link>
                <p>93700 Drancy</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="element">
              <div className="acces">
                <div className="titre">
                  <h3>Acces à la boutique</h3>
                </div>
                <div className="text">
                  <p>Par les transports en commun</p>
                </div>
                <div className="titre">
                  <h3>Autobus :</h3>
                </div>
                <div className="text">
                  <p>
                    Bus 148, Arrêt MAIRIE DE DRANCY sur la Place de l'Hôtel de Ville Bus 143, Arrêt
                    MAIRIE DE DRANCY sur l'Avenue Paul Vaillant Couturier Bus 248, Arrêt MAIRIE DE
                    DRANCY sur l'Avenue Paul Vaillant Couturier
                  </p>
                </div>
                <div className="titre">
                  <h3>En voiture :</h3>
                </div>
                <div className="text">
                  <p>
                    1. Parking sur la Place de l'Hôtel de Ville, au début de la Rue Charles de
                    Gaulle.
                  </p>
                  <p>
                    2. Stationnement devant le magasin, accès par l'Allée Paul Bert (entrée sous les
                    arcades, puis à droite pour accéder à la Place de l'Hôtel de Ville)
                  </p>
                  <p>
                    3. Parking Carrefour Market, entrée par l'Avenue Jean Jaurès, puis rejoignez la
                    Place de l'Hôtel de Ville à pied à 50 mètres.
                  </p>
                </div>
              </div>
              <div className="button">
                <Link
                  to="https://www.google.com/maps/place/AVENIR+INFORMATIQUE/@48.9226726,2.4455227,15z/data=!4m2!3m1!1s0x0:0x9e527d5b5d43036f?sa=X&ved=2ahUKEwi--K3Vgsz9AhVqVKQEHX3FCcIQ_BJ6BAhVEAg"
                  target="_blank"
                  className="firstButton">
                  Plan d'acces
                </Link>
              </div>
            </div>
            <div className="element">
              <div className="numero">
                <span className="material-symbols-rounded">call</span>
                <Link to="tel:0141601818">01 41 60 18 18</Link>
              </div>
              <div className="text">
                <p>
                  Du lundi au vendredi
                  <br />
                  09h00 - 12h00 / 13h30 - 18h00
                </p>
              </div>
              <div className="listing-services">
                <ul>
                  <li>Dépannage informatique, réparation pc toutes marques.</li>
                  <li>Maintenance informatique, restauration système.</li>
                  <li>Réparation tablettes et smartphones.</li>
                  <li>Réparation carte mère (microsoudure).</li>
                  <li>Remplacement de composant éléctronique.</li>
                  <li>Transfert vidéo, récupération de données.</li>
                  <li>Dépannage et installation PC à Drancy.</li>
                  <li>Éradication de virus.</li>
                  <li>Mise en place de systèmes de sauvegarde.</li>
                  <li>Installation matériel et logiciel.</li>
                  <li>Réinstallation du système d'exploitation.</li>
                  <li>Nettoyage disque dur, base de registre.</li>
                  <li>Suppression des fichiers et programmes inutiles.</li>
                  <li>Upgrade de votre matériel pour plus de performances.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <p>Copyright © 1999-2023 AVENIR INFORMATIQUE. Tous droits réservés.</p>
          </div>
          <div className="navigation">
            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/boutique">Boutique</Link>
              </li>
              <li>
                <Link to="/creaSite">Service Web</Link>
              </li>
              <li>
                <Link to="/about-us">A propos</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
