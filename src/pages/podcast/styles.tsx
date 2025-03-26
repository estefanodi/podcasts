import styled, { keyframes } from "styled-components";

import {
  APP_MAIN_COLOR,
  WHITE_COLOR,
  BOX_SHADOW_COLOR,
  LIGHT_GRAY_COLOR,
  GRAY_COLOR_2,
} from "@src/constants";

export const StyledToolbarContainer = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  box-shadow: ${BOX_SHADOW_COLOR};
  margin-bottom: 30px;
  align-items: center;
  padding-left: 10px;
  box-sizing: border-box;

  & p {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export const StyledTableWrapper = styled.div`
  overflow-x: auto;
  width: 100%;
  box-shadow: ${BOX_SHADOW_COLOR};
  height: 50vh;
  padding: 0 10px;
  box-sizing: border-box;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const StyledTableHeader = styled.thead`
  background-color: ${WHITE_COLOR};
  border-bottom: 1px solid ${LIGHT_GRAY_COLOR};
`;

export const StyledTr = styled.tr`
  &:nth-child(1) {
    width: 60%;
  }

  &:nth-child(2) {
    width: 20%;
  }

  &:nth-child(3) {
    width: 20%;
  }
`;

export const StyledTableRow = styled.tr`
  &:nth-child(odd) {
    background-color: ${GRAY_COLOR_2};
  }
`;

export const StyledTableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid ${LIGHT_GRAY_COLOR};
`;

export const StyledHeaderCell = styled.th`
  text-align: left;
  padding: 12px;
`;

export const StyledLink = styled.span`
  color: ${APP_MAIN_COLOR};
  cursor: pointer;
`;

const shimmer = keyframes`
    0% { background-position: -200px 0; }
    100% { background-position: 200px 0; }
  `;

export const StyledSkeletonCell = styled.div`
  width: 100%;
  height: 16px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 4px;
`;
