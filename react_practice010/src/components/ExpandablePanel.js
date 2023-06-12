import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

export default function ExpandablePanel({ header, children }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => setExpanded(!expanded);

  return (
    <div className="mb-2 rounded bg-slate-700 text-white">
      <div className="flex p-2 justify-between items-center">
        <div className="flex flex-row items-center justify-between gap-3">
          {header}
        </div>
        <div onClick={handleExpand} className="cursor-pointer">
          {expanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {expanded && <div className="p-2 border-t">children</div>}
    </div>
  );
}
