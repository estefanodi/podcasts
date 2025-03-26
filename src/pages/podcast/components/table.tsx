import {
  StyledTableWrapper,
  StyledTable,
  StyledTableHeader,
  StyledTr,
  StyledHeaderCell,
} from "../styles";
import { TableSkeleton } from "./table-skeleton";

export type TableProps = {
  isLoading: boolean;
  headerItems: string[];
};

export const Table: React.FC<React.PropsWithChildren<TableProps>> = ({
  isLoading,
  headerItems,
  children,
}) => {
  return (
    <StyledTableWrapper>
      <StyledTable>
        <StyledTableHeader>
          <StyledTr>
            {headerItems.map((headerItem) => (
              <StyledHeaderCell key={headerItem}>{headerItem}</StyledHeaderCell>
            ))}
          </StyledTr>
        </StyledTableHeader>
        {isLoading ? (
          <TableSkeleton numberOfCells={headerItems.length} />
        ) : (
          <>{children}</>
        )}
      </StyledTable>
    </StyledTableWrapper>
  );
};
