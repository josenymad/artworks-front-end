import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AllArtworks from "../components/AllArtworks";
import mockData from "./mockData.json";

describe("All Artworks", () => {
  it("renders correctly with data", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <AllArtworks artworks={mockData} />
      </BrowserRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the right amount of artwork data lists", () => {
    render(
      <BrowserRouter>
        <AllArtworks artworks={mockData} />
      </BrowserRouter>,
    );
    const renderedArtworks = screen.getAllByRole("list");

    expect(renderedArtworks).toHaveLength(3);
  });

  it("renders error without data", () => {
    render(
      <BrowserRouter>
        <AllArtworks alert="If the artworks haven't loaded after a while there may be a problem with the server" />
      </BrowserRouter>,
    );
    const error = screen.getByText(
      "If the artworks haven't loaded after a while there may be a problem with the server",
    );

    expect(error).toBeInTheDocument();
  });
});
