import React, { useState } from "react";
import styles from "./SetupForm.module.css";

export default function SetupForm() {
  const [currentStep, setCurrentStep] = useState(1);

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
  return (
    <div className={styles.container}>
      <form className={styles.setup}>
        {currentStep === 1 && (
          <div className={styles.setup_gender}>
            <h1>Gender</h1>
            <button>Male</button>
            <button>Female</button>
          </div>
        )}
        {currentStep === 2 && (
          <div className="setup-age">
            <h1>Enter your age</h1>
            <input type="number" min={1} max={110} />
          </div>
        )}
        {currentStep === 3 && (
          <div className="setup-weight">
            <h1>Enter your weight</h1>
            <input type="number" min={0} />
          </div>
        )}
        {currentStep === 4 && (
          <div className={styles.setup_goals}>
            <h1>Choose your goal</h1>
            <button>Lose weight</button>
            <button>Gain strength</button>
            <button>Gain muscle</button>
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
          <button type="button" onClick={nextStep} disabled={currentStep === 6}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
