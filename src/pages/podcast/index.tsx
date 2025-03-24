import { useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router";

import { SidebarLayout } from "@shared/sidebar-layout.tsx";
import { useAppContext } from "@contexts/app-context";
import { paths } from "@src/router";
import { Table } from "./components/table";
import { Toolbar } from "./components/toolbar";
import type { Episode } from "@src/types";

export const Podcast: React.FC = () => {
  const { podcastId } = useParams();
  const location = useLocation();
  const navigateTo = useNavigate();
  const { setPodcastId, episodes, episodesCount, setSelectedEpisode } =
    useAppContext();
  const locationState = location.state || {};

  useEffect(() => {
    if (podcastId) {
      setPodcastId(podcastId);
    }
  }, [podcastId]);

  const onClickItem = (episode: Episode) => {
    const episodeUrl = paths.episode(episode.collectionId, episode.trackId);
    setSelectedEpisode(episode);
    navigateTo(episodeUrl, { state: locationState });
  };

  return (
    <SidebarLayout>
      <>
        <Toolbar episodesCount={episodesCount} />
        <Table episodes={episodes} onClickItem={onClickItem} />
      </>
    </SidebarLayout>
  );
};
