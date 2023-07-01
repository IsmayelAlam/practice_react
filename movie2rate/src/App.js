import MovieList from "./components/MovieList";
import Header from "./components/Header";
import SearchResult from "./components/SearchResult";

function App() {
  return (
    <div className="bg-slate-700 h-screen w-screen">
      <Header />
      <SearchResult />
      <MovieList />
    </div>
  );
}

export default App;
