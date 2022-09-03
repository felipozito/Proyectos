import React, { useState, useRef, useEffect } from "react";
import ClientsCard from "./ClientsCard";
import "../Styles/about.css";
import img from "../assets/header1.jpg";
import img2 from "../assets/Plano.jpg";
import client1 from "../assets/puntoElectrico.jpeg";
import client2 from "../assets/Seytel.jpeg";

const About = () => {
      const clients = [
            {
                  title: "Punto Electrico",
                  description:
                        "Nos asociamos con el punto electrico para trabajar en la fabricacion de tableros y lamparas iluminacion. La calidad del  producto y la unión de fuerzas fue inspiradora y esperamos utilizar sus servicios nuevamente en el futuro.",
                  img: client1,
            },
            {
                  title: "SEYTEL",
                  description:
                        "Trabajamos con SEYTEL en un proyecto basado en mantenimiento de UPS y fibra optica, de varias fases. Todo el proceso fluyó naturalmente y ambas partes cumplieron todos nuestros objetivos.",
                  img: client2,
            },
      ];

      const [toggleState, setToggleState] = useState(1);
      const [aboutScroll, setAboutScroll] = useState();
      const about = useRef();

      useEffect(() => {
            console.log(about.current.getBoundingClientRect().y);
      }, [aboutScroll]);

      const toggleTab = (index) => {
            setToggleState(index);
      };

      return (
            <div className="about" id="About">
                  <div className="about_info">
                        <h2>NOSOTROS</h2>
                        <span>
                              Es un equipo, comprometido, responsable y capacitado para ejecutar todo tipo de proyectos eléctricos y electrónicos.
                        </span>
                  </div>
                  <div className="tab" ref={about}>
                        <div className="tab_images">
                              <img src={img} alt="" />
                        </div>
                        <div className="content_tabs">
                              <div className="tab_buttons">
                                    <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
                                          NOSOTROS
                                    </button>
                                    <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
                                          MISION
                                    </button>
                                    <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
                                          VISION
                                    </button>
                              </div>
                              <div className="tab_main">
                                    <div className={toggleState === 1 ? "content  active-content" : "content"}>
                                          <p>
                                                SERVICIOS INTEGRALES ELECTRICOS está conformado por un grupo de expertos en ingeniería que se enfocan
                                                en soluciones creativas para proyectos complejos de ingeniería. Desde 2020, hemos logrado mucho éxito
                                                con varios proyectos. Nos esforzamos por innovar y trabajamos cuidadosamente para mantenernos dentro
                                                del presupuesto al tiempo que ofrecemos el máximo valor para nuestros clientes.
                                          </p>
                                    </div>

                                    <div className={toggleState === 2 ? "content  active-content" : "content"}>
                                          <p>
                                                Proponer e implementar soluciones técnicas, oportunas, rentables y sustentables, que garanticen la
                                                satisfacción de nuestros clientes. Nuestro personal técnico se encuentra capacitado, experimentado y
                                                calificado, de modo que SELT COMPANY puede brindar soluciones oportunas y eficaces.
                                          </p>
                                    </div>

                                    <div className={toggleState === 3 ? "content  active-content" : "content"}>
                                          <p>
                                                Ser una empresa líder en el sector industrial, comercial y residencial, poniendo nuestra experiencia y
                                                profesionalismo en el diseño e implementación de proyectos.
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="content_client">
                        <h2>CLIENTES</h2>
                        <div className="clients">
                              {clients.map((item, index) => {
                                    return <ClientsCard clients={item} key={index} />;
                              })}
                        </div>
                  </div>
            </div>
      );
};

export default About;
