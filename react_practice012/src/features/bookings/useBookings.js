import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export default function useBooking() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue, method: "eq" };

  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";

  const [field, direction] = sortByRaw.split("-");

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const sortBy = { field, direction };

  const { isLoading, data, error } = useQuery({
    queryKey: ["Bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  const { data: Bookings, count } = data ? data : {};

  return { isLoading, Bookings, error, count };
}
