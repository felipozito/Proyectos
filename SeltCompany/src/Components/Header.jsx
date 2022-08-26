import React, { useState } from "react";
import Slider from "./Slider";
import img1 from "../assets/header1.jpg";
import img2 from "../assets/header2.jpg";
import img3 from "../assets/header3.jpg";
import Carousel from "better-react-carousel";
//https://reactjsexample.com/react-responsive-carousel-component-with-grid-layout-to-easily-create-a-carousel-like-photo-gallery/

const Header = () => {
      const images = [img1, img2, img3];
      const [slider, setSlider] = useState(0);
      return (
            <div className="header" id="Home">
                  {/* <div className="carousel">{slider == 0 ? <Slider img={img1} setSlider={setSlider} /> : <Slider img={img2} />}</div> */}
                  <Carousel className="carousel" loop={true} autoplay={1000}>
                        <Carousel.Item>
                              <Slider img={img1} width="100%" />
                        </Carousel.Item>
                        <Carousel.Item>
                              <Slider img={img2} width="100%" />
                        </Carousel.Item>
                        <Carousel.Item>
                              <Slider img={img3} width="100%" />
                        </Carousel.Item>
                  </Carousel>
            </div>
      );
};

export default Header;
