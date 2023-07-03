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
    if (data < 3) return;
    setIsLoading(true);
    const fetchMovie = async function () {
      try {
        const res = await fetch(url);

        if (!res.ok)
          throw new Error(
            "Wrong keyword, please check your internet connection and try again"
          );

        const data = await res.json();
        console.log(data);

        if (res.ok) setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [data, url]);

  return [movies, isLoading, isError];
}
