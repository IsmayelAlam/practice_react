import MovieList from "./components/MovieList";
import Header from "./components/Header";
import SearchResult from "./components/SearchResult";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const handelChange = (e) => setQuery(e.target.value);

  return (
    <div className="bg-slate-500 w-screen h-screen flex flex-wrap px-20 py-10">
      <Header handelChange={handelChange} query={query} />
      <SearchResult query={query} />
      <MovieList />
    </div>
  );
}

export default App;

// api:1c9a40f0
