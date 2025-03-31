import React, { useState } from "react";
import { CheckIcon, Dumbbell, User, Weight } from "lucide-react";
import styles from "./WorkoutFilter.module.css";

interface MuscleGroups {
  fullBody: boolean;
  legs: boolean;
  abs: boolean;
  arms: boolean;
  shoulders: boolean;
  chest: boolean;
}

interface DifficultyLevels {
  beginner: boolean;
  intermediate: boolean;
  advanced: boolean;
}

interface WorkoutGoals {
  loseWeight: boolean;
  gainMuscle: boolean;
  gainStrength: boolean;
}

const WorkoutFilter: React.FC = () => {
  const [durationMin, setDurationMin] = useState<number>(0);
  const [durationMax, setDurationMax] = useState<number>(90);
  const [muscleGroups, setMuscleGroups] = useState<MuscleGroups>({
    fullBody: false,
    legs: true,
    abs: false,
    arms: false,
    shoulders: false,
    chest: true,
  });
  const [difficulty, setDifficulty] = useState<DifficultyLevels>({
    beginner: false,
    intermediate: true,
    advanced: false,
  });
  const [goals, setGoals] = useState<WorkoutGoals>({
    loseWeight: false,
    gainMuscle: false,
    gainStrength: false,
  });

  const handleMuscleGroupChange = (group: keyof MuscleGroups): void => {
    setMuscleGroups((prev) => ({
      ...prev,
      [group]: !prev[group],
    }));
  };

  const handleDifficultyChange = (level: keyof DifficultyLevels): void => {
    setDifficulty((prev) => ({
      ...prev,
      [level]: !prev[level],
    }));
  };

  const handleGoalChange = (goal: keyof WorkoutGoals): void => {
    setGoals((prev) => ({
      ...prev,
      [goal]: !prev[goal],
    }));
  };

  const handleMinChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const newMin = parseInt(event.target.value, 10);
    setDurationMin(Math.min(newMin, durationMax));
  };

  const handleMaxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const newMax = parseInt(event.target.value, 10);
    setDurationMax(Math.max(newMax, durationMin));
  };

  const clearFilters = (): void => {
    setDurationMin(0);
    setDurationMax(90);
    setMuscleGroups({
      fullBody: false,
      legs: false,
      abs: false,
      arms: false,
      shoulders: false,
      chest: false,
    });
    setDifficulty({
      beginner: false,
      intermediate: false,
      advanced: false,
    });
    setGoals({
      loseWeight: false,
      gainMuscle: false,
      gainStrength: false,
    });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Filters</h2>

      {/* Search */}
      <div>
        <p className={styles.sectionTitle}>Search</p>
        <input
          type="text"
          placeholder="Search workouts..."
          className={styles.searchInput}
        />
      </div>

      {/* Duration */}
      <div>
        <p className={styles.sectionTitle}>Duration</p>
        <div className={styles.rangeContainer}>
          <input
            type="range"
            min="0"
            max="90"
            value={durationMin}
            onChange={handleMinChange}
            className={styles.rangeInput}
          />
          <input
            type="range"
            min="0"
            max="90"
            value={durationMax}
            onChange={handleMaxChange}
            className={styles.rangeInput}
          />
        </div>
        <div className={styles.durationDisplay}>
          <span>{durationMin} min</span>
          <span>{durationMax} min</span>
        </div>
      </div>

      {/* Muscle groups */}
      <div>
        <p className={styles.sectionTitle}>Muscle groups</p>
        <div className={styles.checkboxGrid}>
          {(
            Object.entries({
              fullBody: "Full body",
              legs: "Legs",
              abs: "Abs",
              arms: "Arms",
              shoulders: "Shoulders",
              chest: "Chest",
            }) as [keyof MuscleGroups, string][]
          ).map(([key, label]) => (
            <div key={key} className={styles.checkboxItem}>
              <div
                className={`${styles.checkbox} ${
                  muscleGroups[key] ? styles.checkboxChecked : ""
                }`}
                onClick={() => handleMuscleGroupChange(key)}
              >
                {muscleGroups[key] && <CheckIcon size={12} />}
              </div>
              <span className={styles.checkboxLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Difficulty */}
      <div>
        <p className={styles.sectionTitle}>Difficulty</p>
        <div className={styles.checkboxColumn}>
          {(
            Object.entries({
              beginner: "Beginner",
              intermediate: "Intermediate",
              advanced: "Advanced",
            }) as [keyof DifficultyLevels, string][]
          ).map(([key, label]) => (
            <div key={key} className={styles.checkboxItem}>
              <div
                className={`${styles.checkbox} ${
                  difficulty[key] ? styles.checkboxChecked : ""
                }`}
                onClick={() => handleDifficultyChange(key)}
              >
                {difficulty[key] && <CheckIcon size={12} />}
              </div>
              <span className={styles.checkboxLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Equipment */}
      <div>
        <p className={styles.sectionTitle}>Equipment</p>
        <div className={styles.equipmentContainer}>
          <div className={styles.equipmentIcon}>
            <Dumbbell size={18} />
          </div>
          <div
            className={`${styles.equipmentIcon} ${styles.equipmentIconSelected}`}
          >
            <User size={18} />
          </div>
          <div className={styles.equipmentIcon}>
            <Weight size={18} />
          </div>
          <div
            className={`${styles.equipmentIcon} ${styles.equipmentIconSelected}`}
          >
            <span className={styles.equipmentText}>TRX</span>
          </div>
          <div
            className={`${styles.equipmentIcon} ${styles.equipmentIconSelected}`}
          >
            <span className={styles.equipmentText}>KB</span>
          </div>
        </div>
      </div>

      {/* Goal */}
      <div>
        <p className={styles.sectionTitle}>Goal</p>
        <div className={styles.checkboxColumn}>
          {(
            Object.entries({
              loseWeight: "Lose weight",
              gainMuscle: "Gain muscle",
              gainStrength: "Gain strength",
            }) as [keyof WorkoutGoals, string][]
          ).map(([key, label]) => (
            <div key={key} className={styles.checkboxItem}>
              <div
                className={`${styles.checkbox} ${
                  goals[key] ? styles.checkboxChecked : ""
                }`}
                onClick={() => handleGoalChange(key)}
              >
                {goals[key] && <CheckIcon size={12} />}
              </div>
              <span className={styles.checkboxLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Clear filters button */}
      <button className={styles.clearButton} onClick={clearFilters}>
        Clear filters
      </button>
    </div>
  );
};

export default WorkoutFilter;
