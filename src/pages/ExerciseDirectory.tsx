import ExerciseAccordion from "../components/ExerciseAccordion/ExerciseAccordion";

import { useState } from "react";

const mockExercises = [
  {
    id: 1,
    name: "Bench Press",
    muscleGroup: "Chest",
    equipment: "Barbell",
    image: "https://example.com/bench-press.gif",
  },
  {
    id: 2,
    name: "Squat",
    muscleGroup: "Legs",
    equipment: "Barbell",
    image: "https://example.com/squat.gif",
  },
  {
    id: 3,
    name: "Bicep Curl",
    muscleGroup: "Biceps",
    equipment: "Dumbbell",
    image: "https://example.com/bicep-curl.gif",
  },
];

const ExercisePage = () => {
  const [exercises] = useState(mockExercises);

  return (
    <div>
      <h1>Exercises</h1>
      <ExerciseAccordion exercises={exercises} />
    </div>
  );
};

export default ExercisePage;
