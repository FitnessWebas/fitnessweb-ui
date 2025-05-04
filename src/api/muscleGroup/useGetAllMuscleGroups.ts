import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { MuscleGroup } from "../../types/MuscleGroup";

export const useGetAllMuscleGroups = () => {
    return useQuery<MuscleGroup[], Error>({
        queryKey: ["getAllMuscleGroups"],
        queryFn: async () => {
            const {data} = await axios.get<MuscleGroup[]>(
                `${import.meta.env.VITE_BASE_URL}/MuscleGroup/GetAll`
            )

            const muscleGroups = await data.map(muscleGroup => muscleGroup.name);
            console.log(data);
            console.log(data[0].muscles[0].name);
            return data;
        }

    });
}