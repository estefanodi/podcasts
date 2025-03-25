import { useLocation } from "react-router";

import { Sidebar } from "@shared/sidebar";
import {
  StyledSidebarContainer,
  StyledRightContainer,
  StyledContainer,
} from "./styles";

export const SidebarLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const location = useLocation();
  const {
    podcastTitle,
    podcastArtist,
    podcastImageUrl,
    podcastDescription,
    podcastId,
  } = location.state || {};

  return (
    <StyledContainer>
      <StyledSidebarContainer>
        <Sidebar
          podcastImageUrl={podcastImageUrl}
          podcastTitle={podcastTitle}
          podcastArtist={podcastArtist}
          podcastDescription={podcastDescription}
          podcastId={podcastId}
        />
      </StyledSidebarContainer>
      <StyledRightContainer>{children}</StyledRightContainer>
    </StyledContainer>
  );
};
