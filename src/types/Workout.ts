import { Equipment, EquipmentOptions } from "../data/Equipment";
import { FitnessLevel } from "../data/FitnessLevel";
import { MuscleInfo } from "./MuscleInfo";
import { WorkoutExercise } from "./WorkoutExercise";

export interface Workout {
  id: string;
  userId: string;
  dateOfCreation: Date;
  name: string;
  difficulty: FitnessLevel;
  equipment: Equipment[];
  targetDurationMinutes: number;
  goal: number;
  muscleGroups: MuscleInfo[];
  workoutExercises: WorkoutExercise[];
}

export const getWorkoutEquipment = (workout: Workout): string[] => {
  const equipmentSet = new Set<string>();

  workout.workoutExercises.forEach((exercise) => {
    equipmentSet.add(EquipmentOptions[exercise.equipment].label);
  });

  return Array.from(equipmentSet);
};
