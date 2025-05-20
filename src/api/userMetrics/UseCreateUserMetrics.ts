import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../../providers/AuthProvider";

export interface UserMetricsUpdate {
  userId: string;
  height?: number;
  birthday?: string | null;
  gender?: number;
  fitnessLevel?: number;
}

export const useCreateUserMetrics = () => {
  const { apiClient } = useAuth();
  return useMutation<void, Error, UserMetricsUpdate>({
    mutationFn: async (userMetrics: UserMetricsUpdate) => {
      const { data } = await apiClient.post<void>(
        `/UserMetrics/Create`,
        userMetrics
      );
      return data;
    },
  });
};
