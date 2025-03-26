import { createContext, useState, useContext, useEffect } from "react";

import type { Podcast, Episode } from "@src/types";
import { useFetch } from "@src/hooks/use-fetch";
import { filterItems } from "@utils/filter-podcasts";
import {
  FETCH_PODCASTS_URL,
  FETCH_EPISODES_URL,
  CACHE_NAME,
  CACHE_EXPIRATION_MS,
} from "@src/constants";

type AppContextType = {
  podcasts: Podcast[];
  podcastsCounter: number;
  setInputWithBadgeValue: React.Dispatch<React.SetStateAction<string>>;
  inputWithBadgeValue: string;
  isFetchPodcastsLoading: boolean;
  isFetchEpisodesLoading: boolean;
  episodes: Episode[];
  setPodcastId: React.Dispatch<React.SetStateAction<string>>;
  episodesCount: number;
  setSelectedEpisode: React.Dispatch<React.SetStateAction<Episode | null>>;
  selectedEpisode: Episode | null;
};
type PodcastsDataResponse = { feed: { entry: Podcast[] } };
type EpisodeDataResponse = { results: Episode[] };

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [inputWithBadgeValue, setInputWithBadgeValue] = useState<string>("");
  const [podcastId, setPodcastId] = useState<string>("");
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  const {
    data: podcastsData,
    isLoading: isFetchPodcastsLoading,
    fetchData: fetchPodcastsData,
  } = useFetch<PodcastsDataResponse>(
    FETCH_PODCASTS_URL,
    CACHE_NAME,
    CACHE_EXPIRATION_MS
  );
  const {
    data: episodesData,
    isLoading: isFetchEpisodesLoading,
    fetchData: fetchPodcastDetailsData,
  } = useFetch<EpisodeDataResponse>(
    podcastId ? FETCH_EPISODES_URL(podcastId) : "",
    CACHE_NAME,
    CACHE_EXPIRATION_MS
  );

  const [filteredPodcasts, setFilteredPodcasts] = useState<Podcast[]>(
    podcastsData?.feed?.entry || []
  );
  const { pathname } = window.location;

  useEffect(() => {
    if (pathname === "/" && !podcastsData) {
      fetchPodcastsData();
    }
  }, [pathname, fetchPodcastsData]);

  useEffect(() => {
    if (podcastsData?.feed?.entry) {
      setFilteredPodcasts(podcastsData.feed.entry);
    }
  }, [podcastsData]);

  useEffect(() => {
    const dataToFilter = podcastsData?.feed?.entry;
    if (dataToFilter) {
      if (!inputWithBadgeValue) {
        setFilteredPodcasts(dataToFilter);
      } else {
        const filtered = filterItems(dataToFilter, inputWithBadgeValue);
        setFilteredPodcasts(filtered);
      }
    }
  }, [inputWithBadgeValue]);

  useEffect(() => {
    if (podcastId) {
      fetchPodcastDetailsData();
    }
  }, [podcastId]);

  return (
    <AppContext.Provider
      value={{
        podcasts: filteredPodcasts,
        podcastsCounter: filteredPodcasts.length ?? 0,
        setInputWithBadgeValue,
        inputWithBadgeValue,
        isFetchPodcastsLoading,
        isFetchEpisodesLoading,
        episodes: episodesData?.results || [],
        episodesCount: episodesData?.results?.length ?? 0,
        setPodcastId,
        setSelectedEpisode,
        selectedEpisode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
