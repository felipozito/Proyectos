import { useState, useRef, useEffect, forwardRef } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
      return (
            <div className="App">
                  <Navbar />
                  <Header />
                  <About />
                  <Services />
                  <Footer />
            </div>
      );
}

export default App;
