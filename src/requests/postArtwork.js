import axios from "axios";
import FormData from "form-data";

const postArtwork = async (artworkData) => {
  let { REACT_APP_API_ENDPOINT } = process.env;
  REACT_APP_API_ENDPOINT += "post";
  const formData = new FormData();
  formData.append("company", artworkData.company);
  formData.append("product", artworkData.product);
  formData.append("partNumber", artworkData.partNumber);
  formData.append("date", artworkData.date);
  formData.append("image", artworkData.image);

  try {
    await axios.post(REACT_APP_API_ENDPOINT, formData);
  } catch (error) {
    console.log(error);
  }
};

export default postArtwork;
