import React, { useState } from "react";
import styles from "./GeneratorForm.module.css";

enum Gender {
  Male = 1,
  Female = 2,
}
enum Goal {
  LoseWeight = 1,
  GainStrength = 2,
  GainMuscle = 3,
}
enum Level {
  Beginner = 1,
  Intermediate = 2,
  Expert = 3,
}
enum Workout {
  push = 1,
  pull = 2,
  legs = 3,
  upper = 4,
  lower = 5,
  fullBody = 6,
}

const equipmentList = [
  "Dumbbell",
  "Barbell",
  "Bodyweight",
  "Machine",
  "Kettlebell",
  "Cables",
  "Band",
];

export default function GeneratorForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [gender, setGender] = useState<Gender | null>(null);
  const [age, setAge] = useState<Number>(0);
  const [weight, setWeight] = useState<Number>(0);
  const [goal, setGoal] = useState<Goal | null>(null);
  const [level, setLevel] = useState<Level | null>(null);
  const [workout, setWorkout] = useState<Workout | null>(null);
  const [equip, SetEquip] = useState<boolean>(false);

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.valueAsNumber;
    if (value >= 0) {
      setAge(value);
    }
  };
  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.valueAsNumber;
    if (value >= 0) {
      setWeight(value);
    }
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "-") {
      //event.preventDefault();
    }
  };
  const handleLevelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value == "0") {
      setLevel(null);
    } else {
      switch (value) {
        case "1":
          setLevel(Level.Beginner);
          break;
        case "2":
          setLevel(Level.Intermediate);
          break;
        case "3":
          setLevel(Level.Expert);
          break;
      }
    }
  };

  const handleWorkoutChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value == "0") {
      setLevel(null);
    } else {
      switch (value) {
        case "1":
          setWorkout(Workout.push);
          break;
        case "2":
          setWorkout(Workout.pull);
          break;
        case "3":
          setWorkout(Workout.legs);
          break;
        case "4":
          setWorkout(Workout.upper);
          break;
        case "5":
          setWorkout(Workout.lower);
          break;
        case "6":
          setWorkout(Workout.fullBody);
          break;
      }
    }
  };

  const [selectedEquipment, setSelectedEquipment] = useState<string[]>([]);

  const toggleEquipment = (equipment: string) => {
    setSelectedEquipment(
      (prevSelected) =>
        prevSelected.includes(equipment)
          ? prevSelected.filter((item) => item !== equipment) // Remove if already selected
          : [...prevSelected, equipment] // Add if not selected
    );
  };

  return (
    <div className={styles.container}>
      <form className={styles.setup}>
        {currentStep === 1 && (
          <div className="setup-weight">
            <h1>Enter your weight</h1>
            <input
              type="number"
              min={0}
              value={weight !== null ? weight.toString() : ""}
              onChange={handleWeightChange}
              onKeyPress={handleKeyPress}
            />
          </div>
        )}
        {currentStep === 2 && (
          <div className={styles.setup_goals}>
            <h1>Choose your goal</h1>
            <button
              type="button"
              className={goal === Goal.LoseWeight ? styles.button_selected : ""}
              onClick={() => {
                setGoal(Goal.LoseWeight);
              }}
            >
              Lose weight
            </button>
            <button
              type="button"
              className={
                goal === Goal.GainStrength ? styles.button_selected : ""
              }
              onClick={() => {
                setGoal(Goal.GainStrength);
              }}
            >
              Gain strength
            </button>
            <button
              type="button"
              className={goal === Goal.GainMuscle ? styles.button_selected : ""}
              onClick={() => {
                setGoal(Goal.GainMuscle);
              }}
            >
              Gain muscle
            </button>
          </div>
        )}
        {currentStep === 3 && (
          <div className="setup-level">
            <h1>Select your fitness level</h1>
            <select onChange={handleLevelChange} value={level?.toString()}>
              <option value="0">--Choose an option--</option>
              <option value="1">Beginner</option>
              <option value="2">Intermediate</option>
              <option value="2">Advanced</option>
            </select>
          </div>
        )}
        {currentStep === 4 && (
          <div className="setup-equipment">
            <h1>Choose the equipment</h1>
            {equipmentList.map((equipment) => (
              <button
                key={equipment}
                type="button"
                onClick={() => toggleEquipment(equipment)}
                className={`equipment-button ${
                  selectedEquipment.includes(equipment)
                    ? styles.button_selected
                    : ""
                }`}
              >
                {equipment}
              </button>
            ))}
          </div>
        )}
        {currentStep === 5 && (
          <div className="setup-bodypart">
            <h1>What you want to do today?</h1>
            <select onChange={handleWorkoutChange} value={workout?.toString()}>
              <option value="0">--Choose an option--</option>
              <option value="1">Push</option>
              <option value="2">Pull</option>
              <option value="3">Legs</option>
              <option value="4">Upper body</option>
              <option value="5">Lower body</option>
              <option value="6">Full body</option>
            </select>
          </div>
        )}
        <div className={styles.setup_buttons}>
          <button type="button" onClick={prevStep} disabled={currentStep === 1}>
            Previous
          </button>
          <button
            type="button"
            onClick={nextStep}
            className={currentStep == 5 ? styles.submit : styles.submit_visible}
            disabled={
              currentStep === 5 ||
              (currentStep == 1 && weight == 0) ||
              (currentStep == 2 && goal == null) ||
              (currentStep == 3 && level == null) ||
              (currentStep == 4 && selectedEquipment.length === 0)
            }
          >
            Next
          </button>
          <button
            type="submit"
            className={currentStep == 5 ? styles.submit_visible : styles.submit}
          >
            Generate
          </button>
        </div>
      </form>
    </div>
  );
}
