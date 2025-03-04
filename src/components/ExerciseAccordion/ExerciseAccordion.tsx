import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./ExerciseAccordion.module.css";

type Exercise = {
  id: number;
  name: string;
  muscleGroup: string;
  equipment: string;
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
            <p className={styles.exerciseName}>{exercise.name}</p>
            <p>
              <strong>Muscle Group:</strong> {exercise.muscleGroup}
            </p>
            <p>
              <strong>Equipment:</strong> {exercise.equipment}
            </p>
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
              <p>{exercise.description}</p>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default ExerciseAccordion;
