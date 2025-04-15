import { Equipment } from "../data/Equipment";
import { MuscleInfo } from "./MuscleInfo";

export interface WorkoutExercise {
  exerciseName: string;
  equipment: Equipment;
  muscles: MuscleInfo[];
  sets: number;
  repsPerSet: number;
}
