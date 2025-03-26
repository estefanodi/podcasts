import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import { DESCRIPTION } from "@src/constants";
import { paths } from "@src/router";
import { useNavigate } from "react-router";
import { Sidebar, type SidebarProps } from ".";

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: jest.fn(),
}));

const renderComponent = ({
  podcastImageUrl,
  podcastTitle,
  podcastArtist,
  podcastDescription,
  podcastId,
}: SidebarProps) =>
  render(
    <MemoryRouter>
      <Sidebar
        podcastImageUrl={podcastImageUrl}
        podcastTitle={podcastTitle}
        podcastArtist={podcastArtist}
        podcastDescription={podcastDescription}
        podcastId={podcastId}
      />
    </MemoryRouter>
  );

describe("Sidebar", () => {
  const mockProps: SidebarProps = {
    podcastImageUrl: "https://example.com/image.jpg",
    podcastTitle: "Test Podcast",
    podcastArtist: "Test Artist",
    podcastDescription: "This is a test description.",
    podcastId: "123",
  };

  it("renders the podcast image with the correct alt text and src", () => {
    renderComponent(mockProps);

    const image = screen.getByAltText(`${mockProps.podcastTitle} image`);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockProps.podcastImageUrl);
  });

  it("renders the podcast title and artist", () => {
    renderComponent(mockProps);

    expect(screen.getByText(mockProps.podcastTitle)).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes(mockProps.podcastArtist))
    ).toBeInTheDocument();
  });

  it("renders the podcast description with DESCRIPTION label", () => {
    renderComponent(mockProps);

    expect(screen.getByText(DESCRIPTION)).toBeInTheDocument();
    expect(screen.getByText(mockProps.podcastDescription)).toBeInTheDocument();
  });

  describe("when the user clicks the sidebar elements", () => {
    const locationState: SidebarProps = {
      podcastTitle: mockProps.podcastTitle,
      podcastArtist: mockProps.podcastArtist,
      podcastImageUrl: mockProps.podcastImageUrl,
      podcastDescription: mockProps.podcastDescription,
      podcastId: mockProps.podcastId,
    };
    const podcastUrl = paths.podcast(mockProps.podcastId);
    it("calls navigate with the correct parameters when the podcast image is clicked", () => {
      const mockNavigate = jest.fn();
      (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

      renderComponent(mockProps);

      const image = screen.getByAltText(`${mockProps.podcastTitle} image`);
      fireEvent.click(image);

      expect(mockNavigate).toHaveBeenNthCalledWith(1, podcastUrl, {
        state: locationState,
      });
    });
    it("calls navigate with the correct parameters when the podcast title is clicked", () => {
      const mockNavigate = jest.fn();
      (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

      renderComponent(mockProps);

      const title = screen.getByText(mockProps.podcastTitle);
      fireEvent.click(title);

      expect(mockNavigate).toHaveBeenNthCalledWith(1, podcastUrl, {
        state: locationState,
      });
    });
  });
});
