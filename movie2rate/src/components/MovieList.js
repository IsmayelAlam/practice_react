const style = {
  mainDiv:
    "w-3/12 bg-slate-200 h-[calc(100%-4rem)] overflow-y-scroll rounded-bl-xl scrollbar",
  listUtils:
    "w-full h-fit p-5 font-bold text-white mb-5 overflow-hidden rounded-md shadow-md cursor-pointer",
  mainList:
    "flex gap-5 w-full h-28 mb-5 bg-indigo-400 overflow-hidden rounded-md shadow-md cursor-pointer ",
  title: "font-semibold text-white w-60",
};

export default function MovieList({ movie, ...rest }) {
  console.log(movie.Title.length);
  return (
    <li className={style.mainList} key={movie.imdbID} {...rest}>
      <img
        src={movie.Poster}
        alt={`${movie.Poster} movie poster`}
        className="w-20"
      />
      <div className="flex flex-col justify-center">
        <h2
          className={
            style.title +
            (movie.Title.length > 15 ? " truncate text-lg" : " text-2xl")
          }
        >
          {movie.Title}
        </h2>
        <p>{movie.Year}</p>
      </div>
    </li>
  );
}
