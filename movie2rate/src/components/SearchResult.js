import { useEffect, useState } from "react";

export default function SearchResult({ query }) {
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query < 3) return;
    const fetchMovie = async function () {
      const res = await fetch(
        `https://www.omdbapi.com/?s=${query}&apikey=1c9a40f0`
      );
      const data = await res.json();
      setSearchMovies(data.Search);
    };

    fetchMovie();
  }, [query]);

  if (isLoading) content = <li>Loading...</li>;

  let content = (
    <div className="w-3/12 bg-slate-200 h-[calc(100%-4rem)] overflow-y-scroll rounded-bl-xl scrollbar">
      <ul className="px-10 pt-10">
        {searchMovies?.map((movie) => (
          <li
            className="flex gap-5 w-full h-28 mb-5 bg-indigo-400 overflow-hidden rounded-md shadow-md cursor-pointer "
            key={movie.imdbID}
          >
            <img src={movie.Poster} alt={`${movie.Poster} movie poster`} />
            <div className="flex flex-col justify-center">
              <h3 className="font-semibold text-2xl text-white">
                {movie.Title}
              </h3>
              <p>{movie.Year}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return content;
}
