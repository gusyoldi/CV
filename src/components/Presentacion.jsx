import React from "react";
import foto from "./../assets/images/Foto-CV.jpg";


export default function Presentacion() {
  return (
    <div className="row justify-content-center bg-dark text-warning">
      <div className="col text-center">
        <img className="foto-presentacion img-fluid img-thumbnail rounded-circle" alt="foto" src={foto}></img>
      </div>
      <div className="row text-center ">
      <div className="col">
        <h1>Holu, I´m Gustavo</h1>
        <h2>Desarrollador Web Full-Stack</h2>
      </div>
      </div>
    </div>
  );
}
