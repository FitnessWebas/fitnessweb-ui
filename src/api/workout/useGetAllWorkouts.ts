import { useQuery } from "@tanstack/react-query";
import { Workout } from "../../types/Workout";
import { useAuth } from "../../providers/AuthProvider";

export const useGetAllWorkouts = () => {
  const { apiClient } = useAuth();
  return useQuery<Workout[], Error>({
    queryKey: ["getAllWorkouts"],
    queryFn: async () => {
      const { data } = await apiClient.get<Workout[]>(
        `${import.meta.env.VITE_BASE_URL}/Workout/GetAll`
      );
      return data;
    },
  });
};
