import BookEdit from "./BookEdit";

export default function BookShow({ book }) {
  return <div className="book-show">{book.title}</div>;
}