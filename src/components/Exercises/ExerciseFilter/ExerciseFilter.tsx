import React, { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import styles from "./ExerciseFilter.module.css";
import { Exercise } from "../../../types/types";

interface MuscleGroups {
  chest: boolean;
  back: boolean;
  legs: boolean;
  shoulders: boolean;
  arms: boolean;
  abdominals: boolean;
}

interface Equipment {
  barbell: boolean;
  dumbbell: boolean;
  machine: boolean;
  bodyweight: boolean;
  cardio: boolean;
  kettlebell: boolean;
}

interface Difficulty {
  beginner: boolean;
  intermediate: boolean;
  expert: boolean;
}

interface Filters {
  muscleGroups: MuscleGroups;
  equipment: Equipment;
  difficulty: Difficulty;
}

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  sliderValue: number;
  setSliderValue: React.Dispatch<React.SetStateAction<number>>;
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  onApply: () => void;
  onReset: () => void;
}

const ExerciseFilter = ({
  search,
  setSearch,
  sliderValue,
  setSliderValue,
  filters,
  setFilters,
  onApply,
  onReset,
}: Props) => {
  const handleCheckboxChange = (
    category: keyof Filters,
    item: string
  ): void => {
    setFilters({
      ...filters,
      [category]: {
        ...filters[category],
        [item]:
          !filters[category][item as keyof (typeof filters)[typeof category]],
      },
    });
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSliderValue(parseInt(e.target.value, 10));
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Filter exercises</h2>
        <div className={styles.searchContainer}>
          <div className={styles.searchInputContainer}>
            <input
              type="text"
              placeholder="Search exercise..."
              className={styles.searchInput}
              onChange={handleSearchChange}
            />
            <Search className={styles.searchIcon} size={18} />
          </div>
          <button className={styles.filtersButton}>
            <SlidersHorizontal size={20} />
            <span>Filters</span>
          </button>
        </div>
      </div>

      <div className={styles.optionsContainer}>
        <h3 className={styles.optionsTitle}>Filter options</h3>

        <div className={styles.grid}>
          {/* Muscle groups */}
          <div className={styles.card}>
            <h4 className={styles.category}>Muscle groups</h4>
            <div className={styles.checkboxGroup}>
              {Object.keys(filters.muscleGroups).map((muscle) => (
                <div key={muscle} className={styles.checkboxItem}>
                  <input
                    type="checkbox"
                    id={muscle}
                    checked={filters.muscleGroups[muscle as keyof MuscleGroups]}
                    onChange={() =>
                      handleCheckboxChange("muscleGroups", muscle)
                    }
                    className={styles.checkbox}
                  />
                  <label htmlFor={muscle} className={styles.checkboxLabel}>
                    {muscle.charAt(0).toUpperCase() + muscle.slice(1)}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment */}
          <div className={styles.card}>
            <h4 className={styles.category}>Equipment</h4>
            <div className={styles.checkboxGroup}>
              {Object.keys(filters.equipment).map((item) => (
                <div key={item} className={styles.checkboxItem}>
                  <input
                    type="checkbox"
                    id={item}
                    checked={filters.equipment[item as keyof Equipment]}
                    onChange={() => handleCheckboxChange("equipment", item)}
                    className={styles.checkbox}
                  />
                  <label htmlFor={item} className={styles.checkboxLabel}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Difficulty */}
          <div className={styles.card}>
            <h4 className={styles.category}>Difficulty</h4>
            <div className={styles.checkboxGroup}>
              {Object.keys(filters.difficulty).map((level) => (
                <div key={level} className={styles.checkboxItem}>
                  <input
                    type="checkbox"
                    id={level}
                    checked={filters.difficulty[level as keyof Difficulty]}
                    onChange={() => handleCheckboxChange("difficulty", level)}
                    className={styles.checkbox}
                  />
                  <label htmlFor={level} className={styles.checkboxLabel}>
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Time per set */}
          <div className={styles.card}>
            <h4 className={styles.category}>Time per set (s)</h4>
            <h5 className={styles.durationTitle}>Duration</h5>
            <div className={styles.rangeContainer}>
              <span>0s</span>
              <span>100s</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderValue}
              onChange={handleSliderChange}
              className={styles.rangeSlider}
            />
            <div className={styles.sliderValueContainer}>
              <div className={styles.sliderValue}>{sliderValue}s</div>
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          <button
            onClick={() => {
              onReset();
              onApply();
            }}
            className={styles.resetButton}
          >
            Reset all
          </button>
          <button
            onClick={() => {
              onApply();
            }}
            className={styles.applyButton}
          >
            Apply filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseFilter;
