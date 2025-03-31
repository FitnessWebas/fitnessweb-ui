import React, { useState, useRef, Ref } from "react";
import styles from "./WorkoutFilter.module.css";
import { CheckIcon } from "lucide-react";

import Kettlebell from "../../assets/gym-fitness-rumbbel-health-svg.svg";
import Barbell from "../../assets/barbell-svg.svg";
import Bands from "../../assets/rubber-band 1.svg";
import Body from "../../assets/body-svgrepo-com 1.svg";
import Dumbbell from "../../assets/dumbbell-gym-svg.svg";
import Machine from "../../assets/chest-gym-svg.svg";

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

interface EquipmentItem {
  id: string;
  icon: string;
  isSelected: boolean;
}

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  durationMin: number;
  durationMax: number;
  setDurationMin: React.Dispatch<React.SetStateAction<number>>;
  setDurationMax: React.Dispatch<React.SetStateAction<number>>;
}

const WorkoutFilters: React.FC<Props> = ({
  search,
  setSearch,
  durationMin,
  durationMax,
  setDurationMin,
  setDurationMax,
}) => {
  const [muscleGroups, setMuscleGroups] = useState<MuscleGroups>({
    fullBody: false,
    legs: false,
    abs: false,
    arms: false,
    shoulders: false,
    chest: false,
  });
  const [difficulty, setDifficulty] = useState<DifficultyLevels>({
    beginner: false,
    intermediate: false,
    advanced: false,
  });
  const [goals, setGoals] = useState<WorkoutGoals>({
    loseWeight: false,
    gainMuscle: false,
    gainStrength: false,
  });
  const [equipment, setEquipment] = useState<EquipmentItem[]>([
    { id: "dumbbell", icon: Dumbbell, isSelected: false },
    { id: "body", icon: Body, isSelected: false },
    { id: "barbell", icon: Barbell, isSelected: false },
    { id: "bands", icon: Bands, isSelected: false },
    { id: "kettlebell", icon: Kettlebell, isSelected: false },
    { id: "machine", icon: Machine, isSelected: false },
  ]);

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
