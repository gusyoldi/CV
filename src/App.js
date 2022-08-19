import React from "react";
import "./App.css";

//Components:
import Contacto from "./components/Contacto";
import SobreMi from "./components/SobreMi";
import Idiomas from "./components/Idiomas";
import Competencias from "./components/Competencias";
import Titulo from "./components/Titulo";
import FormacionAcademica from "./components/FormacionAcademica";
import TecnologiasAfines from "./components/TecnologiasAfines";
import ExperienciaProfesional from "./components/ExperienciaProfesional";

function App() {
  return (
    <div className="app">
      <Titulo />

      {/* <section className="section1">
        
        <Contacto />

        <SobreMi />

        <Idiomas />

        <Competencias />
      </section>
      <section className="section2">
        

        <FormacionAcademica />

        <TecnologiasAfines />

        <ExperienciaProfesional />
      </section> */}
    </div>
  );
}

export default App;
