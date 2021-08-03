import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("check that page has required components", async () => {
  render(<App />);

  const header = screen.getByRole("heading", { name: /monsters rolodex/i });
  const inputField = screen.getByPlaceholderText(/search monsters/i);
  const cards = await screen.findAllByRole("figure");

  expect(header).toBeInTheDocument();
  expect(inputField).not.toHaveValue();
  expect(cards).toHaveLength(10);
});
