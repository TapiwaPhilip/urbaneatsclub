
import { useState, useEffect } from 'react';

interface CacheOptions {
  key: string;
  ttl?: number; // Time to live in milliseconds
}

export function useCache<T>(
  fetchFn: () => Promise<T>,
  options: CacheOptions
): { data: T | null; isLoading: boolean; error: Error | null; refresh: () => Promise<void> } {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const { key, ttl = 1000 * 60 * 5 } = options; // Default TTL: 5 minutes

  async function fetchData() {
    setIsLoading(true);
    setError(null);
    
    try {
      // Try to get from cache first
      const cachedData = localStorage.getItem(`cache_${key}`);
      
      if (cachedData) {
        const { value, timestamp } = JSON.parse(cachedData);
        
        // Check if cache is still valid
        if (Date.now() - timestamp < ttl) {
          setData(value);
          setIsLoading(false);
          return;
        }
      }
      
      // Fetch fresh data
      const result = await fetchFn();
      
      // Save to cache
      localStorage.setItem(
        `cache_${key}`,
        JSON.stringify({
          value: result,
          timestamp: Date.now()
        })
      );
      
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error occurred'));
    } finally {
      setIsLoading(false);
    }
  }

  const refresh = async () => {
    await fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [key]);

  return { data, isLoading, error, refresh };
}

// Helper function to clear all cache or specific cache items
export function clearCache(key?: string): void {
  if (key) {
    localStorage.removeItem(`cache_${key}`);
  } else {
    // Clear all cache items
    for (let i = 0; i < localStorage.length; i++) {
      const storageKey = localStorage.key(i);
      if (storageKey && storageKey.startsWith('cache_')) {
        localStorage.removeItem(storageKey);
      }
    }
  }
}
