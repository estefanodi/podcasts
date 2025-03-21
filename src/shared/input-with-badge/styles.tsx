import styled from "styled-components";
import { APP_MAIN_COLOR, BORDER_COLOR } from "../../constants";

export const StyledInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 16px;
`;

export const StyledBadge = styled.span`
  background-color: ${APP_MAIN_COLOR};
  color: white;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 12px;
  margin-right: 10px;
`;

export const StyledInput = styled.input`
  padding-left: 15px;
  padding-right: 10px;
  border: 1px solid ${BORDER_COLOR};
  border-radius: 4px;
  font-size: 16px;
  height: 30px;
  width: 300px;
  outline-color: ${APP_MAIN_COLOR};
`;
