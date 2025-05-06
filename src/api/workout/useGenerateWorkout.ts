import {useQuery }  from "@tanstack/react-query";
import { useAuth } from "../../providers/AuthProvider";
import { GenerateWorkout } from "../../types/GenerateWorkout";


export const useGetAllWorkouts = () => {
    const { apiClient } = useAuth();
    return useQuery<GenerateWorkout, Error>({
      queryKey: ["generateWorkout"],
      queryFn: async () => {
        const { data } = await apiClient.post<GenerateWorkout>(
          `${import.meta.env.VITE_BASE_URL}/Workout/Generate`
        );
        return data;
      },
    });
  };
