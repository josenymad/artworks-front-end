import axios from "axios";

const updateArtwork = async (
  artworkData,
  selectedArtworkId,
  setAlert,
  setUpload,
) => {
  let { REACT_APP_API_ENDPOINT } = process.env;
  REACT_APP_API_ENDPOINT += `update/${selectedArtworkId}`;
  const patchData = Object.fromEntries(
    Object.entries(artworkData).filter(([, value]) => value !== ""),
  ); // removes empty properties from artwork data object as to not replace existing database entries with empty values

  try {
    const response = await axios.patch(REACT_APP_API_ENDPOINT, patchData);
    if (response.status === 200 && Object.keys(patchData).length) {
      setAlert("Artwork updated");
      setUpload(true);
    }
  } catch (error) {
    setAlert(error.message);
  }
};

export default updateArtwork;
