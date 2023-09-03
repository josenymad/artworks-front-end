import axios from "axios";

const getArtworks = async (setArtworks, setAlert) => {
  let { REACT_APP_API_ENDPOINT } = process.env;
  REACT_APP_API_ENDPOINT += "getAll";

  try {
    const { data: artworks } = await axios.get(REACT_APP_API_ENDPOINT);
    setArtworks(artworks);
  } catch (error) {
    setAlert(error.message);
  }
};

export default getArtworks;
