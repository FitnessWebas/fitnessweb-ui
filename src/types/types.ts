import { Equipment, EquipmentOptions } from "./Equipments";
import { FitnessLevel } from "./FitnessLevels";

type MuscleInfo = {
  id: string;
  name: string;
};

export interface Exercise {
  id: number;
  name: string;
  muscles: MuscleInfo[];
  minutesPerSet: number;
  equipment: Equipment;
  difficulty: FitnessLevel;
  image: string;
  startDescription: string;
  executionDescription: string;
}

export interface WorkoutExercise {
  exercise: Exercise;
  sets: number;
  repsPerSet: number;
}

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
