import React, { useState } from "react";
import styles from "./GeneratorForm.module.css";
import { useNavigate } from "react-router-dom";
import { useGetAllMuscleGroups } from "../../api/muscleGroup/useGetAllMuscleGroups";

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
  arms = 1,
  legs = 2,
  shoulders = 3,
  back = 4,
  abdominal = 5,
  chest = 6,
}
export const workoutList = [
  "Push",
  "Pull",
  "Legs",
  "Upper",
  "Lower",
  "Full Body",
  "Shoulders",
  "Abdominal",
];

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
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [weight, setWeight] = useState<Number>(25);
  const [goal, setGoal] = useState<Goal | null>(null);
  const [level, setLevel] = useState<Level | null>(null);
  const [workout, setWorkout] = useState<Workout | null>(null);

  const { data: muscleGroups } = useGetAllMuscleGroups();
  const muscleGroupList = () => {
    if (!muscleGroups) return [];
    else return muscleGroups.map((muscleGroup) => muscleGroup.name);
  };

  console.log(muscleGroupList());

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/");
  };

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
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(Number(event.target.value));
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

  const [selectedEquipment, setSelectedEquipment] = useState<string[]>([]);
  const [selectedWorkout, setSelectedWorkou] = useState<string[]>([]);

  const toggleEquipment = (equipment: string) => {
    setSelectedEquipment(
      (prevSelected) =>
        prevSelected.includes(equipment)
          ? prevSelected.filter((item) => item !== equipment) // Remove if already selected
          : [...prevSelected, equipment] // Add if not selected
    );
  };
  const toggleWorkout = (workout: string) => {
    setSelectedEquipment(
      (prevSelected) =>
        prevSelected.includes(workout)
          ? prevSelected.filter((item) => item !== workout) // Remove if already selected
          : [...prevSelected, workout] // Add if not selected
    );
  };

  return (
    <div className={styles.container}>
      <form className={styles.setup}>
        {currentStep === 1 && (
          <div className={styles.setup_weight}>
            <h1>Enter your weight</h1>
            <input
              type="number"
              min={1}
              max={200}
              value={weight !== null ? weight.toString() : ""}
              onChange={handleWeightChange}
              onKeyPress={handleKeyPress}
              className={styles.input_weight_box}
            />
            <div className={styles.slider_container}>
              <input
                type="range"
                className={styles.slider}
                min={1}
                max={200}
                value={weight !== null ? weight.toString() : ""}
                onChange={handleSliderChange}
              />
            </div>
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
          <div className={styles.setup_level}>
            <h1>Select your fitness level</h1>
            <button
              type="button"
              className={level === Level.Beginner ? styles.button_selected : ""}
              onClick={() => {
                setLevel(Level.Beginner);
              }}
            >
              Beginner
            </button>
            <button
              type="button"
              className={
                level === Level.Intermediate ? styles.button_selected : ""
              }
              onClick={() => {
                setLevel(Level.Intermediate);
              }}
            >
              Intermediate
            </button>
            <button
              type="button"
              className={level === Level.Expert ? styles.button_selected : ""}
              onClick={() => {
                setLevel(Level.Expert);
              }}
            >
              Expert
            </button>
          </div>
        )}
        {currentStep === 4 && (
          <div className={styles.setup_equipment}>
            <h1>Choose the equipment</h1>
            {equipmentList.map((equipment) => (
              <button
                key={equipment}
                type="button"
                onClick={() => toggleEquipment(equipment)}
                className={
                  selectedEquipment.includes(equipment)
                    ? styles.button_selected
                    : ""
                }
              >
                {equipment}
              </button>
            ))}
          </div>
        )}
        {currentStep === 5 && (
          <div className={styles.setup_workout}>
            <h1>What you want to do today?</h1>
            {muscleGroupList().map((workout) => (
              <button
                key={workout}
                type="button"
                onClick={() => toggleWorkout(workout)}
                className={
                  selectedEquipment.includes(workout)
                    ? styles.button_selected
                    : ""
                }
              >
                {workout}
              </button>
            ))}
          </div>
        )}
        <div className={styles.setup_buttons}>
          <button
            type="button"
            className={styles.submit_visible}
            onClick={prevStep}
            disabled={currentStep === 1}
          >
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
            onClick={handleSubmit}
            className={currentStep == 5 ? styles.submit_visible : styles.submit}
          >
            Generate
          </button>
        </div>
      </form>
    </div>
  );
}
