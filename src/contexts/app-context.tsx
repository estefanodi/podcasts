import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { mockPodcasts } from "../mocks/podcasts";
import { filterItems } from "utils/filter-podcasts";

import type { Podcast } from "../types";

type AppContextType = {
  podcasts: any;
  setPodcasts: React.Dispatch<React.SetStateAction<any>>;
  podcastsCounter: number;
  setInputWithBadgeValue: React.Dispatch<React.SetStateAction<string>>;
  inputWithBadgeValue: string;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [podcasts, setPodcasts] = useState<Podcast[]>(mockPodcasts);
  const [filteredPodcasts, setFilteredPodcasts] = useState<Podcast[]>(podcasts);
  const [inputWithBadgeValue, setInputWithBadgeValue] = useState<string>("");

  useEffect(() => {
    if (!inputWithBadgeValue) {
      setFilteredPodcasts(podcasts);
      console.log("setFilteredPodcasts(podcasts);");
    } else {
      const filtered = filterItems(podcasts, inputWithBadgeValue);
      setFilteredPodcasts(filtered);
      console.log("setFilteredPodcasts(filtered);");
    }
  }, [inputWithBadgeValue, podcasts]);

  return (
    <AppContext.Provider
      value={{
        podcasts: filteredPodcasts,
        setPodcasts,
        podcastsCounter: filteredPodcasts.length,
        setInputWithBadgeValue,
        inputWithBadgeValue,
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
