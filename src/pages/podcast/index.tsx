import { useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router";

import { SidebarLayout } from "@shared/sidebar-layout.tsx";
import { useAppContext } from "@contexts/app-context";
import { TABLE_HEADER_ITEMS } from "@src/constants";
import { paths } from "@src/router";
import type { Episode } from "@src/types";
import { TableBody } from "./components/table-body";
import { Table } from "./components/table";
import { Toolbar } from "./components/toolbar";

export const Podcast: React.FC = () => {
  const { podcastId } = useParams();
  const location = useLocation();
  const navigateTo = useNavigate();
  const {
    setPodcastId,
    episodes,
    episodesCount,
    setSelectedEpisode,
    isFetchEpisodesLoading,
  } = useAppContext();
  const locationState = location.state || {};

  useEffect(() => {
    if (podcastId) {
      setPodcastId(podcastId);
    }
  }, [podcastId]);

  const onClickItem = (episode: Episode): void => {
    const episodeUrl = paths.episode(episode.collectionId, episode.trackId);
    setSelectedEpisode(episode);
    navigateTo(episodeUrl, { state: locationState });
  };

  return (
    <SidebarLayout>
      <>
        <Toolbar episodesCount={episodesCount} />
        <Table
          isLoading={isFetchEpisodesLoading}
          headerItems={TABLE_HEADER_ITEMS}
        >
          <TableBody episodes={episodes} onClickItem={onClickItem} />
        </Table>
      </>
    </SidebarLayout>
  );
};
