import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import { Header, type HeaderProps } from ".";
import { APP_NAME } from "@src/constants";

const renderComponent = ({ isLoading }: HeaderProps) =>
  render(
    <MemoryRouter>
      <Header isLoading={isLoading} />
    </MemoryRouter>
  );

describe("Header", () => {
  it("renders the app name", () => {
    renderComponent({ isLoading: false });

    expect(screen.getByText(APP_NAME)).toBeInTheDocument();
  });

  it("shows the Indicator when isLoading is true", () => {
    renderComponent({ isLoading: true });

    expect(screen.getByTestId("header-indicator")).toBeVisible();
  });

  it("hides the Indicator when isLoading is false", () => {
    renderComponent({ isLoading: false });

    expect(screen.queryByTestId("header-indicator")).toBeNull();
  });
});
