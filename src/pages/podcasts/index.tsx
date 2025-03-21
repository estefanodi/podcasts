import { useRouteLoaderData } from "react-router";

export const Podcasts: React.FC = () => {
  const data = useRouteLoaderData("podcasts");

  return <h1>Podcasts</h1>;
};
