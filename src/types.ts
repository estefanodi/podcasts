export type Image = {
  label: string;
  attributes: {
    height: string;
  };
};

type Attributes = {
  amount?: string;
  currency?: string;
  term?: string;
  label?: string;
  rel?: string;
  type?: string;
  href?: string;
  "im:id"?: string;
  scheme?: string;
};

export type Podcast = {
  "im:name": {
    label: string;
  };
  "im:image": Image[];
  summary: { label: string };
  "im:price": {
    label: string;
    attributes: Pick<Attributes, "amount" | "currency">;
  };
  "im:contentType": { attributes: Pick<Attributes, "term" | "label"> };
  rights?: { label: string };
  title: { label: string };
  link: { attributes: Pick<Attributes, "rel" | "type" | "href"> };
  id: { label: string; attributes: Pick<Attributes, "im:id"> };
  "im:artist": { label: string; attributes?: Pick<Attributes, "href"> };
  category: {
    attributes: Pick<Attributes, "im:id" | "term" | "scheme" | "label">;
  };
  "im:releaseDate": { label: string; attributes: Pick<Attributes, "label"> };
};

export type Episode = {
  wrapperType: string;
  kind: string;
  collectionId: number;
  trackId: number;
  artistName?: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName?: string;
  trackCensoredName?: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30?: string;
  artworkUrl60: string;
  artworkUrl100?: string;
  collectionPrice?: number;
  trackPrice?: number;
  collectionHdPrice?: number;
  releaseDate: string;
  collectionExplicitness?: string;
  trackExplicitness?: string;
  trackCount?: number;
  trackTimeMillis: number;
  country: string;
  currency?: string;
  primaryGenreName?: string;
  contentAdvisoryRating: string;
  artworkUrl600: string;
  genreIds?: string[];
  genres: Array<{ name: string; id: string }> | string[];
  previewUrl: string;
  artistIds: number[];
  episodeGuid: string;
  shortDescription: string;
  closedCaptioning: string;
  description: string;
  episodeUrl: string;
  artworkUrl160: string;
  episodeFileExtension: string;
  episodeContentType: string;
};
