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
import { TABLE_HEADER, TABLE_DATE_FORMAT } from "@src/constants";
import { formatMilliseconds, formatDate } from "@utils/dates-and-time-helpers";
import type { Episode } from "@src/types";
import { TableSkeleton } from "./table-skeleton";

export type TableProps = {
  episodes: Episode[];
  onClickItem: (episode: Episode) => void;
  isLoading: boolean;
};

export const Table: React.FC<TableProps> = ({
  episodes,
  onClickItem,
  isLoading,
}) => {
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
        {isLoading ? (
          <TableSkeleton />
        ) : (
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
        )}
      </StyledTable>
    </StyledTableWrapper>
  );
};
