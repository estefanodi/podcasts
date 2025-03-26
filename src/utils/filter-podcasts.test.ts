import { filterItems } from "./filter-podcasts";
import type { Podcast } from "types";
import { mockPodcasts } from "../mocks/podcasts";

const podcasts: Podcast[] = [mockPodcasts[0], mockPodcasts[1]];

describe("filterItems", () => {
  it("filters podcasts by title", () => {
    const searchTerm = "Troy";
    const filtered = filterItems(podcasts, searchTerm);

    expect(filtered.length).toBe(1);
    expect(filtered[0].title.label).toBe(podcasts[0].title.label);
  });

  it("filters podcasts by artist", () => {
    const searchTerm = "Country Thunder";
    const filtered = filterItems(podcasts, searchTerm);

    expect(filtered.length).toBe(1);
    expect(filtered[0]["im:artist"].label).toBe(filtered[0]["im:artist"].label);
  });

  it("returns no podcasts when no match is found", () => {
    const searchTerm = "Non-existent term";
    const filtered = filterItems(podcasts, searchTerm);

    expect(filtered.length).toBe(0);
  });

  it("returns podcasts that match both title and artist", () => {
    const searchTerm = "Podcast";
    const filtered = filterItems(podcasts, searchTerm);

    expect(filtered.length).toBe(1);
  });

  it("is case insensitive when filtering by title", () => {
    const searchTerm = "troy";
    const filtered = filterItems(podcasts, searchTerm);

    expect(filtered.length).toBe(1);
    expect(filtered[0].title.label).toBe(podcasts[0].title.label);
  });

  it("is case insensitive when filtering by artist", () => {
    const searchTerm = "country thunder";
    const filtered = filterItems(podcasts, searchTerm);

    expect(filtered.length).toBe(1);
    expect(filtered[0]["im:artist"].label).toBe(podcasts[0]["im:artist"].label);
  });
});
