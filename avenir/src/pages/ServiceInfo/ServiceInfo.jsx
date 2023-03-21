import { React, useState } from 'react';

import { Link } from 'react-router-dom';
import useWindowResize from '../../hooks/useWindowResize';
import ServiceInfoSection1 from '../../components/ServiceInfoSection1';
import './ServiceInfo.css';
import './ResponsiveServiceInfo.css';
const ServiceInfo = (props) => {
  const promo = props.promo;
  const service_3 = props.service_3;
  const { width } = useWindowResize();
  const urlcourante = document.location.hash;
  const url = urlcourante.replace('#', '');
  const [urlNew, setUrlNew] = useState(url);
  const [toggle, setToggle] = useState(false);
  const handleToogle = () => {
    setToggle(!toggle);
  };
  const urlNewChange = (a) => {
    setUrlNew(a);
    setToggle(false);
  };

  return (
    <>
      <ServiceInfoSection1 />
      <section className="ServiceInfo container">
        {width < 900 ? (
          <div className="menuServiceInfo">
            <ul className={toggle ? '' : 'active'}>
              <div className="openClose" onClick={handleToogle}>
                <span
                  className={`material-symbols-rounded ${toggle ? 'active' : ''}`}
                  onClick={handleToogle}>
                  menu
                </span>
              </div>
              {service_3.map((index, key) => (
                <Link
                  key={key}
                  to={`/serviceinfo#${index.id}`}
                  onClick={() => urlNewChange(index.id)}
                  className={index.id == urlNew ? 'active' : ''}>
                  <span className="material-symbols-rounded">{index.icon}</span>
                  <li>{index.title}</li>
                </Link>
              ))}
            </ul>
          </div>
        ) : (
          <div className="menuServiceInfo">
            <ul className={width < 900 ? 'active' : ''} data-aos="fade-right" data-aos-delay="200">
              {service_3.map((index, key) => (
                <Link
                  key={key}
                  to={`/serviceinfo#${index.id}`}
                  onClick={() => urlNewChange(index.id)}
                  className={index.id == urlNew ? 'active' : ''}>
                  <span className="material-symbols-rounded">{index.icon}</span>
                  <li>{index.title}</li>
                </Link>
              ))}
            </ul>
            {promo.map((e, key) => {
              return (
                <div
                  className="promo"
                  style={{
                    backgroundImage: `url("${e.image}")`
                  }}
                  key={key}
                  data-aos="fade-right"
                  data-aos-delay="200">
                  <h3>{e.titre}</h3>
                  <p>{e.text}</p>
                </div>
              );
            })}
          </div>
        )}
        <div className="containt">
          {service_3.map((e, key) => {
            const paragraphe = e.text;
            if (e.id == urlNew) {
              return (
                <div className="infos" key={key}>
                  <div className="image" data-aos="fade-in" data-aos-delay="400">
                    <img src={e.image_description} alt="" />
                  </div>
                  <div className="title" data-aos="fade-up" data-aos-delay="600">
                    <h2 key={key}>{e.title}</h2>
                  </div>
                  <div className="text" data-aos="fade-up" data-aos-delay="800">
                    <p>{e.text}</p>
                  </div>
                  {e.text_1 ? (
                    <div className="text" data-aos="fade-up" data-aos-delay="1000">
                      <p>{e.text_1}</p>
                    </div>
                  ) : (
                    ''
                  )}
                  {e.text_2 ? (
                    <div className="text" data-aos="fade-up" data-aos-delay="1000">
                      <p>{e.text_2}</p>
                    </div>
                  ) : (
                    ''
                  )}
                  {e.text_3 ? (
                    <div className="text" data-aos="fade-up" data-aos-delay="200">
                      <p>{e.text_3}</p>
                    </div>
                  ) : (
                    ''
                  )}
                  {e.text_4 ? (
                    <div className="text" data-aos="fade-up" data-aos-delay="200">
                      <p>{e.text_4}</p>
                    </div>
                  ) : (
                    ''
                  )}
                  {e.text_5 ? (
                    <div className="text">
                      <p>{e.text_5}</p>
                    </div>
                  ) : (
                    ''
                  )}
                  {e.text_6 ? (
                    <div className="text">
                      <p>{e.text_6}</p>
                    </div>
                  ) : (
                    ''
                  )}
                  {e.text_7 ? (
                    <div className="text">
                      <p>{e.text_7}</p>
                    </div>
                  ) : (
                    ''
                  )}
                  {e.text_8 ? (
                    <div className="text">
                      <p>{e.text_8}</p>
                    </div>
                  ) : (
                    ''
                  )}

                  <div className="containt">
                    <div className="avantApres">
                      <div className="avant">
                        <div className="image">
                          <img src={e.avant_1} alt={e.alt_avant_1} />
                        </div>
                      </div>
                      <div className="apres">
                        <div className="image">
                          <img src={e.apres_1} alt={e.alt_apres_1} />
                        </div>
                      </div>
                    </div>

                    <div className="avantApres">
                      <div className="avant">
                        <div className="image">
                          <img src={e.avant_2} alt={e.alt_avant_2} />
                        </div>
                      </div>
                      <div className="apres">
                        <div className="image">
                          <img src={e.apres_2} alt={e.alt_apres_1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </section>
    </>
  );
};

export default ServiceInfo;
