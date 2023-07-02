export default function SearchResult() {
  return (
    <div className="w-3/12 bg-slate-200 h-[calc(100%-4rem)] overflow-y-scroll rounded-bl-xl scrollbar">
      <ul className="px-10 pt-10">
        {initData.Search.map((movie) => (
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
}

const initData = {
  Search: [
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
  ],
  totalResults: "779",
  Response: "True",
};
