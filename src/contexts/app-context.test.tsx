import { useEffect } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import { AppProvider, useAppContext } from "@src/contexts/app-context";
import { useFetch } from "@src/hooks/use-fetch";
import { FETCH_PODCASTS_URL } from "@src/constants";

let mockFetchData = jest.fn();
jest.mock("@src/hooks/use-fetch", () => ({
  useFetch: jest.fn(() => ({
    data: null,
    isLoading: false,
    error: null,
    fetchData: mockFetchData,
  })),
}));

const mockEpisodesData = { results: [{ id: "101", title: "Episode 1" }] };
const mockPodcastsData = {
  feed: { entry: [{ id: "1", title: "Test Podcast" }] },
};

const renderComponent = ({ filter = "", podcastId = "" } = {}) =>
  render(
    <MemoryRouter>
      <AppProvider>
        <TestComponent filter={filter} podcastId={podcastId} />
      </AppProvider>
    </MemoryRouter>
  );

describe("AppProvider", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders children and provides default context values", () => {
    renderComponent();

    expect(screen.getByText(/podcasts count: 0/i)).toBeInTheDocument();
    expect(screen.getByText(/loading: false/i)).toBeInTheDocument();
  });

  it("fetches podcasts when mounted on '/'", async () => {
    renderComponent();

    await waitFor(() => {
      expect(mockFetchData).toHaveBeenCalled();
    });
  });

  it("updates context state when podcasts data is fetched", async () => {
    (useFetch as jest.Mock).mockImplementation(() => ({
      data: mockPodcastsData,
      isLoading: false,
      fetchData: jest.fn(),
    }));
    renderComponent();

    expect(await screen.findByText(/podcasts count: 1/i)).toBeInTheDocument();
  });

  it("fetches episodes when podcastId changes", async () => {
    const mockFetchEpisodes = jest.fn();
    (useFetch as jest.Mock).mockImplementation((url) => {
      if (url !== FETCH_PODCASTS_URL) {
        return {
          data: mockEpisodesData,
          isLoading: false,
          fetchData: mockFetchEpisodes,
        };
      }
      return {
        data: mockPodcastsData,
        isLoading: false,
        fetchData: jest.fn(),
      };
    });

    renderComponent({ podcastId: "1" });

    await waitFor(() => {
      expect(mockFetchEpisodes).toHaveBeenCalled();
    });

    expect(await screen.findByText(/episodes count: 1/i)).toBeInTheDocument();
  });
});

const TestComponent: React.FC<{ filter?: string; podcastId?: string }> = ({
  filter = "",
  podcastId,
}) => {
  const {
    podcastsCounter,
    podcasts,
    isLoading,
    setInputWithBadgeValue,
    setPodcastId: setId,
    episodesCount,
  } = useAppContext();

  useEffect(() => {
    if (filter) setInputWithBadgeValue(filter);
    if (podcastId) setId(podcastId);
  }, [filter, podcastId, setInputWithBadgeValue, setId]);

  return (
    <div>
      <p>Podcasts Count: {podcastsCounter}</p>
      <p>Episodes Count: {episodesCount}</p>
      <p>Loading: {isLoading.toString()}</p>
    </div>
  );
};
