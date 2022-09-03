import React from "react";
import "../Styles/form.css";
import emailjs from "@emailjs/browser";
import logo from "../assets/logoMain.png";
const Footer = () => {
      const sendMail = (e) => {
            e.preventDefault();
            console.log("Enter");
            emailjs.sendForm("service_pqrr0j1", "template_mszdy8h", e.target, "hHJaEd8Deft3xRH7K").then(
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
            <div className="footer" id="Contacts">
                  <h2>CONTACTANOS</h2>
                  <div className="container-form">
                        <form className="formulario" onSubmit={sendMail}>
                              <h2 className="form_title">Escribenos</h2>
                              <img src={logo} alt="logo" className="logo" />
                              <div className="iconos">
                                    <div className="border-icon">
                                          <a href="https://www.instagram.com/seltcompany.sa/">
                                                <i className="bx bxl-instagram"></i>
                                          </a>
                                    </div>
                                    <div className="border-icon">
                                          <a href="https://api.whatsapp.com/send?phone=593998701154&text=Hola Selt Company SA, quisiera mas informacion sobre ...">
                                                <i className="bx bxl-whatsapp"></i>
                                          </a>
                                    </div>
                                    <div className="border-icon">
                                          <a href="https://www.facebook.com/profile.php?id=100083948901736">
                                                <i className="bx bxl-facebook-circle"></i>
                                          </a>
                                    </div>
                              </div>

                              <input type="text" placeholder="Nombre" id="name" name="user_name" className="input" />
                              <input type="email" placeholder="Email" id="user_email" name="user_email" className="input" />
                              <input type="phone" placeholder="Telefono" id="user_phone" name="user_phone" className="input" />
                              <textarea type="text" placeholder="Mensaje" name="user_messages" />
                              <input type="submit" className="submit" />
                        </form>
                        <div className="map">
                              <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.761908814899!2d-78.54167768544514!3d-0.3046810997777008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5a377efe265b9%3A0x77457a0f817ce28d!2sSELT%20Company!5e0!3m2!1ses!2sec!4v1661474332745!5m2!1ses!2sec"
                                    width="600"
                                    height="550"
                                    frameBorder="0"
                                    allowFullScreen=""
                                    aria-hidden="false"
                                    tabIndex="0"
                              ></iframe>
                        </div>
                  </div>

                  <div className="copyright">
                        <h3>
                              "Derechos Reservados©2022 por <span>SERVICIOS INTEGRALES ELECTRICOS</span>
                        </h3>
                  </div>
            </div>
      );
};

export default Footer;
