import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    setBooks([...books, { id: books.length, title }]);
  };

  const deleteBook = (id) => setBooks(books.filter((book) => book.id !== id));

  const editBook = (id, title) => {
    setBooks(books.map((book) => (book.id === id ? { ...book, title } : book)));
  };

  return (
    <div>
      <BookList books={books} onDelete={deleteBook} onEdit={editBook} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
