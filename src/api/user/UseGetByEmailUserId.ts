import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface UserId {
  id: string;
}

export const useGetByEmailUserId = (
  email: string | undefined | null,
  options: { enabled: boolean }
) => {
  return useQuery<UserId | null, Error>({
    queryKey: ["getByEmailUserId", email],
    queryFn: async () => {
      const { data } = await axios.get<UserId>(
        `${import.meta.env.VITE_BASE_URL}/User/GetByEmail`,
        { params: { email: email } }
      );
      return data;
    },
    enabled: options.enabled,
  });
};
