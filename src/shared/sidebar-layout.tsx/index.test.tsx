import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import { SidebarLayout } from ".";

const mockState = {
  podcastTitle: "Test Podcast",
  podcastArtist: "Test Artist",
  podcastImageUrl: "https://example.com/image.jpg",
  podcastDescription: "This is a test description.",
};
const mockChildrenContent = "Children content";

const renderComponent = () =>
  render(
    <MemoryRouter initialEntries={[{ pathname: "/", state: mockState }]}>
      <SidebarLayout>{mockChildrenContent}</SidebarLayout>
    </MemoryRouter>
  );

describe("SidebarLayout", () => {
  it("renders Sidebar with correct data from location.state", () => {
    renderComponent();

    expect(screen.getByText(mockState.podcastTitle)).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes(mockState.podcastArtist))
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(`${mockState.podcastTitle} image`)
    ).toHaveAttribute("src", mockState.podcastImageUrl);
    expect(screen.getByText(mockState.podcastDescription)).toBeInTheDocument();
  });

  it("renders children content correctly", () => {
    renderComponent();

    expect(screen.getByText(mockChildrenContent)).toBeInTheDocument();
  });
});
