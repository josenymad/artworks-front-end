import React from "react";
import "../styles/update-artwork.css";

const UpdateArtwork = ({ selectedArtwork, formData, setFormData }) => {
  const { image } = selectedArtwork;
  const { company, product, partNumber, date } = formData;
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="update-artwork">
      <object data={image} alt="Artwork" className="update-artwork__image">
        {}
      </object>
      <form className="update-artwork__form">
        <label htmlFor="company" className="update-artwork__form__label">
          Company:{}
        </label>
        <input
          id="company"
          name="company"
          value={company}
          onChange={handleInputChange}
          placeholder="Certags"
          className="update-artwork__form__input"
        />
        <label htmlFor="product" className="update-artwork__form__label">
          Product:{}
        </label>
        <input
          id="product"
          name="product"
          value={product}
          onChange={handleInputChange}
          placeholder="Zip Tags"
          className="update-artwork__form__input"
        />
        <label htmlFor="part-number" className="update-artwork__form__label">
          Part Number:{}
        </label>
        <input
          id="part-number"
          name="part-number"
          value={partNumber}
          onChange={handleInputChange}
          placeholder="CERUK0123"
          className="update-artwork__form__input"
        />
        <label htmlFor="date" className="update-artwork__form__label">
          Date:{}
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={handleInputChange}
          className="update-artwork__form__input"
        />
      </form>
    </div>
  );
};

export default UpdateArtwork;
