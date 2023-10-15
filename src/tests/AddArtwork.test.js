import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AddArtWork from "../components/AddArtwork";

describe("Add Artwork", () => {
  const formData = {
    company: "",
    product: "",
    partNumber: "",
    date: "",
    image: "",
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <AddArtWork formData={formData} />
      </BrowserRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders label for Company", () => {
    render(
      <BrowserRouter>
        <AddArtWork formData={formData} />
      </BrowserRouter>,
    );
    const companyLabel = screen.getByText("Company:");

    expect(companyLabel).toBeInTheDocument();
  });

  it("renders label for Product", () => {
    render(
      <BrowserRouter>
        <AddArtWork formData={formData} />
      </BrowserRouter>,
    );
    const productLabel = screen.getByText("Product:");

    expect(productLabel).toBeInTheDocument();
  });

  it("renders label for Part Number", () => {
    render(
      <BrowserRouter>
        <AddArtWork formData={formData} />
      </BrowserRouter>,
    );
    const partNumberLabel = screen.getByText("Part Number:");

    expect(partNumberLabel).toBeInTheDocument();
  });

  it("renders label for Date", () => {
    render(
      <BrowserRouter>
        <AddArtWork formData={formData} />
      </BrowserRouter>,
    );
    const dateLabel = screen.getByText("Date:");

    expect(dateLabel).toBeInTheDocument();
  });

  it("renders label for Image", () => {
    render(
      <BrowserRouter>
        <AddArtWork formData={formData} />
      </BrowserRouter>,
    );
    const imageLabel = screen.getByText("Image:");

    expect(imageLabel).toBeInTheDocument();
  });

  it("renders CLEAR button", () => {
    render(
      <BrowserRouter>
        <AddArtWork formData={formData} />
      </BrowserRouter>,
    );
    const clearButton = screen.getByText("CLEAR");

    expect(clearButton).toBeInTheDocument();
  });
});
