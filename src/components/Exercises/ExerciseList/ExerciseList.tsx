import { Equipment } from "../../../types/Equipments";
import { FitnessLevel } from "../../../types/FitnessLevels";
import { Exercise } from "../../../types/types";
import ExerciseItem from "../ExerciseItem/ExerciseItem";
import styles from "./ExerciseList.module.css";
import benchPress from "../../../assets/BenchPress.webp";

export default function ExerciseList() {
  const mockExercise: Exercise = {
    id: 1,
    name: "Bench Press",
    muscles: [
      { id: "1", name: "Chest" },
      { id: "2", name: "Arm" },
    ],
    equipment: Equipment.Barbell,
    difficulty: FitnessLevel.Intermediate,
    minutesPerSet: 1,
    imagePath: benchPress,
    startingPositionDescription:
      "Lie flat on a bench with feet on the floor and grip the barbell with hands slightly wider than shoulder-width.",
    executionDescription:
      "Unhook the bar and slowly lower it to the lower part of your chest, keeping your elbows at about a 45-degree angle. Push the bar back up until your arms are fully extended.",
  };

  return (
    <div className={styles.container}>
      <div className={styles.exerciseListPaper}>
        <ExerciseItem exercise={mockExercise} />
      </div>
    </div>
  );
}
