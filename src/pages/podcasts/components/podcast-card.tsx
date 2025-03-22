import {
  StyledPodcastCard,
  StyledPodcastCardBottom,
  StyledPodcastTitle,
  StyledPodcastArtist,
  StyledRoundedImage,
} from "../styles";
import type { Podcast, Image } from "../../../types";
import { CARD_AUTHOR } from "../../../constants";

type PodcastCardProps = {
  podcastTitle: Podcast["title"]["label"];
  podcastArtist: Podcast["im:artist"]["label"];
  podcastImageUrl: Image["label"];
  podcastId: Podcast["id"]["attributes"]["im:id"];
};

export const PodcastCard: React.FC<PodcastCardProps> = ({
  podcastTitle,
  podcastArtist,
  podcastImageUrl,
  podcastId,
}) => {
  return (
    <StyledPodcastCard
      onClick={() => {
        //
      }}
    >
      <StyledRoundedImage src={podcastImageUrl} alt={`${podcastTitle} name`} />
      <StyledPodcastCardBottom>
        <StyledPodcastTitle>{podcastTitle}</StyledPodcastTitle>
        <StyledPodcastArtist>
          {CARD_AUTHOR}
          {podcastArtist}
        </StyledPodcastArtist>
      </StyledPodcastCardBottom>
    </StyledPodcastCard>
  );
};
