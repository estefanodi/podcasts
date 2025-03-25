import { useNavigate } from "react-router";

import { APP_NAME } from "@src/constants";
import { paths } from "@src/router";
import { StyledHeader, StyledTitle } from "./styles";
import { Indicator } from "../indicator";

export type HeaderProps = {
  isLoading: boolean;
};

export const Header: React.FC<HeaderProps> = ({ isLoading }) => {
  const navigateTo = useNavigate();

  return (
    <StyledHeader>
      <StyledTitle onClick={() => navigateTo(paths.home)}>
        {APP_NAME}
      </StyledTitle>
      <Indicator isVisible={isLoading} />
    </StyledHeader>
  );
};
