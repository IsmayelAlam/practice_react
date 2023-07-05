import { AiOutlineCloseCircle } from "react-icons/ai";

const style = {
  list: "flex gap-5 w-full h-28 mb-5 bg-indigo-300 overflow-hidden rounded-md shadow-md cursor-pointer last:mb-0 relative",
  title: "font-semibold text-white w-60",
};

export default function MovieList({
  movie,
  bookmark,
  handleDeleteBookmark,
  ...rest
}) {
  const handlClick = () => handleDeleteBookmark(movie.imdbID);
  return (
    <li className={style.list} {...rest}>
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
      {bookmark && (
        <button
          className="absolute top-2 right-2 text-black"
          onClick={handlClick}
        >
          <AiOutlineCloseCircle className="h-6 w-6" />
        </button>
      )}
    </li>
  );
}
