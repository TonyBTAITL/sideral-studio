import { React, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = (value) => {
  const [captcha, setCaptcha] = useState(false);
  const [result, setResult] = useState(false);
  function onChange(value) {
    setCaptcha(true);
  }
  const sendEmail = (e) => {
    if (captcha == true) {
      e.preventDefault();
      if (value) {
        emailjs.sendForm('service_rf0o4oi', 'template_gbyhdao', e.target, 'gCrAbPgdwTg7D_AeX').then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
        e.target.reset();
        setResult(true);
      }
    } else {
      e.preventDefault();
    }
  };
  const Result = () => {
    return <p>Votre message a bien été envoyé.</p>;
  };
  return (
    <>
      <form action="" onSubmit={sendEmail}>
        <div className="title"></div>
        <div className="form">
          <div className="name input">
            <span data-aos="fade-in" data-aos-duration="500" data-aos-delay="200">
              Prénom
            </span>
            <input
              type="text"
              name="name"
              required
              data-aos="zoom-in-up"
              data-aos-duration="500"
              data-aos-delay="200"
            />
          </div>
          <div className="lastname input">
            <span data-aos="fade-in" data-aos-duration="500" data-aos-delay="400">
              Nom
            </span>
            <input
              type="text"
              name="lastname"
              required
              data-aos="zoom-in-up"
              data-aos-duration="500"
              data-aos-delay="400"
            />
          </div>
          <div className="mail input">
            <span data-aos="fade-in" data-aos-duration="500" data-aos-delay="600">
              Adresse Email
            </span>
            <input
              type="email"
              name="mail"
              required
              data-aos="zoom-in-up"
              data-aos-duration="500"
              data-aos-delay="600"
            />
          </div>
          <div className="tel input">
            <span data-aos="fade-in" data-aos-duration="500" data-aos-delay="800">
              Numéro de téléphone
            </span>
            <input
              type="tel"
              name="tel"
              required
              data-aos="zoom-in-up"
              data-aos-duration="500"
              data-aos-delay="800"
            />
          </div>
          <div className="message input">
            <span data-aos="fade-in" data-aos-duration="500" data-aos-delay="1000">
              Message
            </span>
            <textarea
              name="message"
              cols="30"
              rows="10"
              required
              data-aos="zoom-in-up"
              data-aos-duration="500"
              data-aos-delay="1000"></textarea>
          </div>
          <div className="submit">
            <input
              type="submit"
              value="Envoyer"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="1200"
            />
          </div>
          <div className="result" data-aos="fade-in" data-aos-duration="800" data-aos-delay="1250">
            {result ? <Result /> : <p>Veuillez remplir tous les champs et valider le recaptcha</p>}
          </div>
        </div>
        <ReCAPTCHA
          sitekey="6Ldky2AUAAAAAM-bHasOdNZ004vCUGpmZqpsbEIh"
          onChange={onChange}
          data-aos="fade-in"
          data-aos-duration="800"
          data-aos-delay="1300"
        />
      </form>
    </>
  );
};

export default ContactForm;
