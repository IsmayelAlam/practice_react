import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    setBooks([...books, { id: books.length, title }]);
  };

  const deleteBook = (id) => setBooks(books.filter((book) => book.id !== id));

  return (
    <div>
      <BookList books={books} onDelete={deleteBook} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
