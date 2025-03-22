import { EPISODES } from "@src/constants";
import { StyledToolbarContainer } from "../styles";

type ToolbarProps = {
  episodesCount: number;
};

export const Toolbar: React.FC<ToolbarProps> = ({ episodesCount }) => {
  return (
    <StyledToolbarContainer>
      <p>
        {EPISODES}
        {episodesCount}
      </p>
    </StyledToolbarContainer>
  );
};
