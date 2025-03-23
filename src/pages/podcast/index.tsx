import { mockPodcast } from "@src/mocks/podcast";
import { SidebarLayout } from "@shared/sidebar-layout.tsx";
import { Table } from "./components/table";
import { Toolbar } from "./components/toolbar";

export const Podcast: React.FC = () => (
  <SidebarLayout>
    <>
      <Toolbar episodesCount={mockPodcast.results.length} />
      <Table podcastDetails={mockPodcast.results} />
    </>
  </SidebarLayout>
);
