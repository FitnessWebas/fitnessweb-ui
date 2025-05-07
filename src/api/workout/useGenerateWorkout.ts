import {useMutation, useQuery }  from "@tanstack/react-query";
import { useAuth } from "../../providers/AuthProvider";
import { GenerateWorkout } from "../../types/GenerateWorkout";
import axios from "axios";


export const useGenerateWorkout = () => {
  const { apiClient } = useAuth();
  return useMutation<GenerateWorkout, Error, GenerateWorkout>({
    mutationFn: async (workoutData) => {
      const { data } = await apiClient.post<GenerateWorkout>(
        `${import.meta.env.VITE_BASE_URL}/Workout/Generate`,
        workoutData
      );
      return data;
    },
  });
};
