import React from "react";
import "../styles/update-artwork.css";
import updateArtwork from "../requests/updateArtwork";

const UpdateArtwork = ({
  selectedArtwork,
  formData,
  setFormData,
  alert,
  setAlert,
  clearFormData,
  setUpload,
}) => {
  if (selectedArtwork) {
    const { image, _id, company, product, partNumber, date } = selectedArtwork;
    const {
      company: newCompany,
      product: newProduct,
      partNumber: newPartNumber,
      date: newDate,
    } = formData;
    const handleInputChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    const handleUpdate = (event) => {
      event.preventDefault();
      updateArtwork(formData, _id, setAlert, setUpload);
    };

    return (
      <div className="update-artwork">
        <object data={image} alt="Artwork" className="update-artwork__image">
          {}
        </object>
        <form className="update-artwork__form" onSubmit={handleUpdate}>
          <label htmlFor="company" className="update-artwork__form__label">
            Company:{}
          </label>
          <input
            id="company"
            name="company"
            value={newCompany}
            onChange={handleInputChange}
            placeholder={company}
            className="update-artwork__form__input"
          />
          <label htmlFor="product" className="update-artwork__form__label">
            Product:{}
          </label>
          <input
            id="product"
            name="product"
            value={newProduct}
            onChange={handleInputChange}
            placeholder={product}
            className="update-artwork__form__input"
          />
          <label htmlFor="part-number" className="update-artwork__form__label">
            Part Number:{}
          </label>
          <input
            id="part-number"
            name="partNumber"
            value={newPartNumber}
            onChange={handleInputChange}
            placeholder={partNumber}
            className="update-artwork__form__input"
          />
          <label htmlFor="date" className="update-artwork__form__label">
            Date:{" "}
            <span className="update-artwork__form__date">
              {new Date(date).toLocaleDateString("en-gb")}
            </span>
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={newDate}
            onChange={handleInputChange}
            className="update-artwork__form__input"
          />
          <p className="update-artwork__form__alert">{alert}</p>
          <div className="update-artwork__form__buttons">
            <button className="update-artwork__form__button" type="submit">
              UPDATE
            </button>
            <button
              className="update-artwork__form__button"
              type="button"
              onClick={() => {
                clearFormData();
                setAlert(
                  "Please be aware that you're not able to update artwork data with an empty value",
                );
              }}
            >
              CLEAR
            </button>
          </div>
        </form>
      </div>
    );
  }

  return null;
};

export default UpdateArtwork;
