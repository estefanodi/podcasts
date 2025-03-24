import { render, screen } from "@testing-library/react";

import { Sidebar, type SidebarProps } from ".";
import { DESCRIPTION } from "@src/constants";

const renderComponent = ({
  podcastImageUrl,
  podcastTitle,
  podcastArtist,
  podcastDescription,
}: SidebarProps) =>
  render(
    <Sidebar
      podcastImageUrl={podcastImageUrl}
      podcastTitle={podcastTitle}
      podcastArtist={podcastArtist}
      podcastDescription={podcastDescription}
    />
  );

describe("Sidebar", () => {
  const mockProps: SidebarProps = {
    podcastImageUrl: "https://example.com/image.jpg",
    podcastTitle: "Test Podcast",
    podcastArtist: "Test Artist",
    podcastDescription: "This is a test description.",
  };
  it("renders the podcast image with the correct alt text and src", () => {
    renderComponent({ ...mockProps });

    const image = screen.getByAltText(`${mockProps.podcastTitle} image`);

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockProps.podcastImageUrl);
  });

  it("renders the podcast title and artist", () => {
    renderComponent({ ...mockProps });

    expect(screen.getByText(mockProps.podcastTitle)).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes(mockProps.podcastArtist))
    ).toBeInTheDocument();
  });

  it("renders the podcast description with DESCRIPTION label", () => {
    renderComponent({ ...mockProps });

    expect(screen.getByText(DESCRIPTION)).toBeInTheDocument();
    expect(screen.getByText(mockProps.podcastDescription)).toBeInTheDocument();
  });
});
