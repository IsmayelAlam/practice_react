import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    setBooks([
      ...books,
      { id: Math.floor(Math.random() * 1000000 + books.length), title },
    ]);
  };

  const deleteBook = (id) => setBooks(books.filter((book) => book.id !== id));

  const editBook = (id, title) => {
    setBooks(books.map((book) => (book.id === id ? { ...book, title } : book)));
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBook} onEdit={editBook} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
