import { render, screen, fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router";

import { paths } from "@src/router";
import { PodcastCard } from "./podcast-card";

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: jest.fn(),
}));

describe("PodcastCard", () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  const podcast = {
    podcastTitle: "Sample Podcast",
    podcastArtist: "John Doe",
    podcastImageUrl: "https://example.com/image.jpg",
    podcastId: "123",
    podcastDescription: "This is a description of the podcast.",
  };

  it("renders podcast card correctly", () => {
    render(<PodcastCard {...podcast} />);

    // Check that the title, artist, and image are rendered
    expect(screen.getByText(podcast.podcastTitle)).toBeInTheDocument();
    expect(
      screen.getByText(`Author: ${podcast.podcastArtist}`)
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(`${podcast.podcastTitle} name`)
    ).toBeInTheDocument();
  });

  it("navigates to the correct path when clicked", () => {
    render(<PodcastCard {...podcast} />);

    // Click the podcast card
    fireEvent.click(screen.getByAltText(`${podcast.podcastTitle} name`));

    // Check that navigateTo is called with the correct path and state
    expect(mockNavigate).toHaveBeenCalledWith(
      paths.podcast(podcast.podcastId),
      {
        state: {
          podcastTitle: podcast.podcastTitle,
          podcastArtist: podcast.podcastArtist,
          podcastImageUrl: podcast.podcastImageUrl,
          podcastDescription: podcast.podcastDescription,
        },
      }
    );
  });
});
