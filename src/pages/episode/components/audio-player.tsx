import { StyledAudioPlayer } from "./styles";
import { AUDIO_NOT_SUPPORTED } from "@src/constants";

export type AudioPlayerProps = {
  episodeUrl: string;
};

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ episodeUrl }) => {
  return (
    <StyledAudioPlayer controls data-testid="audio-player">
      <source src={episodeUrl} type="audio/mpeg" />
      {AUDIO_NOT_SUPPORTED}
    </StyledAudioPlayer>
  );
};
