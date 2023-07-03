import { useEffect, useState } from "react";

export default function useMovieFetch(query) {
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState();

  useEffect(() => {
    if (query < 3) return;
    setIsLoading(true);
    const fetchMovie = async function () {
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?s=${query}&apikey=1c9a40f0`
        );

        if (!res.ok)
          throw new Error(
            "Wrong keyword, please check your internet connection and try again"
          );

        const data = await res.json();
        if (res.ok) setSearchMovies(data.Search);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [query]);

  return [searchMovies, isLoading, isError];
}
