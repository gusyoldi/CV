import React from "react";
import "./GlobalStyles.css";

//Components:

import Welcome from "./components/Welcome/Welcome";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import ContactMe from "./components/ContactMe/ContactMe";





function App() {
  
  //Pasar colores por props, como clases de Boostrap.
  const colorPalette = {
    ligthBeige: '#F7ECDE',
    darkBeige: '#E9DAC1',
    ligthTeal: '#9ED2C6',
    darkTeal: '#54BAB9'
  }

  return (
    <>
      <Welcome colors={colorPalette} />
      <Skills colors={colorPalette} />
      <Portfolio colors={colorPalette} />
      <ContactMe colors={colorPalette} />
    </>
  );
}

export default App;
