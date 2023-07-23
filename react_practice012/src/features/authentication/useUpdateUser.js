import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export default function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdateUser } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("user account updated successfully");
      queryClient.invalidateQueries(["user"], user);
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdateUser };
}
