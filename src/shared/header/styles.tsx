import styled from "styled-components";
import { APP_MAIN_COLOR, BORDER_COLOR } from "../../constants";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border: 1px solid ${BORDER_COLOR};
`;

export const StyledTitle = styled.h1`
  color: ${APP_MAIN_COLOR};
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  margin: 0;
`;
