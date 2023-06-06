import { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const renderItems = items.map((item, i) => {
    const isExpanded = i === expandedIndex;

    const content = isExpanded && (
      <div className="bg-gray-500 text-white p-5">{item.content}</div>
    );

    const icon = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );

    return (
      <div key={item.id} className="border bg-gray-500 ">
        <div
          onClick={() =>
            isExpanded ? setExpandedIndex(-1) : setExpandedIndex(i)
          }
          className="flex items-center cursor-pointer bg-gray-50 p-3"
        >
          {item.label} {icon}
        </div>
        {content}
      </div>
    );
  });

  return <div>{renderItems}</div>;
}

export default Accordion;
