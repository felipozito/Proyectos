import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import Social from "./Components/Social";

function App() {
      return (
            <div className="App">
                  <Header />
                  <Home />
                  <About />
                  <Services />
                  <Portfolio />
                  <Footer />
                  <Social />
            </div>
      );
}

export default App;
