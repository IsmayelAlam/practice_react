import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

export default function useBooking() {
  const {
    isLoading,
    data: Bookings,
    error,
  } = useQuery({
    queryKey: ["Bookings"],
    queryFn: getBookings,
  });

  return { isLoading, Bookings, error };
}
