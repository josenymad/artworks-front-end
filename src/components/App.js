import React from "react";
import "../styles/app.css";
import certagsLogo from "../images/certags-web.png";

const App = () => {
  return (
    <div className="App">
      <img src={certagsLogo} alt="Certags Logo" className="App__certags-logo" />
    </div>
  );
};

export default App;
