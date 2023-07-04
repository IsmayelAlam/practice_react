import { useEffect, useState } from "react";

export default function useMovieFetch(data, type) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState();

  let url = `https://www.omdbapi.com/?apikey=1c9a40f0&s=${data}`;

  if (type === "movieData") {
    url = `https://www.omdbapi.com/?apikey=1c9a40f0&i=${data}&plot=full`;
  }

  useEffect(() => {
    const controller = new AbortController();

    if (data <= 3) return;
    const fetchMovie = async function () {
      try {
        setIsLoading(true);

        const res = await fetch(url, { signal: controller.signal });

        if (!res.ok) {
          throw new Error(
            "Please check your internet connection and try again"
          );
        }

        const data = await res.json();

        if (res.ok) setMovies(data);
      } catch (error) {
        if (error.name !== "AbortError") setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();

    return function () {
      controller.abort();
    };
  }, [data, url]);

  return [movies, isLoading, isError];
}
