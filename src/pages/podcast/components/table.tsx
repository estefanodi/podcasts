import {
  StyledTableWrapper,
  StyledTable,
  StyledTableHeader,
  StyledTr,
  StyledTableRow,
  StyledTableCell,
  StyledHeaderCell,
  StyledLink,
} from "../styles";
import { TABLE_HEADER } from "@src/constants";
import { formatMilliseconds, formatDate } from "@utils/dates-and-time-helpers";
import type { Episode } from "@src/types";

type TableProps = {
  episodes: Episode[];
  onClickItem: (episode: Episode) => void;
};

export const Table: React.FC<TableProps> = ({ episodes, onClickItem }) => {
  return (
    <StyledTableWrapper>
      <StyledTable>
        <StyledTableHeader>
          <StyledTr>
            {TABLE_HEADER.map((item: string) => (
              <StyledHeaderCell key={item}>{item}</StyledHeaderCell>
            ))}
          </StyledTr>
        </StyledTableHeader>
        <tbody>
          {episodes.map((episode: Episode) => {
            return (
              <StyledTableRow key={episode.trackId}>
                <StyledTableCell>
                  <StyledLink onClick={() => onClickItem(episode)}>
                    {episode.trackName}
                  </StyledLink>
                </StyledTableCell>
                <StyledTableCell>
                  {formatDate(episode.releaseDate, "dd/MM/yyyy")}
                </StyledTableCell>
                <StyledTableCell>
                  {formatMilliseconds(episode.trackTimeMillis)}
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
        </tbody>
      </StyledTable>
    </StyledTableWrapper>
  );
};
