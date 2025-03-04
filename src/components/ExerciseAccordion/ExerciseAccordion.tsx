import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./ExerciseAccordion.module.css";

type Exercise = {
  id: number;
  name: string;
  muscleGroup: string[];
  equipment: string;
  difficulty: string;
  image: string;
  description: string;
};

type Props = {
  exercises: Exercise[];
};

const ExerciseAccordion = ({ exercises }: Props) => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className={styles.accordion}>
      {exercises.map((exercise, index) => (
        <div key={exercise.id} className={styles.accordionItem}>
          <button
            className={styles.accordionTitle}
            onClick={() => toggleAccordion(index)}
          >
            <div className={styles.titleLeft}>
              <p className={styles.exerciseName}>{exercise.name}</p>
            </div>

            <div className={styles.titleRight}>
              {exercise.muscleGroup &&
                exercise.muscleGroup.map((muscle, idx) => (
                  <span
                    key={idx}
                    className={styles.bubble}
                    style={{ backgroundColor: "var(--accent-1)" }}
                  >
                    {muscle}
                  </span>
                ))}
              <span
                className={styles.bubble}
                style={{ backgroundColor: "var(--accent-2)" }}
              >
                {exercise.equipment}
              </span>
              <span
                className={styles.bubble}
                style={{ backgroundColor: "var(--accent-3)" }}
              >
                {exercise.difficulty}
              </span>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              className={`${styles.icon} ${
                openIndices.includes(index) ? styles.rotated : ""
              }`}
            >
              <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
            </svg>
          </button>

          <motion.div
            className={`${styles.accordionContent} ${
              openIndices.includes(index) ? styles.open : ""
            }`}
            initial={{ height: 0 }}
            animate={{
              height: openIndices.includes(index) ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.accordionContentInner}>
              <img src={exercise.image} alt={exercise.name} />
              <span className={styles.desription}>
                <h1>Starting position:</h1>
                <p>{exercise.description}</p>
              </span>
              <span className={styles.desription}>
                <h1>Execution:</h1>
                <p>{exercise.description}</p>
              </span>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default ExerciseAccordion;
