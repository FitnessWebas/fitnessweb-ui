import React, { useState, useRef, Ref } from "react";
import styles from "./WorkoutFilter.module.css";
import { CheckIcon } from "lucide-react";

interface MuscleGroups {
  fullBody: boolean;
  legs: boolean;
  abs: boolean;
  shoulders: boolean;
  chest: boolean;
  triceps: boolean;
  biceps: boolean;
  back: boolean;
  forearms: boolean;
}

interface WorkoutGoals {
  loseWeight: boolean;
  gainMuscle: boolean;
  gainStrength: boolean;
}

interface EquipmentItem {
  id: string;
  icon: string;
  isSelected: boolean;
}
interface DifficultyLevels {
  beginner: boolean;
  intermediate: boolean;
  advanced: boolean;
}

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  durationMin: number;
  durationMax: number;
  setDurationMin: React.Dispatch<React.SetStateAction<number>>;
  setDurationMax: React.Dispatch<React.SetStateAction<number>>;
  muscleGroups: MuscleGroups;
  setMuscleGroups: React.Dispatch<React.SetStateAction<MuscleGroups>>;
  difficulty: DifficultyLevels;
  setDifficulty: React.Dispatch<React.SetStateAction<DifficultyLevels>>;
  goals: WorkoutGoals;
  setGoals: React.Dispatch<React.SetStateAction<WorkoutGoals>>;
  equipment: EquipmentItem[];
  setEquipment: React.Dispatch<React.SetStateAction<EquipmentItem[]>>;
}

const WorkoutFilters: React.FC<Props> = ({
  search,
  setSearch,
  durationMin,
  durationMax,
  setDurationMin,
  setDurationMax,
  muscleGroups,
  setMuscleGroups,
  difficulty,
  setDifficulty,
  goals,
  setGoals,
  equipment,
  setEquipment,
}) => {
  const handleMuscleGroupChange = (group: keyof MuscleGroups): void => {
    setMuscleGroups((prev) => {
      if (group === "fullBody") {
        var newValue = !prev.fullBody;
        return {
          fullBody: !prev.fullBody,
          legs: !prev.fullBody,
          abs: !prev.fullBody,
          arms: !prev.fullBody,
          shoulders: !prev.fullBody,
          chest: !prev.fullBody,
          triceps: !prev.fullBody,
          biceps: !prev.fullBody,
          back: !prev.fullBody,
          forearms: !prev.fullBody,
        };
      }
      return {
        ...prev,
        [group]: !prev[group],
      };
    });
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

  const handleEquipmentChange = (equipmentId: string): void => {
    setEquipment((prev) =>
      prev.map((item) =>
        item.id === equipmentId
          ? { ...item, isSelected: !item.isSelected }
          : item
      )
    );
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
      shoulders: false,
      chest: false,
      triceps: false,
      biceps: false,
      back: false,
      forearms: false,
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
    setEquipment((prev) =>
      prev.map((item) => ({ ...item, isSelected: false }))
    );
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
          onChange={(event) => {
            setSearch(event.target.value);
          }}
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
              shoulders: "Shoulders",
              chest: "Chest",
              triceps: "Triceps",
              biceps: "Biceps",
              back: "Back",
              forearms: "Forearms",
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
          {equipment.map((item) => (
            <div
              key={item.id}
              className={`${styles.equipmentIcon} ${
                item.isSelected ? styles.equipmentIconSelected : ""
              }`}
              onClick={() => handleEquipmentChange(item.id)}
            >
              <img
                src={item.icon}
                alt={item.id}
                className={styles.equipmentImage}
              />
            </div>
          ))}
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

export default WorkoutFilters;
