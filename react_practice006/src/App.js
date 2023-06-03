import searchImage from "./api";
import SearchBar from "./components/SearchBar";

function App() {
  function handelSubmit(term) {
    const images = searchImage(term);
    console.log(images);
  }

  return (
    <div>
      <SearchBar onSubmit={handelSubmit} />
    </div>
  );
}

export default App;
