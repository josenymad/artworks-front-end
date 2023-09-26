import React, { useEffect, useState } from "react";
import "../styles/app.css";
import { Route, Routes } from "react-router-dom";
import certagsLogo from "../images/certags-web.png";
import NavBar from "./NavBar";
import AllArtworks from "./AllArtworks";
import AddArtwork from "./AddArtwork";
import getArtworks from "../requests/getArtworks";

const App = () => {
  const [artworks, setArtworks] = useState();
  const [upload, setUpload] = useState(false);
  const [alert, setAlert] = useState(
    "If the artworks haven't loaded after a while there may be a problem with the server",
  );
  const [formData, setFormData] = useState({
    company: "",
    product: "",
    partNumber: "",
    date: "",
    image: "",
  });

  const clearFormData = () => {
    setFormData({
      company: "",
      product: "",
      partNumber: "",
      date: "",
      image: "",
    });
    setUpload(false);
  };

  useEffect(() => {
    getArtworks(setArtworks, setAlert);
  }, [upload]);

  return (
    <div className="App">
      <img src={certagsLogo} alt="Certags Logo" className="App__certags-logo" />
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<AllArtworks artworks={artworks} alert={alert} />}
        />
        <Route
          path="add-artwork"
          element={
            <AddArtwork
              formData={formData}
              setFormData={setFormData}
              alert={alert}
              setAlert={setAlert}
              clearFormData={clearFormData}
              setUpload={setUpload}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
