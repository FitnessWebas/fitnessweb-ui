import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export interface UserMetricsUpdate {
  userId: string;
  height?: number;
  birthday?: string | null;
  gender?: number;
  fitnessLevel?: number;
}

export const useCreateUserMetrics = () => {
  return useMutation<void, Error, UserMetricsUpdate>({
    mutationFn: async (userMetrics: UserMetricsUpdate) => {
      const { data } = await axios.post<void>(
        `${import.meta.env.VITE_BASE_URL}/UserMetrics/Create`,
        userMetrics
      );
      return data;
    },
  });
};
