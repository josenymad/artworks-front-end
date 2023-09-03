import React from "react";

const AllArtworks = ({ artworks, alert }) => {
  console.log(artworks);

  return (
    <div className="all-artworks">
      <p>{alert}</p>
    </div>
  );
};

export default AllArtworks;
