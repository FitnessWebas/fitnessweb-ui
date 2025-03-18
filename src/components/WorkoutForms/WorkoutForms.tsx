import React from "react";
import styles from "./WorkoutForms.module.css";
import WorkoutForm from "../WorkoutForm/WorkoutForm";
import { h1, h2 } from "framer-motion/client";

const WorkoutForms = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          My <span>Workouts</span>
        </h1>
        <hr />
      </div>
      <div className={styles.forms}>
        <div className={styles.filter}></div>
        <div className={styles.workoutForms}>
          <WorkoutForm />
          <WorkoutForm />
          <WorkoutForm />
        </div>
      </div>
    </div>
  );
};

export default WorkoutForms;
