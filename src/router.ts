import { createBrowserRouter } from "react-router";

import { Podcasts, Podcast, Episode } from "./pages";
import { Layout } from "./layout";
import type { Podcast as PodcastType, PodcastDetails } from "@src/types";

export const paths = {
  podcast: (podcastId: PodcastType["id"]["attributes"]["im:id"]) =>
    `/podcast/${podcastId}`,
  episode: (
    podcastId: PodcastDetails["collectionId"],
    episodeId: PodcastDetails["trackId"]
  ) => `/podcast/${podcastId}/episode/${episodeId}`,
};

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout, // Wrap everything in Layout
    children: [
      {
        path: "",
        id: "podcasts",
        Component: Podcasts,
        loader: ({ request }) =>
          fetch(
            "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
            { signal: request.signal }
          ),
      },
      {
        path: "podcast/:podcastId",
        id: "podcast",
        Component: Podcast,
        loader: ({ request, params }) =>
          fetch(
            `https://itunes.apple.com/lookup?id=${params.podcastId}&media=podcast&entity=podcastEpisode&limit=20`,
            { signal: request.signal }
          ),
      },
      {
        path: "podcast/:podcastId/episode/:episodeId",
        Component: Episode,
      },
    ],
  },
]);
