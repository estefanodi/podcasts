import styled from "styled-components";

import { BOX_SHADOW_COLOR } from "@src/constants";

export const StyledContainer = styled.div`
  min-height: 25vh;
  width: 100%;
  box-shadow: ${BOX_SHADOW_COLOR};
  padding: 10px;
`;

export const StyledAudioPlayer = styled.audio`
  width: 100%;
  height: 35px;
  padding: 4px;
  margin-top: 15px;
  &::-webkit-media-controls-panel {
    background-color: #222;
  }
  &::-webkit-media-controls-volume-slider,
  &::-webkit-media-controls-play-button,
  &::-webkit-media-controls-current-time-display,
  &::-webkit-media-controls-time-remaining-display,
  &::-webkit-media-controls-mute-button {
    filter: invert(1);
  }
`;
