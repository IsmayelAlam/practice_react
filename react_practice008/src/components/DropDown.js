import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import className from "classnames";

function DropDown({ options, onChange, value }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOption = (value) => {
    onChange(value);
    setIsOpen(false);
  };

  const classes = className(
    "border rounded shadow cursor-pointer bg-white p-3 w-full"
  );

  const renderOptions = options.map((option) => (
    <div
      className="hover:bg-sky-100 rounded cursor-pointer p-1"
      onClick={handleOption.bind(null, option.label)}
      key={option.value}
    >
      {option.label}
    </div>
  ));

  return (
    <div className="w-48 relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={"flex justify-between items-center " + classes}
      >
        {value || "Select..."}
        <GoChevronDown />
      </div>
      {isOpen && (
        <div className={"absolute top-full" + classes}>{renderOptions}</div>
      )}
    </div>
  );
}

export default DropDown;
