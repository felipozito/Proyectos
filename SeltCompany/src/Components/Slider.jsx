import React from "react";
import img1 from "../assets/header1.jpg";
import img2 from "../assets/header2.jpg";
import img3 from "../assets/header3.jpg";

const Slider = ({ img }) => {
      return (
            <div style={{ backgroundImage: `url(${img} )` }} className="slider">
                  <div className="carousel_bg">
                        <h1>SELT COMPANY S.A</h1>
                        <h2>SERVICIOS INTEGRALES ELECTRICOS</h2>
                        <h3>INNOVACION PARA EL FUTURO</h3>
                  </div>
            </div>
      );
};

export default Slider;
