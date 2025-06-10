import { useEffect, useState } from "react";

const KEY = "1c313a1e";

export function useMovies(query, callback) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();

      // callback?.();

      async function fetchMOvies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok) {
            throw new Error("something went wrong");
          }

          const data = await res.json();

          if (data.Response === "false") throw new Error("movie not found");

          setMovies(data.Search);
          console.log(data.Search);
        } catch (err) {
          setError(err.messagw);
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      //   closeMovie();
      fetchMOvies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, error };
}
