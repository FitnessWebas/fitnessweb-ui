import React, { useState } from "react";

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
    <form className="setup">
      {currentStep === 1 && (
        <div className="setup-gender">
          <button>Male</button>
          <button>Female</button>
        </div>
      )}
      {currentStep === 2 && (
        <div className="setup-age">
          <input type="number" min={1} max={110} />
        </div>
      )}
      {currentStep === 3 && (
        <div className="setup-weight">
          <input type="number" min={0} />
        </div>
      )}
      {currentStep === 4 && (
        <div className="setup-goals">
          <input type="checkbox" />
          <label htmlFor=""></label>
          <input type="checkbox" />
          <label htmlFor=""></label>
          <input type="checkbox" />
          <label htmlFor=""></label>
        </div>
      )}
      {currentStep === 5 && (
        <div className="setup-level">
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
          <input type="checkbox" name="" id="" />
          <input type="checkbox" name="" id="" />
          <input type="checkbox" name="" id="" />
          <input type="checkbox" name="" id="" />
          <input type="checkbox" name="" id="" />
          <input type="checkbox" name="" id="" />
          <input type="checkbox" name="" id="" />
        </div>
      )}
      <div className="setup-buttons">
        <button type="button" onClick={prevStep} disabled={currentStep === 1}>
          Previous
        </button>
        <button type="button" onClick={nextStep} disabled={currentStep === 5}>
          Next
        </button>
      </div>
    </form>
  );
}
