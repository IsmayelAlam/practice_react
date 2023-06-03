import { useState } from "react";

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
    <div>
      <form onSubmit={handelFormSubmit}>
        <input type="text" required onChange={handleChange} value={term} />
      </form>
    </div>
  );
}
