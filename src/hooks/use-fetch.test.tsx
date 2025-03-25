import { render, act, waitFor } from "@testing-library/react";

import { useFetch } from "./use-fetch";

describe("useFetch hook", () => {
  const url = "https://example.com/api";
  const cacheName = "testCache";
  const cacheExpirationMs = 60000;
  const errorStatuText = "Internal Server Error";
  let mockCache: Cache;

  beforeEach(() => {
    jest.clearAllMocks();

    mockCache = {
      match: jest.fn().mockResolvedValue(null),
      put: jest.fn(),
    } as unknown as Cache;

    global.caches = {
      open: jest.fn().mockResolvedValue(mockCache),
    } as unknown as CacheStorage;
  });

  it("starts with initial state", () => {
    let result: any;
    function TestComponent() {
      result = useFetch(url, cacheName, cacheExpirationMs);
      return null;
    }

    render(<TestComponent />);

    expect(result.data).toBeNull();
    expect(result.isLoading).toBe(false);
    expect(result.error).toBeNull();
  });

  it("fetches data and update state", async () => {
    const mockData = { message: "Success" };

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValue(mockData),
    });

    let result: any;
    function TestComponent() {
      result = useFetch<typeof mockData>(url, cacheName, cacheExpirationMs);
      return null;
    }

    render(<TestComponent />);

    await act(async () => {
      result.fetchData();
    });

    await waitFor(() => expect(result.data).toEqual(mockData));

    expect(result.isLoading).toBe(false);
    expect(result.error).toBeNull();
    expect(mockCache.put).toHaveBeenCalled();
  });

  it("handles fetch errors", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      statusText: errorStatuText,
    } as Response);

    let result: any;
    function TestComponent() {
      result = useFetch(url, cacheName, cacheExpirationMs);
      return null;
    }

    render(<TestComponent />);

    await act(async () => {
      result.fetchData();
    });

    expect(result.error).toBe(`Error: ${errorStatuText}`);
    expect(result.data).toBeNull();
  });
});
