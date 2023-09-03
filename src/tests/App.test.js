import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../components/App";

test("renders Certags", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const certags = screen.getByAltText("Certags Logo");
  expect(certags).toBeInTheDocument();
});
