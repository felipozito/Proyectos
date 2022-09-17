import React from "react";
import img2 from "../assets/Proyects/BepackSolution.png";
import img7 from "../assets/Proyects/EcommerceJS.png";
import img3 from "../assets/Proyects/PokeApi.png";
import img4 from "../assets/Proyects/RickandMorty.png";
import img5 from "../assets/Proyects/UserApp.png";
import img6 from "../assets/Proyects/WeatherApp.png";
import img1 from "../assets/Proyects/SeltCompany.png";

const Portfolio = () => {
      return (
            <section className="portfolio" id="portfolio">
                  <div className="center">
                        <h2>Portfolio</h2>
                        <p>
                              Comparto alguno de mis proyectos como desarrollador web, usando un poco de las tecnologias actuales del mercado. <br />
                              Juntos iremos por más.
                        </p>
                  </div>
                  <div className="portfolio-content">
                        <div className="box">
                              <img src={img1} alt="web1" />
                              <p>Selt Company</p>
                              <h5>The service provide for designe</h5>
                              <div className="box_link">
                                    <h3>Tecnologias</h3>
                                    <ul>
                                          <li>React Js</li>
                                          <li>Javascript</li>
                                          <li>Responsive</li>
                                          <li>Css</li>
                                    </ul>
                                    <a href="https://www.seltcompany.com">
                                          <span>View</span>
                                          <i class="bx bx-search-alt-2" />
                                    </a>
                              </div>
                        </div>
                        <div className="box">
                              <img src={img2} alt="web1" />
                              <p>Bepack Solutions</p>
                              <h5>The service provide for designe</h5>
                              <div className="box_link">
                                    <h3>Tecnologias</h3>
                                    <ul>
                                          <li>React Js</li>
                                          <li>Javascript</li>
                                          <li>Responsive</li>
                                          <li>Css</li>
                                    </ul>
                                    <a href="https://5f074bd38c5fb601be4e1ca8--amazing-borg-7f2898.netlify.app">
                                          <span>View</span>
                                          <i class="bx bx-search-alt-2"></i>
                                    </a>
                              </div>
                        </div>
                        <div className="box">
                              <img src={img3} alt="web1" />
                              <p>Poke-Api</p>
                              <h5>The service provide for designe</h5>
                              <div className="box_link">
                                    <h3>Tecnologias</h3>
                                    <ul>
                                          <li>React Js</li>
                                          <li>Javascript</li>
                                          <li>Responsive</li>
                                          <li>Api</li>
                                          <li>Redux</li>
                                          <li>Css</li>
                                    </ul>
                                    <div className="box_link_content">
                                          <div className="box_link_item">
                                                <a href="https://fapokeapi.netlify.app">
                                                      <span>View</span>
                                                      <i class="bx bx-search-alt-2" />
                                                </a>
                                          </div>
                                          <div className="box_link_item">
                                                <a href="https://github.com/felipozito/Academlo/tree/main/React/poke-api">
                                                      <span>Code</span>
                                                      <i class="bx bxl-github" />
                                                </a>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className="box">
                              <img src={img4} alt="web1" />
                              <p>Rick and Morty</p>
                              <h5>The service provide for designe</h5>
                              <div className="box_link">
                                    <h3>Tecnologias</h3>
                                    <ul>
                                          <li>React Js</li>
                                          <li>Javascript</li>
                                          <li>API</li>
                                          <li>Responsive</li>
                                          <li>Css</li>
                                    </ul>
                                    <div className="box_link_content">
                                          <div className="box_link_item">
                                                <a href="https://farickandmortyapp.netlify.app">
                                                      <span>View</span>
                                                      <i class="bx bx-search-alt-2" />
                                                </a>
                                          </div>
                                          <div className="box_link_item">
                                                <a href="https://github.com/felipozito/Academlo/tree/main/React/RickAndMortyApp">
                                                      <span>Code</span>
                                                      <i class="bx bxl-github" />
                                                </a>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className="box">
                              <img src={img5} alt="web1" />
                              <p>User App CRUD</p>
                              <h5>The service provide for designe</h5>
                              <div className="box_link">
                                    <h3>Tecnologias</h3>
                                    <ul>
                                          <li>React Js</li>
                                          <li>Javascript</li>
                                          <li>API</li>
                                          <li>Responsive</li>
                                          <li>Css</li>
                                    </ul>
                                    <div className="box_link_content">
                                          <div className="box_link_item">
                                                <a href="https://facrud.netlify.app">
                                                      <span>View</span>
                                                      <i class="bx bx-search-alt-2" />
                                                </a>
                                          </div>
                                          <div className="box_link_item">
                                                <a href="https://github.com/felipozito/Academlo/tree/main/React/UserApp">
                                                      <span>Code</span>
                                                      <i class="bx bxl-github" />
                                                </a>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className="box">
                              <img src={img6} alt="web1" />
                              <p>Weather App</p>
                              <h5>The service provide for designe</h5>
                              <div className="box_link">
                                    <h3>Tecnologias</h3>
                                    <ul>
                                          <li>React Js</li>
                                          <li>Javascript</li>
                                          <li>API</li>
                                          <li>Responsive</li>
                                          <li>Css</li>
                                    </ul>
                                    <div className="box_link_content">
                                          <div className="box_link_item">
                                                <a href="https://faweatherapp.netlify.app">
                                                      <span>View</span>
                                                      <i class="bx bx-search-alt-2" />
                                                </a>
                                          </div>
                                          <div className="box_link_item">
                                                <a href="https://github.com/felipozito/Academlo/tree/main/React/Weather%20App">
                                                      <span>Code</span>
                                                      <i class="bx bxl-github" />
                                                </a>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className="box">
                              <img src={img7} alt="web1" />
                              <p>E-commerce</p>
                              <h5>The service provide for designe</h5>
                              <div className="box_link">
                                    <h3>Tecnologias</h3>
                                    <ul>
                                          <li>Javascript</li>
                                          <li>Responsive</li>
                                          <li>Css</li>
                                    </ul>
                                    <div className="box_link_content">
                                          <div className="box_link_item">
                                                <a href="https://github.com/felipozito/Academlo/tree/main/Ecommerce%20Academlo">
                                                      <span>View</span>
                                                      <i class="bx bx-search-alt-2" />
                                                </a>
                                          </div>
                                          <div className="box_link_item">
                                                <a href="https://github.com/felipozito/Academlo/tree/main/React/UserApp">
                                                      <span>Code</span>
                                                      <i class="bx bxl-github" />
                                                </a>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default Portfolio;
