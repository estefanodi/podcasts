import { StyledTableRow, StyledTableCell, StyledSkeletonCell } from "../styles";
import { DEFAULT_TABLE_ROWS } from "@src/constants";

export type TableSkeletonProps = {
  numberOfCells: number;
  numberOfRows?: number;
};

export const TableSkeleton: React.FC<TableSkeletonProps> = ({
  numberOfCells,
  numberOfRows = DEFAULT_TABLE_ROWS,
}) => {
  return (
    <tbody data-testid="table-skeleton">
      {[...Array(numberOfRows)].map((_, rowIndex) => (
        <StyledTableRow key={rowIndex}>
          {[...Array(numberOfCells)].map((_, cellIndex) => (
            <StyledTableCell key={cellIndex}>
              <StyledSkeletonCell />
            </StyledTableCell>
          ))}
        </StyledTableRow>
      ))}
    </tbody>
  );
};
