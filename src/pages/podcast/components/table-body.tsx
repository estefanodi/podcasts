import { StyledTableRow, StyledTableCell, StyledLink } from "../styles";
import { TABLE_DATE_FORMAT } from "@src/constants";
import { formatMilliseconds, formatDate } from "@utils/dates-and-time-helpers";
import type { Episode } from "@src/types";

export type TableBodyProps = {
  episodes: Episode[];
  onClickItem: (episode: Episode) => void;
};

export const TableBody: React.FC<TableBodyProps> = ({
  episodes,
  onClickItem,
}) => (
  <tbody data-testid="episodes-table">
    {episodes.map((episode: Episode) => {
      return (
        <StyledTableRow key={episode.trackId}>
          <StyledTableCell>
            <StyledLink onClick={() => onClickItem(episode)}>
              {episode.trackName}
            </StyledLink>
          </StyledTableCell>
          <StyledTableCell>
            {formatDate(episode.releaseDate, TABLE_DATE_FORMAT)}
          </StyledTableCell>
          <StyledTableCell>
            {formatMilliseconds(episode.trackTimeMillis)}
          </StyledTableCell>
        </StyledTableRow>
      );
    })}
  </tbody>
);
