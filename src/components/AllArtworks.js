import React from "react";
import "../styles/all-artworks.css";
import { Link } from "react-router-dom";
import deleteArtwork from "../requests/deleteArtwork";

const AllArtworks = ({ artworks, alert, setDeleted, setSelectedArtwork }) => {
  if (artworks && artworks.length) {
    return (
      <div className="all-artworks">
        {artworks.map((artwork) => {
          return (
            <div className="all-artworks__thumbnail" key={artwork._id}>
              <div className="all-artworks__thumbnail-container">
                <object
                  data={artwork.image}
                  className="all-artworks__thumbnail-image"
                  alt="Artwork"
                  type="application/pdf"
                >
                  {artwork.product}
                </object>
                <div className="all-artworks__thumbnail-image__foreground">
                  <a
                    href={artwork.image}
                    target="_blank"
                    rel="noreferrer"
                    className="all-artworks__thumbnail-link"
                  >
                    Full View
                  </a>
                  <Link
                    to="/update-artwork"
                    className="all-artworks__thumbnail-link"
                    onClick={() => {
                      setSelectedArtwork(artwork);
                    }}
                  >
                    Update
                  </Link>
                  <button
                    className="all-artworks__thumbnail-delete"
                    type="button"
                    onClick={() => {
                      deleteArtwork(artwork._id, setDeleted);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <ul className="all-artworks__thumbnail-list">
                <li className="all-artworks__thumbnail-company">
                  {artwork.company}
                </li>
                <li className="all-artworks__thumbnail-product">
                  {artwork.product}
                </li>
                <li className="all-artworks__thumbnail-part-number">
                  {artwork.partNumber}
                </li>
                <li className="all-artworks__thumbnail-date">
                  {new Date(artwork.date).toLocaleDateString("en-gb")}
                </li>
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
