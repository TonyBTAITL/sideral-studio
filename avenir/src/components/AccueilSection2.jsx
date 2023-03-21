import React from 'react';

const AccueilSection2 = ({ image, tableau2 }) => {
  const date = new Date().getFullYear().toString().substring(2);

  return (
    <>
      <section className="AccueilSection2">
        <div className="container">
          {/* Left side in widescreen */}
          <div className="left">
            <div className="image">
              {image.map((e, key) => {
                if (e.id == 2) {
                  return <img src={e.image} alt={e.alt} key={key} />;
                }
              })}
              <div className="experience-animation">
                <span className="material-symbols-rounded">more_time</span>
                <span>{date} ans d'expériences</span>
              </div>
            </div>
          </div>
          {/* Right side in widescreen */}
          <div className="right">
            {tableau2.map((e, key) => {
              if (e.id == 1) {
                return (
                  <div className="element" key={key}>
                    <div className="icon">
                      <span className="material-symbols-rounded">{e.icon}</span>
                    </div>
                    <div className="text">
                      <h3>
                        {date} {e.title}
                      </h3>
                      <p>{e.text}</p>
                    </div>
                  </div>
                );
              }
              return (
                <div className="element" key={key}>
                  <div className="icon">
                    <span className="material-symbols-rounded">{e.icon}</span>
                  </div>
                  <div className="text">
                    <h3>{e.title}</h3>
                    <p>{e.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AccueilSection2;
