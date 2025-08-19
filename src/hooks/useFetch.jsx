import { useState, useEffect, useCallback } from 'react';

const buildUrl = (base, id) => {
  if (id === null || id === undefined || id === '') return base;
  // Asegura que quede /resource/{id}/
  return base.endsWith('/') ? `${base}${id}/` : `${base}/${id}/`;
};

export function useFetch(url, postData = null, autoFetch = true, token = null, id = null) {
  const baseUrl = import.meta.env.VITE_API_HMCP + url;
  const fullUrl = buildUrl(baseUrl, id);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(autoFetch);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (overrideUrl = fullUrl, method = postData ? 'POST' : 'GET', body = postData, overrideToken = token) => {
      setLoading(true);
      setError(null);
      try {
        const headers = {
          'Content-Type': 'application/json',
          ...(overrideToken ? { Authorization: `Bearer ${overrideToken}` } : {}),
        };

        const opts = {
          method,
          headers,
          ...(body && { body: JSON.stringify(body) }),
        };

        const response = await fetch(overrideUrl, opts);
        if (!response.ok) {
          let errPayload;
          try {
            errPayload = await response.json();
          } catch {}
          throw errPayload || new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        return result;
      } catch (err) {
        setError(err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [fullUrl, postData, token]
  );

  useEffect(() => {
    if (!autoFetch) return;
    fetchData();
  }, [autoFetch, fetchData]);

  const fetchNow = useCallback(
    async (customUrl, payload = null, method = 'POST', customToken = null) => {
      const target = import.meta.env.VITE_API_HMCP + customUrl;
      return fetchData(target, method, payload, customToken || token);
    },
    [fetchData, token]
  );

  return { fetchNow, data, loading, error };
}
