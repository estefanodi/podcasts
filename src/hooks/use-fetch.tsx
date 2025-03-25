import { useState, useCallback } from "react";

export const useFetch = <T,>(
  url: string,
  cacheName: string,
  cacheExpirationMs: number
) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const cache = await caches.open(cacheName);
      const cachedResponse = await cache.match(url);

      if (cachedResponse) {
        const cachedData = await cachedResponse.json();
        const { timestamp, data } = cachedData;

        if (Date.now() - timestamp < cacheExpirationMs) {
          setData(data);
          setIsLoading(false);
          return;
        }
      }

      const response = await fetch(url);
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);

      const fetchedData = await response.json();
      setData(fetchedData);

      const responseToCache = new Response(
        JSON.stringify({ timestamp: Date.now(), data: fetchedData })
      );
      cache.put(url, responseToCache);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [url, cacheName, cacheExpirationMs]);

  return { data, isLoading, error, fetchData };
};
