import { useContext, useState } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/books";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);

  const { deleteBook } = useContext(BooksContext);

  const handleDeleteClick = () => {
    deleteBook(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => setShowEdit(false);

  let content = <h3>{book.title}</h3>;
  if (showEdit) content = <BookEdit book={book} onSubmit={handleSubmit} />;

  return (
    <div className="book-show">
      <img
        src={`https://picsum.photos/seed/${book.id + 100}/300/300`}
        alt="books"
      />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
