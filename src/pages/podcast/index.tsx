import { useRouteLoaderData } from "react-router";

export const Podcast: React.FC = () => {
  const data = useRouteLoaderData("podcast");

  return <h1>Podcast</h1>;
};
