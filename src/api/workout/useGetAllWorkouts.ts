import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Workout } from "../../types/Workout";

export const useGetAllWorkouts = () => {
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
