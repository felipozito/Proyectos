import React from "react";
import ServicesCard from "./ServicesCard";
import "../Styles/services.css";

const Services = () => {
      const services = [
            {
                  title: "Diseño De Planos Electricos",
                  description:
                        "Los proyectos de ingeniería electrica se basan en el diseño he implementacion de planos especificos. Como parte de nuestro compromiso con la ingeniería socialmente responsable, brindamos este servicio a todos los clientes que lo requieran. Nuestro equipo es flexible y tiene en cuenta todas las consideraciones ambientales para minimizar el daño ambiental.",
            },
            {
                  title: "Instalaciones domiciliarias, Industriales y Sistemas De Seguridad",
                  description:
                        "Servicios Integrales Electricos  ponemos a su disposición un equipo de ingeniería experto, capacitado para enfrentar diversos desafíos en todas las industrias. Mediante el servicio de instalacione  de sistemas eléctricos, aprovechamos nuestro conocimiento para reducir el riesgo. Constantemente estamos buscando nuevos adelantos y tecnologías para encontrar las soluciones más óptimas e inteligentes.",
            },
            {
                  title: "Mantenimiento Preventivo De Motores",
                  description:
                        "Brindar manteminento preventivo de motores  eléctricos, es vital para mantener la seguridad en la mayoría de los proyectos que emprendemos en Servicios Integrales Electricos. Si un proyecto es del sector Eléctrico o Ambiental, Pruebas del sistema eléctrico es importante para asegurar que todos los proyectos de ingeniería realizados por Compañía de soluciones de energía sean seguros, estables y estén diseñados para durar.",
            },
      ];
      return (
            <div className="main_services" id="Services">
                  <h2>NUESTROS SERVICIOS</h2>
                  <h3>UN ENFOQUE EXHAUSTIVO</h3>
                  <div className="services">
                        {services.map((item, index) => {
                              return <ServicesCard services={item} key={index} />;
                        })}
                  </div>
            </div>
      );
};

export default Services;
