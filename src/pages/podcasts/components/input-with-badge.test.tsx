import { render, screen, fireEvent } from "@testing-library/react";

import { InputWithBadge } from "./input-with-badge";

const mockPlaceholder = "Search...";
const mockOnChange = jest.fn();

const renderComponent = ({
  resultsCounter = 5,
  placeholder = mockPlaceholder,
  onChange = mockOnChange,
} = {}) =>
  render(
    <InputWithBadge
      resultsCounter={resultsCounter}
      placeholder={placeholder}
      onChange={onChange}
      value=""
    />
  );

describe("InputWithBadge", () => {
  it("renders the component correctly", () => {
    renderComponent();

    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(mockPlaceholder)).toBeInTheDocument();
  });

  it("calls onChange handler when input changes", () => {
    renderComponent();

    const inputElement = screen.getByPlaceholderText(mockPlaceholder);

    fireEvent.change(inputElement, { target: { value: "test" } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it("displays 0 when resultsCounter is 0", () => {
    renderComponent({ resultsCounter: 0 });

    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("updates the badge when resultsCounter prop changes", () => {
    const { rerender } = renderComponent();

    rerender(
      <InputWithBadge
        resultsCounter={10}
        placeholder={mockPlaceholder}
        onChange={mockOnChange}
        value=""
      />
    );

    expect(screen.getByText("10")).toBeInTheDocument();
  });
});
