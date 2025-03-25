import { StyledContainer } from "./styles";
import { AudioPlayer } from "./audio-player";

type MediaPlayerCardProps = {
  title: string;
  description: string;
  episodeUrl: string;
};

export const MediaPlayerCard: React.FC<MediaPlayerCardProps> = ({
  title,
  description,
  episodeUrl,
}) => {
  const rawHtml = { __html: description };

  return (
    <StyledContainer>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={rawHtml} />
      <AudioPlayer episodeUrl={episodeUrl} />
    </StyledContainer>
  );
};
