import React, { useState, useRef, useEffect } from "react";

const Header = () => {
      const [darkModeState, setDarkModeState] = useState(true);
      const [color, setColor] = useState();
      const [sticky, setSticky] = useState(false);
      const [navBar, setNavBar] = useState(true);
      const rootStyle = document.documentElement.style;
      const navbar = useRef();
      const headerColor = useRef();

      useEffect(() => {
            const color = localStorage.getItem("Portfolio-Color");
            if (color) {
                  rootStyle.setProperty("--main-color", color);
            } else {
                  rootStyle.setProperty("--main-color", "#f9004d");
            }
            const dark = localStorage.getItem("theme");
            console.log(dark);
            if (dark == "darkMode") {
                  document.body.classList.remove("darkMode");
                  localStorage.setItem("theme", "darkMode");
                  setDarkModeState(false);
            } else if (dark == "lightMode") {
                  document.body.classList.add("darkMode");
                  localStorage.setItem("theme", "lightMode");
                  setDarkModeState(false);
            } else {
                  localStorage.setItem("theme", "darkMode");
            }
      }, []);
      const darkmode = () => {
            setDarkModeState(!darkModeState);
            document.body.classList.toggle("darkMode");
            const dark = localStorage.getItem("theme");
            if (dark == "darkMode") {
                  localStorage.setItem("theme", "lightMode");
            } else if (dark == "lightMode") {
                  localStorage.setItem("theme", "darkMode");
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
            if (window.scrollY > 0) {
                  setSticky(true);
            } else {
                  setSticky(false);
            }
      });
      const changeColor = (e) => {
            rootStyle.setProperty("--main-color", e.target.dataset.color);
            localStorage.setItem("Portfolio-Color", e.target.dataset.color);
            setColor(e.target.dataset.color);
            console.log(color);
      };

      return (
            <header ref={headerColor} className={sticky ? `sticky` : ""}>
                  <a href="#" className="logo">
                        FA
                  </a>
                  <div className={`bx ${navBar ? "bx-menu" : "bx-x"}`} id="menu-icon" onClick={openNavbar}></div>
                  <ul className="navbar" ref={navbar}>
                        <li>
                              <a href="#home">Inicio</a>
                        </li>
                        <li>
                              <a href="#about">Acerca de mi</a>
                        </li>
                        <li>
                              <a href="#services">Servicios</a>
                        </li>
                        <li>
                              <a href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                              <a href="#contact">Contactame</a>
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
                  <i className={`bx ${darkModeState ? "bxs-moon" : "bxs-sun"}`} onClick={darkmode}></i>
            </header>
      );
};

export default Header;
