import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export interface UserCreate {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
}

export const useCreateUser = () => {
  return useMutation<void, Error, UserCreate>({
    mutationFn: async (user: UserCreate) => {
      const { data } = await axios.post<void>(
        `${import.meta.env.VITE_BASE_URL}/User/Create`,
        user
      );
      return data;
    },
  });
};
