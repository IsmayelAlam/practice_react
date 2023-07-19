import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

const filterOptions = [
  { value: "all", label: "All" },
  { value: "no_discount", label: "No discount" },
  { value: "with_discount", label: "With discount" },
];
const sortOptions = [
  { value: "name_asc", label: "Name(A-Z)" },
  { value: "name_desc", label: "Name(Z-A)" },
  { value: "regularPrice_asc", label: "Price(low-high)" },
  { value: "regularPrice_desc", label: "Price(high-low)" },
  { value: "maxCapacity_asc", label: "Capacity(low-high)" },
  { value: "maxCapacity_desc", label: "Capacity(high-low)" },
];

export default function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter filterField="discount" options={filterOptions} />

      <SortBy options={sortOptions} />
    </TableOperations>
  );
}
