import React, { useState } from "react";
import img from "../assets/1.jpg";
import Education from "./Education";
import Experience from "./Experience";
import Skill_item from "./Skill_item";
import academlo from "../assets/Academlo.png";
import ups from "../assets/ups.png";

const About = () => {
      const [tab, setTab] = useState(1);
      const skills = [
            { title: "HTML", icon: "fab fa-html5", range: "skills__bar--100", skills: ["Etiquetas", "Accesibilidad", "SEO"] },
            { title: "CSS", icon: "fab fa-css3-alt", range: "skills__bar--80", skills: ["Css", "Responsive", "Flexbox", "Grid", "Animation"] },
            {
                  title: "JAVASCRIPT",
                  icon: "fab fa-js-square",
                  range: "skills__bar--80",
                  skills: ["ES6", "Ajax", "Json", "API", "DOM", "Object", "Arrays"],
            },
            {
                  title: "REACT JS",
                  icon: "fab fa-react",
                  range: "skills__bar--80",
                  skills: ["Hooks", "Context", "Redux", "Mern"],
            },
            {
                  title: "SQL",
                  icon: "bx bxs-data",
                  range: "skills__bar--60",
                  skills: ["MySQL", "MongoDB", "Firebase"],
            },
            {
                  title: "Phyton",
                  icon: "bx bxl-python",
                  range: "skills__bar--50",
                  skills: ["Estructurade dato", "Flujo de Control", "Construccion de Paquetes"],
            },
      ];
      const resumen =
            "Profesional conformación en Desarrollo Web Fronted,Redes e Ingeniero en Telecomunicaciones, que aspira encontrar un puesto laboral en el que pueda desarrollar mis habilidades y mi pasión. Tecnológicamente hábil, ofrezco experiencia en desarrollo web tanto fronted como backend, programas de tecnología y habilidades informáticas avanzadas.";

      return (
            <section id="about">
                  <div className="about">
                        <div className="about-img">
                              <img src={img} alt="imgAbout" />
                        </div>
                        <div className="about-text">
                              <h2>Acerca de mi</h2>
                              <h5>
                                    Developer <span>& Desginer</span>
                              </h5>
                              <div className="about_topic">
                                    <h5 data-id="Resumen tab" className={`${tab == 1 ? "tab_active" : ""}`} onClick={() => setTab(1)}>
                                          Resumen
                                    </h5>
                                    <h5 data-id="Educacion" className={`${tab == 2 ? "tab_active" : ""}`} onClick={() => setTab(2)}>
                                          Educacion
                                    </h5>
                                    <h5 data-id="Experiencia" className={`${tab == 3 ? "tab_active" : ""}`} onClick={() => setTab(3)}>
                                          Expereriencia
                                    </h5>
                              </div>
                              {tab == 1 ? <p style={{ textAlign: "justify" }}>{resumen}</p> : tab == 2 ? <Education /> : <Experience />}
                              <a href="#" className="btn" download="CV_FelipeAsimbaya.pdf">
                                    Download CV
                              </a>
                        </div>
                  </div>
                  <section className="content_skills">
                        <h2>Skills</h2>
                        <div className="skills">
                              {skills.map((item, index) => {
                                    return <Skill_item item={item} key={index} />;
                              })}
                        </div>
                  </section>
            </section>
      );
};

export default About;
