import BookShow from "./BookShow";

export default function BookList({ books, onDelete }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookShow key={book.id} book={book} onDelete={onDelete} />
      ))}
    </div>
  );
}
