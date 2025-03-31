import { MuscleInfo } from "../../../../types/types";
import styles from "./ExerciseMusclesDisplay.module.css";

export default function ExerciseMusclesDisplay({
  muscles,
}: {
  muscles: {
    primary: MuscleInfo;
    secondary: MuscleInfo[];
  };
}) {
  const primaryMuscle = muscles.primary;
  const secondaryMuscles = muscles.secondary;

  return (
    <>
      <h4 className={styles.musclesTitle}>Muscles</h4>
      {primaryMuscle && (
        <div className={styles.muscleCategory}>
          <div className={styles.muscleLabel}>Primary</div>
          <div className={styles.muscleBadges}>
            <span
              key={primaryMuscle.id}
              className={`${styles.muscleBadge} ${styles.primaryMuscle}`}
            >
              {primaryMuscle.name}
            </span>
          </div>
        </div>
      )}
      {secondaryMuscles.length > 0 && (
        <div className={styles.muscleCategory}>
          <div className={styles.muscleLabel}>Secondary</div>
          <div className={styles.muscleBadges}>
            {secondaryMuscles.map((muscle) => (
              <span
                key={muscle.id || muscle.name}
                className={`${styles.muscleBadge} ${styles.secondaryMuscle}`}
              >
                {muscle.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
