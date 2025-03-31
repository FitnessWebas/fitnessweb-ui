import React, { useState } from "react";
import styles from "./WorkoutForms.module.css";
import WorkoutForm from "../WorkoutForm/WorkoutForm";
import mockExercises from "../../data/mockExercises";
import { Workout } from "../../types/types";
import WorkoutFilter from "../WorkoutFilter/WorkoutFilter";
import { Regex } from "lucide-react";

interface MuscleGroups {
  fullBody: boolean;
  legs: boolean;
  abs: boolean;
  shoulders: boolean;
  chest: boolean;
  triceps: boolean;
  biceps: boolean;
  back: boolean;
  forearms: boolean;
}

const sampleWorkouts: Workout[] = [
  {
    id: 1,
    name: "Upper Body Strength",
    date: "March 19, 2025",
    duration: 45,
    difficulty: "Intermediate",
    goal: "Gain Strength",
    muscleGroups: ["Chest", "Back", "Shoulders", "Biceps", "Triceps"],
    exercises: [
      {
        exercise: mockExercises[0],
        sets: 4,
        repsPerSet: 8,
      },
      {
        exercise: mockExercises[6],
        sets: 3,
        repsPerSet: 10,
      },
      {
        exercise: mockExercises[4],
        sets: 3,
        repsPerSet: 12,
      },
      {
        exercise: mockExercises[2],
        sets: 3,
        repsPerSet: 15,
      },
      {
        exercise: mockExercises[8],
        sets: 3,
        repsPerSet: 12,
      },
    ],
  },
  {
    id: 2,
    name: "Leg Day",
    date: "March 20, 2025",
    duration: 50,
    difficulty: "Advanced",
    goal: "Gain muscle",
    muscleGroups: ["Legs", "Glutes"],
    exercises: [
      {
        exercise: mockExercises[1],
        sets: 5,
        repsPerSet: 10,
      },
      {
        exercise: mockExercises[3],
        sets: 4,
        repsPerSet: 8,
      },
      {
        exercise: mockExercises[5],
        sets: 3,
        repsPerSet: 12,
      },
      {
        exercise: mockExercises[7],
        sets: 4,
        repsPerSet: 15,
      },
    ],
  },
  {
    id: 3,
    name: "Chest & Triceps",
    date: "March 22, 2025",
    duration: 40,
    difficulty: "Beginner",
    goal: "Gain muscle",
    muscleGroups: ["Chest", "Triceps"],
    exercises: [
      {
        exercise: mockExercises[0],
        sets: 3,
        repsPerSet: 12,
      },
      {
        exercise: mockExercises[9],
        sets: 3,
        repsPerSet: 15,
      },
      {
        exercise: mockExercises[8],
        sets: 3,
        repsPerSet: 12,
      },
    ],
  },
];

const WorkoutForms = () => {
  const [search, setSearch] = useState<string>("");
  const [durationMin, setDurationMin] = useState<number>(0);
  const [durationMax, setDurationMax] = useState<number>(90);
  const [muscleGroups, setMuscleGroups] = useState<MuscleGroups>({
    fullBody: false,
    legs: false,
    abs: false,
    shoulders: false,
    chest: false,
    triceps: false,
    biceps: false,
    back: false,
    forearms: false,
  });

  const filterBySeach = (workouts: Workout[]): Workout[] => {
    if (search !== "") {
      return workouts.filter((workout) =>
        workout.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return workouts;
  };
  const filterByDuration = (workouts: Workout[]): Workout[] => {
    return workouts.filter(
      (workout) =>
        workout.duration >= durationMin && workout.duration <= durationMax
    );
  };
  const filterByMuscleGroups = (workouts: Workout[]): Workout[] => {
    const activeGroups = Object.entries(muscleGroups)
      .filter(([_, isActive]) => isActive)
      .map(([group]) => group) as (keyof MuscleGroups)[];
    console.log(activeGroups);

    const workoutGroups = workouts.map((workout) => {
      workout.id, workout.muscleGroups;
    });

    return workouts;
  };
  const filterByMuscleGroupss = (workouts: Workout[]): Workout[] => {
    const activeGroups = Object.entries(muscleGroups)
      .filter(([_, isActive]) => isActive)
      .map(([group]) => group) as (keyof MuscleGroups)[];

    if (activeGroups.length === 0) {
      return workouts;
    }

    return workouts.filter((workout) => {
      const workoutGroupsLower = workout.muscleGroups.map((grp) =>
        grp.toLowerCase()
      );
      if (muscleGroups.fullBody) {
        const requiredGroups: (keyof MuscleGroups)[] = [
          "legs",
          "abs",
          "shoulders",
          "chest",
          "triceps",
          "biceps",
          "back",
          "forearms",
        ];
        return requiredGroups.every((group) =>
          workoutGroupsLower.includes(group)
        );
      } else {
        const nonFullBodyActiveGroups = activeGroups.filter(
          (group) => group !== "fullBody"
        );
        return nonFullBodyActiveGroups.some((group) =>
          workoutGroupsLower.includes(group)
        );
      }
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          My <span>Workouts</span>
        </h1>
        <hr />
      </div>
      <div className={styles.forms}>
        <div className={styles.filter}>
          <WorkoutFilter
            search={search}
            setSearch={setSearch}
            durationMin={durationMin}
            durationMax={durationMax}
            setDurationMin={setDurationMin}
            setDurationMax={setDurationMax}
            muscleGroups={muscleGroups}
            setMuscleGroups={setMuscleGroups}
          />
        </div>
        <div className={styles.workoutForms}>
          {filterByMuscleGroupss(sampleWorkouts).map((workout) => (
            <WorkoutForm key={workout.id} workout={workout} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutForms;
