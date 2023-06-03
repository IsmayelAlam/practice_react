import { useState } from "react";
import searchImage from "./api";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

function App() {
  const [images, setImages] = useState([]);

  async function handelSubmit(term) {
    const images = await searchImage(term);
    setImages(images);
  }

  return (
    <div>
      <SearchBar onSubmit={handelSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
