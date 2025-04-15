import { useQuery } from "@tanstack/react-query";
import { Workout } from "../../types/types";
import axios from "axios";

export const useGetAllExercises = () => {
  return useQuery<Workout[], Error>({
    queryKey: ["getAllWorkouts"],
    queryFn: async () => {
      const { data } = await axios.get<Workout[]>(
        `${import.meta.env.VITE_BASE_URL}/Workout/GetAll`
      );
      return data;
    },
  });
};
