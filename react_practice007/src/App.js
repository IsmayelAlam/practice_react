import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookEdit from "./components/BookEdit";
import BookList from "./components/BookList";
import BookShow from "./components/BookShow";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log(title);
  };

  return (
    <div>
      <BookCreate onCreate={createBook} />
      <BookShow />
      <BookList />
      <BookEdit />
    </div>
  );
}

export default App;
