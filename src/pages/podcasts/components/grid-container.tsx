import { StyledGridContainer } from "../styles";
import { PodcastCard } from "./podcast-card";
import { useAppContext } from "@contexts/app-context";
import type { Podcast } from "../../../types";

export const GridContainer: React.FC = () => {
  const { podcasts } = useAppContext();

  return (
    <StyledGridContainer>
      {podcasts.map((item: Podcast) => {
        const podcastName = item["im:name"].label;
        const podcastArtist = item["im:artist"].label;
        const podcastImageUrl = item["im:image"][2].label;
        const podcastId = item.id.attributes["im:id"];
        return (
          <PodcastCard
            key={podcastId}
            podcastName={podcastName}
            podcastArtist={podcastArtist}
            podcastImageUrl={podcastImageUrl}
            podcastId={podcastId}
          />
        );
      })}
    </StyledGridContainer>
  );
};
