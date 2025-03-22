import { useLocation } from "react-router";

import { Sidebar } from "@shared/sidebar";
import { mockPodcast } from "@src/mocks/podcast";
import {
  StyledSidebarContainer,
  StyledTableContainer,
  StyledContainer,
} from "./styles";
import { Table } from "./components/table";
import { Toolbar } from "./components/toolbar";

export const Podcast: React.FC = () => {
  const location = useLocation();
  const { podcastTitle, podcastArtist, podcastImageUrl, podcastDescription } =
    location.state || {};

  return (
    <StyledContainer>
      <StyledSidebarContainer>
        <Sidebar
          podcastImageUrl={podcastImageUrl}
          podcastTitle={podcastTitle}
          podcastArtist={podcastArtist}
          podcastDescription={podcastDescription}
        />
      </StyledSidebarContainer>
      <StyledTableContainer>
        <Toolbar episodesCount={mockPodcast.results.length} />
        <Table podcastDetails={mockPodcast.results} />
      </StyledTableContainer>
    </StyledContainer>
  );
};
