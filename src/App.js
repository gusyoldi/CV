import React from "react";
import "./App.css";
import foto from './assets/images/Foto-CV.jpg'

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
      <section className="section1">
        <div>
          <img alt="foto" src={ foto }></img>
        </div>
        <Contacto />

        <SobreMi />

        <Idiomas />

        <Competencias />
      </section>
      <section className="section2">
        <Titulo />

        <FormacionAcademica />

        <TecnologiasAfines />

        <ExperienciaProfesional />
      </section>
    </div>
  );
}

export default App;
