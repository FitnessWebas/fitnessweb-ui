import React, { useState } from "react";
import styles from "./InitialProfileSetupForm.module.css";
import { useUpdateUserMetrics } from "../../api/userMetrics/useUpdateUserMetrics";
import { useCreateUserMetrics } from "../../api/userMetrics/UseCreateUserMetrics";

interface InitialProfileSetupFormProps {
  onClose: () => void;
}

enum FitnessLevel {
  Beginner = 1,
  Intermediate = 2,
  Expert = 3,
}
enum Gender {
  Male = 0,
  Female = 1,
  Other = 2,
}
const genderOptions = [
  { value: Gender.Male, label: "Male" },
  { value: Gender.Female, label: "Female" },
  { value: Gender.Other, label: "Other" },
];

const fitnessLevelOptions = [
  { value: FitnessLevel.Beginner, label: "Beginner" },
  { value: FitnessLevel.Intermediate, label: "Intermediate" },
  { value: FitnessLevel.Expert, label: "Expert" },
];

const InitialProfileSetupForm: React.FC<InitialProfileSetupFormProps> = ({
  onClose,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [height, setHeight] = useState<number>(25);
  const [birthday, setBirthday] = useState<string | null>(null);
  const [gender, setGender] = useState<Gender | null>(null);
  const [fitnessLevel, setFitnessLevel] = useState<FitnessLevel | null>(null);
  const CreateUserMetrics = useCreateUserMetrics();
  const loggedInUserId = localStorage.getItem("userId");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (loggedInUserId) {
      CreateUserMetrics.mutate(
        {
          userId: loggedInUserId,
          height: height,
          birthday: birthday,
          gender: gender?.valueOf(),
          fitnessLevel: fitnessLevel?.valueOf(),
        },
        {}
      );
    }
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.valueAsNumber;
    if (value >= 0) {
      setHeight(value);
    }
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(Number(event.target.value));
  };

  return (
    <div className={styles.container}>
      <form className={styles.setup}>
        {currentStep === 1 && (
          <div className={styles.setup_weight}>
            <h1>Enter your height in cm</h1>
            <input
              type="number"
              min={1}
              max={200}
              value={height !== null ? height.toString() : ""}
              onChange={handleHeightChange}
            />
            <div className={styles.slider_container}>
              <input
                type="range"
                className={styles.slider}
                min={1}
                max={200}
                value={height !== null ? height.toString() : ""}
                onChange={handleSliderChange}
              />
            </div>
          </div>
        )}
        {currentStep === 2 && (
          <div className={styles.setup_goals}>
            <h1>Enter your birthday date</h1>
            <input
              type="date"
              value={birthday ?? ""}
              onChange={(e) => setBirthday(e.target.value)}
              className={styles.date_picker}
            />
          </div>
        )}
        {currentStep === 3 && (
          <div className={styles.setup_level}>
            <h1>Select your gender</h1>
            {genderOptions.map((option, index) => (
              <button
                id={`${index}`}
                type="button"
                className={
                  gender === option.value ? styles.button_selected : ""
                }
                onClick={() => {
                  setGender(option.value);
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
        {currentStep === 4 && (
          <div className={styles.setup_level}>
            <h1>Select your fitness level</h1>
            {fitnessLevelOptions.map((option, index) => (
              <button
                id={`${index}`}
                type="button"
                className={
                  fitnessLevel === option.value ? styles.button_selected : ""
                }
                onClick={() => {
                  setFitnessLevel(option.value);
                }}
              >
                {option.label}
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
            className={currentStep == 4 ? styles.submit : styles.submit_visible}
            disabled={
              (currentStep == 1 && height == 0) ||
              (currentStep == 2 && birthday == null) ||
              (currentStep == 3 && gender == null)
            }
          >
            Next
          </button>
          <button
            type="submit"
            disabled={currentStep == 4 && fitnessLevel == null}
            className={currentStep == 4 ? styles.submit_visible : styles.submit}
            onClick={(e) => {
              handleSubmit(e);
              onClose();
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InitialProfileSetupForm;
