import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export default function useBooking() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  const {
    isLoading,
    data: Bookings,
    error,
  } = useQuery({
    queryKey: ["Bookings", filter],
    queryFn: () => getBookings({ filter }),
  });

  return { isLoading, Bookings, error };
}
