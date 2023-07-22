import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import useCabin from "./useCabin";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

export default function CabinTable() {
  const { isLoading, cabins } = useCabin();

  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!cabins.length) return <Empty resource="booking" />;

  let filterCabins;

  // Filter
  const filterValue = searchParams.get("discount") || "all";
  if (filterValue === "all") filterCabins = cabins;
  if (filterValue === "with_discount")
    filterCabins = cabins.filter((cabin) => Boolean(cabin.discount));
  if (filterValue === "no_discount")
    filterCabins = cabins.filter((cabin) => Boolean(!cabin.discount));

  // Sort
  const sortBy = searchParams.get("sortBy") || "all";
  const [field, direction] = sortBy.split("_");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filterCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header role="row">
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}
