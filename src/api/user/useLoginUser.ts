import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { emitAuthChange } from "../../auth/authEvents";

export interface UserLogin {
  username: string;
  password: string;
}
interface UserLoginResponse {
  accessToken: string;
  userId: string;
}

export const useLoginUser = () => {
  const navigate = useNavigate();
  return useMutation<UserLoginResponse, Error, UserLogin>({
    mutationFn: async (user: UserLogin) => {
      const { data } = await axios.post<UserLoginResponse>(
        `${import.meta.env.VITE_BASE_URL}/User/Authenticate`,
        user
      );
      return data;
    },
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("userId", data.userId);
      emitAuthChange();
      navigate("/");
    },
  });
};
