import React from "react";
import img1 from "../assets/one.jpg";
import img2 from "../assets/two.jpg";
import img3 from "../assets/three.jpg";
import img4 from "../assets/four.jpg";

const Portfolio = () => {
      return (
            <section className="portfolio" id="portfolio">
                  <div className="center">
                        <h2>Portfolio</h2>
                        <p>
                              There are manu variations of passages of Lorem Ipsum available, but the <br /> majority have suffered alteration
                        </p>
                  </div>
                  <div className="portfolio-content">
                        <div className="box">
                              <img src={img1} alt="web1" />
                              <p>Web Designe</p>
                              <h5>The service provide for designe</h5>
                        </div>
                        <div className="box">
                              <img src={img2} alt="web1" />
                              <p>Web Designe</p>
                              <h5>The service provide for designe</h5>
                        </div>
                        <div className="box">
                              <img src={img3} alt="web1" />
                              <p>Web Designe</p>
                              <h5>The service provide for designe</h5>
                        </div>
                        <div className="box">
                              <img src={img4} alt="web1" />
                              <p>Web Designe</p>
                              <h5>The service provide for designe</h5>
                        </div>
                  </div>
            </section>
      );
};

export default Portfolio;
