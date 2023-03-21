import React from 'react';
import { Link } from 'react-router-dom';
const ServiceWebSection4 = ({ web3 }) => {
  return (
    <>
      <section className="ServiceWebSection4" id="price">
        <div className="containt container">
          {web3.map((e, key) => {
            return (
              <div className="boxPrice" data-aos="fade-up" data-aos-duration="1000" key={key}>
                <div className="title">
                  <h3>{e.title}</h3>
                </div>
                <div className="subtitle">
                  <span>{e.subtitle}</span>
                </div>
                <div className="price">
                  <p>{e.price} €</p>
                </div>
                <ul className="list">
                  <h4>{e.list_title}</h4>
                  <li>
                    <span className="material-symbols-rounded">chevron_right</span>
                    {e.list_1}
                  </li>
                  <li>
                    <span className="material-symbols-rounded">chevron_right</span>
                    {e.list_2}
                  </li>
                  <li>
                    <span className="material-symbols-rounded">chevron_right</span>
                    {e.list_3}
                  </li>
                  <li>
                    <span className="material-symbols-rounded">chevron_right</span>
                    {e.list_4}
                  </li>
                  <li>
                    <span className="material-symbols-rounded">chevron_right</span>
                    {e.list_5}
                  </li>
                  <li>
                    <span className="material-symbols-rounded">chevron_right</span>
                    {e.list_6}
                  </li>
                </ul>
                <Link className="button" to="/contact">
                  <button className="firstButton">{e.button}</button>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ServiceWebSection4;
