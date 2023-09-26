import axios from "axios";

const getArtworkByCompany = async (searchQuery, setArtworks, setAlert) => {
  let { REACT_APP_API_ENDPOINT } = process.env;
  REACT_APP_API_ENDPOINT += `getByCompany?company=${searchQuery}`;

  try {
    const { data: artworks } = await axios.get(REACT_APP_API_ENDPOINT);
    setArtworks(artworks);
  } catch (error) {
    setAlert(error.message);
  }
};

export default getArtworkByCompany;
