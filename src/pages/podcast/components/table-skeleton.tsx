import { StyledTableRow, StyledTableCell, StyledSkeletonCell } from "../styles";

export const TableSkeleton: React.FC = () => {
  return (
    <tbody data-testid="table-skeleton">
      {[...Array(10)].map((_, index) => (
        <StyledTableRow key={index}>
          <StyledTableCell>
            <StyledSkeletonCell />
          </StyledTableCell>
          <StyledTableCell>
            <StyledSkeletonCell />
          </StyledTableCell>
          <StyledTableCell>
            <StyledSkeletonCell />
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </tbody>
  );
};
