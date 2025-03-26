import { render, screen, fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router";

import { paths } from "@src/router";
import { PodcastCard, type PodcastCardProps } from "./podcast-card";
import { CARD_AUTHOR } from "@src/constants";

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: jest.fn(),
}));

const renderComponent = (podcast: PodcastCardProps) =>
  render(<PodcastCard {...podcast} />);

describe("PodcastCard", () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  const podcastCardProps: PodcastCardProps = {
    podcastTitle: "Sample Podcast",
    podcastArtist: "John Doe",
    podcastImageUrl: "https://example.com/image.jpg",
    podcastId: "123",
    podcastDescription: "This is a description of the podcast.",
  };

  it("renders podcast card correctly", () => {
    renderComponent({ ...podcastCardProps });

    expect(screen.getByText(podcastCardProps.podcastTitle)).toBeInTheDocument();
    expect(
      screen.getByText(`${CARD_AUTHOR}${podcastCardProps.podcastArtist}`)
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(`${podcastCardProps.podcastTitle} name`)
    ).toBeInTheDocument();
  });

  it("navigates to the correct path when clicked", () => {
    renderComponent({ ...podcastCardProps });

    fireEvent.click(
      screen.getByAltText(`${podcastCardProps.podcastTitle} name`)
    );

    expect(mockNavigate).toHaveBeenCalledWith(
      paths.podcast(podcastCardProps.podcastId),
      {
        state: {
          podcastTitle: podcastCardProps.podcastTitle,
          podcastArtist: podcastCardProps.podcastArtist,
          podcastImageUrl: podcastCardProps.podcastImageUrl,
          podcastDescription: podcastCardProps.podcastDescription,
          podcastId: podcastCardProps.podcastId,
        },
      }
    );
  });
});
