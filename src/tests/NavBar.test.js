import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

it("renders correctly", () => {
  const { asFragment } = render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>,
  );

  expect(asFragment()).toMatchSnapshot();
});

it("renders All Artworks", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>,
  );
  const allArtworks = screen.getByText("All Artworks");

  expect(allArtworks).toBeInTheDocument();
});

it("renders Add Artwork", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>,
  );
  const addArtwork = screen.getByText("Add Artwork");

  expect(addArtwork).toBeInTheDocument();
});
