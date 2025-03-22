import styled from "styled-components";

import {
  APP_MAIN_COLOR,
  LIGHT_GRAY_COLOR,
  WHITE_COLOR,
  GRAY_COLOR,
  DARK_GRAY_COLOR,
} from "@src/constants";

export const StyledInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 16px;
`;

export const StyledBadge = styled.span`
  background-color: ${APP_MAIN_COLOR};
  color: ${WHITE_COLOR};
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 12px;
  margin-right: 10px;
`;

export const StyledInput = styled.input`
  padding-left: 15px;
  padding-right: 10px;
  border: 1px solid ${LIGHT_GRAY_COLOR};
  border-radius: 4px;
  font-size: 16px;
  height: 30px;
  width: 300px;
  outline-color: ${APP_MAIN_COLOR};
`;

export const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  overflow-y: auto;
  padding: 10px 0;
  justify-items: center;
`;

export const StyledPodcastCard = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  border: 1px solid ${LIGHT_GRAY_COLOR};
  align-items: flex-end;
  position: relative;
  cursor: pointer;
`;

export const StyledPodcastCardBottom = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${LIGHT_GRAY_COLOR};
  align-items: center;
  justify-content: flex-end;
`;

export const StyledPodcastTitle = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  color: ${DARK_GRAY_COLOR};
  margin: 0;
`;
export const StyledPodcastArtist = styled.p`
  font-size: 0.8rem;
  color: ${GRAY_COLOR};
  margin-top: 8px;
`;

export const StyledRoundedImage = styled.img`
  width: 100px;
  height: 100px;
  clip-path: circle(50% at 50% 50%);
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;
