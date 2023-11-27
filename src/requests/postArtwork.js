import axios from "axios";
import FormData from "form-data";

const postArtwork = async (
  artworkData,
  setAlert,
  setUpload,
  setUploadProgress,
) => {
  let { REACT_APP_API_ENDPOINT } = process.env;
  REACT_APP_API_ENDPOINT += "post";
  const formData = new FormData();
  formData.append("company", artworkData.company);
  formData.append("product", artworkData.product);
  formData.append("partNumber", artworkData.partNumber);
  formData.append("date", artworkData.date);
  formData.append("image", artworkData.image);

  const config = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentCompleted = Math.floor((loaded * 100) / total);
      setUploadProgress(percentCompleted);
    },
  };

  try {
    const response = await axios.post(REACT_APP_API_ENDPOINT, formData, config);
    if (response.status === 200) {
      setAlert("Artwork uploaded");
      setUpload(true);
    }
  } catch (error) {
    setAlert(error);
  }
};

export default postArtwork;
