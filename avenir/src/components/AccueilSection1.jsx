import React from 'react';
import useWindowResize from '../hooks/useWindowResize';
const AccueilSection1 = ({ tableau1, image }) => {
  const { width } = useWindowResize();
  return (
    <>
      <section className="AccueilSection1">
        {tableau1.map((e, key) => (
          <div key={key}>
            {width < 900 ? (
              <div className="contenu container">
                <h2 data-aos="fade-up">
                  {e.title}&nbsp;
                  {e.secondTitle}
                </h2>
                <h2 data-aos="fade-up">{e.text}</h2>
                <span data-aos="fade-up">{e.subtitle}</span>
                <p data-aos="fade-up">
                  <span>{e.case1}&nbsp;</span>
                  <span>{e.case2}&nbsp;</span>
                  <span>{e.case3}&nbsp;</span>
                  <span>{e.case4}</span>
                </p>
              </div>
            ) : (
              <div className="contenu container widescreen" key={key}>
                <div className="text">
                  <h2 data-aos="fade-up">
                    {e.title} <br />
                    <span>{e.secondTitle}</span>
                  </h2>
                  <span data-aos="fade-up">{e.subtitle}</span>
                </div>

                <div className="depannage">
                  <h3 data-aos="fade-right">{e.text}</h3>
                  <div className="containt">
                    <div className="left">
                      <div className="element" data-aos="fade-right">
                        <p>{e.case1}</p>
                        <p>{e.case3}</p>
                      </div>
                      <div className="element" data-aos="fade-right">
                        <p>{e.case2}</p>
                        <p>{e.case4}</p>
                      </div>
                    </div>
                    <div className="right ">
                      {image.map((e, key) => {
                        if (e.id == 3) {
                          return (
                            <div className="image" key={key} data-aos="fade-left">
                              <img src={e.image} alt={e.alt} key={key} className="" />
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                  {/* <span>{e.lastsubtitle}</span> */}
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
};

export default AccueilSection1;
