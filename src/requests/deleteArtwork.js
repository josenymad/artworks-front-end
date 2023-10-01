import axios from "axios";

const deleteArtwork = async (artworkId, setDeleted) => {
  let { REACT_APP_API_ENDPOINT } = process.env;
  REACT_APP_API_ENDPOINT += `delete/${artworkId}`;

  try {
    await axios.delete(REACT_APP_API_ENDPOINT);
    setDeleted(true);
  } catch (error) {
    alert(error.message);
  }
};

export default deleteArtwork;
