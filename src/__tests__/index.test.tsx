import { expect, test } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import HeroSection from "../app/[locale]/(index_page)/hero_section/_HeroSection";

test("Page", () => {
  render(<HeroSection />);
  expect(screen.getByText("Hello, I'm Takish")).toBeTruthy();
});
