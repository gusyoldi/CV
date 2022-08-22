import React from "react";
import reactLogo from "./../assets/images/react.png";
import jsLogo from "./../assets/images/js.png";
import htmlLogo from "./../assets/images/html-5.png";
import cssLogo from "./../assets/images/css-3.png";
import gitLogo from "./../assets/images/git.png";
import nodeLogo from "./../assets/images/node-js.png";
import sqlLogo from "./../assets/images/sql-server.png";



//Probando estilos en linea con ReactJS.

const iconStyle = {
  width: '100px',
  
}

export default function Skills() {
  return (
   
      <div className="row text-center bg-dark" >
        <div className="col">
          <img alt="htmlLogo" src={htmlLogo} style={iconStyle}/>
        </div>
        <div className="col">
          <img alt="cssLogo" src={cssLogo} style={iconStyle}/>
        </div>
        <div className="col">
          <img alt="jsLogo" src={jsLogo} style={iconStyle}/>
        </div>
        <div className="col">
          <img alt="nodeLogo" src={nodeLogo} style={iconStyle}/>
        </div>
        <div className="col">
          <img alt="reactLogo" src={reactLogo} style={iconStyle}/>
        </div>
        <div className="col">
          <img alt="sqlLogo" src={sqlLogo} style={iconStyle}/>
        </div>
        <div className="col">
          <img alt="gitLogo" src={gitLogo} style={iconStyle}/>
        </div>
      </div>
    
  );
}
