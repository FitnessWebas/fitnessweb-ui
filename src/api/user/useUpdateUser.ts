import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useAuth } from "../../providers/AuthProvider";

export interface UserUpdate {
  userId: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  username?: string | null;
  password?: string | null;
}

export const useUpdateUser = () => {
  const { apiClient } = useAuth();
  return useMutation<void, Error, UserUpdate>({
    mutationFn: async (user: UserUpdate) => {
      const { data } = await apiClient.patch<void>(`/User/Update`, user);
      return data;
    },
  });
};
