import React from "react";
import "../styles/add-artwork.css";

const AddArtwork = ({ formData, setFormData }) => {
  const { company, product, partNumber, date, image } = formData;
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-artwork">
      <form className="add-artwork__form">
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
        />
        <label htmlFor="image" className="add-artwork__form__label">
          Image:{}
        </label>
        <input
          type="file"
          id="image"
          name="image"
          value={image}
          onChange={handleInputChange}
          className="add-artwork__form__input"
        />
      </form>
    </div>
  );
};

export default AddArtwork;
