import React, { useState } from "react";
import Slider from "./Slider";
import img1 from "../assets/header1.jpg";
import img2 from "../assets/header2.jpg";
import img3 from "../assets/header3.jpg";
import "../Styles/header.css";
// import Carousel from "better-react-carousel";
//https://reactjsexample.com/react-responsive-carousel-component-with-grid-layout-to-easily-create-a-carousel-like-photo-gallery/

const Header = () => {
      const images = [img1, img2, img3];
      const [slider, setSlider] = useState(0);
      const styles = {
            backgroundImage: `url(${img1}`,
            backgroundSize: "cover",
            transition: "slide 0.4s infinite",
      };
      return (
            <div className="header" id="Home" style={styles}>
                  <div className="carousel">{slider == 0 ? <Slider setSlider={setSlider} /> : <Slider img={img2} />}</div>
            </div>
      );
};

export default Header;
