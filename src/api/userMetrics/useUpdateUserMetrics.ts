import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../../providers/AuthProvider";

export interface UserMetricsUpdate {
  userId: string;
  height?: number;
  gender?: number;
}

export const useUpdateUserMetrics = () => {
  const { apiClient } = useAuth();
  return useMutation<void, Error, UserMetricsUpdate>({
    mutationFn: async (userMetrics: UserMetricsUpdate) => {
      const { data } = await apiClient.patch<void>(
        `/UserMetrics/Update`,
        userMetrics
      );
      return data;
    },
  });
};
