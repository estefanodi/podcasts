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
