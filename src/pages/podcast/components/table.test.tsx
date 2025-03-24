import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import { Table } from "./table";
import { formatDate, formatMilliseconds } from "@utils/dates-and-time-helpers";
import { mockEpisodes } from "@src/mocks/episodes";

jest.mock("@src/constants", () => ({
  TABLE_HEADER: ["Track", "Release Date", "Duration"],
}));

jest.mock("@utils/dates-and-time-helpers", () => ({
  formatDate: jest
    .fn()
    .mockImplementation((date, format) => `formatted ${date}`),
  formatMilliseconds: jest.fn().mockImplementation((ms) => `formatted ${ms}`),
}));

jest.mock("@src/router", () => ({
  paths: {
    episode: jest
      .fn()
      .mockImplementation((collectionId, trackId) => `/episode/${trackId}`),
  },
}));

describe("Table component", () => {
  describe("Table", () => {
    test("renders table with correct headers", () => {
      render(
        <MemoryRouter>
          <Table episodes={mockEpisodes.results} />
        </MemoryRouter>
      );

      // Check headers
      expect(screen.getByText("Track")).toBeInTheDocument();
      expect(screen.getByText("Release Date")).toBeInTheDocument();
      expect(screen.getByText("Duration")).toBeInTheDocument();
    });

    test("renders table rows with correct data", () => {
      render(
        <MemoryRouter>
          <Table episodes={mockEpisodes.results} />
        </MemoryRouter>
      );

      // Check first row
      expect(screen.getByText("Episode 1")).toBeInTheDocument();
      expect(
        screen.getByText("formatted 2025-03-22T12:00:00Z")
      ).toBeInTheDocument();
      expect(screen.getByText("formatted 2569000")).toBeInTheDocument();

      // Check second row
      expect(screen.getByText("Episode 2")).toBeInTheDocument();
      expect(
        screen.getByText("formatted 2025-03-23T12:00:00Z")
      ).toBeInTheDocument();
      expect(screen.getByText("formatted 1234567")).toBeInTheDocument();
    });

    test("renders correct links for each episode", () => {
      render(
        <MemoryRouter>
          <Table episodes={mockEpisodes.results} />
        </MemoryRouter>
      );

      // Check link for first row
      const link1 = screen.getByText("Episode 1");
      expect(link1).toHaveAttribute("href", "/episode/1");

      // Check link for second row
      const link2 = screen.getByText("Episode 2");
      expect(link2).toHaveAttribute("href", "/episode/2");
    });

    test("formats date and time correctly", () => {
      render(
        <MemoryRouter>
          <Table episodes={mockEpisodes.results} />
        </MemoryRouter>
      );

      // Verify the formatDate and formatMilliseconds function calls
      expect(formatDate).toHaveBeenCalledWith(
        "2025-03-22T12:00:00Z",
        "dd/MM/yyyy"
      );
      expect(formatMilliseconds).toHaveBeenCalledWith(2569000);
    });
  });
});
