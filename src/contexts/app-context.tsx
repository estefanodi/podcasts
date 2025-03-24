import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";

import type { Podcast, Episode } from "@src/types";
import { useFetch } from "@src/hooks/use-fetch";
import { filterItems } from "@utils/filter-podcasts";
import { getLocalStorageItem, setLocalStorageItem } from "@utils/local-storage";
import {
  FETCH_PODCASTS_URL,
  FETCH_EPISODES_URL,
  PODCASTS_FETCH_DATE_TIME_KEY,
  PODCASTS_LIST_KEY,
} from "@src/constants";
import { isDateDifference24Hours } from "@utils/dates-and-time-helpers";

type AppContextType = {
  podcasts: Podcast[];
  podcastsCounter: number;
  setInputWithBadgeValue: React.Dispatch<React.SetStateAction<string>>;
  inputWithBadgeValue: string;
  isLoading: boolean;
  episodes: Episode[];
  setPodcastId: React.Dispatch<React.SetStateAction<string>>;
  episodesCount: number;
  setSelectedEpisode: React.Dispatch<React.SetStateAction<Episode>>;
  selectedEpisode: Episode;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [inputWithBadgeValue, setInputWithBadgeValue] = useState<string>("");
  const [podcastId, setPodcastId] = useState<string>("");
  const [selectedEpisode, setSelectedEpisode] = useState<any>({});
  const {
    data: podcastsData,
    isLoading: isFetchPodcastsLoading,
    error: isFetchPodcastsError,
    fetchData: fetchPodcastsData,
  } = useFetch<any>(FETCH_PODCASTS_URL);
  const {
    data: episodesData,
    isLoading: isFetchEpisodesLoading,
    error: isFetchError,
    fetchData: fetchPodcastDetailsData,
  } = useFetch<any>(podcastId ? FETCH_EPISODES_URL(podcastId) : "");

  const [filteredPodcasts, setFilteredPodcasts] = useState<Podcast[]>(
    podcastsData?.feed?.entry || []
  );

  useEffect(() => {
    const lastFetchDate = getLocalStorageItem(PODCASTS_FETCH_DATE_TIME_KEY);
    const currentDate = new Date();
    const { pathname } = window.location;

    if (pathname === "/" || isDateDifference24Hours(lastFetchDate)) {
      if (lastFetchDate === null) {
        fetchPodcastsData();
        setLocalStorageItem(PODCASTS_FETCH_DATE_TIME_KEY, currentDate);
      } else {
        const storedPodcasts = getLocalStorageItem(PODCASTS_LIST_KEY);
        if (storedPodcasts) {
          const podcasts: Podcast[] = storedPodcasts || [];
          setFilteredPodcasts(podcasts);
        }
      }
    }
  }, [fetchPodcastsData]);

  useEffect(() => {
    if (podcastsData) {
      const podcasts: Podcast[] = podcastsData?.feed?.entry || [];
      setLocalStorageItem(PODCASTS_LIST_KEY, podcasts);
      setFilteredPodcasts(podcasts);
    }
  }, [podcastsData]);

  useEffect(() => {
    const dataToFilter = podcastsData ?? getLocalStorageItem(PODCASTS_LIST_KEY);
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
    console.log(podcastId);
    fetchPodcastDetailsData();
  }, [podcastId]);

  return (
    <AppContext.Provider
      value={{
        podcasts: filteredPodcasts,
        podcastsCounter: filteredPodcasts.length ?? 0,
        setInputWithBadgeValue,
        inputWithBadgeValue,
        isLoading: isFetchPodcastsLoading || isFetchEpisodesLoading,
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
