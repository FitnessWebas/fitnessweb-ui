import ExerciseItem from "../ExerciseItem/ExerciseItem";
import styles from "./ExerciseList.module.css";
import { Exercise } from "../../../types/types";

export default function ExerciseList({ exercises }: { exercises: Exercise[] }) {
  return (
    <div className={styles.container}>
      <div className={styles.exerciseListPaper}>
        <div className={styles.exerciseListPaperName}>Available exercises</div>
        {exercises.map((exercise) => (
          <ExerciseItem key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
  );
}
