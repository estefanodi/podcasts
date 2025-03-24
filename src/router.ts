import { createBrowserRouter } from "react-router";

import { Podcasts, Podcast, Episode } from "./pages";
import { Layout } from "./layout";
import type {
  Podcast as PodcastType,
  Episode as EpisodeType,
} from "@src/types";

export const paths = {
  podcast: (podcastId: PodcastType["id"]["attributes"]["im:id"]) =>
    `/podcast/${podcastId}`,
  episode: (
    podcastId: EpisodeType["collectionId"],
    episodeId: EpisodeType["trackId"]
  ) => `/podcast/${podcastId}/episode/${episodeId}`,
};

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "",
        Component: Podcasts,
      },
      {
        path: "podcast/:podcastId",
        Component: Podcast,
      },
      {
        path: "podcast/:podcastId/episode/:episodeId",
        Component: Episode,
      },
    ],
  },
]);
