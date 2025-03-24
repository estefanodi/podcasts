import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import { SidebarLayout } from ".";

describe("SidebarLayout", () => {
  it("renders Sidebar with correct data from location.state", () => {
    const mockState = {
      podcastTitle: "Test Podcast",
      podcastArtist: "Test Artist",
      podcastImageUrl: "https://example.com/image.jpg",
      podcastDescription: "This is a test description.",
    };

    render(
      <MemoryRouter initialEntries={[{ pathname: "/", state: mockState }]}>
        <SidebarLayout>
          <div>Children content</div>
        </SidebarLayout>
      </MemoryRouter>
    );

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
    const childrenContent = "Children content";
    render(
      <MemoryRouter>
        <SidebarLayout>
          <div>{childrenContent}</div>
        </SidebarLayout>
      </MemoryRouter>
    );

    expect(screen.getByText(childrenContent)).toBeInTheDocument();
  });
});
