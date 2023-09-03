import React from "react";

const AllArtworks = ({ artworks, alert }) => {
  console.log(artworks);

  return (
    <div className="all-artworks__error">
      <p>{alert}</p>
    </div>
  );
};

export default AllArtworks;
