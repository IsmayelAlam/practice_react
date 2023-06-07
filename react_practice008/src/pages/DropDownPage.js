import DropDown from "../components/DropDown";

import { useState } from "react";

function DropDownPage() {
  const [selected, setSelected] = useState(null);

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  const handleSelect = (option) => {
    setSelected(option);
  };

  return (
    <div className="bg-slate-700 h-screen flex">
      <DropDown options={options} onChange={handleSelect} value={selected} />
    </div>
  );
}

export default DropDownPage;
