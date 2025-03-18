import React from "react";
import styles from "./WorkoutForms.module.css";
import WorkoutForm from "../WorkoutForm/WorkoutForm";
import { h1, h2 } from "framer-motion/client";

const WorkoutForms = () => {
  return (
    <div className={styles.container}>
      <WorkoutForm />
    </div>
  );
};

export default WorkoutForms;
