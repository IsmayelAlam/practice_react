import MovieList from "./components/MovieList";
import Header from "./components/Header";
import SearchResult from "./components/SearchResult";

function App() {
  return (
    <div className="bg-slate-500 w-screen h-screen flex flex-wrap px-20 py-10">
      <Header />
      <SearchResult />
      <MovieList />
    </div>
  );
}

export default App;

// api:1c9a40f0
