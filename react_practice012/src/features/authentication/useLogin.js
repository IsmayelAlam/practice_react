import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import loginAPI from "../../services/apiAuth";

export default function useLogin() {
  const navigate = useNavigate();

  const { isLoading, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: (data) => {
      console.log(data);
      navigate("/dashboard");

      toast.success("login successfully");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, login };
}
