import React from 'react';
import './IdentiteVisuel.css';
import './ResponsiveIdentiteVisuel.css';
import SlideMarque from '../../components/SlideMarque';

const IdentiteVisuel = ({ web2, slide }) => {
  return (
    <>
      <section className="headersectionIdentiteVisuel">
        <div
          className="header"
          style={{
            backgroundImage: `url("HeaderBackground.png")`
          }}>
          <h1 data-aos="fade-in" data-aos-delay="100">
            Identité visuelle
          </h1>
        </div>
      </section>

      {web2.map((e, key) => {
        if (e.id == 2 || e.id == 3 || e.id == 5 || e.id == 6 || e.id == 7) {
          const lien = e.title;
          const str = lien.replace(/\s/g, '');
          return (
            <section className="sectionIdentiteVisuel container" key={key} id={str}>
              <div className="left">
                <div className="title">
                  <span className="material-symbols-rounded">{e.icon}</span>
                  <h2>{e.title}</h2>
                </div>
                <div className="text">{e.text}</div>
              </div>
              <div className="right">
                <div className="image">
                  <img src={e.image} alt={e.alt} />
                </div>
              </div>
            </section>
          );
        }
      })}
      <SlideMarque slide={slide} />
    </>
  );
};

export default IdentiteVisuel;
