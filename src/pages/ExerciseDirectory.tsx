import { useGetAllExercises } from "../api/exercise/useGetAllExercises";
import ExerciseAccordion from "../components/ExerciseAccordion/ExerciseAccordion";

const ExercisePage = () => {
  const { data: exercises } = useGetAllExercises();

  if (!exercises) {
    return <div>No exercise data is available</div>;
  }

  const mappedExercises = exercises.map((exercise) => ({
    ...exercise,
    imagePath: `${import.meta.env.VITE_BASE_IMAGES}${exercise.imagePath}`,
  }));

  return (
    <div>
      <ExerciseAccordion exercises={mappedExercises} />
    </div>
  );
};

export default ExercisePage;
