// styles
export const APP_MAIN_COLOR = "#0072B1";
export const LIGHT_GRAY_COLOR = "#ddd";
export const WHITE_COLOR = "#ffffff";
export const BOX_SHADOW_COLOR = "0px 6px 12px rgba(0, 0, 0, 0.50)";
export const GRAY_COLOR = "#777";
export const GRAY_COLOR_2 = "#f3f4f6";
export const DARK_GRAY_COLOR = "#333";

// text resources
export const APP_NAME = "Podcaster";
export const FILTER_INPUT_PLACEHOLDER = "Filter podcasts...";
export const CARD_AUTHOR = "Author: ";
export const DESCRIPTION = "Description:";
export const EPISODES = "Episodes: ";
export const BY = "by  ";
export const TABLE_HEADER = ["Title", "Date", "Duration"];

// api
export const FETCH_PODCASTS_URL =
  "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";
export const FETCH_EPISODES_URL = (podcastId: string): string =>
  `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`;

// cache
export const CACHE_NAME = "api-cache";
export const CACHE_EXPIRATION_MS = 1000 * 60 * 60 * 24;
