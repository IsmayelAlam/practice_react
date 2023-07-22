import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import loginAPI from "../../services/apiAuth";

export default function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: (data) => {
      queryClient.setQueriesData(["user"], data);
      toast.success("login successfully");
      navigate("/dashboard");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, login };
}
