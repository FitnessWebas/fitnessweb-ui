import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../providers/AuthProvider";

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
  userId: string | undefined | null,
  options: { enabled: boolean }
) => {
  const { apiClient } = useAuth();
  return useQuery<UserMetrics | null, Error>({
    queryKey: ["getByUserIdUserMetrics", userId],
    queryFn: async () => {
      const { data, status } = await apiClient.get<UserMetrics>(
        "/UserMetrics/GetByUserId",
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
