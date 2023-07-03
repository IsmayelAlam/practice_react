import useMovieFetch from "./useMovieFetch";

export default function SearchResult({ query }) {
  const [searchMovies, isLoading, isError] = useMovieFetch(query);

  let content;

  if (isLoading) {
    content = (
      <li className="w-full h-fit p-5 font-bold text-white mb-5 bg-indigo-400 overflow-hidden rounded-md shadow-md cursor-pointer ">
        Loading...
      </li>
    );
  } else if (isError) {
    console.log(isError);
    content = (
      <li className="w-full h-fit p-5 font-bold text-white mb-5 bg-red-400 overflow-hidden rounded-md shadow-md cursor-pointer ">
        {isError.message}
      </li>
    );
  } else {
    content = searchMovies?.map((movie) => (
      <li
        className="flex gap-5 w-full h-28 mb-5 bg-indigo-400 overflow-hidden rounded-md shadow-md cursor-pointer "
        key={movie.imdbID}
      >
        <img src={movie.Poster} alt={`${movie.Poster} movie poster`} />
        <div className="flex flex-col justify-center">
          <h3 className="font-semibold text-2xl text-white">{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
      </li>
    ));
  }

  return (
    <div className="w-3/12 bg-slate-200 h-[calc(100%-4rem)] overflow-y-scroll rounded-bl-xl scrollbar">
      <ul className="px-10 pt-10">{content}</ul>
    </div>
  );
}
