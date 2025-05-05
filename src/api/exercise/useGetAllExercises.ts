import { useQuery } from "@tanstack/react-query";
import { Exercise } from "../../types/Exercise";
import { useAuth } from "../../providers/AuthProvider";

export const useGetAllExercises = () => {
  const { apiClient } = useAuth();
  return useQuery<Exercise[], Error>({
    queryKey: ["getAllExercises"],
    queryFn: async () => {
      const { data } = await apiClient.get<Exercise[]>(
        `${import.meta.env.VITE_BASE_URL}/Exercise/GetAll`
      );
      return data;
    },
  });
};
