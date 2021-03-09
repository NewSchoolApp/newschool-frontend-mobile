import { useState } from "react";

export const useFetch = <T extends unknown>(fn: (arg?: any) => Promise<T>) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const fetch = async (args?: any) => {
    setLoading(true);
    try {
      const aux = await fn(args);
      setData(aux);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false)
    }
  };

  return {
    fetch,
    data,
    loading,
    error,
  }
};