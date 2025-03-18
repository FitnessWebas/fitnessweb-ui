import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface UserMetrics {
  height?: number;
  birthday?: Date;
  gender?: number;
  fitnessLevel?: number;
  userId?: string;
  user?: null;
  id?: string;
  createdAt?: Date;
  lastModifiedAt?: Date;
}

export const useGetByUserIdUserMetrics = (
  userId: string | undefined,
  options: { enabled: boolean }
) => {
  return useQuery<UserMetrics | null, Error>({
    queryKey: ["getByUserIdUserMetrics", userId],
    queryFn: async () => {
      const { data, status } = await axios.get<UserMetrics>(
        `${import.meta.env.VITE_BASE_URL}/UserMetrics/GetByUserId`,
        {
          params: { userId: userId },
        }
      );

      if (status === 204) {
        return null;
      }

      return data;
    },
    enabled: options.enabled,
  });
};
