import styles from "./ExerciseListHeader.module.css";

export default function ExerciseListHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Exercises</h1>
        <hr />
      </div>
    </div>
  );
}
