import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import { GridContainer } from "./grid-container";
import { useAppContext } from "@contexts/app-context";
import { Podcast } from "@src/types";
import { mockPodcasts as podcasts } from "@src/mocks/podcasts";
import { CARD_AUTHOR } from "@src/constants";

jest.mock("@contexts/app-context", () => ({
  useAppContext: jest.fn(),
}));

const renderComponent = () =>
  render(
    <MemoryRouter>
      <GridContainer />
    </MemoryRouter>
  );

describe("GridContainer Component", () => {
  const mockPodcasts: Podcast[] = [podcasts[0], podcasts[1]];

  it("renders the GridContainer component", () => {
    (useAppContext as jest.Mock).mockReturnValue({ podcasts: [] });

    renderComponent();
    const GridComponent = screen.getByTestId("podcasts-container");

    expect(GridComponent).toBeInTheDocument();
  });

  it("renders the correct number of podcasts", () => {
    (useAppContext as jest.Mock).mockReturnValue({ podcasts: mockPodcasts });

    renderComponent();
    const podcastCards = screen.getAllByTestId("podcast-card");

    expect(podcastCards.length).toBe(mockPodcasts.length);
  });

  it("renders podcast details correctly", () => {
    (useAppContext as jest.Mock).mockReturnValue({ podcasts: mockPodcasts });

    renderComponent();

    expect(screen.getByText(podcasts[0].title.label)).toBeInTheDocument();
    expect(
      screen.getByText(`${CARD_AUTHOR}${podcasts[0]["im:artist"].label}`)
    ).toBeInTheDocument();
    expect(screen.getByText(podcasts[1].title.label)).toBeInTheDocument();
    expect(
      screen.getByText(`${CARD_AUTHOR}${podcasts[1]["im:artist"].label}`)
    ).toBeInTheDocument();
  });
});
