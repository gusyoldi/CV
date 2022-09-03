import React from "react";
// import foto from "../../assets/images/Foto-CV.jpg";

export default function Welcome() {
  return (
    <section className="container m-0 p-0">
      <nav className="navbar-expand-lg bg-primary navbar-scroll navbar-text fixed-top p-0">
          <div className="container-fluid d-flex justify-content-center ">
          <ul className="navbar-nav flex-row ">
            <li className="navbar-item">
            <a className="nav-link p-2" href="#skills">
              SKILLS
            </a>
            </li>
            <li className="navbar-item">
            <a className="nav-link p-2" href="#portfolio">
             PORTFOLIO
            </a>
            </li>
            <li className="navbar-item">
            <a className="nav-link p-2" href="#contact">
              CONTACT
            </a>
            </li>
            </ul>
          </div>
        </nav>
      <div className="row p-5 bg-image-welcome">
        <div className="col d-flex flex-column p-5">
          <div className="col m-2">
            <h2 className="text-center text-white fs-5 ">
              Hello, I'm <b className="text-danger">Gustavo Yoldi.</b>
            </h2>
          </div>
          <div className="col m-2">
            <h2 className="text-center text-white fs-5">
              I'm a full-stack web developer.{" "}
            </h2>
          </div>
          <div className="col text-center m-3">
            <a className="p-1 rounded" href="#portfolio">
              <button
                type="button"
                className="btn btn-dark btn-outline-primary"
              >
                My work →
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

//IMG CON MI CARA
{
  /* <div className="col p-4 text-center">
        <img
          className="foto-presentacion rounded-circle"
          alt="foto"
          src={foto}
        ></img>
      </div> */
}
