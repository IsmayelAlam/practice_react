import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { signup as sighupApi } from "../../services/apiAuth";

export default function useSignup() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading, mutate: signup } = useMutation({
    mutationFn: ({ email, password, fullName }) =>
      sighupApi({ fullName, email, password }),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      toast.success("sighup successfully");
      navigate("/dashboard");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, signup };
}
