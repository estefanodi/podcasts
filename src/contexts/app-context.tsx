import { createContext, useState, ReactNode, useContext } from "react";
import { mockPodcasts } from "../mocks/podcasts";

import type { Podcast } from "../types";

type AppContextType = {
  podcasts: any;
  setPodcasts: React.Dispatch<React.SetStateAction<any>>;
  podcastsCounter: number;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [podcasts, setPodcasts] = useState<Podcast[]>(mockPodcasts);
  const podcastsCounter = podcasts.length;

  return (
    <AppContext.Provider value={{ podcasts, setPodcasts, podcastsCounter }}>
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
