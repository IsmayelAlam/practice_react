import { useState } from "react";

function DropDown({ options, onChange, value }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOption = (value) => {
    onChange(value);
    setIsOpen(false);
  };

  const renderOptions = options.map((option) => (
    <div onClick={handleOption.bind(null, option.label)} key={option.value}>
      {option.label}
    </div>
  ));

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>{value || "Select..."}</div>
      {isOpen && <div>{renderOptions}</div>}
    </div>
  );
}

export default DropDown;
