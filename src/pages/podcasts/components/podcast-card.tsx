import { useNavigate } from "react-router";

import {
  StyledPodcastCard,
  StyledPodcastCardBottom,
  StyledPodcastTitle,
  StyledPodcastArtist,
  StyledRoundedImage,
} from "../styles";
import type { Podcast, Image } from "@src/types";
import { CARD_AUTHOR } from "@src/constants";
import { paths } from "@src/router";

type PodcastCardProps = {
  podcastTitle: Podcast["title"]["label"];
  podcastArtist: Podcast["im:artist"]["label"];
  podcastImageUrl: Image["label"];
  podcastId: Podcast["id"]["attributes"]["im:id"];
  podcastDescription: Podcast["summary"]["label"];
};

export const PodcastCard: React.FC<PodcastCardProps> = ({
  podcastTitle,
  podcastArtist,
  podcastImageUrl,
  podcastId,
  podcastDescription,
}) => {
  const navigateTo = useNavigate();
  const podcastUrl = paths.podcast(podcastId);
  const state = {
    podcastTitle,
    podcastArtist,
    podcastImageUrl,
    podcastDescription,
  };

  return (
    <StyledPodcastCard onClick={() => navigateTo(podcastUrl, { state })}>
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
