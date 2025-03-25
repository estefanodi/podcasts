import { render, screen } from "@testing-library/react";

import { MediaPlayerCard } from "./media-player-card";

const title = "Podcast Episode 1";
const description = "<p>This is a great episode!</p>";
const episodeUrl = "https://example.com/audio.mp3";

const renderComponent = () =>
  render(
    <MediaPlayerCard
      title={title}
      description={description}
      episodeUrl={episodeUrl}
    />
  );

describe("MediaPlayerCard", () => {
  it("renders the title and description correctly", () => {
    renderComponent();

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(
      screen.getByText("This is a great episode!", { selector: "p" })
    ).toBeInTheDocument();
  });

  it("renders the AudioPlayer component with the correct episodeUrl", () => {
    renderComponent();

    const AudioPlayerComponent = screen.getByTestId("audio-player");

    expect(AudioPlayerComponent).toBeInTheDocument();
  });
});
