import styled from "styled-components";
import { LIGHT_GRAY_COLOR, BOX_SHADOW_COLOR } from "@src/constants";

export const StyledSidebarContainer = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  box-shadow: ${BOX_SHADOW_COLOR};
  align-self: flex-start;
`;

export const StyledSidebarImage = styled.img`
  width: 180px;
  height: 180px;
  align-self: center;
  margin: 5%;
  cursor: pointer;
`;

export const StyledDetailsSection = styled.div`
  border-top: 1px solid ${LIGHT_GRAY_COLOR};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0;

  & h2 {
    margin: 0;
    font-size: 1rem;
    font-weight: 800;
    cursor: pointer;
  }

  & p {
    margin-top: 5px;
    margin-bottom: 0px;
    cursor: pointer;
  }
`;

export const StyledDescriptionSection = styled.div`
  border-top: 1px solid ${LIGHT_GRAY_COLOR};
  padding: 20px 0;
  overflow-wrap: break-word;

  & h2 {
    margin: 0;
    font-size: 1rem;
    font-weight: 800;
  }

  & p {
    margin-top: 10px;
    margin-bottom: 0px;
  }
`;
