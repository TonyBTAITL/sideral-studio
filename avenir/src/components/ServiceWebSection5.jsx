import React from 'react';
import { Link } from 'react-router-dom';
const ServiceWebSection5 = (props) => {
  const siteWeb = props.siteWeb;
  return (
    <>
      <section
        className="ServiceWebSection5"
        style={{
          backgroundImage: `url("wallpapers.jpg")`
        }}>
        <div className="containt container">
          <h2 data-aos="fade-in" data-aos-duration="1000">
            Nos <span>dernières</span> réalisations
          </h2>
          {siteWeb.map((e, key) => (
            <Link
              to={e.link}
              key={key}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={e.time}
              target="_blank">
              <div className="element">
                <img src={e.image} alt={e.alt} />
                <div className="site">
                  <div className="titleSite">
                    <p>{e.title}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServiceWebSection5;
