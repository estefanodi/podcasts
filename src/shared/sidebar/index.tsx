import { useNavigate } from "react-router";

import { DESCRIPTION, BY } from "@src/constants";
import {
  StyledSidebarContainer,
  StyledSidebarImage,
  StyledDetailsSection,
  StyledDescriptionSection,
} from "./styles";
import { paths } from "@src/router";

export type SidebarProps = {
  podcastImageUrl: string;
  podcastTitle: string;
  podcastArtist: string;
  podcastDescription: string;
  podcastId: string;
};

export const Sidebar: React.FC<SidebarProps> = ({
  podcastImageUrl,
  podcastTitle,
  podcastArtist,
  podcastDescription,
  podcastId,
}) => {
  const navigateTo = useNavigate();
  const podcastUrl = paths.podcast(podcastId);
  const locationState = {
    podcastTitle,
    podcastArtist,
    podcastImageUrl,
    podcastDescription,
    podcastId,
  };

  const onClick = () => navigateTo(podcastUrl, { state: locationState });

  return (
    <StyledSidebarContainer>
      <StyledSidebarImage
        src={podcastImageUrl}
        alt={`${podcastTitle} image`}
        onClick={onClick}
      />
      <StyledDetailsSection>
        <div onClick={onClick}>
          <h2>{podcastTitle}</h2>
          <p>
            {BY}
            {podcastArtist}
          </p>
        </div>
      </StyledDetailsSection>
      <StyledDescriptionSection>
        <h2>{DESCRIPTION}</h2>
        <p>{podcastDescription}</p>
      </StyledDescriptionSection>
    </StyledSidebarContainer>
  );
};
