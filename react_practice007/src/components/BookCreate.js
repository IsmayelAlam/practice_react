import { useState } from "react";

export default function BookCreate({ onCreate }) {
  const [title, setTitle] = useState([]);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onCreate(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          value={title}
          onChange={handleChange}
          placeholder="Add new book"
          className="input"
        />
        <button type="submit" className="button">
          Add Book
        </button>
      </form>
    </div>
  );
}