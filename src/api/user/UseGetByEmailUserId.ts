import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface UserId {
  id: string;
}

export const useGetByEmailUserId = (
  userId: string | undefined | null,
  options: { enabled: boolean }
) => {
  return useQuery<UserId | null, Error>({
    queryKey: ["getByEmailUserId", userId],
    queryFn: async () => {
      const { data } = await axios.get<UserId>("/User/GetByEmail", {
        params: { Email: userId },
      });
      return data;
    },
    enabled: options.enabled,
  });
};
