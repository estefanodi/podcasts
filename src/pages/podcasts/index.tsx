import { useRouteLoaderData } from "react-router";
import { InputWithBadge } from "../../components/input-with-badge";
import { FILTER_INPUT_PLACEHOLDER } from "../../constants";

export const Podcasts: React.FC = () => {
  const data = useRouteLoaderData("podcasts");

  return (
    <>
      <InputWithBadge
        placeholder={FILTER_INPUT_PLACEHOLDER}
        resultsCounter={100}
        onChange={() => {
          //
        }}
      />
    </>
  );
};
