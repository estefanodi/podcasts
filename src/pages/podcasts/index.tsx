import { FILTER_INPUT_PLACEHOLDER } from "../../constants";
import { InputWithBadge } from "./components/input-with-badge";
import { GridContainer } from "./components/grid-container";
import { useAppContext } from "../../contexts/app-context";

export const Podcasts: React.FC = () => {
  const { podcastsCounter, setInputWithBadgeValue, inputWithBadgeValue } =
    useAppContext();

  return (
    <>
      <InputWithBadge
        placeholder={FILTER_INPUT_PLACEHOLDER}
        resultsCounter={podcastsCounter}
        onChange={(e: { target: { value: string } }) =>
          setInputWithBadgeValue(e.target.value)
        }
        value={inputWithBadgeValue}
      />
      <GridContainer />
    </>
  );
};
