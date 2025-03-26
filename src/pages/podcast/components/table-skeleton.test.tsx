import { render, screen } from "@testing-library/react";

import { TableSkeleton, type TableSkeletonProps } from "./table-skeleton";
import { DEFAULT_TABLE_ROWS } from "@src/constants";

const renderComponent = ({ numberOfCells, numberOfRows }: TableSkeletonProps) =>
  render(
    <TableSkeleton numberOfCells={numberOfCells} numberOfRows={numberOfRows} />
  );

describe("TableSkeleton", () => {
  it("renders the correct number of rows and cells", () => {
    const numberOfCells = 3;
    const numberOfRows = 5;
    renderComponent({ numberOfCells, numberOfRows });

    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(numberOfRows);

    rows.forEach((row) => {
      const cells = row.querySelectorAll("td");
      expect(cells).toHaveLength(numberOfCells);
    });
  });

  it("defaults to 10 rows when numberOfRows is not provided", () => {
    const numberOfCells = 3;
    renderComponent({ numberOfCells });

    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(DEFAULT_TABLE_ROWS);
  });
});
