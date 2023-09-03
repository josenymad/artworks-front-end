import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders Certags", () => {
  render(<App />);
  const certags = screen.getByText(/certags/i);
  expect(certags).toBeInTheDocument();
});
