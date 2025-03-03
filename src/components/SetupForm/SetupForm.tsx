import React, { useState } from "react";
import styles from "./SetupForm.module.css";

enum Gender {
  Male = 1,
  Female = 2,
}
enum Goal {
  LoseWeight = 1,
  GainStrength = 2,
  GainMuscle = 3,
}

export default function SetupForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [gender, setGender] = useState<Gender | null>(null);
  const [age, setAge] = useState<Number>(0);
  const [weight, setWeight] = useState<Number>(0);
  const [goal, setGoal] = useState<Goal | null>(null);

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
  return (
    <div className={styles.container}>
      <form className={styles.setup}>
        {currentStep === 1 && (
          <div className={styles.setup_gender}>
            <h1>Gender</h1>
            <button
              onClick={() => {
                setGender(Gender.Male);
              }}
              className={gender === Gender.Male ? styles.button_selected : ""}
              type="button"
            >
              Male
            </button>
            <button
              onClick={() => {
                setGender(Gender.Female);
              }}
              className={gender === Gender.Female ? styles.button_selected : ""}
              type="button"
            >
              Female
            </button>
          </div>
        )}
        {currentStep === 2 && (
          <div className={styles.setup_age}>
            <h1>Enter your age</h1>
            <input
              type="number"
              min={0}
              value={age !== null ? age.toString() : ""}
              onChange={handleAgeChange}
              onKeyPress={handleKeyPress}
            />
          </div>
        )}
        {currentStep === 3 && (
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
        {currentStep === 4 && (
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
        {currentStep === 5 && (
          <div className="setup-level">
            <h1>Select your fitness level</h1>
            <select name="" id="">
              <option value="">--Choose an option--</option>
              <option value="">Beginner</option>
              <option value="">Intermediate</option>
              <option value="">Advanced</option>
            </select>
          </div>
        )}
        {currentStep === 6 && (
          <div className="setup-equipment">
            <h1>Choose the equipment</h1>
            <div className="option">
              <input type="checkbox" name="option1" id="option1" />
              <label htmlFor="option1">Dumbbell</label>
            </div>
            <div className="option">
              <input type="checkbox" name="option2" id="option2" />
              <label htmlFor="option2">Barbell</label>
            </div>
            <div className="option">
              <input type="checkbox" name="option3" id="option3" />
              <label htmlFor="option3">Bodyweight</label>
            </div>
            <div className="option">
              <input type="checkbox" name="option4" id="option4" />
              <label htmlFor="option4">Machine</label>
            </div>
            <div className="option">
              <input type="checkbox" name="option5" id="option5" />
              <label htmlFor="option5">Kettlebell</label>
            </div>
            <div className="option">
              <input type="checkbox" name="option6" id="option6" />
              <label htmlFor="option6">Cables</label>
            </div>
            <div className="option">
              <input type="checkbox" name="option7" id="option7" />
              <label htmlFor="option7">Band</label>
            </div>
          </div>
        )}
        <div className={styles.setup_buttons}>
          <button type="button" onClick={prevStep} disabled={currentStep === 1}>
            Previous
          </button>
          <button
            type="button"
            onClick={nextStep}
            disabled={
              currentStep === 6 ||
              (currentStep === 1 && gender == null) ||
              (currentStep == 2 && age == 0) ||
              (currentStep == 3 && weight == 0) ||
              (currentStep == 4 && goal == null)
            }
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
