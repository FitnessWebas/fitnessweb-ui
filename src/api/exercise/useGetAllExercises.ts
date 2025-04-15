import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Exercise } from "../../types/Exercise";

export const useGetAllExercises = () => {
  return useQuery<Exercise[], Error>({
    queryKey: ["getAllExercises"],
    queryFn: async () => {
      const { data } = await axios.get<Exercise[]>(
        `${import.meta.env.VITE_BASE_URL}/Exercise/GetAll`
      );
      return data;
    },
  });
};
