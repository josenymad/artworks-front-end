import React from "react";
import "../styles/add-artwork.css";
import postArtwork from "../requests/postArtwork";
import ArtworkPreview from "./ArtworkPreview";

const AddArtwork = ({
  formData,
  setFormData,
  alert,
  setAlert,
  clearFormData,
  setUpload,
}) => {
  const { company, product, partNumber, date } = formData;
  const handleInputChange = (event) => {
    if (event.target.name === "image") {
      setAlert("Double check before uploading!");
      setFormData({ ...formData, [event.target.name]: event.target.files[0] });
      setUpload(false);
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  };
  const handleUpload = async (event) => {
    event.preventDefault();
    postArtwork(formData, setAlert, setUpload);
  };

  return (
    <div className="add-artwork">
      {formData.image && <ArtworkPreview formData={formData} alert={alert} />}
      <form
        className="add-artwork__form"
        onSubmit={handleUpload}
        encType="multipart/form-data"
      >
        <label htmlFor="company" className="add-artwork__form__label">
          Company:{}
        </label>
        <input
          id="company"
          name="company"
          value={company}
          onChange={handleInputChange}
          placeholder="Certags"
          className="add-artwork__form__input"
          required
        />
        <label htmlFor="product" className="add-artwork__form__label">
          Product:{}
        </label>
        <input
          id="product"
          name="product"
          value={product}
          onChange={handleInputChange}
          placeholder="Zip Tags"
          className="add-artwork__form__input"
          required
        />
        <label htmlFor="part-number" className="add-artwork__form__label">
          Part Number:{}
        </label>
        <input
          id="part-number"
          name="partNumber"
          value={partNumber}
          onChange={handleInputChange}
          placeholder="CERUK0123"
          className="add-artwork__form__input"
        />
        <label htmlFor="date" className="add-artwork__form__label">
          Date:{}
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={handleInputChange}
          className="add-artwork__form__input"
          required
        />
        <label htmlFor="image" className="add-artwork__form__label">
          Image:{}
        </label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleInputChange}
          className="add-artwork__form__input"
          accept=".pdf"
          required
        />
        <div className="add-artwork__form-buttons">
          {formData.image && (
            <button type="submit" className="add-artwork__form__button">
              UPLOAD
            </button>
          )}
          <button
            type="button"
            className="add-artwork__form__button"
            onClick={clearFormData}
          >
            CLEAR
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddArtwork;
