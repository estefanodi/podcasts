import {
  StyledPodcastCard,
  StyledPodcastCardBottom,
  StyledPodcastName,
  StyledPodcastArtist,
  StyledRoundedImage,
} from "../styles";
import type { Podcast, Image } from "../../../types";
import { CARD_AUTHOR } from "../../../constants";

type PodcastCardProps = {
  podcastName: Podcast["im:name"]["label"];
  podcastArtist: Podcast["im:artist"]["label"];
  podcastImageUrl: Image["label"];
  podcastId: Podcast["id"]["attributes"]["im:id"];
};

export const PodcastCard: React.FC<PodcastCardProps> = ({
  podcastName,
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
      <StyledRoundedImage src={podcastImageUrl} alt={`${podcastName} name`} />
      <StyledPodcastCardBottom>
        <StyledPodcastName>{podcastName}</StyledPodcastName>
        <StyledPodcastArtist>
          {CARD_AUTHOR}
          {podcastArtist}
        </StyledPodcastArtist>
      </StyledPodcastCardBottom>
    </StyledPodcastCard>
  );
};
