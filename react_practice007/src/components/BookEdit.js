import { useContext, useState } from "react";
import BooksContext from "../context/books";

function BookEdit({ book, onSubmit }) {
  const [newTitle, setNewTitle] = useState(book.title);

  const { editBook } = useContext(BooksContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    editBook(book.id, newTitle);
    onSubmit();
    setNewTitle("");
  };

  const handleChange = (event) => setNewTitle(event.target.value);

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        className="input "
        required
        value={newTitle}
        onChange={handleChange}
      />
      <button type="submit" className="button is-primary">
        Save
      </button>
    </form>
  );
}

export default BookEdit;
