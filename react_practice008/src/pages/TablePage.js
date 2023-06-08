import SortableTable from "../components/SortableTable";
// import Table from "../components/Table";

function TablePage() {
  const fruits = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
    { name: "Berry", color: "bg-pink-500", score: 2 },
  ];

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`${fruit.color} h-5 w-5 rounded`} />,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
  ];

  const keyFN = (fruit) => fruit.label;

  return <SortableTable data={fruits} config={config} keyFN={keyFN} />;
}

export default TablePage;
