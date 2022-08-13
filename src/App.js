
import './App.css';
// import foto from './foto-cv.jpg'
import React from 'react';
import Contacto from './components/Contacto'
import SobreMi from './components/SobreMi'
import Idiomas from './components/Idiomas'
import Competencias from './components/Competencias'
import Titulo from './components/Titulo'
import FormacionAcademica from './components/FormacionAcademica'
import TecnologiasAfines from './components/TecnologiasAfines'
import ExperienciasDigitales from './components/ExperienciasDigitales'
import OtrasExperiencias from './components/OtrasExperiencias'

function App() {
  return (
   <>
    <div className="app">
      <section className="section1">
        <div>
          <img href='#' alt="Foto"></img>
          <div>
            <Contacto />
          </div>
          <div>
            <SobreMi />
          </div>
          <div>
            <Idiomas />
          </div>
          <div>
            <Competencias />
          </div>
        </div>
      </section>
      <section  className="section2">
      <div>
        <Titulo />
      </div>
      <div>
        <FormacionAcademica />
      </div>
      <div>
        <TecnologiasAfines />
      </div>
      <div>
        <h2>EXPERIENCIA PROFESIONAL</h2>
        <div>
          <ExperienciasDigitales />
        </div>
        <div>
          <OtrasExperiencias />
        </div>
      </div>
      </section>
      
    </div>

   </>
  );
}

export default App;
