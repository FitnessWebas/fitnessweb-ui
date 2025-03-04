import ExerciseAccordion from "../components/ExerciseAccordion/ExerciseAccordion";
import mockExercises from "../data/mockExercises";

import { useState } from "react";

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
