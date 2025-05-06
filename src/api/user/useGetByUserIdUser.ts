import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../providers/AuthProvider";

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
}

export const useGetByUserIdUser = (
  userId: string | undefined | null,
  options: { enabled: boolean }
) => {
  const { apiClient } = useAuth();
  return useQuery<User | null, Error>({
    queryKey: ["getByUserIdUser", userId],
    queryFn: async () => {
      const { data } = await apiClient.get<User>("/User/GetById", {
        params: { userId: userId },
      });

      return data;
    },
    enabled: options.enabled,
  });
};
