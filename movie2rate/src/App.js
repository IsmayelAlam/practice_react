import MovieShow from "./components/MovieShow";
import Header from "./components/Header";
import SearchResult from "./components/SearchResult";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [movieId, setMovieId] = useState("");
  // const [bookmark, setBookmark] = useState([]);

  const [bookmark, setBookmark] = useState(() => {
    const movies = JSON.parse(localStorage.getItem("bookmark"));
    if (movies) return movies;
    return [];
  });

  console.log(bookmark);

  const handelChange = (e) => setQuery(e.target.value);
  const handleMovieId = (id) => setMovieId(id);

  const handleAddBookmark = (movie) => {
    if (bookmark.some((bookMovie) => movie.imdbID === bookMovie.imdbID)) return;

    const movieBookmark = {
      Title: movie.Title,
      Year: movie.Year,
      Poster: movie.Poster,
      imdbID: movie.imdbID,
    };

    setBookmark([movieBookmark, ...bookmark]);
  };

  const handleDeleteBookmark = (id) => {
    const removed = bookmark.filter((movie) => movie.imdbID !== id);
    setBookmark(removed);
  };

  useEffect(() => {
    localStorage.setItem("bookmark", JSON.stringify(bookmark));
  }, [bookmark]);

  return (
    <div className="bg-slate-500 w-screen h-screen flex flex-wrap px-20 py-10 overflow-hidden">
      <Header
        handelChange={handelChange}
        query={query}
        handleMovieId={handleMovieId}
        bookmarkMovie={bookmark}
        handleDeleteBookmark={handleDeleteBookmark}
      />
      <SearchResult query={query} handleMovieId={handleMovieId} />
      <MovieShow movieId={movieId} bookmark={handleAddBookmark} />
    </div>
  );
}

export default App;
