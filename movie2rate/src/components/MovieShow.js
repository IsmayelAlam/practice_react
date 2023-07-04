import { useEffect } from "react";
import useMovieFetch from "./useMovieFetch";

const style = {
  flex: "flex flex-col justify-between",
  mainDiv:
    "w-9/12 h-[calc(100%-4rem)] bg-slate-200 py-10 px-16 rounded-br-xl flex",
  listUtils:
    "w-full h-fit p-5 font-bold text-white mb-5 overflow-hidden rounded-md shadow-md cursor-pointer",
  button:
    "bg-violet-500 text-white py-3 font-bold rounded-full shadow-md block w-full mt-5 text-center",
  plot: "bg-indigo-400 rounded shadow p-5 mx-5 text-ellipsis overflow-hidden w-full max-h-64 overflow-y-scroll scrollbar",
};

export default function MovieShow({ movieId }) {
  const [movieData, isLoading, isError] = useMovieFetch(movieId, "movieData");

  useEffect(() => {
    document.title = movieData.Title
      ? `${movieData.Title} | movie2watch`
      : "movie2watch";
  }, [movieData]);

  let content;

  if (movieData.length === 0 && !isLoading && !isError) {
    content = (
      <div className="w-full font-bold m-5 text-2xl">
        Search for your favorite movies...
      </div>
    );
  } else if (isLoading) {
    content = (
      <div className={style.listUtils + " bg-indigo-400"}>Loading...</div>
    );
  } else if (isError) {
    content = (
      <div className={style.listUtils + " bg-red-400"}>{isError.message}</div>
    );
  } else {
    content = (
      <>
        <img
          src={movieData.Poster}
          alt={`${movieData.Poster} movie poster`}
          className="h-full w-[475px] rounded shadow"
        />

        <div className={style.flex}>
          <div className=" flex items-start flex-row justify-between mx-5 w-full">
            <div className="flex flex-col gap-2 w-fit">
              <div className="w-full">
                <h2
                  className={`font-bold w-96 inline-block ${
                    movieData.Title.length > 25 ? "text-2xl" : "text-4xl"
                  }`}
                >
                  {movieData.Title}
                </h2>
                <span className=" text-end">{movieData.Year}</span>
              </div>

              <p>Rated: {movieData.Rated}</p>
              <p>Released on {movieData.Released}</p>
              <p>Total runtime {movieData.Runtime}</p>
              <p>Type: {movieData.Type}</p>
              <p>Genre: {movieData.Genre}</p>
              <p>Language: {movieData.Language}</p>

              <p>{movieData.Country}</p>
              <hr className="border-black" />
              <p>Director: {movieData.Director}</p>
              <p>Writer: {movieData.Writer}</p>
              <p>Actors: {movieData.Actors}</p>
              <p>Awards: {movieData.Awards}</p>
            </div>

            <div className={style.flex + " h-full"}>
              <div className="bg-indigo-500 rounded shadow p-5 mb-5 h-fit text-white">
                <p>IMDb Rating: {movieData.imdbRating}</p>
                <p>IMDb votes: {movieData.imdbVotes}</p>
                <p>Box Office: {movieData.BoxOffice}</p>
              </div>

              <div>
                <button className={style.button}>+ Add Bookmark</button>
                <a
                  className={style.button}
                  href={`https://www.imdb.com/title/${movieData.imdbID}/videogallery/content_type-trailer/`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch Trailer
                </a>
              </div>
            </div>
          </div>

          <div className={style.plot}>
            <h3 className="font-bold text-2xl">Plot</h3>
            <p>{movieData.Plot}</p>
          </div>
        </div>
      </>
    );
  }

  return <div className={style.mainDiv}>{content}</div>;
}
