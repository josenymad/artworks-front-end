import React from "react";

const AllArtworks = ({ artworks, alert }) => {
  if (artworks) {
    return (
      <div className="all-artworks">
        {artworks.map((artwork) => {
          return (
            <div className="all-artworks__thumbnail" key={artwork.partNumber}>
              <img
                src={artwork.image}
                className="all-artworks__thumbnail-image"
                alt="Artwork"
              />
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="all-artworks__error">
      <p>{alert}</p>
    </div>
  );
};

export default AllArtworks;
