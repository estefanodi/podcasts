import { render, screen, fireEvent } from "@testing-library/react";

import { TableBody, type TableBodyProps } from "./table-body";
import type { Episode } from "@src/types";
import { formatDate, formatMilliseconds } from "@utils/dates-and-time-helpers";
import { TABLE_DATE_FORMAT } from "@src/constants";
import { mockEpisodes as episodes } from "@src/mocks/episodes";

const mockOnClickItem = jest.fn();
const mockEpisodes: Episode[] = [episodes.results[0], episodes.results[1]];

const renderComponent = ({ episodes, onClickItem }: TableBodyProps) =>
  render(<TableBody episodes={episodes} onClickItem={onClickItem} />);

describe("TableBody", () => {
  it("renders the correct number of episodes", () => {
    renderComponent({ episodes: mockEpisodes, onClickItem: mockOnClickItem });

    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(mockEpisodes.length);
  });

  it("renders episode details correctly", () => {
    renderComponent({ episodes: mockEpisodes, onClickItem: mockOnClickItem });

    mockEpisodes.forEach(({ trackName, releaseDate, trackTimeMillis }) => {
      expect(screen.getByText(trackName)).toBeInTheDocument();
      expect(
        screen.getByText(formatDate(releaseDate, TABLE_DATE_FORMAT))
      ).toBeInTheDocument();
      expect(
        screen.getByText(formatMilliseconds(trackTimeMillis))
      ).toBeInTheDocument();
    });
  });

  it("calls onClickItem with the episode when link is clicked", () => {
    renderComponent({ episodes: mockEpisodes, onClickItem: mockOnClickItem });

    const LinkComponent = screen.getByText(mockEpisodes[0].trackName);
    fireEvent.click(LinkComponent);

    expect(mockOnClickItem).toHaveBeenNthCalledWith(1, mockEpisodes[0]);
  });
});
