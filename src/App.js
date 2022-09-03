import React from "react";
import "./GlobalStyles.css";

//Components:

import Welcome from "./components/Welcome/Welcome";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import ContactMe from "./components/ContactMe/ContactMe";

function App() {
  return (
    <main className="container w-100 h-100 m-0 p-0">
      <Welcome />
      <Skills />
      <Portfolio />
      <ContactMe />
    </main>
  );
}

export default App;
