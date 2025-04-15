import { useState } from "react";
import styles from "./WorkoutForms.module.css";
import WorkoutForm from "../WorkoutForm/WorkoutForm";
import WorkoutFilter from "../WorkoutFilter/WorkoutFilter";
import Kettlebell from "../../assets/gym-fitness-rumbbel-health-svg.svg";
import Barbell from "../../assets/barbell-svg.svg";
import Bands from "../../assets/rubber-band 1.svg";
import Body from "../../assets/body-svgrepo-com 1.svg";
import Dumbbell from "../../assets/dumbbell-gym-svg.svg";
import Machine from "../../assets/chest-gym-svg.svg";
import { Workout } from "../../types/Workout";
import { FitnessLevelOptions } from "../../data/FitnessLevel";
import { GoalOptions } from "../../data/Goal";

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
interface DifficultyLevels {
  beginner: boolean;
  intermediate: boolean;
  advanced: boolean;
}

interface WorkoutGoals {
  loseWeight: boolean;
  gainMuscle: boolean;
  gainStrength: boolean;
}
interface EquipmentItem {
  id: string;
  icon: string;
  isSelected: boolean;
}
const Equipment = [
  "Barbell",
  "Dumbbell",
  "Bodyweight",
  "Machine",
  "Cardio",
  "Kettlebell",
];

const WorkoutForms = ({ workouts }: { workouts: Workout[] }) => {
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
  const [difficulty, setDifficulty] = useState<DifficultyLevels>({
    beginner: false,
    intermediate: false,
    advanced: false,
  });
  const [equipment, setEquipment] = useState<EquipmentItem[]>([
    { id: "dumbbell", icon: Dumbbell, isSelected: false },
    { id: "bodyweight", icon: Body, isSelected: false },
    { id: "barbell", icon: Barbell, isSelected: false },
    { id: "bands", icon: Bands, isSelected: false },
    { id: "kettlebell", icon: Kettlebell, isSelected: false },
    { id: "machine", icon: Machine, isSelected: false },
  ]);
  const [goals, setGoals] = useState<WorkoutGoals>({
    loseWeight: false,
    gainMuscle: false,
    gainStrength: false,
  });

  const filterBySeach = (workouts: Workout[]): Workout[] => {
    if (workouts.length == 0) {
      return [];
    }
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
        workout.targetDurationMinutes >= durationMin &&
        workout.targetDurationMinutes <= durationMax
    );
  };

  const filterByMuscleGroups = (workouts: Workout[]): Workout[] => {
    if (workouts.length == 0) {
      return [];
    }
    const activeGroups = Object.entries(muscleGroups)
      .filter(([, isActive]) => isActive)
      .map(([group]) => group) as (keyof MuscleGroups)[];

    if (activeGroups.length === 0) {
      return workouts;
    }

    return workouts.filter((workout) => {
      const workoutGroupsLower = workout.muscleGroups.map((grp) =>
        grp.name.toLowerCase()
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

  const filterByDifficulty = (workouts: Workout[]): Workout[] => {
    if (workouts.length == 0) {
      return [];
    }
    const activeDifficulties = Object.entries(difficulty)
      .filter(([, isActive]) => isActive)
      .map(([group]) => group) as (keyof DifficultyLevels)[];

    if (activeDifficulties.length == 0) {
      return workouts;
    }

    return workouts.filter((workout) => {
      const difficultyToLower =
        FitnessLevelOptions[workout.difficulty].label.toLowerCase();

      return activeDifficulties.some((group) => difficultyToLower === group);
    });
  };

  const filterByGoal = (workouts: Workout[]): Workout[] => {
    const activeGoals = Object.entries(goals)
      .filter(([, isActive]) => isActive)
      .map(([group]) => group) as (keyof WorkoutGoals)[];

    if (activeGoals.length == 0) {
      return workouts;
    }

    return workouts.filter((workout) => {
      const goalToLower = GoalOptions[workout.goal].label
        .toLowerCase()
        .replace(" ", "");

      return activeGoals.some((group) => goalToLower === group.toLowerCase());
    });
  };

  const filteredByEquipment = (workouts: Workout[]): Workout[] => {
    if (workouts.length == 0) {
      return [];
    }
    const activeEquipment = equipment.filter(
      (equipment) => equipment.isSelected
    );
    console.log(activeEquipment);
    return workouts.filter((workout) => {
      const workoutEquipment = workout.workoutExercises.map(
        (exercise) => exercise.equipment
      );

      const linkedEquipment = workoutEquipment.map((index) => Equipment[index]);
      const uniqueEquipment = [...new Set(linkedEquipment)];
      const uniqueEquipmentToLower = uniqueEquipment.map((equipment) =>
        equipment.toLowerCase()
      );
      console.log(uniqueEquipmentToLower);

      return activeEquipment.every((equip) =>
        uniqueEquipmentToLower.includes(equip.id)
      );
    });
  };

  const filtered = (workouts: Workout[]): Workout[] => {
    let filteredWorkouts = [...workouts]; // Start with all workouts

    filteredWorkouts = filterBySeach(filteredWorkouts);
    filteredWorkouts = filterByDuration(filteredWorkouts);
    filteredWorkouts = filterByMuscleGroups(filteredWorkouts);
    filteredWorkouts = filterByDifficulty(filteredWorkouts);
    filteredWorkouts = filterByGoal(filteredWorkouts);
    filteredWorkouts = filteredByEquipment(filteredWorkouts);

    return filteredWorkouts;
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
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            goals={goals}
            setGoals={setGoals}
            equipment={equipment}
            setEquipment={setEquipment}
          />
        </div>
        <div className={styles.workoutForms}>
          {filtered(workouts).map((workout) => (
            <WorkoutForm key={workout.id} workout={workout} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutForms;
