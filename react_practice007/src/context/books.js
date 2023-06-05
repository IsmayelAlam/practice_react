import { createContext, useCallback, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  }, []);

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    const newBooks = [...books, response.data];

    setBooks(newBooks);
  };

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    setBooks(books.filter((book) => book.id !== id));
  };

  const editBook = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, ...response.data } : book
      )
    );
  };

  const shearValues = {
    books,
    fetchBooks,
    createBook,
    deleteBook,
    editBook,
  };

  return (
    <BooksContext.Provider value={shearValues}>
      {children}
    </BooksContext.Provider>
  );
}

export default BooksContext;
export { Provider };
