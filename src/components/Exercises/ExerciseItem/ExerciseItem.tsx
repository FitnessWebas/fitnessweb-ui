import { ChevronDown } from "lucide-react";
import {
  FitnessLevel,
  FitnessLevelOptions,
} from "../../../types/FitnessLevels";
import { Exercise } from "../../../types/types";
import styles from "./ExerciseItem.module.css";
import { useState } from "react";
import BarbellIcon from "../../../assets/barbell-svg.svg";
import DumbellIcon from "../../../assets/dumbbell-gym-svg.svg";
import BodyIcon from "../../../assets/chest-gym-svg.svg";
import MachineIcon from "../../../assets/gym-fitness-rumbbel-health-svg.svg";
import KettlebellIcon from "../../../assets/kettlebell.svg";
import CardioIcon from "../../../assets/treadmill.svg";

import { EquipmentOptions } from "../../../types/Equipments";
import ExerciseMusclesDisplay from "./ExerciseMusclesDisplay/ExerciseMusclesDisplay";

const equipmentIcons: Record<string, string> = {
  Barbell: BarbellIcon,
  Dumbbell: DumbellIcon,
  Bodyweight: BodyIcon,
  Machine: MachineIcon,
  Kettlebell: KettlebellIcon,
  Cardio: CardioIcon,
};

export default function ExerciseItem({ exercise }: { exercise: Exercise }) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const getDifficultyClass = () => {
    switch (exercise.difficulty) {
      case FitnessLevel.Beginner:
        return styles.beginner;
      case FitnessLevel.Intermediate:
        return styles.intermediate;
      case FitnessLevel.Expert:
        return styles.expert;
      default:
        return "";
    }
  };

  return (
    <div className={`${styles.item} ${expanded ? styles.expanded : ""}`}>
      <div className={styles.itemHeader} onClick={toggleExpanded}>
        <div>
          <h3 className={styles.exerciseTitle}>{exercise.name}</h3>
          <div className={styles.muscleGroup}>
            <div className={styles.muscleLabel}>{exercise.muscles[0].name}</div>
            <div className={styles.labelDot}>{"•"}</div>
            <span
              className={`${styles.difficultyBadge} ${getDifficultyClass()}`}
            >
              {FitnessLevelOptions[exercise.difficulty].label}
            </span>
          </div>
        </div>
        <div className={styles.expandIcon}>
          <ChevronDown />
        </div>
      </div>

      <div className={styles.exerciseContent}>
        <div className={styles.exerciseDetails}>
          <div className={styles.twoColumnLayout}>
            <div className={styles.imageColumn}>
              <img
                src={exercise.imagePath}
                alt={exercise.name}
                className={styles.exerciseImage}
              />
              <div className={styles.metaInfoContainer}>
                <div className={styles.metaInfoItem}>
                  <span className={styles.metaInfoTitle}>Equipment</span>
                  <span className={styles.metaInfoValue}>
                    <img
                      src={
                        equipmentIcons[
                          EquipmentOptions[exercise.equipment].label
                        ]
                      }
                      alt={`${EquipmentOptions[exercise.equipment].label} icon`}
                    />
                    {EquipmentOptions[exercise.equipment].label}
                  </span>
                </div>
                <div className={styles.metaInfoItem}>
                  <span className={styles.metaInfoTitle}>Time</span>
                  <span className={styles.metaInfoValue}>
                    <span className={styles.metaInfoSecondsBolded}>
                      {exercise.secondsPerSet}{" "}
                    </span>
                    s per set
                  </span>
                </div>
              </div>
              <div className={styles.musclesSection}>
                <ExerciseMusclesDisplay
                  muscles={{
                    primary: exercise.muscles[0],
                    secondary: exercise.muscles.slice(1),
                  }}
                />
              </div>
            </div>

            <div className={styles.instructionsColumn}>
              <div className={styles.instructionSection}>
                <h4 className={styles.sectionTitle}>Starting position</h4>
                <p className={styles.description}>
                  {exercise.startingPositionDescription}
                </p>
              </div>

              <div className={styles.instructionSection}>
                <h4 className={styles.sectionTitle}>Execution</h4>
                <p className={styles.description}>
                  {exercise.executionDescription}
                </p>
              </div>
              <div className={styles.musclesSection}>
                <ExerciseMusclesDisplay
                  muscles={{
                    primary: exercise.muscles[0],
                    secondary: exercise.muscles.slice(1),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
