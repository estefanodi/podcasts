import { StyledHeader, StyledTitle } from "./styles";
import { Indicator } from "../indicator";
import { APP_NAME } from "../../constants";

export type HeaderProps = {
  isLoading: boolean;
};

export const Header: React.FC<HeaderProps> = ({ isLoading }) => {
  return (
    <StyledHeader>
      <StyledTitle>{APP_NAME}</StyledTitle>
      <Indicator isVisible={isLoading} />
    </StyledHeader>
  );
};
