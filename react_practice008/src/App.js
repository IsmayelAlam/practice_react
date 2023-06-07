// import ButtonPage from "./pages/ButtonPage";
// import AccordionPage from "./pages/AccordionPage";

import { useState } from "react";
import DropDown from "./components/DropDown";

function App() {
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
    <div className="bg-slate-700 h-screen">
      <DropDown options={options} onChange={handleSelect} value={selected} />
    </div>
  );
}

export default App;
