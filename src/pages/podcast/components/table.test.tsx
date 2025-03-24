import { fireEvent, render, screen } from "@testing-library/react";

import { Table, type TableProps } from "./table";
import { TABLE_HEADER } from "@src/constants";
import { formatMilliseconds, formatDate } from "@utils/dates-and-time-helpers";
import { Episode } from "@src/types";
import { mockEpisodes as episodes } from "@src/mocks/episodes";

const mockEpisodes: Episode[] = [episodes.results[0], episodes.results[1]];
const mockOnClickItem = jest.fn();

const renderComponent = ({ episodes, onClickItem }: TableProps) =>
  render(<Table episodes={episodes} onClickItem={onClickItem} />);

describe("Table", () => {
  it("renders table headers correctly", () => {
    renderComponent({ episodes: mockEpisodes, onClickItem: mockOnClickItem });

    TABLE_HEADER.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });

  it("renders episodes correctly", () => {
    renderComponent({ episodes: mockEpisodes, onClickItem: mockOnClickItem });

    expect(screen.getByText(mockEpisodes[0].trackName)).toBeInTheDocument();
    expect(
      screen.getByText(formatDate(mockEpisodes[0].releaseDate, "dd/MM/yyyy"))
    ).toBeInTheDocument();
    expect(
      screen.getByText(formatMilliseconds(mockEpisodes[0].trackTimeMillis))
    ).toBeInTheDocument();

    expect(screen.getByText(mockEpisodes[1].trackName)).toBeInTheDocument();
    expect(
      screen.getByText(formatDate(mockEpisodes[1].releaseDate, "dd/MM/yyyy"))
    ).toBeInTheDocument();
    expect(
      screen.getByText(formatMilliseconds(mockEpisodes[1].trackTimeMillis))
    ).toBeInTheDocument();
  });

  it("calls onClickItem when an episode is clicked", () => {
    renderComponent({ episodes: mockEpisodes, onClickItem: mockOnClickItem });

    const episodeLink = screen.getByText(mockEpisodes[0].trackName);

    fireEvent.click(episodeLink);

    expect(mockOnClickItem).toHaveBeenNthCalledWith(1, mockEpisodes[0]);
  });
});
