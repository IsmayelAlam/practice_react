import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handelFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
    setTerm("");
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar ">
      <form onSubmit={handelFormSubmit}>
        <input
          type="text"
          placeholder="Search images"
          required
          value={term}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
