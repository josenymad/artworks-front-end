import React, { useEffect, useState } from "react";
import "../styles/app.css";
import { Route, Routes } from "react-router-dom";
import certagsLogo from "../images/certags-web.png";
import NavBar from "./NavBar";
import AllArtworks from "./AllArtworks";
import getArtworks from "../requests/getArtworks";

const App = () => {
  const [artworks, setArtworks] = useState();
  const [alert, setAlert] = useState(
    "If the artworks haven't loaded after a while there may be a problem with the server",
  );

  useEffect(() => {
    getArtworks(setArtworks, setAlert);
  }, []);

  return (
    <div className="App">
      <img src={certagsLogo} alt="Certags Logo" className="App__certags-logo" />
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<AllArtworks artworks={artworks} alert={alert} />}
        />
        <Route path="add-artwork" />
      </Routes>
    </div>
  );
};

export default App;
