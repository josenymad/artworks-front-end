import React from "react";
import "../styles/app.css";
import { Route, Routes } from "react-router-dom";
import certagsLogo from "../images/certags-web.png";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div className="App">
      <img src={certagsLogo} alt="Certags Logo" className="App__certags-logo" />
      <Routes>
        <Route path="/" />
        <Route path="add-artwork" />
      </Routes>
      <NavBar />
    </div>
  );
};

export default App;
