import { DESCRIPTION } from "@src/constants";
import {
  StyledSidebarContainer,
  StyledSidebarImage,
  StyledDetailsSection,
  StyledTitle,
  StyledArtist,
  StyledDescriptionSection,
  StyledDescription,
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
}) => {
  console.log(podcastTitle, podcastArtist, podcastDescription);
  return (
    <StyledSidebarContainer>
      <StyledSidebarImage src={podcastImageUrl} alt="" />
      <StyledDetailsSection>
        <StyledTitle>{podcastTitle}</StyledTitle>
        <StyledArtist>{podcastArtist}</StyledArtist>
      </StyledDetailsSection>
      <StyledDescriptionSection>
        {DESCRIPTION}
        <StyledDescription>{podcastDescription}</StyledDescription>
      </StyledDescriptionSection>
    </StyledSidebarContainer>
  );
};
