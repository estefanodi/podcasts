import { createBrowserRouter } from "react-router";
import { Podcasts, Podcast, Episode } from "./pages";
import { Layout } from "./layout"; // Import Layout

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
