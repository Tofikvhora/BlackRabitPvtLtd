import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Footer from "./components/Footer";
import "./App.css";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
