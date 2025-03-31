import ExerciseItem from "../ExerciseItem/ExerciseItem";
import styles from "./ExerciseList.module.css";
import { mockExercisesNew } from "../../../data/mockExercisesNew";

export default function ExerciseList() {
  return (
    <div className={styles.container}>
      <div className={styles.exerciseListPaper}>
        <div className={styles.exerciseListPaperName}>Available exercises</div>
        {mockExercisesNew.map((exercise) => (
          <ExerciseItem key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
  );
}
