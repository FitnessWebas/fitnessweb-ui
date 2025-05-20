import React, { useEffect, useState } from "react";
import styles from "./GeneratorForm.module.css";
import { useNavigate } from "react-router-dom";
import { useGetAllMuscleGroups } from "../../api/muscleGroup/useGetAllMuscleGroups";
import { GenerateWorkout } from "../../types/GenerateWorkout";
import { Equipment, EquipmentOptions } from "../../data/Equipment";
import { Goal } from "../../data/Goal";
import { FitnessLevel } from "../../data/FitnessLevel";
import { m } from "framer-motion";
import { useGenerateWorkout } from "../../api/workout/useGenerateWorkout";
import { div } from "framer-motion/client";

enum Gender {
  Male = 1,
  Female = 2,
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

const equipmentList = EquipmentOptions.map((equipment) => {
  return equipment.label;
});

export default function GeneratorForm() {
  const { mutate: generateWorkout, isPending, error } = useGenerateWorkout();

  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [workoutName, setWorkoutName] = useState<string>("");
  const [duration, setDuration] = useState<Number>(45);
  const [goal, setGoal] = useState<Goal | null>(null);
  const [level, setLevel] = useState<FitnessLevel | null>(null);
  const [workout, setWorkout] = useState<Workout | null>(null);
  const [generationSuccess, setGenerationSuccess] = useState<boolean | null>(
    null
  );

  const { data: muscleGroups } = useGetAllMuscleGroups();

  const muscleGroupList = () => {
    if (!muscleGroups) return [];
    else return muscleGroups.map((muscleGroup) => muscleGroup.name);
  };
  const convertMuscleGroupToId = (): string[] => {
    return (
      muscleGroups
        ?.filter((muscleGroup) => selectedWorkout?.includes(muscleGroup.name))
        .map((muscleGroup) => muscleGroup.id) || []
    );
  };

  const convertToEquipmentEnum = () => {
    const equipmentEnum = selectedEquipment.map((equipment) => {
      switch (equipment) {
        case "Dumbbell":
          return Equipment.Dumbbell;
        case "Barbell":
          return Equipment.Barbell;
        case "Bodyweight":
          return Equipment.BodyWeight;
        case "Machine":
          return Equipment.Machine;
        case "Kettlebell":
          return Equipment.Kettlebell;
        case "Cardio":
          return Equipment.Cardio;
        default:
          return null;
      }
    });
    return equipmentEnum.filter((item) => item !== null);
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setCurrentStep(currentStep + 1);
    const loggedInUserId = localStorage.getItem("userId");
    const muscleGroupIds = convertMuscleGroupToId();
    const equipmentEnum = convertToEquipmentEnum();
    if (goal == null || level == null || loggedInUserId == null) return;
    const workoutData: GenerateWorkout = {
      userId: loggedInUserId,
      name: workoutName,
      targetDurationMinutes: Number(duration),
      goal: goal,
      difficulty: level,
      equipment: equipmentEnum,
      muscleGroups: muscleGroupIds,
    };
    console.log(workoutData);

    generateWorkout(workoutData, {
      onSuccess: (data) => {
        console.log("Workout generated:", data);
        setGenerationSuccess(true);
        //navigate("/");
      },
      onError: (err) => {
        setGenerationSuccess(false);
      },
    });
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
      setDuration(value);
    }
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "-") {
      //event.preventDefault();
    }
  };
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(Number(event.target.value));
  };
  const handleLevelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value == "0") {
      setLevel(null);
    } else {
      switch (value) {
        case "1":
          setLevel(FitnessLevel.Beginner);
          break;
        case "2":
          setLevel(FitnessLevel.Intermediate);
          break;
        case "3":
          setLevel(FitnessLevel.Expert);
          break;
      }
    }
  };

  const [selectedEquipment, setSelectedEquipment] = useState<string[]>([]);
  const [selectedWorkout, setSelectedWorkou] = useState<string[]>([]);

  const toggleEquipment = (equipment: string) => {
    setSelectedEquipment((prevSelected) =>
      prevSelected.includes(equipment)
        ? prevSelected.filter((item) => item !== equipment)
        : [...prevSelected, equipment]
    );
  };
  const toggleWorkout = (workout: string) => {
    setSelectedWorkou((prevSelected) =>
      prevSelected.includes(workout)
        ? prevSelected.filter((item) => item !== workout)
        : [...prevSelected, workout]
    );
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (generationSuccess !== null) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [generationSuccess]);

  return (
    <div className={styles.container}>
      <form className={styles.setup}>
        {currentStep === 1 && (
          <div className={styles.setup_name}>
            <h1>Enter workout name</h1>
            <input
              type="text"
              placeholder="Workout name"
              onChange={(event) => {
                setWorkoutName(event.target.value);
              }}
              defaultValue={workoutName}
              className={styles.input_text_box}
            />
          </div>
        )}
        {currentStep === 2 && (
          <div className={styles.setup_weight}>
            <h1>Choose workout duration</h1>
            <input
              type="number"
              min={1}
              max={90}
              value={duration !== null ? duration.toString() : ""}
              onChange={handleWeightChange}
              onKeyPress={handleKeyPress}
              className={styles.input_weight_box}
            />
            <div className={styles.slider_container}>
              <input
                type="range"
                className={styles.slider}
                min={1}
                max={90}
                value={duration !== null ? duration.toString() : ""}
                onChange={handleSliderChange}
              />
            </div>
          </div>
        )}
        {currentStep === 3 && (
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
        {currentStep === 4 && (
          <div className={styles.setup_level}>
            <h1>Select your fitness level</h1>
            <button
              type="button"
              className={
                level === FitnessLevel.Beginner ? styles.button_selected : ""
              }
              onClick={() => {
                setLevel(FitnessLevel.Beginner);
              }}
            >
              Beginner
            </button>
            <button
              type="button"
              className={
                level === FitnessLevel.Intermediate
                  ? styles.button_selected
                  : ""
              }
              onClick={() => {
                setLevel(FitnessLevel.Intermediate);
              }}
            >
              Intermediate
            </button>
            <button
              type="button"
              className={
                level === FitnessLevel.Expert ? styles.button_selected : ""
              }
              onClick={() => {
                setLevel(FitnessLevel.Expert);
              }}
            >
              Expert
            </button>
          </div>
        )}
        {currentStep === 5 && (
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
        {currentStep === 6 && (
          <div className={styles.setup_workout}>
            <h1>What you want to do today?</h1>
            {muscleGroupList().map((workout) => (
              <button
                key={workout}
                type="button"
                onClick={() => toggleWorkout(workout)}
                className={
                  selectedWorkout.includes(workout)
                    ? styles.button_selected
                    : ""
                }
              >
                {workout}
              </button>
            ))}
          </div>
        )}
        {currentStep === 7 && (
          <div className={styles.generation}>
            {generationSuccess === true && (
              <h1>Workout was successfully generated!</h1>
            )}
            {generationSuccess === false && (
              <h1>Failed to generate workout. Please try again.</h1>
            )}
            {generationSuccess === null && <h1>Generating workout...</h1>}
          </div>
        )}
        <div className={styles.setup_buttons}>
          <button
            type="button"
            className={currentStep == 7 ? styles.submit : styles.submit_visible}
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            Previous
          </button>
          <button
            type="button"
            onClick={nextStep}
            className={
              currentStep == 6 || currentStep == 7
                ? styles.submit
                : styles.submit_visible
            }
            disabled={
              (currentStep == 1 && workoutName == "") ||
              (currentStep == 2 && duration == 0) ||
              (currentStep == 3 && goal == null) ||
              (currentStep == 4 && level == null) ||
              (currentStep == 5 && selectedEquipment.length === 0)
            }
          >
            Next
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className={currentStep == 6 ? styles.submit_visible : styles.submit}
            disabled={currentStep == 6 && selectedWorkout.length === 0}
          >
            Generate
          </button>
        </div>
      </form>
    </div>
  );
}
