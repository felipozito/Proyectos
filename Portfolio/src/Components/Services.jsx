import React from "react";

const Services = () => {
      return (
            <section className="services" id="services">
                  <div className="center">
                        <h2>Mis Servicios</h2>
                        <p></p>
                  </div>
                  <div className="service-content">
                        <div className="row">
                              <i className="bx bx-world"></i>
                              <h3>Web Desing</h3>
                              <p>
                                    Crear sitios web innovadores y eficaces que capturan su marca, mejoran sus tasas de conversión y maximizan sus
                                    ingresos para ayudar a hacer crecer su negocio y alcanzar sus objetivos. Conozca más sobre nuestros servicios de
                                    diseño web a continuación.
                              </p>
                        </div>
                        <div className="row">
                              <i className="bx bxl-sketch"></i>
                              <h3>Web Development</h3>
                              <p>
                                    Los servicios de desarrollo web ayudan a crear todo tipo de software basado en la web y garantizan una gran
                                    experiencia para los usuarios de la web. Diseñamos, rediseñamos y damos soporte continuo a las aplicaciones web de
                                    cara al cliente y a la empresa.
                              </p>
                        </div>
                        <div className="row">
                              <i className="bx bx-home-alt-2"></i>
                              <h3>App Development</h3>
                              <p>
                                    El objetivo crear aplicaciones que complementen y logren eficazmente soluciones web, mediante la entrega de una
                                    interfaz de usuario llamativa, un código de aplicación seguro y un back-end resistente lista para el use de
                                    usuarios.
                              </p>
                        </div>
                  </div>
            </section>
      );
};

export default Services;
