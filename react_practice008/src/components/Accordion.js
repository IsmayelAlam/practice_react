import { useState } from "react";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const renderItems = items.map((item, i) => {
    const isExpanded = i === expandedIndex;

    return (
      <div key={item.id}>
        {item.label}
        <br />
        {isExpanded && item.content}
      </div>
    );
  });

  return <div>{renderItems}</div>;
}

export default Accordion;
