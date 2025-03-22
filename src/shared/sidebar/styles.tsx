import styled from "styled-components";
import { LIGHT_GRAY_COLOR, BOX_SHADOW_COLOR } from "@src/constants";

export const StyledSidebarContainer = styled.div`
  width: 250px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 0 5px;
  box-shadow: 0px 4px 10px ${BOX_SHADOW_COLOR};
`;

export const StyledSidebarImage = styled.img`
  width: 180px;
  height: 180px;
  align-self: center;
  margin: 5%;
`;

export const StyledDetailsSection = styled.div`
  border-top: 1px solid ${LIGHT_GRAY_COLOR};
  height: 20%;
`;

export const StyledTitle = styled.h2`
  font-size: 0.8rem;
`;

export const StyledArtist = styled.p``;

export const StyledDescriptionSection = styled.div`
  border-top: 1px solid ${LIGHT_GRAY_COLOR};
  height: 30%;
`;

export const StyledDescription = styled.p``;
