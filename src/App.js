import React from "react";
import "./App.css";

//Components:

import Presentacion from "./components/Presentacion";
import Skills from "./components/Skills";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";




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
      <Presentacion colors={colorPalette} />
      <Skills colors={colorPalette} />
      <Proyectos colors={colorPalette} />
      <Contacto colors={colorPalette} />
    </>
  );
}

export default App;
