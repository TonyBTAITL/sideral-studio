import { React, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './pages/layout/Layout';
import Accueil from './pages/Accueil/Accueil';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import Boutique from './pages/Boutique/Boutique';
import AboutUs from './pages/AboutUs/AboutUs';
import Error from './pages/Error/Error';
import Api from './Api';
import Footer from './components/Footer';
import ScrollToTop from './hooks/ScrollToTop';
import ServiceInfo from './pages/ServiceInfo/ServiceInfo';
import ServiceWeb from './pages/ServiceWeb/ServiceWeb';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  // Initialisation des effets au scroll
  useEffect(() => {
    AOS.init({
      once: true
    });
  }, []);

  // array header page accueil
  const [tableau0, setTableau0] = useState([]);
  // array image décoration page accueil
  const [image, setImage] = useState([]);
  // array section 1(bienvenu) page accueil
  const [tableau1, setTableau1] = useState([]);
  // array section 2(experiences) page accueil
  const [tableau2, setTableau2] = useState([]);
  // array section 3(service) page accueil
  const [tableau3, setTableau3] = useState([]);
  // array section 4(vers page service)) page accueil
  const [tableau4, setTableau4] = useState([]);
  // array section 5 (avis) page accueil
  const [tableau5, setTableau5] = useState([]);
  //array Correspondant au services multimédia
  const [tableau6, setTableau6] = useState([]);
  // array section 5 (liste des avis affiché) page accueil
  const [avis, setAvis] = useState([]);
  // array correspondant aux images de catégories principales page services
  const [service, setService] = useState([]);
  // array correspondant préstation services
  const [service_3, setService_3] = useState([]);
  // array correspondant au bouton de la liste de services
  const [button, setButton] = useState([]);
  // array correspondatn aux logos de marques pour le slider
  const [slide, setSlide] = useState([]);
  // array correspondant au matériel en vente actuelement sur la page boutique
  const [vente, setVente] = useState([]);
  //array correspondant aux images des réalisations de site web
  const [siteWeb, setSiteWeb] = useState([]);
  //array correspondant a la promo
  const [promo, setPromo] = useState([]);
  //array serviceweb_section_1
  const [web1, setWeb1] = useState([]);
  //array serviceweb_section_2
  const [web2, setWeb2] = useState([]);
  //array serviceweb_section_3
  const [web3, setWeb3] = useState([]);
  useEffect(() => {
    getElement();
  }, []);

  // Récupérer les données de l'api ( fichier json sortie par la bdd en php)
  const getElement = () => {
    // Methode axios avec le lien directement intégré en dur

    // axios.get('https://sideralweb.fr/api/react/').then(function(response) {
    //         // console.log(response.data);
    //         setElement(response.data);
    //     });

    Api.get().then(function (response) {
      // array header page accueil
      setTableau0(response.data[0]);
      // array image décoration page accueil
      setImage(response.data[1]);

      // array section 1(bienvenu) page accueil
      setTableau1(response.data[2]);
      // array section 2(experiences) page accueil
      setTableau2(response.data[3]);
      // array section 3(service) page accueil
      setTableau3(response.data[4]);
      // array section 4(vers page service)) page accueil
      setTableau4(response.data[5]);
      // array section 5 (avis) page accueil
      setTableau5(response.data[6]);
      //array Correspondant au services multimédia
      setTableau6(response.data[7]);
      // array section 5 (liste des avis affiché) page accueil
      setAvis(response.data[8]);
      // array correspondant au matériel en vente actuelement sur la page boutique
      setVente(response.data[9]);
      // array comportement la liste du menu principal
      // console.log(9)
      //array correspondant a la promo
      setPromo(response.data[11]);
      // array correspondant au bouton de la liste de services
      setButton(response.data[12]);
      // array correspondant préstation services
      setService_3(response.data[13]);
      // array correspondant aux images de catégories principales page services
      setService(response.data[14]);
      //array correspondant aux images des réalisations de site web
      setSiteWeb(response.data[15]);
      //array serviceweb_section_1
      setWeb1(response.data[16]);
      //array serviceweb_section_2
      setWeb2(response.data[17]);
      //array serviceweb_section_3
      setWeb3(response.data[18]);
      // array correspondant aux logos de marques pour le slider
      setSlide(response.data[19]);

      // console.log(response.data);
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Accueil
                tableau0={tableau0}
                tableau1={tableau1}
                tableau2={tableau2}
                image={image}
                tableau3={tableau3}
                tableau4={tableau4}
                tableau5={tableau5}
                tableau6={tableau6}
                avis={avis}
                service={service}
              />
            }
          />
          <Route
            exact
            path="services"
            element={
              <Services service_3={service_3} button={button} service={service} slide={slide} />
            }
          />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="boutique" element={<Boutique slide={slide} vente={vente} />} />
          <Route exact path="about-us" element={<AboutUs />} />
          <Route
            exact
            path="serviceinfo"
            element={<ServiceInfo service_3={service_3} promo={promo} />}
          />
          <Route
            exact
            path="creaSite"
            element={<ServiceWeb siteWeb={siteWeb} web1={web1} web2={web2} web3={web3} />}
          />

          <Route exact path="*" element={<Error />} />
        </Route>
      </Routes>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
