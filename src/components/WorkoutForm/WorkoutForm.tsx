import React, { useState } from "react";
import styles from "./WorkoutForm.module.css";
import CloakIcon from "../../assets/clock-svg.svg";
import KetbellIcon from "../../assets/gym-fitness-rumbbel-health-svg.svg";
import BarbellIcon from "../../assets/barbell-svg.svg";
import DumbellIcon from "../../assets/dumbbell-gym-svg.svg";
import BodyIcon from "../../assets/chest-gym-svg.svg";
import ArrowUpIcon from "../../assets/keyboard_arrow_up.svg";
const WorkoutForm = () => {
  const [isActive, setisActive] = useState<boolean>(false);

  const showExercises = () => {
    setisActive(!isActive);
  };

  return (
    <div className={styles.container}>
      <h1>Arms workout</h1>
      <h2>April, 69</h2>
      <div className={styles.date}>
        <img src={CloakIcon} alt="clockSvg" />
        <p>45 min</p>
      </div>
      <div className={styles.types}>
        <span>Intermediate</span>
        <span>Gain Strenght</span>
      </div>
      <h2>Muscle Groups</h2>
      <div className={styles.muscles}>
        <span>Chest</span>
        <span>Byceps</span>
        <span>Penis</span>
      </div>
      <h2>Equipment</h2>
      <div className={styles.equipment}>
        <img src={KetbellIcon} alt="kettlebell icon" />
        <img src={BarbellIcon} alt="Barbell icon" />
        <img src={DumbellIcon} alt="dumbell icon" />
        <img src={BodyIcon} alt="body icon" />
      </div>
      <div className={styles.exercisesBtn} onClick={showExercises}>
        <p>Show exercises</p>
        <img src={ArrowUpIcon} alt="arrow up" />
      </div>
      <div className={`${styles.exercises} ${isActive ? styles.active : ""}`}>
        <h2>Exercises</h2>
        <div className={styles.exercise}>
          <h2>Bycep curl</h2>
          <div className={styles.boxes}>
            <div className={styles.equipmentInfo}>
              <span>
                Barberl <img src={BarbellIcon} alt="barbell icon" />
              </span>
            </div>
            <span>Bycep</span>
          </div>
          <span className={styles.exerciseInfo}>
            <span>Sets:10</span>
            <span>Reps per Set: 100</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorkoutForm;
