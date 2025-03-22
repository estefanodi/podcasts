import { FILTER_INPUT_PLACEHOLDER } from "../../constants";
import { InputWithBadge } from "./components/input-with-badge";
import { GridContainer } from "./components/grid-container";
import { useAppContext } from "../../contexts/app-context";

export const Podcasts: React.FC = () => {
  const { podcastsCounter } = useAppContext();

  return (
    <>
      <InputWithBadge
        placeholder={FILTER_INPUT_PLACEHOLDER}
        resultsCounter={podcastsCounter}
        onChange={() => {
          //
        }}
      />
      <GridContainer />
    </>
  );
};
