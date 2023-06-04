import { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [newTitle, setNewTitle] = useState(book.title);

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(book.id, newTitle);
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
