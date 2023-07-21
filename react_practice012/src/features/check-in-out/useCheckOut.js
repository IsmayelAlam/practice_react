import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

export default function useCheckOut() {
  const queryClient = useQueryClient();

  const { mutate: checkOut, isLoading } = useMutation({
    mutationFn: (bookingId) => {
      updateBooking(bookingId, {
        status: "checked-out",
      });
    },
    onSuccess: (data) => {
      toast.success(`booking #${data?.id} successfully checked out`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: (data) => {
      toast.error(`booking #${data.id} check out was unsuccessfully`);
    },
  });

  return { checkOut, isLoading };
}
