import { useState, useCallback } from "react";

export const useFetch = <T,>(
  url: string
): {
  data: T | null;
  isLoading: boolean;
  error: string | null;
  fetchData: () => void;
} => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  return { data, isLoading, error, fetchData };
};
