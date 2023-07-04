import MovieShow from "./components/MovieShow";
import Header from "./components/Header";
import SearchResult from "./components/SearchResult";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [movieId, setMovieId] = useState("");

  const handelChange = (e) => setQuery(e.target.value);
  const handleMovieId = (id) => setMovieId(id);
  const handleBookmark = (movie) => console.log(movie.Title);

  return (
    <div className="bg-slate-500 w-screen h-screen flex flex-wrap px-20 py-10 overflow-hidden">
      <Header
        handelChange={handelChange}
        query={query}
        handleMovieId={handleMovieId}
      />
      <SearchResult query={query} handleMovieId={handleMovieId} />
      <MovieShow movieId={movieId} bookmark={handleBookmark} />
    </div>
  );
}

export default App;
