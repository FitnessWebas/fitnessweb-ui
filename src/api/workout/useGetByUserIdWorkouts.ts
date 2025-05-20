import { useQuery } from "@tanstack/react-query";
import { Workout } from "../../types/Workout";
import { useAuth } from "../../providers/AuthProvider";

export const useGetByUserIdWorkouts = (userId: string | undefined | null) => {
  const { apiClient } = useAuth();
  return useQuery<Workout[], Error>({
    queryKey: ["getByUserIdWorkouts", userId],
    queryFn: async () => {
      const { data } = await apiClient.get<Workout[]>(
        `${import.meta.env.VITE_BASE_URL}/Workout/GetByUserId`,
        {
          params: { userId: userId },
        }
      );
      return data;
    },
  });
};
