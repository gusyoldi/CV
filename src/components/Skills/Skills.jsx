import React from "react";
import reactLogo from "../../assets/images/Tecnologies/react.png";
import jsLogo from "../../assets/images/Tecnologies/js.png";
import htmlLogo from "../../assets/images/Tecnologies/html-5.png";
import cssLogo from "../../assets/images/Tecnologies/css-3.png";
import gitLogo from "../../assets/images/Tecnologies/git.png";
import nodeLogo from "../../assets/images/Tecnologies/node-js.png";

//Probando estilos en linea con ReactJS.

const iconStyle = {
  width: "5rem",
};

export default function Skills() {
  return (
    <section className="container m-0 p-0">
      <div className="row text-center bg-dark">
        <div className="row m-0 p-0">
          <h2
            className="text-primary text-decoration-underline py-5"
            id="skills"
          >
            SKILLS
          </h2>
        </div>
        <div className="col-4 py-5 px-3">
          <h3 className="text-primary fs-6 fs-6">HTML</h3>
          <img alt="htmlLogo" src={htmlLogo} style={iconStyle} />
        </div>
        <div className="col-4 py-5 px-3">
          <h3 className="text-primary fs-6">CSS</h3>
          <img alt="cssLogo" src={cssLogo} style={iconStyle} />
        </div>
        <div className="col-4 py-5 px-3">
          <h3 className="text-primary fs-6">JavaScript</h3>
          <img alt="jsLogo" src={jsLogo} style={iconStyle} />
        </div>
        <div className="col-4 py-5 px-3">
          <h3 className="text-primary fs-6">NodeJS</h3>
          <img alt="nodeLogo" src={nodeLogo} style={iconStyle} />
        </div>
        <div className="col-4 py-5 px-3">
          <h3 className="text-primary fs-6">React</h3>
          <img alt="reactLogo" src={reactLogo} style={iconStyle} />
        </div>
        <div className="col-4 py-5 px-3">
          <h3 className="text-primary fs-6">GitHub</h3>
          <img alt="gitLogo" src={gitLogo} style={iconStyle} />
        </div>
      </div>
    </section>
  );
}

//SQL ICON

{
  /* <div className="col">
          <img alt="sqlLogo" src={sqlLogo} style={iconStyle}/>
        </div> */
}
