import axios from "axios";
import FormData from "form-data";

const postArtwork = async (artworkData, setAlert, setUpload) => {
  let { REACT_APP_API_ENDPOINT } = process.env;
  REACT_APP_API_ENDPOINT += "post";
  const formData = new FormData();
  formData.append("company", artworkData.company);
  formData.append("product", artworkData.product);
  formData.append("partNumber", artworkData.partNumber);
  formData.append("date", artworkData.date);
  formData.append("image", artworkData.image);

  try {
    const response = await axios.post(REACT_APP_API_ENDPOINT, formData);
    if (response.status === 200) {
      setAlert("Artwork uploaded");
      setUpload(true);
    }
  } catch (error) {
    setAlert(error);
  }
};

export default postArtwork;
