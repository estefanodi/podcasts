import { render, screen } from "@testing-library/react";

import { Indicator } from ".";

describe("Indicator", () => {
  it("renders the indicator when isVisible is true", () => {
    render(<Indicator isVisible={true} />);

    const indicator = screen.getByTestId("header-indicator");

    expect(indicator).toBeInTheDocument();
  });

  it("doesn't render the indicator when isVisible is false", () => {
    render(<Indicator isVisible={false} />);

    const indicator = screen.queryByTestId("header-indicator");

    expect(indicator).not.toBeInTheDocument();
  });
});
