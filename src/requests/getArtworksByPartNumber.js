import axios from "axios";

const getArtworksByPartNumber = async (searchQuery, setArtworks, setAlert) => {
  let { REACT_APP_API_ENDPOINT } = process.env;
  REACT_APP_API_ENDPOINT += `getByPartNumber?partNumber=${searchQuery}`;

  try {
    const { data: searchResults } = await axios.get(REACT_APP_API_ENDPOINT);
    setArtworks(searchResults);
    if (!searchResults.length) {
      setAlert(`Sorry, there seems to be no search results for ${searchQuery}`);
    }
  } catch (error) {
    setAlert(error.message);
  }
};

export default getArtworksByPartNumber;
