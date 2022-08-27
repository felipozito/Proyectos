import React, { useRef, useState } from "react";
import "../Styles/navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
      const [active, setActive] = useState(false);
      const nav = useRef();
      const icon = useRef();
      const open = () => {
            nav.current.classList.toggle("active");
            console.log(nav.current);
            setActive(!active);
            if (active) {
                  icon.current.classList.remove("bx-x");
                  icon.current.classList.add("bx-menu");
            } else {
                  icon.current.classList.remove("bx-menu");
                  icon.current.classList.add("bx-x");
            }
            // icon.current.classList.toggle("bx-x", "bx-menu");
      };
      return (
            <div className="navbar">
                  <a className="nav_logo" href="#">
                        <img src={logo} alt="logo" className="logo" />
                  </a>
                  <div className="nav_text" ref={nav}>
                        <ul className="nav_list">
                              <li>
                                    <a href="#Home">Inicio</a>
                              </li>
                              <li>
                                    <a href="#About">Nosotros</a>
                              </li>
                              <li>
                                    <a href="#Services">Servicios</a>
                              </li>
                              <li>
                                    <a href="#Contacts">Contactos</a>
                              </li>
                        </ul>
                  </div>
                  <i className="bx bx-menu icon" onClick={open} ref={icon}></i>
            </div>
      );
};

export default Navbar;
