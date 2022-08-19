import React from "react";
import foto from "./../assets/images/Foto-CV.jpg";
import Estilos from "./Titulo.module.css";
import EstilosGlobales from "./EstilosGlobales.module.css";

export default function Titulo() {
  return (
    <div className={EstilosGlobales.contenedorAmarillo}>
      <div className={Estilos.contenido}>
        <div>
          <img alt="foto" src={foto}></img>
        </div>
        <div className={Estilos.texto}>
          <h1>Gustavo Yoldi</h1>
          <h2>Desarrollador web full-stack</h2>
        </div>
      </div>
    </div>
  );
}
