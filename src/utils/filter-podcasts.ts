import type { Podcast } from "types";

type FilterItems = (items: Podcast[], searchTerm: string) => Podcast[];

export const filterItems: FilterItems = (items, searchTerm) => {
  const lowercasedSearchTerm = searchTerm.toLowerCase();

  return items.filter((item) => {
    return (
      item.title.label.toLowerCase().includes(lowercasedSearchTerm) ||
      item["im:artist"].label.toLowerCase().includes(lowercasedSearchTerm)
    );
  });
};
