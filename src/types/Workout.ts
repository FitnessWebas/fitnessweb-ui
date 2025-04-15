import { EquipmentOptions } from "../data/Equipment";
import { WorkoutExercise } from "./WorkoutExercise";

export interface Workout {
  id: number;
  name: string;
  date: string;
  duration: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  goal: string;
  muscleGroups: string[];
  exercises: WorkoutExercise[];
}

export const getWorkoutEquipment = (workout: Workout): string[] => {
  const equipmentSet = new Set<string>();

  workout.exercises.forEach(({ exercise }) => {
    equipmentSet.add(EquipmentOptions[exercise.equipment].label);
  });

  return Array.from(equipmentSet);
};
