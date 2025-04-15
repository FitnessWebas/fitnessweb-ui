import React, { useState } from "react";
import styles from "./WorkoutForm.module.css";
import CloakIcon from "../../assets/clock-svg.svg";
import ArrowUpIcon from "../../assets/keyboard_arrow_up.svg";
import { Workout, getWorkoutEquipment } from "../../types/MuscleInfo";
import { EquipmentOptions } from "../../data/Equipment";

import Kettlebell from "../../assets/gym-fitness-rumbbel-health-svg.svg";
import Barbell from "../../assets/barbell-svg.svg";
import Bands from "../../assets/rubber-band 1.svg";
import Body from "../../assets/body-svgrepo-com 1.svg";
import Dumbbell from "../../assets/dumbbell-gym-svg.svg";
import Machine from "../../assets/chest-gym-svg.svg";

const equipmentIcons: Record<string, string> = {
  Barbell: Barbell,
  Dumbbell: Dumbbell,
  Bodyweight: Body,
  Machine: Machine,
  Bands: Bands,
  Kettlebell: Kettlebell,
};

interface WorkoutFormProps {
  workout: Workout;
}

const WorkoutForm: React.FC<WorkoutFormProps> = ({ workout }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const showExercises = () => {
    setIsActive(!isActive);
  };

  // Get unique equipment used in this workout
  const workoutEquipment = getWorkoutEquipment(workout);

  return (
    <div className={styles.container}>
      <h1>{workout.name}</h1>
      <h2>{workout.date}</h2>
      <div className={styles.date}>
        <img src={CloakIcon} alt="clockSvg" />
        <p>{workout.duration} min</p>
      </div>
      <div className={styles.types}>
        <span>{workout.difficulty}</span>
        <span>{workout.goal}</span>
      </div>
      <h2>Muscle Groups</h2>
      <div className={styles.muscles}>
        {workout.muscleGroups.map((muscle, index) => (
          <span key={index}>{muscle}</span>
        ))}
      </div>
      <h2>Equipment</h2>
      <div className={styles.equipment}>
        {workoutEquipment.map((item, index) => (
          <img key={index} src={equipmentIcons[item]} alt={`${item} icon`} />
        ))}
      </div>
      <div
        className={`${styles.exercisesBtn} ${isActive ? styles.active : ""}`}
        onClick={showExercises}
      >
        <p>{isActive ? "Hide exercises" : "Show exercises"}</p>
        <img src={ArrowUpIcon} alt="arrow up" />
      </div>
      <div className={`${styles.exercises} ${isActive ? styles.active : ""}`}>
        <h2>Exercises</h2>
        {workout.exercises.map(({ exercise, sets, repsPerSet }, index) => (
          <div key={index} className={styles.exercise}>
            <h2>{exercise.name}</h2>
            <div className={styles.boxes}>
              <div className={styles.equipmentInfo}>
                <span>
                  {EquipmentOptions[exercise.equipment].label}{" "}
                  <img
                    src={
                      equipmentIcons[EquipmentOptions[exercise.equipment].label]
                    }
                    alt={`${exercise.equipment} icon`}
                  />
                </span>
              </div>
              <span>
                {exercise.muscles.map((muscle) => muscle.name).join(", ")}
              </span>
            </div>
            <span className={styles.exerciseInfo}>
              <span>Sets: {sets}</span>
              <span>Reps per Set: {repsPerSet}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutForm;
