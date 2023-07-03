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
    if (data <= 3) return;
    const fetchMovie = async function () {
      try {
        setIsLoading(true);

        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(
            "Please check your internet connection and try again"
          );
        }

        const data = await res.json();

        if (res.ok) setMovies(data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [data, url]);

  return [movies, isLoading, isError];
}
