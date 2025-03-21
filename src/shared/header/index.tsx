import { StyledHeader, StyledTitle } from "./styles";
import { Indicator } from "../indicator";
import { APP_NAME } from "../../constants";

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledTitle>{APP_NAME}</StyledTitle>
      <Indicator isVisible />
    </StyledHeader>
  );
};
