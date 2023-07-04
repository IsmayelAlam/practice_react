import MovieList from "./MovieList";
import useMovieFetch from "./useMovieFetch";

const style = {
  mainDiv:
    "w-3/12 bg-slate-200 h-[calc(100%-4rem)] overflow-y-scroll rounded-bl-xl scrollbar",
  listUtils:
    "w-full h-fit p-5 font-bold text-white mb-5 overflow-hidden rounded-md shadow-md cursor-pointer",
  mainList:
    "flex gap-5 w-full h-28 mb-5 bg-indigo-400 overflow-hidden rounded-md shadow-md cursor-pointer ",
  title: "font-semibold text-2xl text-white",
};

export default function SearchResult({ query, handleMovieId }) {
  const [search, isLoading, isError] = useMovieFetch(query);

  let content;

  if (isLoading) {
    content = (
      <li className={style.listUtils + " bg-indigo-400"}>Loading...</li>
    );
  } else if (isError) {
    content = (
      <li className={style.listUtils + " bg-red-400"}>{isError.message}</li>
    );
  } else {
    content = search?.Search?.map((movie) => (
      <MovieList
        movie={movie}
        onClick={handleMovieId.bind(null, movie.imdbID)}
        key={movie.imdbID}
      />
    ));
  }

  return (
    <div className={style.mainDiv}>
      <ul className="px-10 pt-10">{content}</ul>
    </div>
  );
}
