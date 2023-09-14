import React from "react";

const AddArtwork = ({ formData, setFormData }) => {
  const { company, product, partNumber, date, image } = formData;
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-artworks">
      <form className="add-artworks__form">
        <label htmlFor="company" className="add-artworks__form__label">
          Company:{}
        </label>
        <input
          id="company"
          name="company"
          value={company}
          onChange={handleInputChange}
          placeholder="Certags"
          className="add-artworks__form__input"
        />
      </form>
    </div>
  );
};

export default AddArtwork;
