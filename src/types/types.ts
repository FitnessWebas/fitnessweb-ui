export interface Exercise {
    id: number;
    name: string;
    muscleGroup: string[];
    equipment: string;
    difficulty: string;
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
      equipmentSet.add(exercise.equipment);
    });
    
    return Array.from(equipmentSet);
  };