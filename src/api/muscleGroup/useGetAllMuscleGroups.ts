import { useQuery } from "@tanstack/react-query";
import { MuscleGroup } from "../../types/MuscleGroup";
import { useAuth } from "../../providers/AuthProvider";

export const useGetAllMuscleGroups = () => {
  const { apiClient } = useAuth();
  return useQuery<MuscleGroup[], Error>({
    queryKey: ["getAllMuscleGroups"],
    queryFn: async () => {
      const { data } = await apiClient.get<MuscleGroup[]>(
        "/MuscleGroup/GetAll"
      );
      return data;
    },
  });
};
