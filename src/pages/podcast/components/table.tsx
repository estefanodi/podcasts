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
import type { PodcastDetails } from "@src/types";
import { formatMilliseconds, formatDate } from "@utils/dates-and-time-helpers";
import { paths } from "@src/router";

type TableProps = {
  podcastDetails: PodcastDetails[];
};

export const Table: React.FC<TableProps> = ({ podcastDetails }) => {
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
          {podcastDetails.map((item: PodcastDetails) => {
            const episodeUrl = paths.episode(item.collectionId, item.trackId);
            return (
              <StyledTableRow key={item.trackId}>
                <StyledTableCell>
                  <StyledLink to={episodeUrl}>{item.trackName}</StyledLink>
                </StyledTableCell>
                <StyledTableCell>
                  {formatDate(item.releaseDate, "dd/MM/yyyy")}
                </StyledTableCell>
                <StyledTableCell>
                  {formatMilliseconds(item.trackTimeMillis)}
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
        </tbody>
      </StyledTable>
    </StyledTableWrapper>
  );
};
