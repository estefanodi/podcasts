import { SidebarLayout } from "@src/shared/sidebar-layout.tsx";
import { MediaPlayerCard } from "./components/media-player-card";
import { useAppContext } from "@src/contexts/app-context";

export const Episode: React.FC = () => {
  const { selectedEpisode } = useAppContext();

  return (
    <SidebarLayout>
      <MediaPlayerCard
        title={selectedEpisode!.trackName}
        description={selectedEpisode!.description}
        episodeUrl={selectedEpisode!.episodeUrl}
      />
    </SidebarLayout>
  );
};
