import React from "react";
import reactLogo from "./../assets/images/react.png";
import jsLogo from "./../assets/images/js.png";
import htmlLogo from "./../assets/images/html-5.png";
import Estilos from "./Skills.module.css";
import EstilosGlobales from "./EstilosGlobales.module.css";

export default function Skills() {
  return (
    <div className={EstilosGlobales.contenedorNegro}>
      <div className={Estilos.contenido}>
        <div className={Estilos.icono}>
          <img alt="foto" src={htmlLogo}></img>
        </div>
        <div className={Estilos.icono}>
          <img alt="foto" src={jsLogo}></img>
        </div>
        <div className={Estilos.icono}>
          <img alt="foto" src={reactLogo}></img>
        </div>
      </div>
    </div>
  );
}
