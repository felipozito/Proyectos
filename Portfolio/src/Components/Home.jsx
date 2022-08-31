import React, { useRef } from "react";
import img from "../assets/5.jpg";

const Home = () => {
      const text = useRef();

      return (
            <section className="home" id="home">
                  <div className="home-text">
                        <h4>Hello, my names is</h4>
                        <h1 className="name">Felipe Asimbaya </h1>
                        <h3 ref={text}>I'm a Fronted Developer</h3>
                        <a className="contact_me" href="#contact">
                              Contact me
                        </a>
                  </div>
                  <div className="home_img">
                        <img src={img} alt="" />
                  </div>
            </section>
      );
};

export default Home;
