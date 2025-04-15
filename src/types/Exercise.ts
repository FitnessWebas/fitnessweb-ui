import { Equipment } from "../data/Equipment";
import { FitnessLevel } from "../data/FitnessLevel";
import { MuscleInfo } from "./MuscleInfo";

export interface Exercise {
  id: number;
  name: string;
  muscles: MuscleInfo[];
  secondsPerSet: number;
  equipment: Equipment;
  difficulty: FitnessLevel;
  imagePath: string;
  startingPositionDescription: string;
  executionDescription: string;
}
