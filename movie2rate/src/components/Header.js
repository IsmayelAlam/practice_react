import { useState } from "react";
import { BsBookmarks } from "react-icons/bs";
import MovieList from "./MovieList";

const style = {
  header:
    "w-full bg-purple-500 h-16 col-span-2 flex items-center justify-between px-10 rounded-t-xl font-bold text-white",
  h1: "flex items-center bg-blue-700 shadow-md rounded-2xl px-5 py-1 text-xl cursor-pointer ",
  logo: "text-4xl text-red-400 rotate-12 italic h-10 w-10 text-center rounded-full -mx-4 shadow",
  input:
    "font-normal w-3/6 h-12 rounded-xl bg-purple-400 px-3 py-2 border-2 border-transparent focus:border-white outline-none shadow text-black placeholder:text-white",
  icon: "cursor-pointer hover:bg-slate-300/20 p-2.5 rounded-full relative",
  bookmark: "absolute h-[50rem] top-0 -right-10",
  list: "p-5 w-96 bg-slate-300 h-[40rem] mt-20 overflow-y-scroll scrollbar rounded-l-md shadow",
};

export default function Header({ handelChange, query, handleMovieId }) {
  const [showBookmark, setShowBookmark] = useState(false);

  const handelClick = () => {};

  const bookmark = (
    <div className={style.bookmark}>
      <ul className={style.list}>
        {movies.map((movie) => (
          <MovieList
            movie={movie}
            key={movie.imdbID}
            bookmark
            onMouseDown={handleMovieId.bind(null, movie.imdbID)}
            onClick={handelClick}
          />
        ))}
      </ul>
    </div>
  );

  return (
    <header className={style.header}>
      <h1 className={style.h1}>
        <p>Movie</p>
        <p className={style.logo}>2</p>
        <p>watch</p>
      </h1>
      <input
        type="text"
        className={style.input}
        placeholder="Search you favorite movie here..."
        autoFocus
        value={query}
        onChange={handelChange}
      />
      <div
        className={style.icon}
        onMouseEnter={setShowBookmark.bind(null, !showBookmark)}
        onMouseLeave={setShowBookmark.bind(null, !showBookmark)}
      >
        <BsBookmarks className=" w-7 h-7" />
        {showBookmark && bookmark}
      </div>
    </header>
  );
}

let movies = [
  {
    Title: "Iron Man",
    Year: "2008",
    imdbID: "tt0371746",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
  },
  {
    Title: "Iron Man 3",
    Year: "2013",
    imdbID: "tt1300854",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Iron Man 2",
    Year: "2010",
    imdbID: "tt1228705",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZGVkNDAyM2EtYzYxYy00ZWUxLTgwMjgtY2VmODE5OTk3N2M5XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "The Iron Giant",
    Year: "1999",
    imdbID: "tt0129167",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYzBjZTNkMzQtZmNkOC00Yzk0LTljMjktZjk3YWVlZjY3NTk2XkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg",
  },
  {
    Title: "The Man in the Iron Mask",
    Year: "1998",
    imdbID: "tt0120744",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZjM2YzcxMmQtOTc2Mi00YjdhLWFlZjUtNmFmMDQzYzU2YTk5L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Iron Fist",
    Year: "2017–2018",
    imdbID: "tt3322310",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjI5Mjg1NDcyOV5BMl5BanBnXkFtZTgwMjAxOTQ5MTI@._V1_SX300.jpg",
  },
  {
    Title: "The Iron Lady",
    Year: "2011",
    imdbID: "tt1007029",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BODEzNDUyMDE3NF5BMl5BanBnXkFtZTcwMTgzOTg3Ng@@._V1_SX300.jpg",
  },
  {
    Title: "Iron Sky",
    Year: "2012",
    imdbID: "tt1034314",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM2MDg5MzgxNF5BMl5BanBnXkFtZTcwODUzNjMxOA@@._V1_SX300.jpg",
  },
  {
    Title: "The Man with the Iron Fists",
    Year: "2012",
    imdbID: "tt1258972",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTg5ODI3ODkzOV5BMl5BanBnXkFtZTcwMTQxNjUwOA@@._V1_SX300.jpg",
  },
  {
    Title: "3-Iron",
    Year: "2004",
    imdbID: "tt0423866",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYzBmODdkMzItNTk0NS00MDc5LWFmZjgtNmNlZmNhMzFlMmQ3XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_SX300.jpg",
  },
];
