import { StyledGridContainer } from "../styles";

import { useAppContext } from "@contexts/app-context";
import { PodcastCard } from "./podcast-card";
import type { Podcast } from "@src/types";

export const GridContainer: React.FC = () => {
  const { podcasts } = useAppContext();

  return (
    <StyledGridContainer data-testid="podcasts-container">
      {podcasts.map((item: Podcast) => {
        const podcastTitle = item.title.label;
        const podcastArtist = item["im:artist"].label;
        const podcastImageUrl = item["im:image"][2].label;
        const podcastId = item.id.attributes["im:id"];
        const podcastDescription = item.summary.label;

        return (
          <PodcastCard
            key={podcastId}
            podcastTitle={podcastTitle}
            podcastArtist={podcastArtist}
            podcastImageUrl={podcastImageUrl}
            podcastId={podcastId}
            podcastDescription={podcastDescription}
          />
        );
      })}
    </StyledGridContainer>
  );
};
