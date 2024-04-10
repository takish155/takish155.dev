import { expect, describe, it } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Project1 from "../[locale]/(index_page)/featured_project_section/Project1";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

describe("Index", () => {
  it("should render properly", () => {
    render(<Project1 />);

    const title = screen.getByText("Zeetaa");
    expect(title).toBeInTheDocument();
  });
});
