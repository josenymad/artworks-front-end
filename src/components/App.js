import React, { useEffect, useState } from "react";
import "../styles/app.css";
import { Route, Routes } from "react-router-dom";
import certagsLogo from "../images/certags-web.png";
import NavBar from "./NavBar";
import AllArtworks from "./AllArtworks";
import AddArtwork from "./AddArtwork";
import getArtworks from "../requests/getArtworks";
import getArtworksByCompany from "../requests/getArtworksByCompany";
import getArtworksByPartNumber from "../requests/getArtworksByPartNumber";
import UpdateArtwork from "./UpdateArtwork";

const App = ({ signOut }) => {
  const [artworks, setArtworks] = useState();
  const [upload, setUpload] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArtwork, setSelectedArtwork] = useState();
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
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleSearchInput = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.slice(0, 5).toLowerCase() === "ceruk") {
      getArtworksByPartNumber(searchQuery, setArtworks, setAlert);
    } else {
      getArtworksByCompany(searchQuery, setArtworks, setAlert);
    }
  };

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
    setDeleted(false);
  }, [upload, Boolean(searchQuery), deleted]);

  return (
    <div className="App">
      <img src={certagsLogo} alt="Certags Logo" className="App__certags-logo" />
      <NavBar
        searchQuery={searchQuery}
        handleSearchInput={handleSearchInput}
        handleSearchSubmit={handleSearchSubmit}
        signOut={signOut}
      />
      <Routes>
        <Route
          path="/"
          element={
            <AllArtworks
              artworks={artworks}
              alert={alert}
              setAlert={setAlert}
              setDeleted={setDeleted}
              setSelectedArtwork={setSelectedArtwork}
              clearFormData={clearFormData}
            />
          }
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
              upload={upload}
              setUpload={setUpload}
              uploadProgress={uploadProgress}
              setUploadProgress={setUploadProgress}
            />
          }
        />
        <Route
          path="update-artwork"
          element={
            <UpdateArtwork
              selectedArtwork={selectedArtwork}
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
