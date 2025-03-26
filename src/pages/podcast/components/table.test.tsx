import { render, screen } from "@testing-library/react";

import { Table, type TableProps } from "./table";
import { TABLE_HEADER_ITEMS } from "@src/constants";

const mockChildren = "Mock children";

const renderComponent = ({ isLoading, headerItems }: TableProps) =>
  render(
    <Table isLoading={isLoading} headerItems={headerItems}>
      {mockChildren}
    </Table>
  );

describe("Table Component", () => {
  it("renders headers correctly", () => {
    renderComponent({ isLoading: false, headerItems: TABLE_HEADER_ITEMS });

    TABLE_HEADER_ITEMS.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });

  it("renders TableSkeleton when loading", () => {
    renderComponent({ isLoading: true, headerItems: TABLE_HEADER_ITEMS });

    const SkeletonComponent = screen.getByTestId("table-skeleton");

    expect(SkeletonComponent).toBeInTheDocument();
  });

  it("renders children when not loading", () => {
    renderComponent({ isLoading: false, headerItems: TABLE_HEADER_ITEMS });

    expect(screen.getByText(mockChildren)).toBeInTheDocument();
  });
});
