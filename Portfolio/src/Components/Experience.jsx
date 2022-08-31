import React from "react";

const Experience = () => {
      const experience = [
            {
                  company: "TurnKey Resource",
                  job: "Analista",
                  task: [
                        "-Supervisa y apoyar el óptimo funcionamiento de los sistemas que la empresa.",
                        "-Planificar, coordinar, dirigir y controlar las actividades de trabajo relacionadas a la creación, redacción, documentación y actualización.",
                        "-Elaborar, mantener actualizados y debidamente documentados los instructivos de los procesos realizados en la organización.",
                        "-Participar en el desarrollo de nuevos proyectos en materia de métodos, procedimientos y técnicas.",
                  ],
                  start: "Junio 2020",
                  end: "Actual",
            },
            {
                  company: "JassaTelecom",
                  job: "Jefe Tecnico",
                  task: [
                        "-Análisis y Diseño de red Gpon.",
                        "-Control y Análisis del personal de Campo para el levantamiento de la red de fibra óptica.",
                        "-Dibujante de los planos de la red de Fibra.",
                        "-Control de salida e ingreso de mercaderia.",
                        "-Gestionar el Rediseño de la red.",
                        "-Administracion de bodega.",
                  ],
                  start: "Septiembre 2020",
                  end: "Enero 2021",
            },
            {
                  company: "Tecnologia para Llevar",
                  job: "Administrador",
                  task: [
                        "-Servicio de help desk.",
                        "-Recepción y solución de problemas networking.",
                        "-Soporte en software y mantenimiento de Laptops y Computadores.",
                        "-Control de salida e ingreso de mercaderia.",
                        "-Uso y planificación con Kardex.",
                        "-Administración de Local y atención al cliente.",
                  ],
                  start: "Junio 2020",
                  end: "Septiembre 2021",
            },
            {
                  company: "CINNET",
                  job: "Ingeniero de Planta",
                  task: [
                        "-Actualización de planos en AutoCAD del cableado eléctrico,cableado de red, accesos, seguridades y sistema contraincendios en YAVIRAC.",
                        "-Control de calidad e Inspeccion de cableado de accesos y seguridades en talleres.",
                        "-Planificación y ejecucion de instalación de infraestructura de puntos de Datos.",
                  ],
                  start: "Marzo 2020",
                  end: "Marzo 2021",
            },
            {
                  company: "Fundacion Scorpius",
                  job: "Help Desk",
                  task: [
                        "-Gestión De Cms y administración de sitio web.",
                        "-Recepción y solución de problemas networking.",
                        "-Manejo de caja chica.",
                        "-Atención a clientes.",
                        "-Procesos de mantenimiento, respaldo de servidores.",
                        "-Mantenimiento y actualización de laptops y computadoras.",
                  ],
                  start: "Marzo 2020",
                  end: "Marzo 2021",
            },
      ];
      return (
            <div className="topic">
                  {experience.map((item, index) => {
                        return (
                              <div className="topic_card" key={index}>
                                    <h4>{item.company}</h4>
                                    <span>
                                          {item.start} - {item.end}
                                    </span>
                                    <div className="job_text">
                                          <ul>
                                                {item.task.map((task, index) => {
                                                      return <li key={index}>{task}</li>;
                                                })}
                                          </ul>
                                    </div>
                              </div>
                        );
                  })}
            </div>
      );
};

export default Experience;
