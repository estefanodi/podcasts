import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import { Podcasts } from ".";
import { FILTER_INPUT_PLACEHOLDER } from "@src/constants";
import { mockPodcasts as podcasts } from "@src/mocks/podcasts";

const mockPodcasts = [podcasts[0], podcasts[1]];
const mockSetInputWithBadgeValue = jest.fn();
const mockPodcastsCounter = mockPodcasts.length;
const mockInputWithBadgeValue = "test search";

jest.mock("@contexts/app-context", () => ({
  useAppContext: () => ({
    podcastsCounter: mockPodcastsCounter,
    setInputWithBadgeValue: mockSetInputWithBadgeValue,
    inputWithBadgeValue: mockInputWithBadgeValue,
    podcasts: mockPodcasts,
  }),
}));

const renderComponent = () =>
  render(
    <MemoryRouter>
      <Podcasts />
    </MemoryRouter>
  );

describe("Podcasts Component", () => {
  beforeEach(() => {
    mockSetInputWithBadgeValue.mockClear();
  });

  it("renders InputWithBadge with correct placeholder and value", () => {
    renderComponent();

    const inputElement = screen.getByPlaceholderText(FILTER_INPUT_PLACEHOLDER);

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(mockInputWithBadgeValue);
  });

  it("calls setInputWithBadgeValue when input value changes", () => {
    renderComponent();

    const mockInputValue = "test value";
    const inputElement = screen.getByPlaceholderText(FILTER_INPUT_PLACEHOLDER);
    fireEvent.change(inputElement, { target: { value: mockInputValue } });

    expect(mockSetInputWithBadgeValue).toHaveBeenNthCalledWith(
      1,
      mockInputValue
    );
  });

  it("displays the correct number of results from podcastsCounter", () => {
    renderComponent();

    const badge = screen.getByText(mockPodcastsCounter.toString());

    expect(badge).toBeInTheDocument();
  });

  it("renders GridContainer", () => {
    renderComponent();

    const gridContainer = screen.getByTestId("podcasts-container");

    expect(gridContainer).toBeInTheDocument();
  });
});
