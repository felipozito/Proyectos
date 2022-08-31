import React, { useState, useRef } from "react";

const Header = () => {
      const [darkModeState, setDarkModeState] = useState(true);
      const [navBar, setNavBar] = useState(true);
      const rootStyle = document.documentElement.style;
      const navbar = useRef();
      const headerColor = useRef();
      const darkmode = () => {
            setDarkModeState(!darkModeState);
            document.body.classList.toggle("darkMode");
            if (darkModeState) {
                  localStorage.setItem("theme", "darkMode");
            } else {
                  localStorage.removeItem("theme");
            }
      };
      const openNavbar = () => {
            setNavBar(!navBar);
            navbar.current.classList.toggle("active");
      };
      window.onscroll = () => {
            if (!navBar) {
                  navbar.current.classList.remove("active");
            }
            setNavBar(true);
      };
      window.addEventListener("scroll", () => {
            headerColor.current.classList.toggle("sticky", window.scrollY > 0);
      });
      const changeColor = (e) => {
            rootStyle.setProperty("--main-color", e.target.dataset.color);
            localStorage.setItem("Portfolio-Color", e.target.dataset.color);
      };

      return (
            <header ref={headerColor}>
                  <a href="#" className="logo">
                        FA
                  </a>
                  <div className={`bx ${navBar ? "bx-menu" : "bx-x"}`} id="menu-icon" onClick={openNavbar}></div>
                  <ul className="navbar" ref={navbar}>
                        <li>
                              <a href="#home">Home</a>
                        </li>
                        <li>
                              <a href="#about">About Us</a>
                        </li>
                        <li>
                              <a href="#services">Services</a>
                        </li>
                        <li>
                              <a href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                              <a href="#contact">Contact Us</a>
                        </li>
                  </ul>
                  <a href="./Assets/CV_Felipe_Asimbaya.pdf" target="_blank" download="CV_FelipeAsimbaya.pdf" className="h-btn">
                        CV
                  </a>
                  <div className="colors" id="toggle-colors">
                        <div className="colors_item colors_item--red" data-color=" hsl(2, 84%, 56%)" onClick={changeColor}></div>
                        <div className="colors_item colors_item--orange" data-color="hsl(24, 84%, 56%)" onClick={changeColor}></div>
                        <div className="colors_item colors_item--yellow" data-color="hsl(46, 84%, 56%)" onClick={changeColor}></div>
                        <div className="colors_item colors_item--blue" data-color="hsl(214, 84%, 56%)" onClick={changeColor}></div>
                        <div className="colors_item colors_item--green" data-color="hsl(116, 80%, 40%)" onClick={changeColor}></div>
                        <div className="colors_item colors_item--purple" data-color="hsl(278, 84%, 56%)" onClick={changeColor}></div>
                  </div>
                  <i className={`bx ${darkModeState ? "bxs-sun" : "bxs-moon"}`} onClick={darkmode}></i>
            </header>
      );
};

export default Header;
