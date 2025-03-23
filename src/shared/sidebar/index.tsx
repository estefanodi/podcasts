import { DESCRIPTION, BY } from "@src/constants";
import {
  StyledSidebarContainer,
  StyledSidebarImage,
  StyledDetailsSection,
  StyledDescriptionSection,
} from "./styles";

type SidebarProps = {
  podcastImageUrl: string;
  podcastTitle: string;
  podcastArtist: string;
  podcastDescription: string;
};

export const Sidebar: React.FC<SidebarProps> = ({
  podcastImageUrl,
  podcastTitle,
  podcastArtist,
  podcastDescription,
}) => (
  <StyledSidebarContainer>
    <StyledSidebarImage src={podcastImageUrl} alt={`${podcastTitle} image`} />
    <StyledDetailsSection>
      <>
        <h2>{podcastTitle}</h2>
        <p>
          {BY}
          {podcastArtist}
        </p>
      </>
    </StyledDetailsSection>
    <StyledDescriptionSection>
      <h2>{DESCRIPTION}</h2>
      <p>{podcastDescription}</p>
    </StyledDescriptionSection>
  </StyledSidebarContainer>
);
