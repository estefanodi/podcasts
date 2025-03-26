import styled from "styled-components";

import { APP_MAIN_COLOR, LIGHT_GRAY_COLOR } from "../../constants";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border: 0.5px solid ${LIGHT_GRAY_COLOR};
  border-bottom: 1px solid ${LIGHT_GRAY_COLOR};
`;

export const StyledTitle = styled.h1`
  color: ${APP_MAIN_COLOR};
  font-size: 1.5rem;
  margin: 0;
  cursor: pointer;
`;
