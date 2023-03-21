import React from 'react';
import ContactForm from './ContactForm';

const ContactSection2 = () => {
  return (
    <>
      <section className="ContactSection2 container" id="contact">
        <div className="left" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.6167851748573!2d2.4435483160485685!3d48.92269297929382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e61482b0ab7a99%3A0x9e527d5b5d43036f!2sAVENIR+INFORMATIQUE!5e0!3m2!1sfr!2sfr!4v1516561522248"
            width="100%"
            height="600"
            allowFullScreen
            style={{ border: 0 }}></iframe>
        </div>
        <div className="right">
          <h2 data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
            Contactez-nous
          </h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default ContactSection2;
