import React from "react";
import styles from "./Home.module.css";

interface StepCircleProps {
  number: number;
  className?: string;
}

const StepCircle = ({ number, className }: StepCircleProps) => {
  return <div className={styles.stepCircle}>{number}</div>;
};

export default StepCircle;
