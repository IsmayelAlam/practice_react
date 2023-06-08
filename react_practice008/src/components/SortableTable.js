import { useState } from "react";
import Table from "./Table";
import {
  HiBarsArrowDown,
  HiBarsArrowUp,
  HiArrowsUpDown,
} from "react-icons/hi2";

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const { config, data } = props;

  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    switch (sortOrder) {
      case null:
        setSortOrder("asc");
        setSortBy(label);
        break;
      case "asc":
        setSortOrder("desc");
        setSortBy(label);
        break;
      case "desc":
        setSortOrder(null);
        break;
      default:
        return;
    }
  };

  let sortedData = data;

  if (sortBy && sortOrder) {
    const { sortValue } = config.find((row) => row.label === sortBy);

    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string")
        return valueA.localeCompare(valueB) * reverseOder;

      return (valueA - valueB) * reverseOder;
    });
  }

  const updateConfig = config.map((row) => {
    if (!row.sortValue) return row;

    return {
      ...row,
      header: () => (
        <th
          onClick={handleClick.bind(null, row.label)}
          className="flex items-center cursor-pointer hover:bg-slate-200"
        >
          {getIcon(row.label, sortBy, sortOrder)}
          {row.label}
        </th>
      ),
    };
  });

  return <Table {...props} data={sortedData} config={updateConfig} />;
}

function getIcon(label, sortBy, sortOrder) {
  if (label !== sortBy || sortOrder === null) return <HiArrowsUpDown />;
  if (sortOrder === "asc") return <HiBarsArrowUp />;
  if (sortOrder === "desc") return <HiBarsArrowDown />;
}

export default SortableTable;
