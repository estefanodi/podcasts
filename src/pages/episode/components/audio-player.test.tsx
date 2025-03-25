import { render, screen } from "@testing-library/react";

import { AudioPlayer, type AudioPlayerProps } from "./audio-player";

const renderComponent = ({ episodeUrl }: AudioPlayerProps) =>
  render(<AudioPlayer episodeUrl={episodeUrl} />);

describe("AudioPlayer", () => {
  const episodeUrl = "https://example.com/audio.mp3";
  it("renders an audio player with the correct source", () => {
    renderComponent({ episodeUrl: episodeUrl });

    const audioElement = screen.getByTestId("audio-player");
    const sourceElement = audioElement.querySelector("source");

    expect(audioElement).toBeInTheDocument();
    expect(sourceElement).toHaveAttribute("src", episodeUrl);
    expect(sourceElement).toHaveAttribute("type", "audio/mpeg");
  });
});
