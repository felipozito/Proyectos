import React from "react";
import img from "../assets/5.jpg";
import emailjs from "@emailjs/browser";

const Footer = () => {
      const sendMail = (e) => {
            e.preventDefault();
            emailjs.sendForm("service_80g1n0f", "template_20aqr3g", e.target, "m3BLEhMPMsDNK2bRE").then(
                  () => {
                        console.log("Sent!");
                  },
                  (err) => {
                        console.log(JSON.stringify(err));
                  }
            );
            e.target.reset();
      };
      return (
            <section id="contact">
                  <div className="contact">
                        <div className="contact-form">
                              <h2>Contactame</h2>
                              <p>
                                    Estoy disponible para trabajos de desarrollo y proyectos, con muchas ganas de Brindar soluciones y ayudar al
                                    crecimientos de las empresas.
                                    <br />
                              </p>
                              <form onSubmit={sendMail}>
                                    <input type="" placeholder="Your Name" required id="name" name="user_name" />
                                    <input type="email" id="mail" name="user_mail" placeholder="Your Email" required />
                                    <input type="phone" name="user_phone" id="phone" placeholder="Your Phone" required />
                                    <textarea id="text_mail" cols="30" rows="10" name="user_messages" placeholder="Your Message" required></textarea>
                                    <button className="send">Contactar</button>
                              </form>
                        </div>
                        <div className="contact-img">
                              <img src={img} alt="footerImg" />
                        </div>
                  </div>
            </section>
      );
};

export default Footer;
