import React from "react";
import "../styles/all-artworks.css";

const AllArtworks = ({ artworks, alert }) => {
  if (artworks) {
    return (
      <div className="all-artworks">
        {artworks.map((artwork) => {
          return (
            <div className="all-artworks__thumbnail" key={artwork._id}>
              <object
                data={artwork.image}
                className="all-artworks__thumbnail-image"
                alt="Artwork"
                type="application/pdf"
              >
                {artwork.product}
              </object>
              <ul className="all-artworks__thumbnail-list">
                <li className="all-artworks__thumbnail-company-product">
                  {`${artwork.company} ${artwork.product}`}
                </li>
                <li className="all-artworks__thumbnail-part-number">
                  {artwork.partNumber}
                </li>
                <li className="all-artworks__thumbnail-date">
                  {new Date(artwork.date).toLocaleDateString("en-gb")}
                </li>
                <a
                  href={artwork.image}
                  target="_blank"
                  rel="noreferrer"
                  className="all-artworks__thumbnail-link"
                >
                  Full View
                </a>
              </ul>
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
